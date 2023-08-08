import { useState } from "react";
import React from "react";
import { useTable, useFilters, useGlobalFilter } from "react-table";

const OriginalTable = ({ rows, setselectedBonds }) => {
  return (
    <div className="overflow-x-auto overflow-y-scroll mx-6 h-5/6">
      {" "}
      <table className="table">
        <thead className="sticky top-0 bg-white">
          <tr>
            <th></th>
            <th>Id</th>
            <th>ISIN</th>
            <th>CUSIP</th>
            <th>Issuer</th>
            <th>Maturity Date</th>
            <th>Coupon</th>
            <th>Type</th>
            <th>Face Value</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="overflow-y-scroll">
          {rows.map((bond) => (
            <tr key={bond.id}>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => {
                      setselectedBonds((bondList) => {
                        const index = bondList.indexOf(bond);
                        if (index === -1) {
                          return [...bondList, bond];
                        } else {
                          bondList.splice(index, 1);
                          return [...bondList];
                        }
                      });
                    }}
                  />
                </label>
              </th>
              <td>{bond.id}</td>
              <td>{bond.isin}</td>
              <td>{bond.cusip}</td>
              <td>{bond.issuer}</td>
              <td>{bond.maturityDate}</td>
              <td>{bond.coupon}</td>
              <td>{bond.securityType}</td>
              <td>{bond.faceValue}</td>
              <td>{bond.securityStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function Bonds({ bonds, setbondList }) {
  
  const [filter, setFilter] = useState(false);
  const [selectedBonds, setselectedBonds] = useState([]);
  const columns = React.useMemo(
    () => [
      { Header: "Id", accessor: "id" },
      { Header: "ISIN", accessor: "isin" },
      { Header: "CUSIP", accessor: "cusip" },
      { Header: "Issuer", accessor: "issuer" },
      { Header: "Maturity Date", accessor: "maturityDate" },
      { Header: "Coupon", accessor: "coupon" },
      { Header: "Type", accessor: "securityType" },
      { Header: "Face Value", accessor: "faceValue" },
      { Header: "Status", accessor: "securityStatus" },
    ],
    []
  );

  const data = React.useMemo(() => bonds, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state: { globalFilter },
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter
  );

  return (
    <div className="pt-4 overflow-x-auto px-2 space-y-2 h-[40rem]">
      <div className="flex space-x-2">
        {filter ? (
          <input
            type="text"
            placeholder="Search any bonds..."
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="input input-bordered input-accent w-full max-w-xs m-2"
          />
        ) : (
          <button
            className="btn btn-outline btn-accent"
            onClick={() => setFilter(true)}
          >
            Activate Global Filter
          </button>
        )}
        <button className="btn btn-accent">Show Risky bonds</button>
        <button
          className="btn btn-success"
          onClick={() =>
            setbondList((bondList) => {
              let newBondList = bondList;
              selectedBonds.forEach((selectedBond) => {
                const index = newBondList.indexOf(selectedBond);
                console.log(newBondList);
                console.log(selectedBond);
                if (index === -1) {
                  newBondList.push(selectedBond);
                }
              });
              return [...newBondList];
            })
          }
        >
          Track bonds
        </button>
        <button className="btn btn-outline btn-success">Trade bonds</button>
      </div>
      {filter ? (
        <table {...getTableProps()} className="table">
          <thead className="sticky top-0 bg-white">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                <th></th>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="overflow-y-scroll" {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        onChange={() => {
                          setselectedBonds((bondList) => {
                            const index = bondList.indexOf(
                              bonds.find((b) => b.Id === row.values.Id)
                            );
                            if (index === -1) {
                              return [
                                ...bondList,
                                bonds.find((b) => b.Id === row.values.Id),
                              ];
                            } else {
                              bondList.splice(index, 1);
                              return [...bondList];
                            }
                          });
                        }}
                      />
                    </label>
                  </th>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <OriginalTable rows={bonds} setselectedBonds={setselectedBonds} />
      )}
    </div>
  );
}

export default Bonds;
