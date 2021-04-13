import '../Style/Header.css'

function Header(props) {
  return(
    <div id="header">
      <h2>Github Repositories</h2>
      <div className="search-bar">
        <input type="text"/>
        <button type="submit">Send</button>
      </div>
    </div>
  )
}

export default Header;