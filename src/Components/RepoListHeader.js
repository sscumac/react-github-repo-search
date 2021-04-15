
import styles from '../Style/RepoListHeader.module.css';

function RepoListHeader(props) {
  return(
    <div className={styles.header}>
      <h2>{props.heading}</h2>
      {(props.heading === "Current Results") 
        ? <p>({(props.totalCount >= 40) ? 40 : props.totalCount}/{props.totalCount})</p>
        : <p>({(props.totalCount)})</p>
      }
    </div>
  );
};

export default RepoListHeader;