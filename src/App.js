import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import RepoListsContainer from './Components/RepoListsContainer';

function App() {
  
  const [repos, setRepos] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchInput, setSearchInput] = useState('react');
  const [placeholder, setPlaceholder] = useState('react');
  const [submitInput, setSubmitInput] = useState('react');
  const [totalCountSearch, setTotalCountSearch] = useState(0);
  const [loading, setLoading] = useState(true);
  
  
  async function fetchReposRequest(searchInput) {
      try {
        const url = `https://api.github.com/search/repositories?q=${searchInput}&per_page=40`

        const response = await fetch(url);  
        const responseJson = await response.json(); 

        setTotalCountSearch(responseJson.total_count);

        // console.log(responseJson.items)
        const reposWithFav = responseJson.items.map(i => {
          i.favorite = false;
          return i;
        })

        console.log(reposWithFav);

        // error handling
        if (responseJson.total_count === 0) {
          alert('Your search did not provide any results.');
        }

        if (responseJson.items) {
          setLoading(false);
          setRepos(responseJson.items); 
        } else if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }

      } 
      catch (error) {
          if (error.message === "Failed to fetch") {
            alert(`${error.message} - Please check your network.`);
          } else {
            alert(error.message);
          } 
      }
      
  }
  
  function getFavorites() {
    const repoFavorites = JSON.parse(localStorage.getItem('react-favorite-repos')) || [];
    setFavorites(repoFavorites);
  }

  useEffect(()=>{ 
    setLoading(true);
    getFavorites();
    fetchReposRequest(searchInput);
  }, [searchInput]); 

  function saveToLocalStorage(items) {
    localStorage.setItem('react-favorite-repos', JSON.stringify(items));
  }

  // update favorite functions

  function handleFavorite(repo) {
    const reposNew = [...repos];
    const index = reposNew.indexOf(repo);
    if (index === -1) {
      removeFavorite(repo) 
    } else {
      reposNew[index].favorite ? removeFavorite(repo) : addFavorite(repo);
      reposNew[index].favorite = !reposNew[index].favorite;
    }
    setRepos(reposNew);
  }

  function addFavorite(repo) {
    const newFavoriteList = [...favorites, repo];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  }

  function removeFavorite(repo) {
    const newFavoriteList = favorites.filter((favorite) => favorite.id !== repo.id);
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  }

  return (
    <div className="main-container">
      <Header searchInput={searchInput} 
              setSearchInput={setSearchInput} 
              placeholder={placeholder} 
              setPlaceholder={setPlaceholder} 
              submitInput={submitInput}
              setSubmitInput={setSubmitInput}
      />
      <RepoListsContainer repos={repos} 
                          favorites={favorites} 
                          addFavorite={addFavorite} 
                          removeFavorite={removeFavorite}
                          totalCountSearch={totalCountSearch}
                          onFavorite={handleFavorite}
                          loading={loading}
      />
      
    </div>
  );
}

export default App;
