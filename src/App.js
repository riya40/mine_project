
import './App.css';
import EnableColorOnDarkAppBar from './components/dashboard'
import BottomAppBar from './components/bottomdashboard';
import SignInSide from './components/signin';
import Album from './components/homepage';

function App() {
  return (
    <div className="App">
      <EnableColorOnDarkAppBar/>
      <SignInSide/>
      <Album/>
      <BottomAppBar/>
    </div>
  );
}

export default App;
