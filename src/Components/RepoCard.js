import styles from '../Style/RepoCard.module.css'
import Button from './Button';

function RepoCard(props) {

  return(
    <a className={styles.card} target="_blank" href={props.repo.html_url}>
      <div className={styles.name}>{props.repo.name}</div>
      <div className={styles.desc}>{props.repo.description}</div>
      <div className={styles.footer}>

        {/* Button Search Result List */}
        {(props.listType !== "Favorites") &&
          <Button 
            onClick={(eve) =>  {
              console.log(eve.target)
                eve.preventDefault()
                // eve.stopPropagation();
                props.onFavorite(props.repo);
              }
            }
            text={(props.repo.favorite) ? 'unsave' : 'save'}
            color={(props.repo.favorite) && 'white'}
            bgcolor={(props.repo.favorite) && '#017F80'}
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
    </a>
  )
}

export default RepoCard;