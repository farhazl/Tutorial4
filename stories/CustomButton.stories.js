import React, { Component } from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';

export default {
    title: "Custom Button",
    component:CustomButton
};

export const MyCustomButton = () => <CustomButton/>;

export const PageWithCustomButtons = () => <div>
    <Header
    fontSize={15}
    color="#ABC"
    onMouseOver={overFirstOne}
    />

<Header
    fontSize={25}
    color="red"
    onMouseOver={overSecondOne}
    />

    <CustomButton text="Cancel" color="#999" onClick={CancelClick}/>
    <CustomButton text="OK" color="#3F5" onClick={OkClick}/>
    <CustomButton text="Submit" color="#F3F" onClick={SubmitClick}/>
    <CustomButton text="Menu"/>
</div>

function CancelClick(){
    alert("Cancel");
}

function OkClick(){
    alert("Okay...");
}

function SubmitClick(){
    alert("Submit!");
}

function overFirstOne(){
    alert("You found the first Header");
}

function overSecondOne(){
    alert("You found the second Header");
}