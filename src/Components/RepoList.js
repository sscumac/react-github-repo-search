// this comoponent will be use for both lists (search results and favorites)
import styles from '../Style/RepoList.module.css';
import RepoCard from './RepoCard';
import RepoListHeader from './RepoListHeader';

function RepoList(props) {
  return (
    <div className={styles.container}>
      <RepoListHeader heading={props.heading} 
                      repos={props.repos} 
                      totalCount={props.totalCount} 
                      loading={props.loading}
      />
      {(props.loading === true)
          ? <p style={{ marginLeft: 20 }} >loading results...</p>
          : props.repos.map((repo, index) => (
              <RepoCard
                repo={repo} 
                key={index + 1} 
                addFavorite={props.addFavorite}
                removeFavorite={props.removeFavorite}
                listType={props.heading}
                onFavorite={props.onFavorite}
          />
        ))
      }
    </div>
  );
};

export default RepoList;