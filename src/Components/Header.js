import styles from '../Style/Header.module.css'
import Button from './Button'
import InputField from './InputField'

function Header(props) {

  return(
    <div id={styles.header}>
      <h2>Github Repositories</h2>
      <div className={styles.searchBar}>
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
        
        <Button text={'search'} onClick={() => {
          (props.submitInput === "") ? alert("Empty search - Please type something to search.") : props.setSearchInput(props.submitInput)
        }}/>
      </div>
    </div>
  )
}

export default Header;