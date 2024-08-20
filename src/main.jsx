import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Router/App.jsx'
import './index.css'
import {createBrowserRouter} from  'react-router-dom';
import HomeItem from './Router/HomeItem.jsx';
import Bag from './Router/Bag.jsx';
import { RouterProvider } from 'react-router-dom';
import {Provider} from 'react-redux';
import myntraStore from './store/index.js';
import Wishlist from './Router/WishList.jsx';
import Men from './Router/Men.jsx';
import Women from './Router/Women.jsx';
import Gadgets from './Router/Gadgets.jsx';
import Kids from './Router/Kids.jsx';
import Accessories from './Router/Accessories.jsx';
import Search from './Comp/Search.jsx';
const router= createBrowserRouter([
  {
    path : "/",
    element: <App/>,
    children :[
      {
        path:"/",
        element:<HomeItem/>
      },
      {
        path:"/bag",
        element:<Bag/>
      },
      {
        path:"/wishList",
        element:<Wishlist/>
      },
      {
        path:"/Men",
        element:<Men/>
      },
      {
        path:"/Women",
        element:<Women/>
      },
      {
        path:"/Gadgets",
        element:<Gadgets/>
      },
      {
        path:"/Kids",
        element:<Kids/>
      },
      {
        path:"/Accessories",
        element:<Accessories/>
      },
      {
        path:"/Search",
        element:<Search/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
    </Provider>
  </StrictMode>,
)
