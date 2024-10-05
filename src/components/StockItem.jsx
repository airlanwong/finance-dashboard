import React from 'react';

function StockItem({ stock }) {
  const { symbol, quantity, purchasePrice, currentPrice } = stock;
  const totalCost = quantity * purchasePrice;
  const currentValue = quantity * currentPrice;
  const profitLoss = currentValue - totalCost;

  return (
    <div className="stock-item">
      <p>Symbol: {symbol}</p>
      <p>Quantity: {quantity}</p>
      <p>Purchase Price: {purchasePrice}</p>
      <p>Current Price: {currentPrice}</p>
      <p style={{ color: profitLoss >= 0 ? 'green' : 'red' }}>
        Profit/Loss: {profitLoss.toFixed(2)}
      </p>
    </div>
  );
}

export default StockItem;
