
function Button(props) {
  return(
    <button
        onClick={props.onClick}
        style={{ backgroundColor: props.bgcolor, color: props.color }}
        className={props.className}
      >
      {props.text}
    </button>
  )
}

export default Button;