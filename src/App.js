// import { RouterProvider } from 'react-router';
// import { appRouter } from './router/App.router';
import './App.css';
import ShiritoriGame from './Components/ShiritoriGame/ShiritoriGame';
import styles  from './Components/ShiritoriGame/ShiritoriGame.module.css'

function App() {
  return (
    <div className="App">
    {/* <RouterProvider router={appRouter} /> */}
     <ShiritoriGame />
    </div>
  );
}

export default App;

