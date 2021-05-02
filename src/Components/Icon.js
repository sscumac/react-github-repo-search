import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faTrash)

function Icon(props) { // controlled component (all states via props)
  return(
    <FontAwesomeIcon 
      onClick={props.onClick} 
      icon={props.iconType}
      style={{ cursor: 'pointer', fontSize: '22px' }}
      color={props.color}
      className={props.className}
    />
  )
}

export default Icon;