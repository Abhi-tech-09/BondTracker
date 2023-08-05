import React from "react";
import { useParams } from "react-router-dom";

const dummyTrades = [
  {
    Id: 1,
    BookId: 101,
    CounterpartyId: 201,
    SecurityId: 301,
    Quantity: 100,
    Status: "Pending",
    Price: 50.75,
    Buy_sell: "Buy",
    tradeDate: "2023-08-04",
    settlementDate: "2023-08-10",
  },
  {
    Id: 2,
    BookId: 102,
    CounterpartyId: 202,
    SecurityId: 302,
    Quantity: 50,
    Status: "Completed",
    Price: 75.25,
    Buy_sell: "Sell",
    tradeDate: "2023-08-05",
    settlementDate: "2023-08-12",
  },
  {
    Id: 3,
    BookId: 103,
    CounterpartyId: 203,
    SecurityId: 303,
    Quantity: 200,
    Status: "Pending",
    Price: 30.5,
    Buy_sell: "Buy",
    tradeDate: "2023-08-06",
    settlementDate: "2023-08-11",
  },
  {
    Id: 4,
    BookId: 101,
    CounterpartyId: 204,
    SecurityId: 304,
    Quantity: 150,
    Status: "Completed",
    Price: 60.0,
    Buy_sell: "Sell",
    tradeDate: "2023-08-07",
    settlementDate: "2023-08-13",
  },
  {
    Id: 5,
    BookId: 102,
    CounterpartyId: 205,
    SecurityId: 305,
    Quantity: 75,
    Status: "Pending",
    Price: 45.25,
    Buy_sell: "Buy",
    tradeDate: "2023-08-08",
    settlementDate: "2023-08-14",
  },
  {
    Id: 6,
    BookId: 103,
    CounterpartyId: 206,
    SecurityId: 306,
    Quantity: 300,
    Status: "Completed",
    Price: 55.75,
    Buy_sell: "Sell",
    tradeDate: "2023-08-09",
    settlementDate: "2023-08-15",
  },
  {
    Id: 7,
    BookId: 101,
    CounterpartyId: 207,
    SecurityId: 307,
    Quantity: 250,
    Status: "Pending",
    Price: 40.5,
    Buy_sell: "Buy",
    tradeDate: "2023-08-10",
    settlementDate: "2023-08-16",
  },
  {
    Id: 8,
    BookId: 102,
    CounterpartyId: 208,
    SecurityId: 308,
    Quantity: 120,
    Status: "Completed",
    Price: 70.25,
    Buy_sell: "Sell",
    tradeDate: "2023-08-11",
    settlementDate: "2023-08-17",
  },
  {
    Id: 9,
    BookId: 103,
    CounterpartyId: 209,
    SecurityId: 309,
    Quantity: 180,
    Status: "Pending",
    Price: 65.75,
    Buy_sell: "Buy",
    tradeDate: "2023-08-12",
    settlementDate: "2023-08-18",
  },
  {
    Id: 10,
    BookId: 101,
    CounterpartyId: 210,
    SecurityId: 310,
    Quantity: 90,
    Status: "Completed",
    Price: 80.0,
    Buy_sell: "Sell",
    tradeDate: "2023-08-13",
    settlementDate: "2023-08-19",
  },
];

function Book() {
  const { bookId } = useParams();
  return (
    <div className="container py-6">
      <div className="overflow-x-auto mx-6 border border-gray-500">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>BookId</th>
              <th>CounterpartyId</th>
              <th>SecurityId</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Price</th>
              <th>Buy_sell</th>
              <th>tradeDate</th>
              <th>settlementDate</th>
            </tr>
          </thead>
          <tbody>
            {dummyTrades.map((trade) => (
              <tr key={trade.Id}>
                <th>{trade.Id}</th>
                <td>{trade.BookId}</td>
                <td>{trade.CounterpartyId}</td>
                <td>{trade.SecurityId}</td>
                <td>{trade.Quantity}</td>
                <td>{trade.Status}</td>
                <td>{trade.Price}</td>
                <td>{trade.Buy_sell}</td>
                <td>{trade.tradeDate}</td>
                <td>{trade.settlementDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Book;
