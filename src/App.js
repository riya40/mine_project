
import './App.css';
import EnableColorOnDarkAppBar from './components/dashboard'
import BottomAppBar from './components/bottomdashboard';
import SignInSide from './components/signin';
import Album from './components/homepage';
import Signout from './components/logout';
import Signup from './components/signup';

function App() {
  return (
    <div className="App">
      <EnableColorOnDarkAppBar/>
      <Signup/>
      <SignInSide/>
      <Album/>
      <Signout/>
      <BottomAppBar/>
    </div>
  );
}

export default App;
