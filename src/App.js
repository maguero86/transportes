import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/layout/Header.js';
import Nav from './components/layout/Nav.js';
import Footer from './components/layout/Footer.js';
import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';

function App() {
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
