"use client";
import { useState } from "react";
import { tableData } from "./tableData/table";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import { updateTableData } from "@/redux/slice/tableSlice";
const TableData = () => {
  const state = useSelector((state: any) => state.tableData.tableData);
  const [tableKeyName, setTableKeyName] = useState("");
  const [changeValueData, setChangeValueData] = useState<{
    name: string;
    value: string;
  }>({
    name: "",
    value: "",
  });
  //  field value change  and update table data
  const handleValueChange = () => {
    const updateValue = state.tableBody.map((item: any, index: any) => {
      const tableIndex = tableData?.tableBody[index] as any;
      console.log(tableIndex);
      const changeValue: string = tableIndex[changeValueData.value];
      let value = {
        [changeValueData.name]: changeValue,
      };
      return {
        ...item,
        ...value,
      };
    });

    let data = { ...state, tableBody: updateValue };
    store.dispatch(updateTableData(data));
    setChangeValueData({ name: "", value: "" });
    setTableKeyName("");
  };

  return (
    <div className="mx-auto container">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {state?.tableHeader
              .slice(0, tableData.col)
              .map((headerItem: any, index: any) => (
                <th key={index} className="border">
                  {headerItem}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {state?.tableBody
            .slice(0, tableData.row)
            .map((bodyItem: any, index1: any) => (
              <tr
                key={index1}
                className={index1 % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                {Object?.keys(bodyItem)
                  ?.slice(0, tableData.col)
                  ?.map((value: any, index) => (
                    <td
                      key={index}
                      className="border cursor-pointer hover:bg-gray-200  "
                      onClick={() => setTableKeyName(value)}>
                      {bodyItem[value]}
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
      <label> {tableKeyName}</label>
      <input
        type="text"
        name={tableKeyName}
        value={changeValueData.value}
        onChange={(e) =>
          setChangeValueData({ name: e.target.name, value: e.target.value })
        }
        className="border  mt-5 px-3 py-1 rounded-md"
      />
      <button
        className="border bg-blue-500/60 px-3 py-1 rounded-md hover:bg-blue-400"
        onClick={() => handleValueChange()}>
        submit
      </button>
      {/* <table className="border my-5">
        <tbody>
          {state?.tableBody
            .slice(0, tableData.row)
            .map((bodyItem: any, index1: any) => (
              <tr
                key={index1}
                className={index1 % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                {Object.keys(bodyItem)
                  .slice(0, tableData.col)
                  .map((value: any, index) => (
                    <td key={index} className="border  ">
                      <input
                        type="text"
                        name={value}
                        defaultValue={bodyItem[value]}
                        onChange={(e) => handleChange(e, index1)}
                      />
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default TableData;

// {Object.values(bodyItem)
//   .slice(0, tableData.col)
//   .map((value: any, index) => (
//     <td
//       key={index}
//       className="border  "
//       onClick={() => setTableKeyName(index1)}>
//       {value ? value : "ok mijan vai"}
//     </td>
//   ))}
// const handleChange = (e: any, tableKeyName: any) => {
//   let values = { [e.target.name]: e.target.value };
//   const updateValue = state.tableBody.map((item: any, index: any) => {
//     if (index === tableKeyName) {
//       return {
//         ...item,
//         ...values,
//       };
//     } else {
//       return item;
//     }
//   });
//   let data = { ...state, tableBody: updateValue };
//   store.dispatch(updateTableData(data));
// };
