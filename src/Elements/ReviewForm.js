import React, {useState} from "react";
import {InputField, StarSelections, TextAreaField} from "./InputField";
import './ReviewForm.css';
import axios from "axios";
import api from "../API";

const ReviewForm = ({isEditing,id,BookName,BookAuthor,Rating,Review,date,onSubmit,onClose}) => {
    const [name,setName] = useState(BookName || "");
    const [author,setAuthor] = useState(BookAuthor || "");
    const [rating,setRating] = useState(Rating || 1);
    const [review,setReview] = useState(Review || "");
    const [postedDate,setDate] = useState(date || new Date());
    const [errors, setErrors] = useState({
        name: "",
        author: "",
        review: "",
    });

    const changeName = (value) => {
        setName(value);
        if (value.trim() === "") {
            setErrors((prev) => ({ ...prev, name: "Name is required." }));
        } else {
            setErrors((prev) => ({ ...prev, name: "" }));
        }
    };

    const changeAuthor = (value) => {
        setAuthor(value);
        if (value.trim() === "") {
            setErrors((prev) => ({ ...prev, author: "Author's name is required." }));
        } else {
            setErrors((prev) => ({ ...prev, author: "" }));
        }
    };

    const changeReview = (value) => {
        setReview(value);
        if (value.trim() === "") {
            setErrors((prev) => ({ ...prev, review: "Review cannot be empty." }));
        } else {
            setErrors((prev) => ({ ...prev, review: "" }));
        }
    };

    const changeRating = (value) => setRating(value);

    // Handle Submit
    const handleSubmit = () => {
        const newErrors = {
            name: name.trim() === "" ? "Name is required." : "",
            author: author.trim() === "" ? "Author's name is required." : "",
            review: review.trim() === "" ? "Review cannot be empty." : "",
        };
        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some((error) => error !== "");

        if (!hasErrors) {
            isEditing?saveReview():createReview();
            onSubmit({ id,date,name, author, rating, review });
        }
    };

    const handleCancel = ()=>{
        onClose();
    }

    const saveReview = () => {
        const updatedReview = {
            BookName: name,
            BookAuthor: author,
            Rating: rating,
            Review: review,
            Date: postedDate.toString(),
        };

        api
            .put(`/reviews/update/${id}`, updatedReview) // Matches your PUT route
            .then((response) => {
                console.log('Review updated:', response.data);
            })
            .catch((error) => {
                console.error('Error updating review:', error);
            });
    };

    const createReview = ()=>{
        const newReview = {
            BookName: name,
            BookAuthor: author,
            Rating: rating,
            Review: review,
            Date: new Date().toString(),
        };

        api
            .post('/reviews/add_review', newReview)
            .then((response) => {
                console.log('Review created:', response.data);
            })
            .catch((error) => {
                console.error('Error creating review:', error);
            });
    }

    return(
        <div className='popup-form'>
            <div>
                <div className={"title"}>{isEditing?"Edit Review":"Write Review"}</div>
                <div>
                    <InputField alert={errors.name} value={name} onChange={changeName} type={"text"} name={"Name"} placeholder={"Name of the Book"}/>
                    <InputField alert={errors.author} value={author} onChange={changeAuthor} type={"text"} name={"Author"} placeholder={"Author's Name"}/>
                    <StarSelections isEdit={true} name={"Rating"} value={rating} maximum={5} onChange={changeRating}/>
                    <TextAreaField alert={errors.review} value={review} name={"Review"} onChange={changeReview} placeholder={"Enter your review"}/>
                </div>
                <div className={'lower-bar'}>
                    <button aria-selected={false} onClick={handleCancel}>Cancel</button>
                    <button aria-selected={true} onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default ReviewForm;