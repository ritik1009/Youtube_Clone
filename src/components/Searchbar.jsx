import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  return (
    <Paper
      component={"form"}
      onSubmit={(e) => {e.preventDefault()}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "non",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search"
        value=""
        onChange={() => {}}
        // style={{borderRadius:20}}
      />
      <IconButton type="submit" sx={{p:'10px',color:'red'}}>
        <SearchIcon/>
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
