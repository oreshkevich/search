import {useState, useContext} from 'react';
import './style.scss';
import GithubContext from '../../../context/github/GithubContext';
import {searchUsers} from '../../../context/github/GithubActions';
import ratingClose from '../../../assets/svg/rating.svg';
import ratingOpen from '../../../assets/svg/rating-open.svg';

function UserSearch() {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const {users, page, dispatch} = useContext(GithubContext);
  const [ratingState, setRatingState] = useState(true);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === '') {
      setError('Please enter something');
    } else {
      dispatch({type: 'SET_LOADING'});
      const users = await searchUsers(text);
      dispatch({type: 'SET_TEXT', payload: text});
      dispatch({type: 'GET_USERS', payload: users});
      setText('');
      setError('');
    }
  };
  const handleRating = async () => {
    const quantityUser = 10;

    if (ratingState) {
      const repositories = 'repositories';
      dispatch({type: 'SET_LOADING'});
      const users = await searchUsers(text, page, quantityUser, repositories);
      dispatch({type: 'GET_USERS', payload: users});
    } else {
      dispatch({type: 'SET_LOADING'});
      const repositories = 'start';
      const users = await searchUsers(text, page, quantityUser, repositories);
      dispatch({type: 'GET_USERS', payload: users});
    }
  };

  const handleToggleRating = () => {
    setRatingState((prevValue) => !prevValue);
    handleRating();
  };

  return (
    <div>
      <div className='user'>
        <form className='form' onSubmit={handleSubmit}>
          <p className='error'>{error}</p>
          <div className='form__control'>
            <input
              type='text'
              className='form__input'
              placeholder='Search'
              value={text}
              onChange={handleChange}
            />
            <button type='submit' className='form__btn btn'>
              Go
            </button>
          </div>
        </form>
        {users.length > 0 && (
          <>
            <button
              type='button'
              onClick={handleToggleRating}
              className='filter-more__btn'
            >
              <img
                src={ratingState ? ratingClose : ratingOpen}
                alt='icon_action'
              />
              <span className='filter-more__title'>
                By number of repositories
              </span>
            </button>
            <div>
              <button
                onClick={() => dispatch({type: 'CLEAR_USERS'})}
                className='btn clear-btn'
              >
                Clear
              </button>
            </div>
          </>
        )}
      </div>
      {users.length === 0 && (
        <h2 className='user__error'>Nothing was found on the request</h2>
      )}
    </div>
  );
}

export default UserSearch;

