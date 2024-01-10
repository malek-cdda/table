import tableSlice from "./slice/tableSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    tableData: tableSlice,
  },
});
export default store;
