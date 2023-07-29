import {FaHome} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './style.scss';

function NotFound() {
  return (
    <div className='hero'>
      <div className='hero__wrap'>
        <div className='hero__item'>
          <h1 className='hero__title'>Oops!</h1>
          <p className='hero__text'>404 - Page Not Found!</p>
          <Link className='hero__btn' to='/'>
            <FaHome className='mr-2' />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

