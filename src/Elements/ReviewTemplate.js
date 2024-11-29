import {ContextMenuButton, MenuItem,StarSelections} from "./InputField";
import './ReviewTemplate.css';
import axios from "axios";
import api from "../API";

const ReviewTemplate = ({id,BookName,Author,Rating,date,Review,onEdit})=>{

    const postedDate = date || new Date();


    const getDate = ()=>{
        const today = new Date();
        if(postedDate.getFullYear() === today.getFullYear()){
            if(postedDate.getMonth() === today.getMonth()){
                if(postedDate.getDay() === today.getDay()){
                    if(postedDate.getHours() === today.getHours()){
                        if(postedDate.getMinutes() === today.getMinutes()){
                            return 'Just Now'
                        }else{
                            const time = `${postedDate.getMinutes() - today.getMinutes}`;
                            return `${time.padStart(2,"0")}m ago`;
                        }
                    }
                    else{
                        const time = `${postedDate.getHours() - today.getHours()}`;
                        if(postedDate.getHours() - today.getHours() < 12)
                            return `${time.padStart(2,"0")}h ago`;
                        else return `${postedDate.getHours().toString().padStart(2,"0")}:${postedDate.getMinutes().toString().padStart(2,"0")}`
                    }
                }
                else {
                    const time = `${postedDate.getHours() - today.getHours()}`;
                    return `${time.padStart(2,"0")}d ago`;
                }
            }else{
                return `${postedDate.getDay()} of ${postedDate.getFullYear()}`;
            }
        }else {
            return `${postedDate.getDay()} of ${postedDate.getFullYear()}`;
        }
    }
    const editReview=()=>{
        const review = {
            id:id,
            BookName:BookName,
            Author:Author,
            Rating:Rating,
            Date:postedDate.toString(),
            Review:Review,
        }

        onEdit(review);
    }
    const deleteReview = ()=>{
        api
            .delete(`/reviews/delete/${id}`) // Matches your DELETE route
            .then(() => {
                console.log('Review deleted');
            })
            .catch((error) => {
                console.error('Error deleting review:', error);
            });
    }

    const ContextMenu = ()=>{
        return(
            <div className='review-template-edit-button'>
                <ContextMenuButton icon={<i className="fa fa-ellipsis-v" aria-hidden="true"></i>} alt={'Edit Course'} className={'course-edit-menu'}>
                    <MenuItem icon={<i className={'fa fa-pencil-square-o'}/>} text={'Edit'} onSelect={()=>editReview()}/>
                    <MenuItem icon={<i className={'fa fa-trash'}/>} text={'Remove'} onSelect={()=>deleteReview()}/>
                </ContextMenuButton>
            </div>
        );
    }

    return(
        <div className="card">
            <div>
                {ContextMenu()}
                <div className='title-content'>
                    <div className='review-card-book'>{BookName}</div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div className='review-card-author'> by {Author} </div>
                        <div className='review-card-author'> {getDate()} </div>
                    </div>
                </div>
            </div>
            <div className='rating-container'>
                <StarSelections isEdit={false} name={"Rating"} value={Rating} maximum={5}/>
            </div>
            <div className='review-card-review'>
                <p>{Review}</p>
            </div>
        </div>
    );
}

export default ReviewTemplate;