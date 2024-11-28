import {useState} from "react";
import './Header.css'
import logo from '../../src/logo.svg';

const Header = ()=>{

    const [isDateSelectorExpanded,setDateSelectorExpand] = useState(false);
    const [isReviewSelectorExpanded,setReviewSelectorExpand] = useState(false);
    const [sortedByDate,sortingByDate] = useState(SortByDate.Latest);
    const [sortedByReview,sortingByReview] = useState(SortByReview.Good);

    const toggleDateFilter = ()=>{
        setReviewSelectorExpand(false);
        setDateSelectorExpand(!isDateSelectorExpanded);
    }
    const toggleReviewFilter = ()=>{
        setDateSelectorExpand(false);
        setReviewSelectorExpand(!isReviewSelectorExpanded);
    }

    return(
        <div className={'header'}>
            <div className={'header-title'}>
                <div className={'header-logo'}>
                    <i className="fa fa-book" aria-hidden="true"></i>
                </div>
                <div className={'header-name'}>
                    Review Your Book
                </div>
            </div>
            <div className={'header-button'}>
                <div></div>
                <div className={"expandable-button-container"}>
                    <div className='expandable-button' onClick={()=>toggleDateFilter()}>
                        <div id='expaned-button'>

                        </div>
                        <label htmlFor='expaned-button'> {sortedByDate} </label>

                    </div>
                    <div id='select-view-context' className='context-menu expandable-button-parent' aria-expanded={isDateSelectorExpanded}>
                        <div>
                            <div className=' expandable-button-list' aria-selected={sortedByDate===SortByDate.Latest} onClick={()=>sortingByDate(SortByDate.Latest)}>
                                <div id={`expand-button-view-1`} >

                                </div>
                                <label htmlFor={`expand-button-view-1`}> Latest Review </label>
                            </div>
                            <div className=' expandable-button-list' aria-selected={sortedByDate===SortByDate.Older} onClick={()=>sortingByDate(SortByDate.Older)}>
                                <div id={`expand-button-view-2`} >

                                </div>
                                <label htmlFor={`expand-button-view-2`}> Older Review </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"expandable-button-container"}>
                    <div className='expandable-button' onClick={()=>toggleReviewFilter()}>
                        <div id='expaned-button' >

                        </div>
                        <label htmlFor='expaned-button'> {sortedByReview} </label>

                    </div>
                    <div id='select-view-context' className='context-menu expandable-button-parent' aria-expanded={isReviewSelectorExpanded}>
                        <div>
                            <div className=' expandable-button-list' aria-selected={sortedByReview===SortByReview.Good} onClick={()=>sortingByReview(SortByReview.Good)}>
                                <div id={`expand-button-view-1`} >

                                </div>
                                <label htmlFor={`expand-button-view-1`}> Most Positive </label>
                            </div>
                            <div className=' expandable-button-list' aria-selected={sortedByReview===SortByReview.Bad} onClick={()=>sortingByReview(SortByReview.Bad)}>
                                <div id={`expand-button-view-2`} >

                                </div>
                                <label htmlFor={`expand-button-view-2`}> Most Negative </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SortByDate = {
    Latest:'Latest',
    Older:'Older',
}

const SortByReview = {
    Good:'Positive',
    Bad:'Negative',
}

export default Header;