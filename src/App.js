import React, { useState, useEffect } from 'react'; // hooks
import RepoList from './Components/RepoList';
import Header from './Components/Header';
import './App.css';

function App() {
  
  const [repos, setRepos] = useState([]);
  
  async function fetchReposRequest() {
    const url = 'https://api.github.com/search/repositories?q=vue&per_page=40'

    const response = await fetch(url);  // fetch API
    const responseJson = await response.json(); // convert to JSON

    // console.log(responseJson);
    setRepos(responseJson.items); // setter function for the Repos
  }

  useEffect(()=>{
    fetchReposRequest();
  }, []);  // useEffect hook makes sure that the API is only called when page loads

  return (
    <div>
      <Header />
      <RepoList repos = {repos} />
    </div>
  );
}

export default App;
