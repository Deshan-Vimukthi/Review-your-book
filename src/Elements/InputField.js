import './InputField.css';
import {useState} from "react";

export const InputField = ({name,placeholder,type,className,value,onChange,suggestList}) =>{

    const drawSuggest = () =>{
        if(suggestList && suggestList.length>1){
            return(
                <datalist className='suggest-list' id={`${name}-list`}>
                    {suggestList.map(suggest=>(
                        <option value={suggest.text?suggest.text:suggest}>{suggest.hint ? suggest.hint:''}</option>
                    ))}
                </datalist>
            )
        }
    }

    return(
        <div className={`input-field ${className}`}>
            <div className='input-container'>
                <input
                    list={`${name}-list`}
                    type={type || 'text'}
                    className={`input-field-input`}
                    placeholder={placeholder || name}
                    value={value}
                    onChange={(e)=>onChange(e.target.value)}/>
                <label htmlFor={`${name}-list`}>{placeholder}</label>
                {drawSuggest()}
            </div>
        </div>
    )
}

export const TextAreaField = ({name,placeholder,className,value,onChange})=>{
    return(
        <div className={`input-field ${className}`}>
            <div className='input-container'>
                <textarea
                    placeholder={placeholder || name}
                    value={value}
                    onChange={(e)=>onChange(e.target.value)}/>
                <label htmlFor={`${name}-list`}>{placeholder}</label>
            </div>
        </div>
    )
}

export const StarSelections = ({name,value,maximum,onChange})=>{
    const [selected,select] = useState(value || 0);
    const range = Array.from({ length: maximum }, (_, i) => i+1);

    const changeValue = (value)=>{
        onChange(value);
        select(value);
    }

    return(
        <div className={'rating-bar'}>
            <div className={'rating-bar-title'}>{name}</div>
            <div className={'rating-bar-rating'}>
                <div className={'rating-bar-stars'}>
                    {range.map((index)=>(
                        <button onClick={()=>changeValue(index)} aria-selected={(selected<=index)}>
                            {(selected<=index-1)?<i className="fa fa-star-o" aria-hidden="true"></i>:<i className="fa fa-star" aria-hidden="true"></i>}
                        </button>
                    ))}
                </div>
                <div className={'rating-bar-label'}>
                    <label>{(selected>maximum)?maximum:selected} / {maximum}</label>
                </div>
            </div>
        </div>
    )
}

