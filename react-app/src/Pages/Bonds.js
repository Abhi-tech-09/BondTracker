import React from "react";
import { useTable, useFilters, useGlobalFilter } from "react-table";

function Bonds() {
  const dummyBonds = [
    {
      Id: 1,
      ISIN: "US1234567890",
      CUSIN: "CUS123456789",
      Issuer: "ABC Corporation",
      maturityDate: "2023-12-31",
      coupon: 5.25,
      type: "Government",
      faceValue: 1000,
      status: "Active",
    },
    {
      Id: 2,
      ISIN: "US9876543210",
      CUSIN: "CUS987654321",
      Issuer: "XYZ Inc.",
      maturityDate: "2024-06-30",
      coupon: 4.75,
      type: "Corporate",
      faceValue: 500,
      status: "Inactive",
    },
    {
      Id: 3,
      ISIN: "US5678901234",
      CUSIN: "CUS567890123",
      Issuer: "PQR Ltd.",
      maturityDate: "2025-03-15",
      coupon: 6.0,
      type: "Municipal",
      faceValue: 2000,
      status: "Active",
    },
    {
      Id: 4,
      ISIN: "US0987654321",
      CUSIN: "CUS098765432",
      Issuer: "LMN Group",
      maturityDate: "2023-09-30",
      coupon: 4.25,
      type: "Corporate",
      faceValue: 750,
      status: "Active",
    },
    {
      Id: 5,
      ISIN: "US5432109876",
      CUSIN: "CUS543210987",
      Issuer: "UVW Holdings",
      maturityDate: "2026-05-15",
      coupon: 3.5,
      type: "Government",
      faceValue: 1500,
      status: "Inactive",
    },
    {
      Id: 6,
      ISIN: "US6789012345",
      CUSIN: "CUS678901234",
      Issuer: "XYZ Inc.",
      maturityDate: "2024-11-30",
      coupon: 5.0,
      type: "Corporate",
      faceValue: 1000,
      status: "Active",
    },
    {
      Id: 7,
      ISIN: "US3456789012",
      CUSIN: "CUS345678901",
      Issuer: "ABC Corporation",
      maturityDate: "2025-07-31",
      coupon: 4.0,
      type: "Municipal",
      faceValue: 2500,
      status: "Active",
    },
    {
      Id: 8,
      ISIN: "US5678901234",
      CUSIN: "CUS567890123",
      Issuer: "PQR Ltd.",
      maturityDate: "2023-10-15",
      coupon: 4.75,
      type: "Government",
      faceValue: 500,
      status: "Inactive",
    },
    {
      Id: 9,
      ISIN: "US9012345678",
      CUSIN: "CUS901234567",
      Issuer: "LMN Group",
      maturityDate: "2026-02-28",
      coupon: 3.25,
      type: "Corporate",
      faceValue: 1250,
      status: "Active",
    },
    {
      Id: 10,
      ISIN: "US2345678901",
      CUSIN: "CUS234567890",
      Issuer: "UVW Holdings",
      maturityDate: "2024-09-15",
      coupon: 4.5,
      type: "Municipal",
      faceValue: 1800,
      status: "Active",
    },
  ];
  const columns = React.useMemo(
    () => [
      { Header: "Id", accessor: "Id" },
      { Header: "ISIN", accessor: "ISIN" },
      { Header: "CUSIN", accessor: "CUSIN" },
      { Header: "Issuer", accessor: "Issuer" },
      { Header: "Maturity Date", accessor: "maturityDate" },
      { Header: "Coupon", accessor: "coupon" },
      { Header: "Type", accessor: "type" },
      { Header: "Face Value", accessor: "faceValue" },
      { Header: "Status", accessor: "status" },
    ],
    []
  );

  const data = React.useMemo(() => dummyBonds, []);

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
    // <div className="overflow-x-auto">
    //   {" "}
    //   <table className="table">
    //     <thead>
    //       <tr>
    //         <th></th>
    //         <th>Id</th>
    //         <th>ISIN</th>
    //         <th>CUSIN</th>
    //         <th>Issuer</th>
    //         <th>Maturity Date</th>
    //         <th>Coupon</th>
    //         <th>Type</th>
    //         <th>Face Value</th>
    //         <th>Status</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {bonds.map((bond) => (
    //         <tr key={bond.Id}>
    //           <th>
    //             <label>
    //               <input type="checkbox" className="checkbox" />
    //             </label>
    //           </th>
    //           <td>{bond.Id}</td>
    //           <td>{bond.ISIN}</td>
    //           <td>{bond.CUSIN}</td>
    //           <td>{bond.Issuer}</td>
    //           <td>{bond.maturityDate}</td>
    //           <td>{bond.coupon}</td>
    //           <td>{bond.type}</td>
    //           <td>{bond.faceValue}</td>
    //           <td>{bond.status}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div className="overflow-x-auto px-2 space-y-2">
      <input
        type="text"
        placeholder="Search any bonds..."
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="input input-bordered input-error w-full max-w-xs m-2"
      />
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              <th></th>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
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
    </div>
  );
}

export default Bonds;