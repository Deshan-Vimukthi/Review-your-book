import ReviewTemplate from "./ReviewTemplate";
import './MainPage.css';
import React, {useEffect, useState} from "react";
import ReviewForm from "./ReviewForm";
import api from "../API";

const MainPage =({filter})=>{

    const [reviews,setReviews] = useState([]);
    const [currentReview,setCurrent] = useState({});
    const [visible,setVisible] = useState(false);
    const [isEditing,setEditing] = useState(false);

    // Sort reviews by Date (latest to Older)
    const sortReviewsByLatest = () => {
        const sortedReviews = [...reviews].sort((a, b) => new Date(b.Date) - new Date(a.Date));
        setReviews(sortedReviews);
    };
    // Sort reviews by Date (Oldest to Latest)
    const sortReviewsByOldest = () => {
        const sortedReviews = [...reviews].sort((a, b) => new Date(a.Date) - new Date(b.Date));
        setReviews(sortedReviews);
    };
    // Sort by Rating (Highest to Lowest)
    const sortByHighestRating = () => {
        const sortedReviews = [...reviews].sort((a, b) => b.Rating - a.Rating);
        setReviews(sortedReviews);
    };
    // Sort by Rating (Lowest to Highest)
    const sortByLowestRating = () => {
        const sortedReviews = [...reviews].sort((a, b) => a.Rating - b.Rating);
        setReviews(sortedReviews);
    };

    const sort = ()=>{
        if(filter === 'Latest'){
            sortReviewsByLatest();
        }
        else if(filter === 'Oldest'){
            sortReviewsByOldest();
        }
        else if(filter === 'Negative'){
            sortByLowestRating();
        }
        else if(filter === 'Positive'){
            sortByHighestRating();
        }
    }

    const editReview = (review)=>{
        setCurrent(review);
        setEditing(true);
        setVisible(true);
    }
    const addNewReview = ()=>{
        setCurrent({});
        setEditing(false);
        setVisible(true);
    }

    const onCloseReviewForm = ()=>{
        setVisible(false);
    }
    const onSubmitReviewForm = ()=>{
        setVisible(false);
    }


    useEffect(() => {
        api
            .get('/reviews') // Matches your GET route
            .then((response) => {
                setReviews(response.data);
            })
            .catch((error) => {
                console.error('Error fetching reviews:', error);
            });

        sort();
    }, []);

    return(
        <div>

            <div className='review-container'>
                {reviews.map((item,key)=>(
                    <ReviewTemplate
                        id={item._id}
                        BookName={item.BookName}
                        Author={item.BookAuthor}
                        date={item.postedDate}
                        Review={item.Review}
                        Rating={item.Rating}
                        onEdit={editReview}/>
                ))}
            </div>
            <div className="sticky-create-post" onClick={addNewReview}>
                <i className="fa fa-plus"></i>
                <div>Create a post</div>
            </div>
            {visible?
                <ReviewForm
                id={currentReview.id}
                BookName={currentReview.BookName}
                BookAuthor={currentReview.BookAuthor}
                date={new Date(currentReview.Date)}
                Rating={currentReview.Rating}
                Review={currentReview.Review}
                onClose={onCloseReviewForm}
                onSubmit={onSubmitReviewForm}
                isEditing={isEditing} /> : <div/>}
        </div>
    )
}

export default MainPage;