import React from 'react'
import { useState } from 'react'
import SignUp from './SignUp';
import axios from 'axios';
import piclog from "../img/loginIMg.jpg"
import * as Yup from "yup";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function LoginPage() {

  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const [login, setLogin] = useState(true);

  const handleClick = () => {
    setLogin(!login);
  }



  const handleLogin = () => {
    if (localStorage.getItem("Token")) {
      setIsLoggedIn(true);
      toast.success("Login successful!", {
        position: "top-center",
      });
      navigate("/");
    }
  };
  




  const formik = useFormik({
    initialValues: {
      enrollment: '00715602721',
      password: 'password',
    },


    validationSchema: Yup.object({
      enrollment: Yup.string().min(3).max(11).required("Please enter the roll number"),
      password: Yup.string().min(6).required("Please enter the password"),
    }),




    onSubmit: async (values) => {
      try {
        // Call server API to send the data
        console.log(values.enrollment, values.password);
        await axios.post("https://collegeeazy-backend-production.up.railway.app/collegeazy/users/public/login",
          {
            enrollment: values.enrollment,
            password: values.password,
          })
          .then(response => {
            // alert("success")
            localStorage.setItem("Token",JSON.stringify(response.data));

          })

          toast.success("Login successful!", {
            position: "top-center",
          });


        setIsLoggedIn(true);
        // Redirect to home page after successful login
        navigate("/");

        // Clear the form fields after submission
        formik.resetForm();

      } catch (error) {
        console.log(error);
        toast.error("An error occurred while logging in.", {
          position: "top-center",
        });
      }
    }

  });



 
  const handleLogout = () => {
    localStorage.removeItem("Token");
    toast.success("Logged out successfully!", {
      position: "top-center",
    });
    setIsLoggedIn(false);
    navigate("/");
  };
  




  return (
    <>
      <div>

        {" "} {login ? (


          <div className="column">
            <form action="login" onSubmit={formik.handleSubmit}>
              <div className='container'>
                <div className="img">
                  <img src={piclog} alt="" style={{ width: "90%" }} />
                </div>
                <div className="con">
                  <div className="heading">
                    <h1>Login</h1>
                  </div>
                  <div className="inputenroll">
                    <input type="text" className="form-control enroll"
                      onChange={formik.handleChange}
                      value={formik.values.enrollment}
                      id="enrollment" autoComplete="off" name='enrollment' placeholder="Enrollment" />
                    {formik.touched.enrollment && formik.errors.enrollment ? (
                      <div className='error'>{formik.errors.enrollment}</div>
                    ) : null}
                  </div>

                  <div className="passinput">
                    <input type="password" className="form-control passs"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      id="floatingInput" autoComplete="off" name='password' placeholder="Password" />
                    {formik.touched.password && formik.errors.password ? (
                      <div className='error'>{formik.errors.password}</div>
                    ) : null}

                  </div>

                  <div className="columnL">
                    <div className="buttonL">
                      <button className="btn " type="submit" onClick={isLoggedIn ? handleLogout : handleLogin}>
                        {isLoggedIn ? 'Logout' : 'Login'}
                      </button>

                      <span onClick={handleClick}>Create A New Account</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
           
          </div>

        ) : (<SignUp />)}

      </div>
      <ToastContainer />
    </>
  )
}