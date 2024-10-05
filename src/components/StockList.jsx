import React, { useContext, useEffect } from 'react';
import StockContext from './StockContext';

function StockList() {
  const { stocks, fetchCurrentPrices } = useContext(StockContext);

  useEffect(() => {
    if (stocks.length > 0) {
      fetchCurrentPrices();
    }
  }, [stocks, fetchCurrentPrices]);

  if (stocks.length === 0) {
    return <p>No stocks added yet.</p>;
  }

  return (
    <div>
      {stocks.map((stock, index) => (
        <div key={index} className="stock-item">
          <p><strong>Symbol:</strong> {stock.symbol}</p>
          <p><strong>Quantity:</strong> {stock.quantity}</p>
          <p><strong>Purchase Price:</strong> {stock.purchasePrice.toFixed(2)}</p>
          <p><strong>Current Price:</strong> {stock.currentPrice?.toFixed(2) || 'Loading...'}</p>
          <p>
            <strong>Profit/Loss:</strong>{' '}
            {stock.currentPrice
              ? ((stock.currentPrice - stock.purchasePrice) * stock.quantity).toFixed(2)
              : 'Calculating...'}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StockList;
