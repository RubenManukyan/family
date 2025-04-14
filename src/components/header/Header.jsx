import './header.scss';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="familyBack">
      <Link to="/">
        <img src={logo} alt="logo" className='logo' />
      </Link>
      <div className="timeline">
        <Link to="/year/2018">2018</Link>
        <Link to="/year/2019">2019</Link>
        <Link to="/year/2020">2020</Link>
        <Link to="/year/2021">2021</Link>
      </div>
    </div>
  );
};

export default Header;
