
import styles from '../Style/RepoListHeader.module.css';

function RepoListHeader(props) {
  return(
    <div className={styles.header}>
      <h2>{props.heading}</h2>
    </div>
  );
};

export default RepoListHeader;