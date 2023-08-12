
import './App.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setStorage } from './helpers/helpers';
import MainPage from './Components/MainPage/MainPage';

function App() {
  const { sudoku } = useSelector((state) => state.reducer)
  useEffect(() => setStorage("sudoku", sudoku),[sudoku])
console.log(12)
  return (
      <div className="App">
        <MainPage />
      </div>
  );
}

export default App;
