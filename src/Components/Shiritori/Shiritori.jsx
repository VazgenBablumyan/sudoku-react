import  { useState } from 'react'
import armenianCities from '../../datas/armenianCities';

export default function Shiritori() {
  const [word, setWord] = useState('');
  const [words,setWords]=useState([])
  const [gameOver, setGameOver] = useState(true)

  const isValid = (name) => {
    return armenianCities.includes(name);
  };

    
const play =(newWord) => {
  const alreadyExist = words.some((word) => word === newWord);
  if (typeof newWord === "string") {
    if (!isValid (newWord)) {
      return "Այդպիդի անուն չկա Հայաստանում";
    }

    if (words.length === 0) {
      setWords([newWord]);
    } else if (!alreadyExist) {
      let lastItemsLetter = [...words].pop().slice(-1);
      let newWordsFirstLetter = newWord[0];
      if (lastItemsLetter === newWordsFirstLetter) {
        setWords((prevWords) => [...prevWords, newWord]);
      } else {
        return `${newWord}  չի սկսում ${lastItemsLetter}`;
      }
    } else {
      setGameOver(false);
      return "Խաղի վերջ";
    }
    setWord(newWord);
    return words;
  } else {
    setGameOver(false);
    return "Please write a word";
  }
}

const restart =() => {
  setGameOver(true);
  setWord('');
  setWords([]);
  return "Խաղը վերսկսված է";
 }

return {
      word,
      words,
      gameOver,
      play,
      restart,
    };

}
