import React from 'react';
import StockForm from './components/StockForm';
import StockList from './components/StockList';
import { StockProvider } from './components/StockContext';

function App() {
  return (
    <StockProvider>
      <div className="App">
        <h1>Finance Dashboard</h1>
        <StockForm />
        <StockList />
      </div>
    </StockProvider>
  );
}

export default App;
