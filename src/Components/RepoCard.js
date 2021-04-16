import styles from '../Style/RepoCard.module.css'
import Button from './Button';
import React, { useState } from 'react';

function RepoCard(props) {

  const [repoCardStatus, setRepoCardStatus] = useState("unsaved");

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
                if (repoCardStatus === 'unsaved') {
                  props.addFavorite(props.repo);
                  setRepoCardStatus('saved');
                } else {
                  props.removeFavorite(props.repo);
                  setRepoCardStatus('unsaved');
                }
              }
            }
            text={(repoCardStatus === 'unsaved') ? 'Save' : 'unsave'}
            color={(repoCardStatus === 'saved') && 'white'}
            bgcolor={(repoCardStatus === 'saved') && '#017F80'}
            className={styles.btn}
          />
        }

        {/* Button Favorite List */}
        {(props.listType === "Favorites") &&
          <Button
            onClick={(eve) => {
                eve.stopPropagation();
                props.removeFavorite(props.repo);
                setRepoCardStatus('unsaved');
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