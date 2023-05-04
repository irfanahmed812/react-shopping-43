import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Shop from './Components/Products/Shop';
import NotFound from './Components/NotFound/NotFound';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>,
          loader: async () => {
            return fetch('products.json')
          }
        }
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
