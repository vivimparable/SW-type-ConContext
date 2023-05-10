import './App.css';
import Rutas from './Router/Router';
import Navegador from './components/Navegador/Navegador';
import Provider from './context/AuthProvider';
import ShipsLogicProvider from './context/ShipsLogicProvider';
import DetailedShips from './context/DetailedShips'
function App() {
  
  return (
    <>
      
      <Provider>
        <ShipsLogicProvider>
            <header>
                <Navegador></Navegador>
            </header>
              
            <Rutas/>
            </ShipsLogicProvider>
       </Provider>  
    </>
  );
}

export default App;
