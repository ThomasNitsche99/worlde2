import { Box } from "@mui/material";
import React, {ChangeEvent, useState, useEffect, KeyboardEvent} from "react";
import { useFocus } from "../../Assets/useFocus";

interface WordBoxProps {
  id: number,
  disabled: boolean,
  currentColumn: number,
  setCurrentColumn:React.Dispatch<React.SetStateAction<number>> ,
}

export const WordBox: React.FC<WordBoxProps> = ({id,disabled, currentColumn, setCurrentColumn}: WordBoxProps) => {

  const[inputValue, setInputValue] = useState<string>('');
  const [ref, setFocus] = useFocus()


  //set focused if id 
useEffect(()=>{
  if(id===currentColumn){
    setFocus()
  }

},[currentColumn])

  const handleBackspace = (e: KeyboardEvent ) =>{
    const key = e.key
    if(id!==1 && key === 'Backspace' && inputValue===''){
      setInputValue('')
      setCurrentColumn(currentColumn-1)
    }
    else{

    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>)=> {
    const newValue = e.target.value;

    if (!/[^a-zA-Z]/.test(newValue) && inputValue==='' && currentColumn!==5){
      setInputValue(newValue.toUpperCase())
      setCurrentColumn(currentColumn+1)
    }

    else if((!/[^a-zA-Z]/.test(newValue) && inputValue==='' && currentColumn===5)){
      setInputValue(newValue.toUpperCase())
    }
    else{
      setInputValue('')
    }
 }
  
  return (
    <div>
      <Box sx={{}}>
          <input
            type="text"
            ref={ref}
            disabled={disabled}
            maxLength={1}
            value={inputValue}
            onKeyDown={handleBackspace}
            onChange={onChange}
            style={{
              height: "60px",
              width: "60px",
              fontSize: "40px",
              textAlign: "center",
              backgroundColor: "#3a3a3c",
              color: "white",
              outline: 'none',
              caretColor: 'transparent'
            }}
          />
      </Box>
    </div>
  );
};
