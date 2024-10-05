import React, { createContext, useState, useCallback } from 'react';

const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stocks, setStocks] = useState([]);

  const addStock = (stock) => {
    setStocks([...stocks, { ...stock, currentPrice: null }]);
  };

  const fetchCurrentPrices = useCallback(async () => {
    const updatedStocks = await Promise.all(
      stocks.map(async (stock) => {
        try {
          const response = await fetch(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock.symbol}&apikey=TD0MPI2WK54FSSP8`
          );
          const data = await response.json();
          const currentPrice = parseFloat(data['Global Quote']['05. price']);
          console.log(currentPrice)
          return { ...stock, currentPrice };
        } catch (error) {
          console.error(`Error fetching current price for ${stock.symbol}:`, error);
          return { ...stock, currentPrice: null };
        }
      })
    );
    setStocks(updatedStocks);
  }, [stocks]);

  return (
    <StockContext.Provider value={{ stocks, addStock, fetchCurrentPrices }}>
      {children}
    </StockContext.Provider>
  );
};

export default StockContext;
