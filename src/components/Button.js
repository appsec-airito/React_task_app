import PropTypes from 'prop-types';


const Button = (props) => {
    const onClick = (e) => {
        console.log('Adding');
        console.log(e);
    }
  return (
    <div>
      <button 
      onClick={props.onClick} 
      className="btn" 
      style= {{backgroundColor: props.color}}
      >
        {props.content}
        </button>
    </div>
  )
}

Button.defaultProps = {
    content: 'Click',
    color: 'steelblue',
}

Button.propTypes = {
    content: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Button
