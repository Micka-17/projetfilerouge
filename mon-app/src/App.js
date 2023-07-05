import './App.css';
import ReactGA from 'react-ga';
import LoginView from './views/LoginView';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  ReactGA.pageview('/App');
  return (
    <div className='App'>
      <LoginView/>
      <ToastContainer />
    </div>
  );
}

export default App;
