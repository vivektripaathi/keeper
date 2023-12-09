import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

const CreateArea = (props) => {
    const [isExpanded, setisExpanded] = useState(false)
    const [note, setNote] = useState({title: null, content:null})
    const handleChange = (event) => {
        const {name, value} = event.target
        setNote((prevValue)=> ({ ...prevValue, [name] : value }))
    }
    const handleClick = (event) => {
        event.preventDefault();
        (note.title || note.content) && props.onAdd(note)
        setNote({title: '', content:''})
    }
    const expand = ()=>{
        setisExpanded(true)
    }
    return (
        <div>
            <form className="create-note">
                {isExpanded && 
                <input 
                name="title" 
                placeholder="Title" 
                onChange={handleChange}
                value={note.title}
                />
                }
                <textarea 
                name="content" 
                placeholder="Take a note..." 
                rows={isExpanded? '3' : '1'}
                onChange={handleChange}
                onClick={expand}
                value={note.content}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={handleClick}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
