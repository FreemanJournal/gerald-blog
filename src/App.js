import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import NavBar from './components/Header/NavBar';
import Routing from './Routing/Routing';
function App() {
  return (
    <div>
      <NavBar/>
      <Routing/>
      <ToastContainer />
    </div>
  );
}

export default App;
