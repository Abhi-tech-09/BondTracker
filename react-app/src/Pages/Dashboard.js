import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../AppContext/AppContext";
import { Navigate } from "react-router-dom";

function Dashboard() {
  // Now here I know userId and his role, so need to send a request to backend to fetch which books can this user see.
  // In case if the role is admin, the request on backend will fetch all books and everything will be stored in this books array.
  const bookIds = [1001, 2002, 3003, 4004, 5005];
  const { user } = useAppContext();

  /*
    i will create AdminView and pass Books as props,
    for each Book admin can see the users mapped with each book. 
  */

  return (
    <>
      {user.role !== "admin" ? (
        <Navigate to="/" replace={true} />
      ) : (
        <>
          {" "}
          <p className="text-4xl mx-2 mb-2">Your role is {user.role}</p>
          <div className="space-y-4 mx-4 flex flex-col">
            {bookIds.map((book, idx) => (
              <Link
                key={idx}
                to={`/book/${book}`}
                className="link link-accent text-4xl"
              >
                {book}
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Dashboard;
