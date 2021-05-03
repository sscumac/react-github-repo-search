import RepoList from '../Components/RepoList';
import styles from '../Style/RepoListsContainer.module.css'

function RepoListsContainer(props) {
  return(
    <div className={styles.container}>

      {/* Search Results List */}
      <RepoList heading={'Current Results'} 
                repos={props.repos} 
                addFavorite={props.addFavorite}
                removeFavorite={props.removeFavorite}
                totalCount={props.totalCountSearch}
                onFavorite={props.onFavorite}
                loading={props.loading}
                cardType={"card"}
      /> 
      
      {/* Favorites List */}
      {(props.favorites.length > 0) &&
        <RepoList heading={'Favorites'}
                  repos={props.favorites}
                  removeFavorite={props.removeFavorite}
                  addFavorite={props.addFavorite}
                  totalCount={props.totalCountFavorites}   
                  onFavorite={props.onFavorite} 
                  cardType={"cardFav"}
        />
      }
    </div>
  )
}

export default RepoListsContainer;