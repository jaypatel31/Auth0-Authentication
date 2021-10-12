import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Login/>
      <Logout/>
      <Profile/>
    </div>
  );
}

export default App;
