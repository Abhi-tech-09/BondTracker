import React, { useEffect, useState } from "react";
import { useAppContext } from "../AppContext/AppContext";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();
  // Now here I know userId and his role, so need to send a request to backend to fetch which books can this user see.
  // In case if the role is admin, the request on backend will fetch all books and everything will be stored in this books array.
  const [bookRes, setBookRes] = useState([])
  const [userRes, setUserRes] = useState([])
  const { user } = useAppContext();
  useEffect(()=>{
    (async ()=>{
      axios.defaults.withCredentials = true;
      //below piece of code is to test until login module is integrated
      //this should be removed
      const login = await axios.post('http://localhost:8080/user/login',{
        userName: "user2",
        password: "password"
      })
      console.log(login)
      const booksData = await axios.get('http://localhost:8080/book/books').catch((error)=>{
        if(error.response && error.response.status == 401){
          console.log("Please Login...")
          navigate("/")
        }
      })
      console.log(booksData)
      setBookRes(booksData?.data)
      if(user.role == "ROLE_ADMIN"){
        const usersData = await axios.get('http://localhost:8080/user/users').catch((error)=>{
          if(error.response && error.response.status == 401){
            navigate("/")
          }
        })
        console.log(usersData)
        setUserRes(usersData?.data)
      }
    })()
  },[])

  /*
    i will create AdminView and pass Books as props,
    for each Book admin can see the users mapped with each book. 
  */

  return (
    <>
        <>
          <div className="flex">
            <div className="space-y-4 space-x-2 mx-3 p-4">
            {bookRes.map((book, idx) => (
              <div className="indicator">
                <span className="indicator-item badge badge-error">?</span>
                <div className="stats shadow cursor-pointer hover:bg-gray-50" onClick={() => navigate(`/book/${book.id}`)}>
                  <div className="stat">
                    <div className="stat-title">{book.id}</div>
                    <div className="stat-value text-primary">
                      {book.name}
                    </div>
                    <div className="stat-desc">
                      No. of Bonds - {book.tradeList.length}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
            {user.role=="ROLE_ADMIN"&&<div className="space-y-4 space-x-2 mx-3 p-4">
            {userRes?.map((user, idx) => (
              <div className="indicator">
                <span className="indicator-item badge badge-error">?</span>
                <div className="stats shadow cursor-pointer hover:bg-gray-50">
                  <div className="stat">
                    <div className="stat-title">{user.role}</div>
                    <div className="stat-value text-primary">
                      {user.userName}
                    </div>
                    <div className="stat-desc">
                      No. of Books - {user.bookList.length}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>}
          </div>

        </>
    </>
  );
}

export default Dashboard;
