import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import Trades from "./Trades";
import Bonds from "./Bonds";

const TrackBonds = ({bonds}) => {
  const dummyBonds = [
    {
      Id: 1,
      ISIN: "US1234567890",
      CUSIN: "CUS123456",
      Issuer: "ABC Corporation",
      maturityDate: "2023-12-31",
      coupon: 5.0,
      type: "Corporate",
      faceValue: 1000,
      status: "Active",
    },
    {
      Id: 2,
      ISIN: "US9876543210",
      CUSIN: "CUS654321",
      Issuer: "XYZ Inc.",
      maturityDate: "2024-06-30",
      coupon: 4.5,
      type: "Government",
      faceValue: 500,
      status: "Active",
    },
  ];

  return (
    <>
      <h1 className="text-2xl mb-4">Your Bond Track list</h1>
      <div className="space-y-4">
        {bonds.map((bond) => (
          <div className="collapse bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium space-x-2">
              <div className="badge badge-warning gap-2 text-lg p-4"> 
                BondId - {bond.Id}
              </div>
              <div className="badge badge-accent badge-outline">{bond.type}</div>
            </div>
            <div className="collapse-content">
              <p>Further details  </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

function Book() {
  const { bookId } = useParams();
  const [bond, setBonds] = useState({});
  const [bondList,setbondList] = useState([]); 
  useEffect(() => {
    console.log(bondList)
  }, [bondList])
  

  const tabs = [
    { name: "Trades", element: <Trades setBonds={setBonds} /> },
    { name: "Bonds", element: <Bonds setbondList={setbondList}/> },
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
                  TradeId - 1001
                </div>
                <div className="badge badge-outline badge-accent gap-2 text-lg p-4">
                  BondId - 2005
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
                        {bond.type}
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
                        {bond.Status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        ) : (
          <TrackBonds bonds={bondList}/>
        )}
      </div>
    </div>
  );
}

export default Book;
