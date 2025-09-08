import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayOut from './LayOuts/AppLayOut'
import AuthLayOut from './LayOuts/AuthLayOut'

import Home from './Pages/Home'
import AllBooks from './Pages/AllBooks'
import ProtectedRoute from "./Pages/ProtectedRoute"
import BookDetails from "./Pages/BookDetails"
import Cart from "./Pages/Cart"
import Login from './features/Auth/Login'
import Register from './features/Auth/Register'
import ForgetPassword from "./features/Auth/ForgetPassword"
import ResetPassword from "./features/Auth/ResetPassword"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route  element={<AppLayOut/>}>
                  <Route index element={<Home/>}/>
                  <Route path="allBooks" element={<ProtectedRoute><AllBooks/></ProtectedRoute>} />
                  <Route path="book/:bookId" element={<ProtectedRoute><BookDetails/></ProtectedRoute>}/>
                  <Route path="cart" element={<ProtectedRoute><Cart/></ProtectedRoute>} />
            </Route>
            <Route element={<AuthLayOut/>}>
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="forgetpassword" element={<ForgetPassword/>}/>
              <Route path="resetpassword" element={<ResetPassword/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
