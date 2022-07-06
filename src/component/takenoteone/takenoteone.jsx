import React from 'react';
import './takenoteone.css'

function TakeNoteOne (props){

    const openTakeNoteTwo = () => {
        props.showNoteTwo();
    }
    
    return(
        <div className='Container1' onClick={openTakeNoteTwo}>
        <div className='takenoteone'>
             <div className="note-text">Take a Note...</div>
             <div className="icons1">
                    <img src="./images/new-list.png" alt="new-list" className="new-list" />
                    <img src="./images/brush.png" alt="new-list using paint" className="brush-icon"/>
                    <img src="./images/image.png" alt="new-list " className="image-icon"/>
            </div>
        </div>
        </div>
    )
}

export default TakeNoteOne;