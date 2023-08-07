import React, { useState } from "react";

function Trades({ setBonds }) {
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
      bondDetail: {
        ISIN: "US1234567890",
        CUSIP: "123456789",
        issuer: "ABC Corporation",
        maturityDate: "2025-08-04",
        Coupon: 4.5,
        type: "Corporate Bond",
        faceValue: 1000,
        Status: "Active",
      },
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
      bondDetail: {
        ISIN: "US0987654321",
        CUSIP: "987654321",
        issuer: "XYZ Corporation",
        maturityDate: "2024-09-15",
        Coupon: 3.75,
        type: "Government Bond",
        faceValue: 500,
        Status: "Active",
      },
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
      bondDetail: {
        ISIN: "US5678901234",
        CUSIP: "567890123",
        issuer: "LMN Corporation",
        maturityDate: "2023-10-20",
        Coupon: 5.25,
        type: "Municipal Bond",
        faceValue: 750,
        Status: "Active",
      },
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
      bondDetail: {
        ISIN: "US2345678901",
        CUSIP: "234567890",
        issuer: "PQR Corporation",
        maturityDate: "2026-03-15",
        Coupon: 3.0,
        type: "Corporate Bond",
        faceValue: 800,
        Status: "Active",
      },
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
      bondDetail: {
        ISIN: "US3456789012",
        CUSIP: "345678901",
        issuer: "LMN Corporation",
        maturityDate: "2027-05-10",
        Coupon: 4.0,
        type: "Government Bond",
        faceValue: 1200,
        Status: "Active",
      },
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
      bondDetail: {
        ISIN: "US4567890123",
        CUSIP: "456789012",
        issuer: "ABC Corporation",
        maturityDate: "2024-12-01",
        Coupon: 4.25,
        type: "Municipal Bond",
        faceValue: 900,
        Status: "Active",
      },
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
      bondDetail: {
        ISIN: "US5678901234",
        CUSIP: "567890123",
        issuer: "XYZ Corporation",
        maturityDate: "2026-06-22",
        Coupon: 3.5,
        type: "Corporate Bond",
        faceValue: 1500,
        Status: "Active",
      },
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
      bondDetail: {
        ISIN: "US6789012345",
        CUSIP: "678901234",
        issuer: "PQR Corporation",
        maturityDate: "2025-09-30",
        Coupon: 4.75,
        type: "Government Bond",
        faceValue: 1100,
        Status: "Active",
      },
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
      bondDetail: {
        ISIN: "US7890123456",
        CUSIP: "789012345",
        issuer: "LMN Corporation",
        maturityDate: "2024-11-11",
        Coupon: 4.0,
        type: "Municipal Bond",
        faceValue: 800,
        Status: "Active",
      },
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
      bondDetail: {
        ISIN: "US8901234567",
        CUSIP: "890123456",
        issuer: "ABC Corporation",
        maturityDate: "2025-07-07",
        Coupon: 4.25,
        type: "Government Bond",
        faceValue: 1300,
        Status: "Active",
      },
    },
  ];
  const [select, setSelect] = useState(-1);
  return (
    <div className="container py-6">
      <div className="overflow-x-auto mx-6 border border-gray-500">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
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
            {dummyTrades.map((trade, index) => (
              <tr
                key={trade.Id}
                className={`hover:!bg-blue-200 ${
                  select === index ? "!bg-blue-200" : ""
                }`}
                onClick={() => {
                  setBonds(trade.bondDetail);
                  setSelect(index);
                }}
              >
                <th>{trade.Id}</th>
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

export default Trades;
