import { tableData } from "@/components/table/tableData/table";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tableData: tableData,
};

const checkboxSlice = createSlice({
  name: "tableData",
  initialState,
  reducers: {
    updateTableData: (state, { payload }) => {
      state.tableData = payload;
    },
  },
});
export const { updateTableData } = checkboxSlice.actions;
export default checkboxSlice.reducer;
