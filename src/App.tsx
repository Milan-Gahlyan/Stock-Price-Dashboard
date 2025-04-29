import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import StockDashboard from './components/stocks/StockDashboard';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-200">
      <Header />
      <main className="flex-grow">
        <StockDashboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;