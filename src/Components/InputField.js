
function InputField(props) {
  return(
    <input
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      onChange={props.onChange}
    ></input>
  )
}

export default InputField;