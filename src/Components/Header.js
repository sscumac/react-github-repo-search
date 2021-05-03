import styles from '../Style/Header.module.css'
import Form from './Form';

function Header(props) {

  return(
    <div id={styles.header}>
      <h1>Github Repositories</h1>
      <div className={styles.searchBar}>
        <Form placeholder={props.placeholder} 
              setSearchInput={props.setSearchInput} 
              setSubmitInput={props.setSubmitInput}
              submitInput={props.submitInput}
              setPlaceholder={props.setPlaceholder}
              submitClass={styles.search}
        />
      </div>
    </div>
  )
}

export default Header;