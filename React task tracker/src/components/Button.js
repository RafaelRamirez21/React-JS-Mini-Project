import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  // also I can call the objet itself like props after that pass the properties: Object.color or Object.text
  // I can spread this properties and reused the button component
  return (<button onClick={onClick} className='btn' style={{ backgroundColor: color }}>{text}</button>)
}
Button.defaultProps = {
  color: 'green',
  text: 'Add',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}
export default Button
