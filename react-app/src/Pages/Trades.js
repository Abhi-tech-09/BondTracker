import React, { useState, useEffect } from "react";
import axios from "axios";

function Trades({ trades, setBonds }) {
  const [tradeList, setTradeList] = useState(trades);
  // useEffect(async () => {
  //   axios.defaults.withCredentials = true;

  //   const bondsData = await axios
  //     .get("http://localhost:8080/security/allSecurities")
  //     .catch((error) => {
  //       if (error.response && error.response.status == 401) {
  //         console.log("You are not authorised. Need to login first. ");
  //       }
  //     });
  //   // se([...dummyBonds, ...bondsData?.data]);
  // }, []);
  const [select, setSelect] = useState(-1);
  return (
    <div className="container pt-4 border h-[40rem]">
      <div className="space-x-2 flex mx-6">
        <button
          className="btn btn-outline btn-info"
          onClick={() =>
            setTradeList([
              ...tradeList.sort(
                (a, b) => new Date(b.tradeDate) - new Date(a.tradeDate)
              ),
            ])
          }
        >
          Show Recent Trades
        </button>
        <button
          className="btn btn-success mx-6 mb-2"
          
        >
          Settle
        </button>
        <button
          className="btn btn-error mx-6 mb-2"
          
        >
          Reject
        </button>
      </div>
      <div className="overflow-x-auto overflow-y-scroll mx-6 h-5/6">
        <table className="table">
          <thead className="sticky top-0 bg-white">
            <tr>
              <th></th>
              <th>Id</th>
              <th>CounterpartyId</th>
              <th>SecurityId</th>
              <th>Quantity</th>
              <th className="flex flex-col justify-center">
                <div>Status</div>
                <select className="p-2 bg-white border ">
                  <option disabled selected>
                    select status
                  </option>
                  <option
                    onClick={() => {
                      setTradeList(
                        trades.filter(
                          (trade) =>  trade.tradeStatus === "Pending"
                        )
                      );
                    }}
                  >
                    Pending
                  </option>
                  <option
                    onClick={() => {
                      setTradeList(
                        trades.filter(
                          (trade) =>  trade.tradeStatus === "Settled"
                        )
                      );
                    }}
                  >
                    Settled
                  </option>
                  <option
                    onClick={() => {
                      setTradeList(
                        trades.filter(
                          (trade) =>  trade.tradeStatus === "Unsettled"
                        )
                      );
                    }}
                  >
                    Unsettled
                  </option>
                  <option
                    onClick={() => {
                      setTradeList(
                        trades.filter(
                          (trade) =>  trade.tradeStatus === "Rejected"
                        )
                      );
                    }}
                  >
                    Rejected
                  </option>
                  <option onClick={() => setTradeList(trades)}>All</option>
                </select>
              </th>
              <th>Price</th>
              <th>Buy_sell</th>
              <th>tradeDate</th>
              <th>settlementDate</th>
            </tr>
          </thead>
          <tbody className="overflow-y-scroll">
            {tradeList.map((trade, index) => (
              <tr
                key={trade.id}
                className={` hover:!bg-blue-200 ${
                  select === index ? "!bg-blue-200" : ""
                } ${ trade.tradeStatus === "Unsettled" ? "border-l-8 border-l-red-400" : ""}`}
                onClick={() => {
                  setBonds({...trade.security, tradeId: trade.id});
                  setSelect(index);
                }}
              >
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>{trade.id}</th>
                <td>{trade.counterParty?.id}</td>
                <td>{trade.security?.id || trade.SecurityId}</td>
                <td>{trade.quantity}</td>
                <td>
                  <div
                    className={`badge badge-outline ${
                       trade.tradeStatus === "Settled" ? "badge-success" : ""
                    } ${ trade.tradeStatus === "Unsettled" ? "badge-warning" : ""} ${
                       trade.tradeStatus === "Rejected" ? "badge-error" : ""
                    }`}
                  >
                    {trade.tradeStatus}
                  </div>
                </td>
                <td>{trade.price}</td>
                <td>{trade.buySell}</td>
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
