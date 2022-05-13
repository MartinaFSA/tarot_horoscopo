import './App.css';
import Homepage from './Pages/Homepage';
import Header from './Components/Header.js';
/* 
import html2canvas from 'html2canvas';

  Exportar archivo 
  const archivoExportado = function(i){
    html2canvas(document.querySelector("#exportar")).then(canvas => {
      let img = canvas.toDataURL("img/png");
      let link = document.createElement("a");
      link.download = "personaje.png";
      link.href = img;
      link.click();
    });
  }


  */
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
