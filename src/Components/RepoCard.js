import styles from '../Style/RepoCard.module.css';
import Icon from './Icon';

function RepoCard(props) {

  return(
    <a className={styles.card} target="_blank" rel="noreferrer" href={props.repo.html_url}>
      <div className={styles.name}>{props.repo.name}</div>
      <div className={styles.desc}>{props.repo.description}</div>
      <div className={styles.footer}>

        {/* Button Result List */}
        {(props.listType !== "Favorites") &&
          <Icon onClick={(eve) =>  {
                  eve.preventDefault();
                  props.onFavorite(props.repo);
                  }   
                }
                color={(props.repo.favorite) ? '#0000ee' : 'white'}
                className={styles.like}
                iconType={"heart"}
          />
        } 

        {/* Button Favorite List */}
        {(props.listType === "Favorites") &&
          <Icon onClick={(eve) =>  {
                    eve.preventDefault();
                    props.onFavorite(props.repo);
                    }   
                  }
                  color={'#e62041'}
                  className={styles.remove}
                  iconType={"trash"}
          />
        }

      </div>
    </a>
  )
}

export default RepoCard;