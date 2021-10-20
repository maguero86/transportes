import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/layout/Header.js';
import Nav from './components/layout/Nav.js';
import Footer from './components/layout/Footer.js';
import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';

var pool = require('./bd');

function App() {
	
  pool.query("SELECT * FROM empleados").then(function(resultados){
	  console.log(resultados);
  });

  var obj = {
	  nombre: 'Pepe',
	  apellido: 'Honguito'
  }	  
  pool.query("INSERT INTO empleados SET ?", [obj]).then(function(resultados){
	  console.log(resultados);
  });
  
  var id = 23;
  var obj = {
	  nombre: 'Pepe',
	  apellido: 'Honguito'
  }
  pool.query("UPDATE empleados SET ? WHERE apellido = ?", [obj, id]).then(function(resultados){
	  console.log(resultados);
  });
  
  var id = 23;
  pool.query("DELETE FROM empleados WHERE id = ?", [id]).then(function(resultados){
	  console.log(resultados);
  });
		
  return (
    <Router>
      <Header/>
	  <Nav/>
	  <Switch>
		<Route path="/" exact component={HomePage}/>
		<Route path="/nosotros" exact component={NosotrosPage}/>
		<Route path="/novedades" exact component={NovedadesPage}/>
		<Route path="/contacto" exact component={ContactoPage}/>
	  </Switch>
	  <Footer/>
    </Router>
  );
}

export default App;
