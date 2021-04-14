import RepoList from '../Components/RepoList';
import styles from '../Style/RepoListsContainer.module.css'

function RepoListsContainer(props) {
  return(
    <div className={styles.container}>
      <RepoList heading={'Current Results'} repos={props.repos} addFavorite={props.addFavorite} />
      <RepoList heading={'Favorites'} repos={props.favorites} removeFavorite={props.removeFavorite}/>
    </div>
  )
}

export default RepoListsContainer;