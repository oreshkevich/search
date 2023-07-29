import React, {useState, useContext} from 'react';
import {createPages} from '../../utils';
import GithubContext from '../../context/github/GithubContext';
import {searchUsers} from '../../context/github/GithubActions';
import './style.scss';

function Pagination() {
  const pages = [];
  const {text, totalCount, dispatch} = useContext(GithubContext);

  const [pageNow, setPageNow] = useState(1);

  const perPage = 10;
  const quantityUser = 10;
  const pagesCount = Math.ceil(totalCount / perPage);

  createPages(pages, pagesCount, pageNow);

  const onClickHandler = async (number) => {
    setPageNow(number);
    dispatch({type: 'SET_LOADING'});
    const users = await searchUsers(text, number, quantityUser);
    dispatch({type: 'SET_TEXT', payload: text});
    dispatch({type: 'GET_USERS', payload: users});
  };

  return (
    <div>
      <div className='pages'>
        {pages.map((page, index) => (
          <span
            key={page}
            className={pageNow === page ? 'current-page' : 'page'}
            onClick={() => onClickHandler(page)}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Pagination;

