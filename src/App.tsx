import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import ErrorFallback from './components/ErrorFallBack';

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <BookList />
            </ErrorBoundary>
          }
        />
        <Route
          path="/books"
          element={
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <BookList />
            </ErrorBoundary>
          }
        />
        <Route
          path="/books/:id"
          element={
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <BookDetail />
            </ErrorBoundary>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
