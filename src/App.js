import logo from './logo.svg';
import './App.css';
import ReviewForm from "./Elements/ReviewForm";
import Header from "./Elements/Header";
import ReviewTemplate from "./Elements/ReviewTemplate";
import MainPage from "./Elements/MainPage";
import {useState} from "react";

function App() {
    const [filter,setFilter] = useState('');
    const onChangeFilter = (filter)=>{
        setFilter(filter);
    }
  return (
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
        <div style={{position:'sticky',top:'0px',zIndex:100}}>
            <Header filter={filter} onChangeFilter={onChangeFilter}/>
        </div>
        <MainPage filter={filter}/>
    </div>
  );
}

export default App;
