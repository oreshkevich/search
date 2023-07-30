import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

function UserItem({user: {login, avatar_url}}) {
  return (
    <div data-testid='card-id' className='card'>
      <Link className='card__link' to={`/user/${login}`}>
        <div className='card__wrap'>
          <div className='card__item'>
            <div className='avatar'>
              <div className='avatar__img'>
                <img src={avatar_url} alt='Profile' />
              </div>
            </div>
          </div>
          <div className='card__item'>
            <h2 className='card__title'>{login}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
