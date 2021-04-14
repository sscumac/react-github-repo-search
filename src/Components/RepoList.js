// this comoponent will be use for both lists (search results and favorites)

import styles from '../Style/RepoList.module.css';
import RepoCard from './RepoCard';
import RepoListHeader from './RepoListHeader';

function RepoList(props) {
  return (
    <div className={styles.container}>
      <RepoListHeader heading = {props.heading} />
      {props.repos.map((repo, index) => (
        <RepoCard 
          repo={repo} 
          key={index + 1} 
          handleFavorite={(props.heading === 'Favorites') ? props.removeFavorite : props.addFavorite}
          buttonText={(props.heading === 'Favorites') ? 'unsave' : 'save'}
        />
      ))}
    </div>
  );
};

export default RepoList;