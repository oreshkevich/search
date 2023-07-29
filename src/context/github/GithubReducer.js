const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload.items,
        totalCount: action.payload.total_count,
        error: action.payload.error,
        loading: false,
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};

export default githubReducer;

