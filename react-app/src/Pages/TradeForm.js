import React, { useState } from "react";

const TradeForm = ({bond, setTrades}) => {
  const [counterPartyId, setCounterPartyId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [tradeDate, setTradeDate] = useState("");
  const [settlementDate, setSettlementDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTrades((trades) => [...trades,{
        id: Math.floor(Math.random() * 100), 
        counterParty: {id: counterPartyId}, 
        quantity: quantity, 
        tradeStatus: "Pending", 
        price: price, tradeDate: tradeDate, settlementDate: settlementDate,
        security: bond, 
        buySell: "Buy",

    }])
  };

  return (
    <div>
      <h2 className="text-2xl bolder mb-2">Trade Form</h2>
      <form>
        <label>
          CounterParty ID: &nbsp;
          <input
            className="border"
            type="text"
            value={counterPartyId}
            onChange={(e) => setCounterPartyId(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Quantity: &nbsp;
          <input
            className="border"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Price: &nbsp;
          <input
            className="border"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Trade Date: &nbsp;
          <input
            type="date"
            value={tradeDate}
            className="border"
            onChange={(e) => setTradeDate(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Settlement Date: &nbsp;
          <input
            type="date"
            value={settlementDate}
            className="border"
            onChange={(e) => setSettlementDate(e.target.value)}
          />
        </label>
        <br />
        <br />
        {/* <label>
          Trade Type:
          <select value={tradeType} onChange={handleTradeTypeChange}>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button> */}
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button onClick={(e) => {e.preventDefault();handleSubmit()}} type='submit' className="btn btn-outline" >Buy</button>
          <button type='submit' className="btn btn-info" >Sell</button>
        </div>
      </form>
    </div>
  );
};

export default TradeForm;
