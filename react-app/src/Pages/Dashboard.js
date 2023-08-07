import React from "react";
import { useAppContext } from "../AppContext/AppContext";
import { useNavigate, Navigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  // Now here I know userId and his role, so need to send a request to backend to fetch which books can this user see.
  // In case if the role is admin, the request on backend will fetch all books and everything will be stored in this books array.
  const books = [
    {
      bookId: 1,
      bookName: "Financials",
      bondsContained: 3,
    },
    {
      bookId: 2,
      bookName: "Technology",
      bondsContained: 2,
    },
    {
      bookId: 3,
      bookName: "Healthcare",
      bondsContained: 4,
    },
    {
      bookId: 4,
      bookName: "Energy",
      bondsContained: 1,
    },
    {
      bookId: 5,
      bookName: "Consumer Goods",
      bondsContained: 5,
    },
    {
      bookId: 6,
      bookName: "Automotive",
      bondsContained: 2,
    },
    {
      bookId: 7,
      bookName: "Real Estate",
      bondsContained: 3,
    },
    {
      bookId: 8,
      bookName: "Entertainment",
      bondsContained: 1,
    },
    {
      bookId: 9,
      bookName: "Telecommunications",
      bondsContained: 6,
    },
    {
      bookId: 10,
      bookName: "Utilities",
      bondsContained: 3,
    },
  ];
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
          <div className="space-y-4 space-x-2 mx-3 p-4">
            {books.map((book, idx) => (
              <div className="indicator">
                <span className="indicator-item badge badge-error">5</span>
                <div className="stats shadow cursor-pointer hover:bg-gray-50" onClick={() => navigate(`/book/${book.bookId}`)}>
                  <div className="stat">
                    <div className="stat-title">{book.bookId}</div>
                    <div className="stat-value text-primary">
                      {book.bookName}
                    </div>
                    <div className="stat-desc">
                      No. of Bonds - {book.bondsContained}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Dashboard;
