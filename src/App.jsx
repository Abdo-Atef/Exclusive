import {RouterProvider, createBrowserRouter, createHashRouter} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import Products from './components/Products/Layout'
import Login from './components/Authentication/Login'
import SignUp from './components/Authentication/SignUp'
import WomenProducts from './components/Products/womenProducts'
import MenProducts from './components/Products/menProducts'
import AllProducts from './components/Products/AllProducts'
import Electronics from './components/Products/electronics'
import ProductsContextProvider from './Context/ProductsContext'
import { QueryClient, QueryClientProvider } from 'react-query'
import ProductDetails from './components/ProductDetails/ProductDetails'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import ProtectedSign from './components/ProtectedRoute/ProtectedSign'
import Cart from './components/Cart/Cart'
import WishList from './components/WishList/WishList'
import CheckoutSession from './components/CheckoutSession/CheckoutSession'
import MyOrders from './components/MyOrders/MyOrders'
import Account from './components/Account/Layout'
import ProtectedAccount from './components/ProtectedRoute/protectedAccount'
import MyProfile from './components/Account/ManageMyData/MyProfile'
import ChangePassword from './components/Account/ManageMyData/ChangePassword'
import UpdateMyData from './components/Account/ManageMyData/UpdateMyData'
import MyAddresses from './components/Account/ManageMyData/MyAddresses'
import { Toaster } from 'react-hot-toast';
import ForgetPassword from './components/Authentication/ForgetPassword/ForgetPassword'
import ResetPassword from './components/Authentication/ResetPassword/ResetPassword'
import ProtectedResetPassword from './components/Authentication/ProtectedResetPassword/ProtectedResetPassword'



function App() {

  let queryClient = new QueryClient();

  let routes = createHashRouter([
    {path:'/', element: <Layout/>, children:[
      {index:true, element:<Home/>},
      {path:'/contact', element:<Contact/>},
      {path:'/cart', element:<Cart/>},
      {path:'cart/checkout', element:<CheckoutSession/>},
      {path:'/wishList', element:<WishList/>},
      {path:'/signUp', element:<ProtectedSign><SignUp/></ProtectedSign> },
      {path:'/login', element:<ProtectedSign><Login/></ProtectedSign> },
      {path:'/ForgetPassword', element:<ProtectedSign><ForgetPassword/></ProtectedSign> },
      {path:'/ResetPassword', element:<ProtectedResetPassword><ResetPassword/></ProtectedResetPassword> },
      {path:'/allorders', element:<ProtectedAccount><MyOrders/></ProtectedAccount>},
      {path:'/account', element:<ProtectedAccount><Account/></ProtectedAccount> ,children:[
        {path:'/account/myProfile', element:<MyProfile/>},
        {path:'/account/changePassword', element:<ChangePassword/>},
        {path:'/account/updateMyData', element:<UpdateMyData/>},
        {path:'/account/myAddresses', element:<MyAddresses/>},
      ]},
      {path:'/productDetails/:id', element:<ProductDetails/>},
      {path:'/products', element:<Products/>, children:[
        {path:'/products/allproducts' , element:<AllProducts/>},
        {path:'/products/womenProducts', element:<WomenProducts/>},
        {path:'/products/menProducts', element:<MenProducts/>},
        {path:'/products/electronics', element:<Electronics/>},
      ]},
      {path:'*', element:<NotFound/>},
    ]}
  ])
  return (
    <>
    <Provider store={store}>
      <ProductsContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routes}></RouterProvider>
          <Toaster />
        </QueryClientProvider>
      </ProductsContextProvider>
    </Provider>
    </>
  )
}

export default App
