import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArticleSearchFilter from './pages/ArticleSearch';
import PersonalizedNewsFeed from './pages/PersonalFeed';
import { ThemeProvider } from './themeContext';
import { Navbar } from './components/Navbar';
import {PageNotFound } from './pages/ErrorPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ArticleSearchFilter />,
      errorElement: <PageNotFound />
    },
    {
      path: '/personal-feed',
      element: <PersonalizedNewsFeed />,
      errorElement: <PageNotFound />
    }
  ]);

  return (
    <>
      <header className='bg-gray-dark'>
        <Navbar />
      </header>
    <ThemeProvider>
      <main className='bg-black min-h-screen p-4 md:p-10'>
          <RouterProvider router={router} />
      </main>
    </ThemeProvider>
    </>
  );
}

export default App;
