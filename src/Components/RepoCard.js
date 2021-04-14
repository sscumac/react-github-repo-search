import styles from '../Style/RepoCard.module.css'
import Button from './Button';

function RepoCard(props) {
  return(
    <div className={styles.card}>
      <div className={styles.name}>{props.repo.name}</div>
      <div className={styles.desc}>{props.repo.description}</div>
      <div className={styles.footer}>
        <Button 
          onClick={()=>props.addFavorite(props.repo)} 
          text={'save'}
        />
      </div>
    </div>
  )
}

export default RepoCard;