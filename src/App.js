import React, { useState, useEffect } from 'react'; // hooks

import Header from './Components/Header';
import RepoListsContainer from './Components/RepoListsContainer';
import './App.css';

function App() {
  
  const [repos, setRepos] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchInput, setSearchInput] = useState('vue');
  const [placeholder, setPlaceholder] = useState('vue');
  const [submitInput, setSubmitInput] = useState('');
  
  
  async function fetchReposRequest(searchInput) {
    const url = `https://api.github.com/search/repositories?q=${searchInput}&per_page=40`

    const response = await fetch(url);  // fetch API
    const responseJson = await response.json(); // convert to JSON

    if (responseJson.items) {
      setRepos(responseJson.items); // setter function for the Repos
    } 
  }

  useEffect(()=>{
    fetchReposRequest(searchInput);
  }, [searchInput]);  // only runs callback (fetchRep...) when searchInput changes


  function addFavorite(repo) {
    const newFavoriteList = [...favorites, repo];
    setFavorites(newFavoriteList);
  }

  function removeFavorite(repo) {
    
  }

  return (
    <div>
      <Header searchInput={searchInput} 
              setSearchInput={setSearchInput} 
              placeholder={placeholder} 
              setPlaceholder={setPlaceholder} 
              submitInput={submitInput}
              setSubmitInput={setSubmitInput}
      />
      <RepoListsContainer repos={repos} favorites={favorites} addFavorite={addFavorite}/>
      
    </div>
  );
}

export default App;
