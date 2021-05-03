import InputField from './InputField'
import styles from '../Style/Header.module.css'

function Form(props) {

  function handleSubmit(eve) {
    eve.preventDefault();
    (props.submitInput === "") ? alert("Empty search - Please type something to search.") : props.setSearchInput(props.submitInput);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search input">
        <InputField id={styles.searchInput}
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
      <input type="submit" 
            value="Search"  
            className={props.submitClass}
      />
    </form>
  )
}

export default Form;