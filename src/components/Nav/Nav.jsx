import SearchBar from "../SearchBar/SearchBar";

import { Link } from "react-router-dom";

export default function Nav (props){
    return(
        <>
       <Link to="/home"><h1>HOME</h1></Link>
       <Link to="/about"><h1>ABOUT</h1></Link>
        <SearchBar
        onSearch={props.onSearch}
        />

        </>
    )
}