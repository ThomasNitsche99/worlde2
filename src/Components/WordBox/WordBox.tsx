import { Box } from "@mui/material";
import React from "react";

interface WordBoxProps {
  letter: number;
}

export const WordBox: React.FC<WordBoxProps> = (props: WordBoxProps) => {
  return (
    <div>
      <Box sx={{}}>
        <input
          type="text"
          style={{
            height: "60px",
            width: "60px",
            fontSize: "40px",
            textAlign: "center",
            backgroundColor: "#3a3a3c",
            color: "white",
          }}
        />
      </Box>
    </div>
  );
};
