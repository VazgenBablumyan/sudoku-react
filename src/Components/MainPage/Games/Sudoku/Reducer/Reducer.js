export function reducer(sudoku,action){
  console.log("action:::",action)
  switch(action.type){
    case "boardOnScreen":
      console.log(action.value,"::::::SS")
       return {...sudoku,
        emptyCounts:action.value,
        inChoosingMode:false,
        boardOnScreen:true,
        isLoaded:true,
        continueOldGame:false}
    case"inChoosingMode":
      return {...sudoku,
        board:[],
        inChoosingMode:true,
        boardOnScreen:false,
        isLoaded:false,
        continueOldGame:false}
    case"isLoaded":
      return {...sudoku,
        inChoosingMode:false,
        boardOnScreen:false,
        isLoaded:true,
        continueOldGame:false}
    case"continueOldGame":
        return{...sudoku,
          inChoosingMode:false,
          boardOnScreen:true,
          isLoaded:true,
          continueOldGame:true
        }     
    case"getBoardToSudoku":
        return{...sudoku,
        board:action.board}
        default:
            console.log(54565)
           return sudoku
  }
   
}
