import logo from './logo.svg';
import './App.css';
import { Spinner } from 'react-bootstrap';
import GridCard from './components/GridCard/GridCard';
import NavBar from './components/NavBar/NavBar';
import ShowToast from './components/ShowToast/ShowToast';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <GridCard></GridCard> <br />
      <ShowToast></ShowToast> <br />
      <Spinner animation="grow" variant="success" />
    </div>
  );
}

export default App;
