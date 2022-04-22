import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookService from '../services/BookService';
import IBookData from '../types/BookDetailScreen';

type ResponseObject = {
  books: Array<IBookData>;
  isLoading: boolean;
  error: string | null;
};

const useFetch = () => {
  const [data, setData] = useState<ResponseObject | null>(null);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    setData((data: any) => {
      return { ...data, isLoading: true };
    });
    BookService.getAll()
      .then((response: any) => {
        setData({
          books: response?.data?.results,
          isLoading: false,
          error: null,
        });
      })
      .catch((e: Error) => {
        setData({
          books: [],
          isLoading: false,
          error: e.message,
        });
      });
  };

  return [data];
};

const BookList: React.FC = () => {
  let [data] = useFetch();
  let navigate = useNavigate();

  const onSelectBook = (book: IBookData, index: number) => {
    navigate(`/books/${book.id}`, { state: book });
  };

  return (
    <div>
      {data?.isLoading && (
        <div className="spinner-container">
          <div className="loader" />
        </div>
      )}
      <div className="container">
        {!data?.isLoading && data?.books && data?.books?.length > 0 && (
          <>
            <h2 id="Header">List of Books</h2>
            <table className="table  bordered border">
              <thead>
                <tr>
                  <th>Book Title</th>
                  <th>Author Name</th>
                  {/* <th>Download Count</th> */}
                </tr>
              </thead>
              <tbody>
                {data.books.map((book, index) => (
                  <tr key={index}>
                    <td>{book.title}</td>
                    <td>{book.authors[0].name}</td>
                    {/* <td>{book.download_count}</td> */}
                    <td>
                      <a href="" onClick={() => onSelectBook(book, index)}>
                        View Details
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {!data?.isLoading && data?.error && (
          <>
            <h4 id="Header">{data?.error}</h4>
          </>
        )}
      </div>
    </div>
  );
};

export default BookList;
