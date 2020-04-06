import React from 'react';
import './cb.css';


//UI
const CustomButton = ({text, color, onClick}) => <div 
style={{backgroundColor:color, boxShadow: "2px 2px 5px"+color}} 
className="custom_button_box"
onClick={onClick}
>
    <div className="custom_button_bos_inner">
        {text}
    </div>
</div>

function ButtonClick(){
    alert("Clicked!");
}

CustomButton.defaultProps = {
    text:"Default Button",
    color: "#6595ed",
    onClick: ButtonClick
}

export default CustomButton;