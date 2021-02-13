import { Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
    </div>
  );
}

export default App;
