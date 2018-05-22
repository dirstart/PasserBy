import {GET_BOOK_LIST}  from '../action/index';
//书籍详情

// 搜索书籍
export const fetchBookList = (state = {books: [], name: ''}, action={}) => {
  switch (action.type){
    case GET_BOOK_LIST:
      console.log(action);
      let {
        data: {books},
        name
      } = action
      console.log( books);
      return {books, name};
    default:
      return state;
  }
}