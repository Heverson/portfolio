import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-sm-6">
          <h1 className="name">Heverson Damasceno</h1>  
          <h2>
            Use o desenvolvimento web como uma caixa de ferramentas para seu cliente alcançar resultados melhores nos negócios.  
          </h2>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <h3>Skills</h3>
              <ul className="col-sm-3">
                <li>Github</li>  
                <li>PHP</li>  
                <li>MySQL</li>  
                <li>HTML/CSS/JS </li>  
                <li>Wordpress</li>  
              </ul>  
              <ul className="col-sm-3">
                <li>NodeJS</li>  
                <li>MongoDB</li>  
                <li>ExpressJS</li>  
                <li>React</li>  
                <li>React Native</li>  
              </ul>  
            </div>
          </div>
        </div>
        <div className="row">
            <p className="col-sm-6"><a href="https://www.linkedin.com/in/heversondamasceno/">linkedin.com/in/heversondamasceno/</a></p>
            <p className="col-sm-6"><a href="https://github.com/Heverson">github.com/Heverson</a></p>
        </div>
      </header>
    </div>
  );
}

export default App;
