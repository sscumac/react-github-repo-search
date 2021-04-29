import styles from '../Style/RepoCard.module.css'
import Button from './Button';

function RepoCard(props) {

  return(
    <div className={styles.card} onClick={() => window.open(props.repo.html_url, "_blank")}>
    <div className={styles.name}>{props.repo.name}</div>
    <div className={styles.desc}>{props.repo.description}</div>
    <div className={styles.footer}>

      {/* Button Search Result List */}
      {(props.listType !== "Favorites") &&
        <Button 
          onClick={(eve) =>  {
              eve.stopPropagation();
              props.onFavorite(props.repo);
            }
          }
          text={(props.repo.archived) ? 'unsave' : 'save'}
          color={(props.repo.archived) && 'white'}
          bgcolor={(props.repo.archived) && '#017F80'}
          className={styles.btn}
        />
      }

      {/* Button Favorite List */}
      {(props.listType === "Favorites") &&
        <Button
          onClick={(eve) => {
              eve.stopPropagation();
              props.onFavorite(props.repo);
            }
          }
          text={'Unsave'}
          color={'white'}
          bgcolor={'#017F80'}
          className={styles.btn}
        />
      }
      </div>
    </div>
  )
}

export default RepoCard;