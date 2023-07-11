import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  const navigate = useNavigate()
  const [searchTerm, setsearchTerm] = useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setsearchTerm('')
    }
  }
  return (
    <Paper
      component={"form"}
      onSubmit={handleSubmit}
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
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
        // style={{borderRadius:20}}
      />
      <IconButton type="submit" sx={{p:'10px',color:'red'}}>
        <SearchIcon/>
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
