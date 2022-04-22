import http from '../http';
import IBookData from '../types/BookDetailScreen';

const getAll = () => {
  return http.get<Array<IBookData>>('/books/');
};

const get = (id: any) => {
  return http.get<IBookData>(`/books/${id}`);
};

const BookService = {
  getAll,
  get,
};

export default BookService;
