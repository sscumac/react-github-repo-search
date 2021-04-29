import styles from '../Style/RepoListHeader.module.css';

function RepoListHeader(props) {
  return(
    <div className={styles.header}>
      <h2>{props.heading}</h2>
      {(props.heading === "Current Results") 
        ? <p>({props.repos.length}/{props.totalCount})</p>
        : <p>({(props.repos.length)})</p>
      }
    </div>
  );
};

export default RepoListHeader;