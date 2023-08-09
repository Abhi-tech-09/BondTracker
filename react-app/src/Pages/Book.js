import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Trades from "./Trades";
import Bonds from "./Bonds";
import axios from "axios";

const dummyBonds = [
  {
    id: 11,
    isin: "US1234567890",
    cusip: "CUS123456",
    issuer: "ABC Corporation",
    maturityDate: "2023-12-31",
    coupon: 5.0,
    securityType: "Corporate",
    faceValue: 1000,
    securityStatus: "Active",
  },
  {
    id: 12,
    isin: "US9876543210",
    cusip: "CUS654321",
    issuer: "XYZ Inc.",
    maturityDate: "2024-06-30",
    coupon: 4.5,
    securityType: "Government",
    faceValue: 500,
    securityStatus: "Active",
  },
];

const TrackBonds = ({ bonds }) => {
  return (
    <>
      <h1 className="text-2xl mb-4">Your Bond Track list</h1>
      <div className="space-y-4">
        {Object.keys(bonds).length !== 0 &&
          bonds.map((bond) => (
            <div className="collapse bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium space-x-4 flex justify-center items-center">
                <div className="badge badge-warning gap-2">
                  BondId - {bond.id}
                </div>
                <div className="badge badge-accent badge-outline">
                  {bond.securityType}
                </div>
                <div className="badge badge-accent">{bond.maturityDate}</div>
                <div className="badge badge-success">LIVE</div>
                {/* Open the modal using ID.showModal() method */}
              </div>
              <div className="collapse-content mx-6">
                <p>
                  <button
                    className="btn btn-sm btn-outline btn-success"
                    onClick={() => window.my_modal_1.showModal()}
                  >
                    Trade
                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <form method="dialog" className="modal-box">
                      <h3 className="font-bold text-lg">Hello!</h3>
                      <p className="py-4">
                        Press ESC key or click the button below to close
                      </p>
                      <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </div>
                    </form>
                  </dialog>
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
const dummybonds = [
  {
    id: 1,
    isin: "US1234567890",
    cusip: "CUS123456789",
    issuer: "ABC Corporation",
    maturityDate: "2023-12-31",
    coupon: 5.25,
    securityType: "Government",
    faceValue: 1000,
    securityStatus: "Active",
  },
  {
    id: 2,
    isin: "US9876543210",
    cusip: "CUS987654321",
    issuer: "XYZ Inc.",
    maturityDate: "2024-06-30",
    coupon: 4.75,
    securityType: "Corporate",
    faceValue: 500,
    securityStatus: "Inactive",
  },
  {
    id: 3,
    isin: "US5678901234",
    cusip: "CUS567890123",
    issuer: "PQR Ltd.",
    maturityDate: "2025-03-15",
    coupon: 6.0,
    securityType: "Municipal",
    faceValue: 2000,
    securityStatus: "Active",
  },
  {
    id: 4,
    isin: "US0987654321",
    cusip: "CUS098765432",
    issuer: "LMN Group",
    maturityDate: "2023-09-30",
    coupon: 4.25,
    securityType: "Corporate",
    faceValue: 750,
    securityStatus: "Active",
  },
  {
    id: 5,
    isin: "US5432109876",
    cusip: "CUS543210987",
    issuer: "UVW Holdings",
    maturityDate: "2026-05-15",
    coupon: 3.5,
    securityType: "Government",
    faceValue: 1500,
    securityStatus: "Inactive",
  },
  {
    id: 6,
    isin: "US6789012345",
    cusip: "CUS678901234",
    issuer: "XYZ Inc.",
    maturityDate: "2024-11-30",
    coupon: 5.0,
    securityType: "Corporate",
    faceValue: 1000,
    securityStatus: "Active",
  },
  {
    id: 7,
    isin: "US3456789012",
    cusip: "CUS345678901",
    issuer: "ABC Corporation",
    maturityDate: "2025-07-31",
    coupon: 4.0,
    securityType: "Municipal",
    faceValue: 2500,
    securityStatus: "Active",
  },
  {
    id: 8,
    isin: "US5678901234",
    cusip: "CUS567890123",
    issuer: "PQR Ltd.",
    maturityDate: "2023-10-15",
    coupon: 4.75,
    securityType: "Government",
    faceValue: 500,
    securityStatus: "Inactive",
  },
  {
    id: 9,
    isin: "US9012345678",
    cusip: "CUS901234567",
    issuer: "LMN Group",
    maturityDate: "2026-02-28",
    coupon: 3.25,
    securityType: "Corporate",
    faceValue: 1250,
    securityStatus: "Active",
  },
  {
    id: 10,
    isin: "US2345678901",
    cusip: "CUS234567890",
    issuer: "UVW Holdings",
    maturityDate: "2024-09-15",
    coupon: 4.5,
    securityType: "Municipal",
    faceValue: 1800,
    securityStatus: "Active",
  },
];
const dummyTrades = [
  {
    id: 1,
    BookId: 101,
     counterParty: {id: 201},
    SecurityId: 301,
    quantity: 100,
    tradeStatus: "Unsettled",
    price: 50.75,
    buySell: "Buy",
    tradeDate: "2023-08-04",
    settlementDate: "2023-08-10",
    security: {
      isin: "US1234567890",
      cusip: "123456789",
      issuer: "ABC Corporation",
      maturityDate: "2025-08-04",
      Coupon: 4.5,
      securityType: "Corporate Bond",
      faceValue: 1000,
      securityStatus: "Active",
    },
  },
  {
    id: 2,
    BookId: 102,
     counterParty: {id: 202},
    SecurityId: 302,
    quantity: 50,
    tradeStatus: "Settled",
    price: 75.25,
    buySell: "Sell",
    tradeDate: "2023-08-05",
    settlementDate: "2023-08-12",
    security: {
      isin: "US0987654321",
      cusip: "987654321",
      issuer: "XYZ Corporation",
      maturityDate: "2024-09-15",
      Coupon: 3.75,
      securityType: "Government Bond",
      faceValue: 500,
      securityStatus: "Active",
    },
  },
  {
    id: 3,
    BookId: 103,
     counterParty: {id: 203},
    SecurityId: 303,
    quantity: 200,
    tradeStatus: "Settled",
    price: 30.5,
    buySell: "Buy",
    tradeDate: "2023-08-06",
    settlementDate: "2023-08-11",
    security: {
      isin: "US5678901234",
      cusip: "567890123",
      issuer: "LMN Corporation",
      maturityDate: "2023-10-20",
      Coupon: 5.25,
      securityType: "Municipal Bond",
      faceValue: 750,
      securityStatus: "Active",
    },
  },
  {
    id: 4,
    BookId: 101,
     counterParty: {id: 204},
    SecurityId: 304,
    quantity: 150,
    tradeStatus: "Pending",
    price: 60.0,
    buySell: "Sell",
    tradeDate: "2023-08-07",
    settlementDate: "2023-08-13",
    security: {
      isin: "US2345678901",
      cusip: "234567890",
      issuer: "PQR Corporation",
      maturityDate: "2026-03-15",
      Coupon: 3.0,
      securityType: "Corporate Bond",
      faceValue: 800,
      securityStatus: "Active",
    },
  },
  {
    id: 5,
    BookId: 102,
     counterParty: {id: 205},
    SecurityId: 305,
    quantity: 75,
    tradeStatus: "Rejected",
    price: 45.25,
    buySell: "Buy",
    tradeDate: "2023-08-08",
    settlementDate: "2023-08-14",
    security: {
      isin: "US3456789012",
      cusip: "345678901",
      issuer: "LMN Corporation",
      maturityDate: "2027-05-10",
      Coupon: 4.0,
      securityType: "Government Bond",
      faceValue: 1200,
      securityStatus: "Active",
    },
  },
  {
    id: 6,
    BookId: 103,
     counterParty: {id: 206},
    SecurityId: 306,
    quantity: 300,
    tradeStatus: "Settled",
    price: 55.75,
    buySell: "Sell",
    tradeDate: "2023-08-09",
    settlementDate: "2023-08-15",
    security: {
      isin: "US4567890123",
      cusip: "456789012",
      issuer: "ABC Corporation",
      maturityDate: "2024-12-01",
      Coupon: 4.25,
      securityType: "Municipal Bond",
      faceValue: 900,
      securityStatus: "Active",
    },
  },
  {
    id: 7,
    BookId: 101,
     counterParty: {id: 207},
    SecurityId: 307,
    quantity: 250,
    tradeStatus: "Pending",
    price: 40.5,
    buySell: "Buy",
    tradeDate: "2023-08-10",
    settlementDate: "2023-08-16",
    security: {
      isin: "US5678901234",
      cusip: "567890123",
      issuer: "XYZ Corporation",
      maturityDate: "2026-06-22",
      Coupon: 3.5,
      securityType: "Corporate Bond",
      faceValue: 1500,
      securityStatus: "Active",
    },
  },
  {
    id: 8,
    BookId: 102,
     counterParty: {id: 208},
    SecurityId: 308,
    quantity: 120,
    tradeStatus: "Unsettled",
    price: 70.25,
    buySell: "Sell",
    tradeDate: "2023-08-11",
    settlementDate: "2023-08-17",
    security: {
      isin: "US6789012345",
      cusip: "678901234",
      issuer: "PQR Corporation",
      maturityDate: "2025-09-30",
      Coupon: 4.75,
      securityType: "Government Bond",
      faceValue: 1100,
      securityStatus: "Active",
    },
  },
  {
    id: 9,
    BookId: 103,
     counterParty: {id: 209},
    SecurityId: 309,
    quantity: 180,
    tradeStatus: "Settled",
    price: 65.75,
    buySell: "Buy",
    tradeDate: "2023-08-12",
    settlementDate: "2023-08-18",
    security: {
      isin: "US7890123456",
      cusip: "789012345",
      issuer: "LMN Corporation",
      maturityDate: "2024-11-11",
      Coupon: 4.0,
      securityType: "Municipal Bond",
      faceValue: 800,
      securityStatus: "Active",
    },
  },
  {
    id: 10,
    BookId: 101,
     counterParty: {id: 210},
    SecurityId: 310,
    quantity: 90,
    tradeStatus: "Rejected",
    price: 80.0,
    buySell: "Sell",
    tradeDate: "2023-08-13",
    settlementDate: "2023-08-19",
    security: {
      isin: "US8901234567",
      cusip: "890123456",
      issuer: "ABC Corporation",
      maturityDate: "2025-07-07",
      Coupon: 4.25,
      securityType: "Government Bond",
      faceValue: 1300,
      securityStatus: "Active",
    },
  },
];
function Book() {
  const { bookId } = useParams();
  const [bond, setBonds] = useState({});
  const [bondList, setbondList] = useState(dummyBonds);
  const [bonds, setbonds] = useState(dummybonds);
  const [trades, setTrades] = useState(dummyTrades);
  useEffect(async () => {
    axios.defaults.withCredentials = true;
    const login = await axios.post("http://localhost:8080/user/login", {
      userName: "user1",
      password: "password",
    });

    const bondsData = await axios
      .get("http://localhost:8080/security/allSecurities")
      .catch((error) => {
        if (error.response && error.response.status == 401) {
          console.log("You are not authorised. Need to login first. ");
        }
      });
    setbonds([...dummybonds, ...bondsData?.data]);
  }, []);
  useEffect(async () => {
    axios.defaults.withCredentials = true;
    const login = await axios.post("http://localhost:8080/user/login", {
      userName: "user1",
      password: "password",
    });
    const tradesData = await axios
      .get("http://localhost:8080/trade/trades")
      .catch((error) => {
        if (error.response && error.response.status == 401) {
          console.log("You are not authorised. Need to login first. ");
        }
      });
    console.log(tradesData.data);
    setTrades([...dummyTrades, ...tradesData?.data]);
  }, []);

  const tabs = [
    { name: "Trades", element: <Trades trades={trades} setBonds={setBonds} /> },
    {
      name: "Bonds",
      element: <Bonds bonds={bonds} setbondList={setbondList} />,
    },
  ];
  const [tabIndex, settabIndex] = useState(1);
  return (
    <div className="grid grid-cols-6 w-full">
      <div className="col-span-4">
        <div className="tabs w-full py-4 flex justify-center">
          {tabs.map((tab, index) => (
            <a
              className={`tab tab-lg tab-lifted ${
                index === tabIndex ? "tab-active" : ""
              }`}
              onClick={() => {
                settabIndex(index);
                if (tabIndex !== index) {
                  setBonds({});
                }
              }}
            >
              {tab.name}
            </a>
          ))}
        </div>
        <div>{tabs[tabIndex].element}</div>
      </div>
      <div className="col-span-2 overflow-y-scroll h-screen border-l border-gray-100 p-4">
        {tabs[tabIndex].name === "Trades" ? (
          Object.keys(bond).length === 0 ? (
            <h2>
              Click on a trade to see the corresponding bond information here
            </h2>
          ) : (
            <div className="flex flex-col w-full">
              <div className="flex space-x-2 h-10 place-items-center">
                <div className="badge badge-accent gap-2 text-lg p-4">
                  TradeId - {bond.tradeId}
                </div>
                <div className="badge badge-outline badge-accent gap-2 text-lg p-4">
                  BondId - {bond.id}
                </div>
              </div>
              <div className="divider"></div>
              <div className="grid h-20 card rounded-box place-items-center">
                <div className="space-y-4">
                  <div className="stats shadow">
                    <div className="stat">
                      <div className="stat-title">Issuer</div>
                      <div className="stat-desc text-lg text-black">
                        {bond.issuer}
                      </div>
                    </div>

                    <div className="stat">
                      <div className="stat-title">Type</div>
                      <div className="stat-desc text-lg text-black">
                        {bond.securityType}
                      </div>
                    </div>
                  </div>
                  <div className="stats shadow">
                    <div className="stat">
                      <div className="stat-title">Maturity Date</div>
                      <div className="stat-desc text-lg text-black">
                        {bond.maturityDate}
                      </div>
                    </div>

                    <div className="stat">
                      <div className="stat-title">Status</div>
                      <div className="stat-desc text-lg text-black">
                        {bond.securityStatus}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        ) : (
          <TrackBonds bonds={bondList} />
        )}
      </div>
    </div>
  );
}

export default Book;
