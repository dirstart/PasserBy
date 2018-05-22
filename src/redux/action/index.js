export const GET_BOOK_LIST = 'GET_BOOK_LIST';


export const receiveBookList = (data, name) => {
    console.log('receiveBook');
    return {
        type: GET_BOOK_LIST,
        data,
        name
    }
}  

// 搜索书籍
export const getBookList = (name) => {
    return  dispatch => {
        let data = {
            test: '23'
        };
        setTimeout(() => dispatch(receiveBookList(data, name)), 3000);
        // dispatch(receiveBookList(data, name));
    }
  }
  