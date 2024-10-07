import { StockOpenClose } from "../entities/StockOpenClose";
import "./StockCard.css";

interface StockCardProps {
  stock: StockOpenClose;
}

const StockCard = (props: StockCardProps) => {
  const stock = props.stock;

  return (
    <>
      <div className="card-body">
        <h5 className="stock-name">{stock.symbol}</h5>
        <div className="stock-details">
          <span>open price: {stock.open}</span>
          <span>close price: {stock.close}</span>
        </div>
        <button type="button" className="details-button">
          Primary
        </button>
      </div>
    </>
  );
};

export default StockCard;
