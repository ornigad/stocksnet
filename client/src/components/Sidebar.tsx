import { StockOpenClose } from "../entities/StockOpenClose";
import "./Sidebar.css";
import StockCard from "./StockCard";

const Sidebar = (stocks: StockOpenClose[]) => {
  const testStock: StockOpenClose = { symbol: "sasson", open: 1, close: 2 };
  return (
    <>
      <div className="sidebar">
        <h3>Quicksearch</h3>
        <input
          className="searchbar"
          type="text"
          placeholder="Search a stock"
        ></input>
        <div className="stock-list">
          <StockCard stock={testStock}></StockCard>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
