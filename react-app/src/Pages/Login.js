import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import axios from 'axios';
import { useAppContext } from "../AppContext/AppContext";
const users_login_url = "http://localhost:8080/user/";


const LoginForm = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser} = useAppContext();
  const handleLogin = async () => {
    // Perform authentication logic here
    // For simplicity, just calling the login function from context
      const userDetail = {userName,password}
      let response
      try {
        response = await axios.post(users_login_url+"login",userDetail);
        console.log(response.data)
        await setUser({
          userId: response.data.userName,
          name:   response.data.name,
          role: response.data.role,
          bookList: response.data.bookList
        })
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }

      navigate("/dashboard")
  };

  // useEffect(()=>{
  //   console.log('Updated user');
  //   console.log(user)
  // })

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-fit space-y-4 px-6 py-10 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <button
          className="w-full btn btn-outline btn-primary focus:outline-none focus:shadow-outline"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
