import React from "react";
//import styled from "styled-components";
import SearchBar from "./SearchBar.jsx"
import { Link } from "react-router-dom";




class Nav extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <SearchBar onSearch={this.props.onSearch}/>
                <Link to="/about">About</Link>
                <Link to="/home">Home</Link>
            </div>
        )
    }

}

export default Nav;