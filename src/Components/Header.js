import styles from '../Style/Header.module.css'
import Button from './Button'
import InputField from './InputField'

function Header(props) {

  function handleSubmit() {
    console.log(props.submitInput);
    (props.submitInput === "") ? alert("Empty search - Please type something to search.") : props.setSearchInput(props.submitInput);
  }

  return(
    <div id={styles.header}>
      <h1>Github Repositories</h1>
      <div className={styles.searchBar}>

        <form onSubmit={handleSubmit}>
          <label>
            <InputField
              type={'text'} 
              placeholder={props.placeholder}
              onChange={(eve) => {
                  (eve.target.value.length > 4) && props.setSearchInput(eve.target.value)
                  props.setSubmitInput(eve.target.value)
                  props.setPlaceholder('')
                }
              }
            />
          </label>
          <input type="submit" value="Search" />
        </form>
        
        {/* <Button text={'Search'} onClick={() => {
              (props.submitInput === "") ? alert("Empty search - Please type something to search.") : props.setSearchInput(props.submitInput);
            }
          }
        /> */}
      </div>
    </div>
  )
}

export default Header;