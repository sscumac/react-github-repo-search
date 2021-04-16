import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import RepoListsContainer from './Components/RepoListsContainer';

function App() {
  
  const [repos, setRepos] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchInput, setSearchInput] = useState('vue');
  const [placeholder, setPlaceholder] = useState('vue');
  const [submitInput, setSubmitInput] = useState('vue');
  const [totalCountSearch, setTotalCountSearch] = useState(0);
  const [totalCountFavorites, setTotalCountFavorites] = useState(0);
  
  
  async function fetchReposRequest(searchInput) {
      try {
        const url = `https://api.github.com/search/repositories?q=${searchInput}&per_page=40`

        const response = await fetch(url);  
        const responseJson = await response.json(); 

        setTotalCountSearch(responseJson.total_count);

        // error handling
        if (responseJson.total_count === 0) {
          alert('Your search did not provide any results.');
        }

        if (responseJson.items) { 
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

  useEffect(()=>{ 
    fetchReposRequest(searchInput);
  }, [searchInput]); 

  useEffect(() => { 
    const repoFavorites = JSON.parse(localStorage.getItem('react-favorite-repos')) || [];
    setFavorites(repoFavorites);
    if (repoFavorites) {  
      setTotalCountFavorites(repoFavorites.length);
      setFavorites(repoFavorites);
    }
  }, []);

  function saveToLocalStorage(items) {
    localStorage.setItem('react-favorite-repos', JSON.stringify(items));
  }

  // update favorite functions

  function addFavorite(repo) {
    const newFavoriteList = [...favorites, repo];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
    setTotalCountFavorites(favorites.length + 1);
  }

  function removeFavorite(repo) {
    const newFavoriteList = favorites.filter((favorite) => favorite.id !== repo.id);
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
    setTotalCountFavorites(favorites.length - 1);
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
                          totalCountFavorites={totalCountFavorites}
      />
      
    </div>
  );
}

export default App;
