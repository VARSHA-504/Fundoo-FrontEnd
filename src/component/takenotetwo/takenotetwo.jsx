import React from 'react';
import './takenotetwo.css';
import { Button } from '@mui/material';
import {addNote} from '../../service/dataservice'
import ColorPopper from '../colorpopper/colorpopper';

function TakeNotetwo (props){

    const [note,  setNote] = React.useState({Title: '', Description: '', color: '' , isArchived: ''});
    const getTitle =(event) => {
        setNote((prevState) => ({...prevState, Title: event.target.value}));
    }

    const opentakeNoteOne = () => {
        props.showNoteOne();
    }
    const getDescription =(event) => {
        setNote((prevState) => ({...prevState, Description: event.target.value}));

    }
    const createNote =() => {
         opentakeNoteOne();
        if(note.Title !== null && note.Description !== null) {
            addNote(note).then(response => { console.log(response)
            })
            .catch (error => {
                console.log(error)
            })  
        }
    }

    const getColor =(color) => {
        setNote((prevState) => ({...prevState, color: color}))

    }
    const archiveNote = () => {
        setNote((prevState) => ({...prevState, isArchived: true}))
    }
    return(
        <div className='takenotetwo' style={{backgroundColor: note.color}}>
            <div className="section-one">
                    <input type="text" name="Title" placeholder="title"  className="title-text" onChange={getTitle} style={{backgroundColor: note.color}}/>
                    <img src="./images/pin.png" alt="pin" className="pin-icon"/>
            </div>
            <div className='description'>
            <input type="text" name="Description" placeholder="description"  className="des-box"onChange={getDescription}style={{backgroundColor: note.color}} /> </div>
            <div className="section-three">
                <div className="icons">
                    <img src="./images/remind.png" alt="remind me" className="remind-icon"/>
               
                    <img src="./images/collab.png" alt="collabarator" className="collab-icon"/>
                
                    <ColorPopper getColor={getColor} action="create">
                    </ColorPopper>
                
                    <img src="./images/image.png" alt="add" className="gallery-icon"/>
                
                    <img src="./images/archive.png" alt="archive" className="archive-icon" onClick={archiveNote}/>
               
                    <img src="./images/more.webp" alt="more options" className="more-icon"/>
               
                    <img src="./images/undo.png" alt="undo" className="undo-icon"/>
               
                    <img src="./images/redo.png" alt="redo" className="redo-icon"/>
               
                </div>

                <Button variant="text"  className="close-button" onClick={createNote}>close</Button>
                </div>
        </div>
        

    )
}

export default TakeNotetwo;