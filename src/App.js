import React from 'react';
import './App.css';

//import global provider 
import {GlobalProvider} from './Context/GlobalContext'

// components
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {AccountSummary} from './components/AccountSummary';
import {TranscationHistory} from './components/TranscationHistory';
import {AddTranscation} from './components/AddTranscation';


function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Header/>
      <div>
      <Balance/>
      <AccountSummary/>
      <TranscationHistory/>
      <AddTranscation/>
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
