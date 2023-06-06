
import './App.css';
import EnableColorOnDarkAppBar from './components/dashboard'
import BottomAppBar from './components/bottomdashboard';
import SignInSide from './components/signin';

function App() {
  return (
    <div className="App">
      <EnableColorOnDarkAppBar/>
      <SignInSide/>
      <BottomAppBar/>
    </div>
  );
}

export default App;
