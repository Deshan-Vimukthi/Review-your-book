import ReviewTemplate from "./ReviewTemplate";
import './MainPage.css';

const MainPage =()=>{

    return(
        <div className='review-container'>
            <ReviewTemplate Date={new Date("2024/10/11")} Review={"nn"} Rating={5} BookName={"kkk"} Author={"Hey"}/>
            <ReviewTemplate Date={new Date()} Review={"nn"} Rating={5} BookName={"kkk"} Author={"Hey"}/>
            <ReviewTemplate Date={new Date()} Review={"nn"} Rating={5} BookName={"kkk"} Author={"Hey"}/>
            <ReviewTemplate Date={new Date()} Review={"nn"} Rating={5} BookName={"kkk"} Author={"Hey"}/>
            <ReviewTemplate Date={new Date()} Review={"nn"} Rating={5} BookName={"kkk"} Author={"Hey"}/>
            <ReviewTemplate Date={new Date()} Review={"nn"} Rating={5} BookName={"kkk"} Author={"Hey"}/>
            <ReviewTemplate Date={new Date()} Review={"nn"} Rating={5} BookName={"kkk"} Author={"Hey"}/>
            <ReviewTemplate Date={new Date()} Review={"nn"} Rating={5} BookName={"kkk"} Author={"Hey"}/>
            <ReviewTemplate Date={new Date()} Review={"nn"} Rating={5} BookName={"kkk"} Author={"Hey"}/>
            <ReviewTemplate Date={new Date()} Review={"nn"} Rating={5} BookName={"kkk"} Author={"Hey"}/>
            <ReviewTemplate Date={new Date()} Review={"nn"} Rating={5} BookName={"kkk"} Author={"Hey"}/>
            <ReviewTemplate Date={new Date()} Review={"nn"} Rating={5} BookName={"kkk"} Author={"Hey"}/>

        </div>
    )
}

export default MainPage;