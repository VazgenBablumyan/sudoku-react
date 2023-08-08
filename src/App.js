import { RouterProvider } from 'react-router';
import { appRouter } from './router/App.router';
import './App.css';

function App() {
  return (
      <div className="App">
        <RouterProvider router={appRouter} />
        </div>
  );
}

export default App;
