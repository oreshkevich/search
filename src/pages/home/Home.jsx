import UserResults from '../../components/users/user-results/UserResults';
import UserSearch from '../../components/users/user-search/UserSearch';
import Pagination from '../../components/pagination/Pagination';
import GithubContext from '../../context/github/GithubContext';
import {useContext} from 'react';

function Home() {
  const {users} = useContext(GithubContext);
  return (
    <>
      {users === undefined ? (
        <h2 className='error'>Server error reload the page</h2>
      ) : (
        <>
          <UserSearch />
          <UserResults />
          <Pagination />
        </>
      )}
    </>
  );
}

export default Home;

