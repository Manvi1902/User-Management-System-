import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {

        const [email,setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();
        //getting email and password of  users

        const userName = localStorage.getItem('email')?localStorage.getItem('email'): "N/A";
        const userPassword = localStorage.getItem('password')? localStorage.getItem('password'):"N/A";

       /* const userName = localStorage.getItem('email')? localStorage.getItem('email') : "admin@admin.com";
        const userPassword = localStorage.getItem('password') ? localStorage.getItem('password'):"admin";
*/

      // Example of storing a hashed password in localStorage
     // const hashedPassword = hash(userPassword);

      //localStorage.setItem('password', hashedPassword);

      // Example of checking a hashed password from localStorage
      //const storedPassword = localStorage.getItem('password');

        //submit function
         const handleSubmit=(e)=>{
            e.preventDefault();
            
            if(email === userName && password === userPassword ){
              toast.success("Login Successful");
              navigate("/home");
            }else{
              toast.error("Invalid Email address o Password");
            }
          }

  return (
    <>
      <div className="form__container d-flex felx-column align-items-center justify-content-center">
        <form>
          <h4 className="form__heading">User Management System </h4>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={ e =>setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form__signupLink mb-3">
            <p>
              Don't Have An Account? <Link to="/">signup</Link>
            </p>
          </div>
          <button type="submit" className="form__button" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};
export default LoginPage;
