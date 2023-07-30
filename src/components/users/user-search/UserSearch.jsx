import {useState, useContext} from 'react';
import './style.scss';
import GithubContext from '../../../context/github/GithubContext';
import {searchUsers} from '../../../context/github/GithubActions';
import ratingClose from '../../../assets/svg/rating.svg';
import ratingOpen from '../../../assets/svg/rating-open.svg';
import {QUANTITY_USER} from '../../../core/constants';

function UserSearch() {
  const [textSearch, setTextSearch] = useState('');
  const [error, setError] = useState('');
  const {users, text, page, dispatch} = useContext(GithubContext);
  const [ratingState, setRatingState] = useState(true);

  const handleChange = (e) => {
    setTextSearch(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (textSearch === '') {
      setError('Please enter something');
    } else {
      dispatch({type: 'SET_LOADING'});
      const users = await searchUsers(textSearch);
      dispatch({type: 'SET_TEXT', payload: textSearch});
      dispatch({type: 'SET_PAGE', payload: 1});
      dispatch({type: 'GET_USERS', payload: users});
      setTextSearch('');
      setError('');
    }
  };
  const handleRating = async () => {
    if (ratingState) {
      const repositories = 'repositories';
      dispatch({type: 'SET_LOADING'});
      const users = await searchUsers(text, page, QUANTITY_USER, repositories);
      dispatch({type: 'GET_USERS', payload: users});
    } else {
      dispatch({type: 'SET_LOADING'});
      const repositories = 'start';
      const users = await searchUsers(text, page, QUANTITY_USER, repositories);
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
        <form className='form' onSubmit={handleSubmit} data-testid='toggle-btn'>
          <p className='error'>{error}</p>
          <div className='form__control'>
            <input
              data-testid='input-search'
              type='text'
              className='form__input'
              placeholder='Search'
              value={textSearch}
              onChange={(e) => handleChange(e)}
            />
            <button
              data-testid='button-go'
              type='submit'
              className='form__btn btn'
            >
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
