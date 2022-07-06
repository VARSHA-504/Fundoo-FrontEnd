import React from 'react';
import { archiveTheNote } from '../../service/dataservice';
import ColorPopper from '../colorpopper/colorpopper';
import './takenotethree.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { updateNote} from '../../service/dataservice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function TakeNoteThree(props){
    const [editNote, setEditNote] = React.useState({Title: '', Description: '', _id: ''})

    const [open, setOpen] = React.useState(false);

    const editTitle = (event) => {
        setEditNote((prevState) => ({...prevState, Title: event.target.value}))
    }

    const editDescription = (event) => {
        setEditNote((prevState) => ({...prevState, Description: event.target.value}))
    }
    const handleOpen = (noteObj) =>{
        setOpen(true);
        setEditNote(noteObj);
    }
    
    const handleClose = () => setOpen(false);

    const submitNote = () => {
        updateNote(editNote , editNote._id).then((updateNote) => console.log(updateNote)).catch((error) => console.log(error))
    }

    const archiveNote =(noteId) => {
        archiveTheNote(noteId).then((updateNote) => console.log(updateNote)).catch((error) => console.log(error))
       
    
    }
    return(
        
        <div  className="takenotethree" style={{backgroundColor: props.note.color}}>
        
            
            <div className="section-one-box" >
                    <input type="text" name="Title" placeholder={props.note.Title}  className="title-box"  style={{backgroundColor: props.note.color}} onClick={() => handleOpen(props.note)} />
                    <img src="./images/pin.png" alt="pin" className="pin-icon-box"/>
            </div>
            <input type="text" name="Description" placeholder={props.note.Description} className="description-box" style={{backgroundColor: props.note.color}} onClick={() => handleOpen(props.note)}/> 
            <div className="section-three-box">
                <div className="icons-box">
                    <img src="./images/remind.png" alt="remind me" className="remind-icon-box"/>
               
                    <img src="./images/collab.png" alt="collabarator" className="collab-icon-box"/>
               
                   <ColorPopper action="update" id={props.note._id}  />
                
                    <img src="./images/image.png" alt="add" className="gallery-icon-box"/>
                
                    <img src="./images/archive.png" alt="archive" className="archive-icon-box" onClick={() =>archiveNote(props.note._id)}/>
               
                    <img src="./images/more.webp" alt="more options" className="more-icon-box"/>

                </div>
                </div>
           
        
            <div>
            
            <Modal 
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                <div sx={style} className="box" style={{outline: 'none'}} >
                <div className="section-one-box" >
                    <input id="modal-title" name="Title" variant="h6" component="h2" style={{color: 'black'}}onChange={editTitle}/>
                    <img src="./images/pin.png" alt="pin" className="pin-icon-modalbox"/>
                 </div>
                <input id="modal-description" name="Note" sx={{ mt: 2, color: 'black' }} onChange={editDescription} />
                <div className="section-three-modalbox">
                <div className="icons-modalbox">
                    <img src="./images/remind.png" alt="remind me" className="remind-icon-box"/>
               
                    <img src="./images/collab.png" alt="collabarator" className="collab-icon-box"/>
               
                   <ColorPopper action="update" id={props.note._id}  />
                
                    <img src="./images/image.png" alt="add" className="gallery-icon-box"/>
                
                    <img src="./images/archive.png" alt="archive" className="archive-icon-box" onClick={() =>archiveNote(props.note._id)}/>
               
                    <img src="./images/more.webp" alt="more options" className="more-icon-box"/>

                    <img src="./images/undo.png" alt="undo" className="undo-icon"/>
               
                    <img src="./images/redo.png" alt="redo" className="redo-icon"/>
                    
                    <button onClick={submitNote}>close</button>
                </div>
                </div>
        
                </div>
            </Modal>
            </div>
        </div>
        
    )
}


export default TakeNoteThree;