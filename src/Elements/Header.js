import {useState} from "react";
import './Header.css'
import logo from '../../src/logo.svg';

const Header = ({filter,onChangeFilter})=>{

    const [isReviewSelectorExpanded,setReviewSelectorExpand] = useState(false);
    const [sortedBy,changeSorting] = useState(filter || SortedBy.None);

    const toggleFilter = ()=>{
        setReviewSelectorExpand(!isReviewSelectorExpanded);
    }

    const sortingBy = (sorting) =>{
        changeSorting(sorting);
        onChangeFilter(sorting);
    }

    return(
        <div className={'header'}>
            <div className={'header-title'}>
                <div className={'header-logo'}>
                    <i className="fa fa-book" aria-hidden="true"></i>
                </div>
                <div className={'header-name'}>
                    {`${process.env.APP_NAME}process.env.APP_NAME`}
                </div>
            </div>
            <div className={'header-button'}>
                <div className={"expandable-button-container"}>
                    <div className='expandable-button' onClick={()=>toggleFilter()}>
                        <div id='expaned-button' >

                        </div>
                        <label htmlFor='expaned-button'> Sorted By </label>
                    </div>

                    <div id='select-view-context' className='context-menu expandable-button-parent' aria-expanded={isReviewSelectorExpanded}>
                        <div>

                            <div className=' expandable-button-list' aria-selected={sortedBy===SortedBy.None} onClick={()=>sortingBy(SortedBy.None)}>
                                <div id={`expand-button-view-1`} >
                                    {(sortedBy===SortedBy.None)?<i className={'fa fa-check-circle'}/>:<i className={'fa fa-circle-o'}/>}
                                </div>
                                <label htmlFor={`expand-button-view-1`}> None </label>
                            </div>

                            <hr/>
                            <div className={'list_title'}> Sorted by Rating </div>
                            <hr/>

                            <div className=' expandable-button-list' aria-selected={sortedBy===SortedBy.Good} onClick={()=>sortingBy(SortedBy.Good)}>
                                <div id={`expand-button-view-1`} >
                                    {(sortedBy===SortedBy.Good)?<i className={'fa fa-check-circle'}/>:<i className={'fa fa-circle-o'}/>}
                                </div>
                                <label htmlFor={`expand-button-view-1`}> Most Positive </label>
                            </div>

                            <div className=' expandable-button-list' aria-selected={sortedBy===SortedBy.Bad} onClick={()=>sortingBy(SortedBy.Bad)}>
                                <div id={`expand-button-view-2`} >
                                    {(sortedBy===SortedBy.Bad)?<i className={'fa fa-check-circle'}/>:<i className={'fa fa-circle-o'}/>}
                                </div>
                                <label htmlFor={`expand-button-view-2`}> Most Negative </label>
                            </div>

                            <hr/>
                            <div className={'list_title'}> Sorted by Date </div>
                            <hr/>

                            <div className=' expandable-button-list' aria-selected={sortedBy===SortedBy.Latest} onClick={()=>sortingBy(SortedBy.Latest)}>
                                <div id={`expand-button-view-1`} >
                                    {(sortedBy===SortedBy.Latest)?<i className={'fa fa-check-circle'}/>:<i className={'fa fa-circle-o'}/>}
                                </div>
                                <label htmlFor={`expand-button-view-1`}> Latest Review </label>
                            </div>
                            <div className=' expandable-button-list' aria-selected={sortedBy===SortedBy.Older} onClick={()=>sortingBy(SortedBy.Older)}>
                                <div id={`expand-button-view-2`} >
                                    {(sortedBy===SortedBy.Older)?<i className={'fa fa-check-circle'}/>:<i className={'fa fa-circle-o'}/>}
                                </div>
                                <label htmlFor={`expand-button-view-2`}> Older Review </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SortedBy = {
    Latest:'Latest',
    Older:'Oldest',
    Good:'Positive',
    Bad:'Negative',
    None:'None'
}


export default Header;