
function InputField(props) {
  return(
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    ></input>
  )
}

export default InputField;