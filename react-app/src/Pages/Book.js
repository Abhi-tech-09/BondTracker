import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Trades from "./Trades";
import Bonds from "./Bonds";

function Book() {
  const { bookId } = useParams();
  const [bond, setBonds] = useState({});
  const tabs = [
    { name: "Trades", element: <Trades setBonds={setBonds} /> },
    { name: "Bonds", element: <Bonds /> },
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
        {Object.keys(bond).length === 0 ? (
          <h2>
            Click on a trade to see the corresponding bond information here
          </h2>
        ) : (
          <div className="flex flex-col w-full">
            <div className="flex space-x-2 h-10 place-items-center">
              <div className="badge badge-warning gap-2 text-lg p-4">
                TradeId - 1001
              </div>
              <div className="badge badge-warning gap-2 text-lg p-4">
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
        )}
      </div>
    </div>
  );
}

export default Book;
