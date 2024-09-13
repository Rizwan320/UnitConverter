import { Fragment } from "react";
import "./App.css";
import Convertor from "./components/Convertor";
import HistoryTable from "./components/HistoryTable";

const App = () => {
  return (
    <Fragment>
      <Convertor />
      <HistoryTable />
    </Fragment>
  );
};

export default App;
