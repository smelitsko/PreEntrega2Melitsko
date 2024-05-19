import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, count, increment, decrement }) => {
  return (
    <div className="item__count__container">
      <button className="up__down" onClick={decrement} disabled={count == 0}>
        -
      </button>
      <span className="counter">{count}</span>
      <button
        className="up__down"
        onClick={increment}
        disabled={count >= stock}
      >
        +
      </button>
    </div>
  );
};
export default ItemCount;
