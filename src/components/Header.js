import PropTypes from 'prop-types';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({title, onAdd, showAdd }) => {
    const location = useLocation()
    
    return (
    <header className='header'>
        <h1>{title}</h1>
        { location.pathname === '/' && 
        ( !showAdd ? 
        <FaPlus color='blue' onClick={onAdd}/> :
        <FaTimes color='red' onClick={onAdd} />
        )}
    </header>
    )
};

Header.defaultProps = {
    title: 'To-do List'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;
