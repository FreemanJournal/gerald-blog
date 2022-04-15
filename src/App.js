import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import NavBar from './components/Header/NavBar';
import Routing from './Routing/Routing';
function App() {
  return (
    <div>
      <NavBar/>
      <Routing/>
    </div>
  );
}

export default App;
