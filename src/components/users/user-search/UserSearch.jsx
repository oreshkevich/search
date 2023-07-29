import {useState, useContext} from 'react';
import './style.scss';
import GithubContext from '../../../context/github/GithubContext';
import {searchUsers} from '../../../context/github/GithubActions';

function UserSearch() {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const {users, dispatch} = useContext(GithubContext);

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
  return (
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
        <div>
          <button
            onClick={() => dispatch({type: 'CLEAR_USERS'})}
            className='btn clear-btn'
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;

