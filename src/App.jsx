
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Categorie from './components/Categorie/Categorie';
import Popular from './components/Popular/Popular';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Layout/Main';
import PopupMenu from './components/PopupMenu/PopupMenu';
import Cart from './components/Cart/Cart';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <>
            <Hero></Hero>
            <Categorie></Categorie>
            <Popular></Popular>
          </>,
          loader: async () => {
            return fetch('http://localhost:3000/product')
          }

        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/signup',
          element: <Register></Register>,
        },
        {
          path: '/popup',
          element: <PopupMenu></PopupMenu>,
        },
        {
          path: '/product/:id',
          element: <Cart></Cart>,
          loader: ({ params }) => fetch(`http://localhost:3000/product/${params.id}`)
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
