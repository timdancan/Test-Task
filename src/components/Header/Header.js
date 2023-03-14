import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <img className='logo' src={logo} alt='logo' />
            <h1 className='header__title' >Hover! But be careful</h1>
        </header>
    );
};

export default Header;