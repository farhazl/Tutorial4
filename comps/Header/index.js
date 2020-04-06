import React from 'react';
import './header.css';

const Header = ({fontSize, color, onMouseOver}) => <div>
    <h1 className="head" 
    style={{fontSize:fontSize, color:color}} 
    onMouseOver={onMouseOver}>Header</h1>
</div>

function MouseOver(){
    alert("Mouse is over");
}

Header.defaultProps = {
    fontSize: 12,
    color: "#000",
    onMouseOver:MouseOver
}

export default Header;