import React from "react";
import { styled } from "@mui/material/styles";
import { Switch as MaterialUISwitch } from "@mui/material/Switch";
import Code from '../../stories/assets/code-brackets.svg'
// import "./Switch.css";

export const Switch = ({}) => {
  return (
    <>
    {styled(MaterialUISwitch)(({ theme }) => ({
      width: 62,
      height: 34,
      padding: 7,
      "& .MuiSwitch-switchBase": {
        margin: 1,
        padding: 0,
        transform: "translateX(6px)",
        "&.Mui-checked": {
          color: "#fff",
          transform: "translateX(22px)",
          "& .MuiSwitch-thumb:before": {
            backgroundImage: `${Code}`
          },
          "& + .MuiSwitch-track": {
            opacity: 1,
            backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be"
          }
        }
      },
      "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
        width: 32,
        height: 32,
        "&:before": {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `${Code}`
        }
      },
      "& .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        borderRadius: 20 / 2
      }
    }))}
    </>
  )
}
