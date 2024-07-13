import React, { useState } from 'react';
import Navigation from './Components/navigation';
import Footer from './Components/Footer';
import PublicView from './Components/publick';
import PrivateView from './Components/privet';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Navigation isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      <div className="content">
        {isLoggedIn ? <PrivateView /> : <PublicView />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
