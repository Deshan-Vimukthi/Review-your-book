import React, {useState} from "react";
import {InputField, StarSelections, TextAreaField} from "./InputField";
import './ReviewForm.css';

const ReviewForm = ({isEditing,BookName,BookAuthor,Rating,Review,date,onSubmit,onClose}) => {
    const [name,setName] = useState(BookName || "");
    const [author,setAuthor] = useState(BookAuthor || "");
    const [rating,setRating] = useState(Rating || 0);
    const [review,setReview] = useState(Review || "");
    const [postedDate,setDate] = useState(Date || new Date());

    const changeName = (newName) => {
        setName(newName);
    }
    const changeAuthor = (newAuthor)=>{
        setAuthor(newAuthor);
    }
    const changeRating = (value)=>{
        setRating(value);
    }
    const changeReview = (text)=>{
        setReview(text);
    }

    return(
        <div className='popup-form'>
            <div>
                <div className={"title"}>{isEditing?"Edit Review":"Write Review"}</div>
                <div>
                    <InputField value={name} onChange={changeName} type={"text"} name={"Name"} placeholder={"Name of the Book"}/>
                    <InputField value={author} onChange={changeAuthor} type={"text"} name={"Author"} placeholder={"Author's Name"}/>
                    <StarSelections isEdit={true} name={"Rating"} value={0} maximum={5} onChange={changeRating}/>
                    <TextAreaField value={review} name={"Review"} onChange={changeReview} placeholder={"Enter your review"}/>
                </div>
                <div className={'lower-bar'}>
                    <button aria-selected={false} onClick={onClose}>Cancel</button>
                    <button aria-selected={true} onClick={onSubmit}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default ReviewForm;