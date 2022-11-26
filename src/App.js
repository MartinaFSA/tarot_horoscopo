import './App.css';
import Homepage from './Pages/Homepage';
import Header from './Components/Header.js';
function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
      <Header></Header>
      <Homepage />
    </div>
  );
}

export default App;
