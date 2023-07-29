import {useContext} from 'react';
import Spinner from '../../layout/Spinner';
import UserItem from '../user-item/UserItem';
import './style.scss';
import GithubContext from '../../../context/github/GithubContext';

function UserResults() {
  const {users, loading} = useContext(GithubContext);
  if (!loading) {
    return (
      <div className='result'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;

