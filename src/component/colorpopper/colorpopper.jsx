import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import './colorpopper.css';
import { updateNote } from '../../service/dataservice';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';

export default function ColorPopper(props) {

    const pickColour = (color) => {
        if(props.action === 'create'){
            props.getColor(color);
        }else if(props.action === 'update'){
            let colorObj = {_id: [props.id], color:color}
            updateNote(colorObj, props.id).then((updatedNote) => console.log(updatedNote)).catch((error)=> console.log(error))
        }

    }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const colorArray = ['#e2725b', '#ffae42', '#fefe33', '#77dd77', '#40e0d0', '#a4dded', '#77b5fe', '#ba55d3', '#ffb3de', '#c19a6b', '#d3d3d3']

  return (
    <div className="background-colour-icon-container" >
        <ColorLensOutlinedIcon alt="color" className="background-colour-icon" onClick={handleClick}/>
        <Popper id={id} open={open} anchorEl={anchorEl} className="color-popper">
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }} className="color-popper-box">
                {colorArray.map((color) => (<div style={{height: 35, width: 35, borderRadius: 100, backgroundColor: color, marginLeft: 2}} onClick={() => pickColour(color)}></div>))}
            </Box>
        </Popper>
    </div>
  );
}