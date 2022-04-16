import React from 'react';
import { BrowserRouter as Router, Route, Outlet, Link } from "react-router-dom";
import './App.scss';

function App() {
  return (
    
    <Router>
      <div className='app'>
        <h1>Sistema de Rutas Basico</h1>
        <Route path="/" component={Home} />
      </div>
      </Router>
  );
}

function Home(){
  return <h2>Estamos en Home</h2>;
}
function Contact(){
  return <h2>Estamos en Contac</h2>;
}
function Users(){
  return <h2>Estamos en Users</h2>;
}

export default App;
