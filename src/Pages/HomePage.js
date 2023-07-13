import React, { useState } from "react";
// import { FaAlignCenter } from "react-icons/fa";
import { toast } from "react-toastify";
import Header from "../Components/Header";
import {Button} from '@mui/material';


const HomePage = () => {
  
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [gender, setGender] = useState('');
      const [img, setImg] = useState(profilePIcDefault);
      const [checked, setChecked] = useState(false);

      //convert image
      const getBase64 = (file)=>{
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = ()=> resolve(reader.result);
            reader.onabort=(error)=>reject(error);
            reader.readAsDataURL(file);
          });
      }
    //handle image
      
    const handleImg = (e) => {
      const file = e.target.files[0];
      getBase64(file).then((base64) => {
        localStorage.setItem('img', base64);
        console.debug('File Store', base64);
      });
    };
    


  //Submit Form codes
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name===""){
      toast.error("User Name is Required");
    }
    else if(email===""){
      toast.error("Email is Required");
    }
    else if(password ===""){
      toast.error("Password is Required");
    }
    else if(gender ===""){
      toast.error("Please this field");
    }
    else{
      localStorage.setItem('name',name)
      localStorage.setItem('email',email)
      localStorage.setItem('password',password)
      localStorage.setItem('gender',gender)
      localStorage.setItem('checked',checked)

      toast.success("User Saved! ");
     
    }



  };

  return (
    <>
      <Header />
      <div className="container content mt-4">
        <h5> 📝 Add New User</h5>
        <div className="row border p-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                value={name}
                onChange={e=>setName(e.target.value)}
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
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
            {/* radios button inpput ================== */}
            <div className="d-flex flex-row">
              Gender :
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="Male"
                  defaultChecked={gender==="Male"}
                  onClick={e=>setGender(e.target.value)}
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="Female"
                  defaultChecked={gender==="Female"}
                  onClick={e=>setGender(e.target.value)}
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Female
                </label>
              </div>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                value={checked}
                onChange={e=>setChecked(e.target.value)}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I Acept Terms And Conditions
              </label>
            </div>
            <Button
              type="submit"
              className="form__submit-btn"
              onClick={handleSubmit}
              href="/profile"
            >
              Submit
            </Button>
          </div>
          {/* col-md-6 ends */}
{/*img----------------------------------------------------------------------->-----------------*/ }
          <div className="col-md-4 ">
            <div className="profile_section">
              <p>Select Profile Picture :</p>
              <img
                src={ profilePIcDefault }
                alt="profile_pic"
                className="img-thumbnail"
                value={img}
                onChange={handleImg}
                height={250}
                width={250}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Default file input example
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
