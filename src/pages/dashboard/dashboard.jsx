import React from 'react';
import Header from '../../component/header/header';
import Drawer1 from '../../component/drawer/drawer';
import {getAllNotes} from '../../service/dataservice';

import TakeNoteOne from '../../component/takenoteone/takenoteone';
import TakeNotetwo from '../../component/takenotetwo/takenotetwo';
import TakeNoteThree from '../../component/takenotethree/takenotethree';
import './dashboard.css'
function  Dashboard (){

    const[takeNoteStatus, setTakeNoteStatus] = React.useState(true);

    const[noteLists, setNoteLists]= React.useState([]);

    const [drawer, setDrawer]= React.useState(false);

    const noteList = noteLists.map(note => <TakeNoteThree key={note._id} note={note}/>);

    const showDrawer = () => {
        setDrawer(!drawer);
    }

    const showNoteTwo = () => {
        setTakeNoteStatus(false);
    }
    const showNoteOne =() => {
        setTakeNoteStatus(true);
    }

    React.useEffect(() =>{
        getAllNotes().then((response) =>{
            console.log(response)
            setNoteLists (response 
                .data.data);
        }).catch((error)=> console.log(error));
    }, [])
    return (
        <div className='dashboard-container'>
            <Header showDrawer={showDrawer} />
            <Drawer1  drawer={drawer}/>
            <div className="dash-notes-container">
                {
                    takeNoteStatus ? <TakeNoteOne showNoteTwo={showNoteTwo}/> : <TakeNotetwo showNoteOne={showNoteOne}/>
                } 
            </div>
            <div className="NoteThree">{noteList} </div>
        </div>
    )
}

export default Dashboard;