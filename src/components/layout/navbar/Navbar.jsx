import {FaGithub} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

function Navbar({title}) {
  return (
    <header className='header'>
      <div className='container'>
        <nav className='header__nav'>
          <div className=''>
            <FaGithub className='' />
            <Link to='/' className='header__link'>
              {title}
            </Link>
          </div>
          <div className=''>
            <div className=''>
              <Link to='/' className='header__btn'>
                Home
              </Link>
              <Link to='/about' className='header__btn'>
                About
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
