import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Input from '../comps/input';
import Chat from '../comps/chat';
import ChatPage from '../pages/chatPage';

export default {
    title:"My comps",
    component:CustomButton
};

export const MyCustomButton = () => <CustomButton />;

function CancelClick(){
    alert("cancel");
}

export const MyCustomButtonWithOptions = () => <CustomButton 
    color="#999"
    text="Cancel"
    onClick={CancelClick}
/>;

export const MyHeader = () => <Header />;

export const MyInput = () => <Input />;

export const MyInputWithPlaceholder = () => <Input
    placeholder="Custom placeholder"
/>;

export const MyChat = () => <Chat />;

export const MyChatPage = () => <ChatPage />;

// function CancelClick(){
//     alert("Cancel");
// }

// function OkClick(){
//     alert("Okay...");
// }

// function SubmitClick(){
//     alert("Submit!");
// }

// function overFirstOne(){
//     alert("You found the first Header");
// }

// function overSecondOne(){
//     alert("You found the second Header");
// }