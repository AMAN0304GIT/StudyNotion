import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Pages/Home";
import Navbar from "./components/common/Navbar"
import OpenRoute from "./components/core/Auth/OpenRoute"

import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import ForgotPassword from "./Pages/ForgotPassword";
import UpdatePassword from "./Pages/UpdatePassword";
import VerifyEmail from "./Pages/VerifyEmail";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Error from "./Pages/Error"
import Settings from "./components/core/Dashboard/Settings"
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart";
import { ACCOUNT_TYPE } from "./utils/constants";
import AddCourse from "./components/core/Dashboard/AddCourse";
function App() {
  const { user } = useSelector((state) => state.profile)
  return (
    <div className="w-screen min-h-screen  bg-richblack-900 flex flex-col font-inter"> 
     <Navbar />
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route 
          path="signup"
          element= {
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="login"
          element = {
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
           />
        <Route
          path="forgot-password"
          element = {
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
           />
        <Route
          path="update-password/:id"
          element = {
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
           />
        <Route
          path="verify-email"
          element = {
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
           />
        <Route
          path="/about"
          element = {
            <OpenRoute>
              <About />
            </OpenRoute>
          }
           />
        <Route
          path="/contact"
          element = {
            <OpenRoute>
              <Contact />
            </OpenRoute>
          }
           />
          <Route
            element={
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>
              }
          >
            <Route path="dashboard/my-profile" element={<MyProfile/>} /> 
            <Route path="dashboard/settings" element={<Settings/>} /> 
            
            {
              user?.accountType === ACCOUNT_TYPE.STUDENT && (
                <>
                   <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />}/>
                   <Route path="dashboard/cart" element={<Cart />}/>
                </>
              )
            }
            {
              user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
                <>
                   <Route path="dashboard/add-course" element={<AddCourse />}/>

                </>
              )
            }
          </Route>
          
          <Route path="*" element={<Error/>}/>

      </Routes>
    </div>
  );
}

export default App;
