import './InputField.css';
import {useEffect, useRef, useState} from "react";

export const InputField = ({name,placeholder,type,className,value,onChange,suggestList,alert}) =>{


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
        <div>
        <div className={`input-field ${className}`}>
            <div className='input-container'>
                <input
                    list={`${name}-list`}
                    type={type || 'text'}
                    className={`input-field-input`}
                    placeholder={placeholder || name}
                    value={value}
                    onChange={(e)=>onChange(e.target.value)}
                    aria-errormessage={alert}
                />
                <label htmlFor={`${name}-list`}>{placeholder}</label>
                {drawSuggest()}
            </div>
        </div>
            {alert && <label className="error-label">{alert}</label>}
        </div>
    )
}

export const TextAreaField = ({name,placeholder,className,value,onChange,alert})=>{
    return(
        <div>
        <div className={`input-field ${className}`}>
            <div className='input-container'>
                <textarea
                    placeholder={placeholder || name}
                    value={value}
                    onChange={(e)=>onChange(e.target.value)}
                    aria-errormessage={alert}
                />
                <label htmlFor={`${name}-list`}>{placeholder}</label>
            </div>
        </div>
            {alert && <label className="error-label">{alert}</label>}
        </div>
    )
}

export const StarSelections = ({isEdit,name,value,maximum,onChange})=>{
    const [selected,select] = useState(value || 0);
    const range = Array.from({ length: maximum }, (_, i) => i+1);
    const editable = isEdit || false;

    const changeValue = (value)=>{
        if(editable){
            onChange(value);
            select(value);
        }
    }

    return(
        <div className={'rating-bar'}>
            <div className={'rating-bar-title'}>{name}</div>
            <div className={'rating-bar-rating'}>
                <div className={'rating-bar-stars'}>
                    {range.map((index)=>(
                        <button onClick={()=>changeValue(index)}>
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

export const ContextMenu = ({children})=>{

    return(
        <div className='context-menu'>
            {children}
        </div>
    )
}
export const MenuItem = ({text,icon,onSelect,children})=>{
    const [showSubMenu,setShowSubMenu] = useState(false);

    const menuItemRef = useRef(null);
    const subMenuRef = useRef(null);

    const handleBlur = (event) =>{
        if(menuItemRef!==null && subMenuRef!==null && menuItemRef.current && subMenuRef.current)
            if(!menuItemRef.current.contains(event.target) && !subMenuRef.current.contains(event.target)){
                setShowSubMenu(false);
            }
    }
    useEffect(() => {
        document.addEventListener('mousedown',handleBlur);
        return()=>
            document.removeEventListener('mousedown', handleBlur);
    }, []);

    const handleSelectItem=()=>{
        setShowSubMenu(children?!showSubMenu:false);
        try{
            onSelect()
        }catch (e) {

        }
    }

    return(<div className='menu-item'  >
        <div className='menu-content' ref={menuItemRef} onClick={()=>handleSelectItem()}>
            <div id={'icon'}>{icon || ''}</div>
            <div id={'text'}>{text || ''}</div>
        </div>
        {showSubMenu && <div ref={subMenuRef} className='popup sub-menu'>{children}</div>}
        <hr/>
    </div>)
}
export const ContextMenuButton = ({icon,alt,className,children}) =>{
    const [showMenu,setShowMenu] = useState(false);

    const buttonRef = useRef(null);
    const menuRef = useRef(null);

    const handleOutside = (event) =>{
        if(buttonRef && menuRef &&
            buttonRef.current && menuRef.current &&
            !buttonRef.current.contains(event.target) && !menuRef.current.contains(event.target)){
            setShowMenu(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown',handleOutside);
        return()=>
            document.removeEventListener('mousedown',handleOutside);
    }, []);

    return(
        <div className={`context-menu-button ${className}`}>
            <button ref={buttonRef} onClick={()=>setShowMenu(!showMenu)}>{icon || alt}</button>
            {showMenu &&
                <ContextMenu>
                    <div ref={menuRef}>
                        {children}
                    </div>
                </ContextMenu>
            }
        </div>
    )
}
