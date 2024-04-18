import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './resources/images/zenithLogo.svg';

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e as Event);
    });
  }, []);

  const promptInstall = () => {
    if (deferredPrompt) {
      (deferredPrompt as any).prompt(); // Use any for now, or create an interface for BeforeInstallPromptEvent
      (deferredPrompt as any).userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>ZENITH!</code>
        </p>
        {deferredPrompt && (
          <button onClick={promptInstall}>Install App</button>
        )}
        <Link to="/login" className="App-link">
          Vamos a login!
        </Link>
      </header>
    </div>
  );
}

export default App;
