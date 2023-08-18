import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({ name, onClick, showAdd }) => {
  
  
  return (
    <header className="header">
      <h1>Task Tracker for {name}</h1>
      <Button content={!showAdd?'Add':'Close'} color={!showAdd?'green':'red'} onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
}


export default Header
