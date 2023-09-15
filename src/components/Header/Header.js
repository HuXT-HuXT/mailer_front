import './Header.css';
import Logo from '../Logo/Logo';

const Header = () => {
  return(
    <header className="header">
      <Logo />
      <div className='header__container'>        
        <h1 className="header__title">Сервисный сервис</h1>
      </div>
    </header>
  );
};

export default Header;