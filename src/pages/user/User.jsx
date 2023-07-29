import {useEffect, useContext} from 'react';
import {useParams, Link} from 'react-router-dom';
import Spinner from '../../components/layout/Spinner';
import GithubContext from '../../context/github/GithubContext';
import {getUserAndRepos} from '../../context/github/GithubActions';
import './style.scss';

function User() {
  const {user, loading, dispatch} = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    dispatch({type: 'SET_LOADING'});
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({type: 'GET_USER', payload: userData});
    };

    getUserData();
  }, [dispatch, params.login]);

  const {
    name,
    type,
    login,
    avatar_url,
    company,
    blog,
    location,
    updated_at,
    created_at,
    html_url,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='description'>
      <div className='description__item'>
        <Link to='/' className='btn '>
          Back To Search
        </Link>
      </div>
      <div className='description__item'>
        <div className='description__wrap'>
          <figure>
            <img src={avatar_url} alt='avatar_url' />
          </figure>
          <div className='description__title'>
            {name && <h2 className='badge'>{name}</h2>}
            <div className='description__btn'>
              <a
                href={html_url}
                target='_blank'
                rel='noreferrer'
                className='btn '
              >
                Visit Github Profile
              </a>
            </div>
            <h4>type : {type}</h4>
            <h4>login: {login}</h4>
            <h4>blog: {blog}</h4>
            <h4>company: {company}</h4>
            <h4>location : {location}</h4>
            <h4>updated_at: {updated_at}</h4>
            <h4>created_at: {created_at}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;

