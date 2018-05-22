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
        // let apiHead = 'api.zhuishushenqi.com';
        // let api = apiHead + `/book/fuzzy-search?query=${name}&start=0`;
        // fetch(api)
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     //   data.books.map((item) => { item.cover = url2Real(item.cover)})
        //     //   return data;
        // })
        // dispatch(receiveBookList(data, name));
    }
  }
  