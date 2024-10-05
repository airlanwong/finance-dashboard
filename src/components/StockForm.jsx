import React, { useState } from 'react';

function StockForm({ onAddStock }) {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [error, setError] = useState(null); // For validation feedback

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate stock symbol through the API
    const validStock = await fetchValidStock(symbol);
    if (!validStock) {
      setError('Invalid stock symbol');
      return;
    }

    onAddStock({
      symbol: symbol.toUpperCase(),
      quantity: parseInt(quantity),
      purchasePrice: parseFloat(purchasePrice),
    });

    // Reset form
    setSymbol('');
    setQuantity('');
    setPurchasePrice('');
    setError(null);
  };

  const fetchValidStock = async (symbol) => {
    try {
      const response = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=YOUR_API_KEY`);
      const data = await response.json();
      return data.bestMatches.length > 0;
    } catch (error) {
      console.error('Error validating stock symbol:', error);
      return false;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Stock Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Purchase Price"
        value={purchasePrice}
        onChange={(e) => setPurchasePrice(e.target.value)}
        required
      />
      <button type="submit">Add Stock</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default StockForm;
