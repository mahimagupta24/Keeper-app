import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const[isExpand,setIsExpand]=useState()

    const[note,setNote] =useState({
        title:"",
        content:""
    })

    function changeHandler(event){
        const{name,value}=event.target;
        setNote(prevNote=>{
            return{
                ...prevNote,
                [name]:value
            }
        })
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault()
    }

    function expand(){
      setIsExpand(true);
    }

  return (
    <div>
      <form className="create-note">
        
        {isExpand?<input name="title"value={note.title}onChange={changeHandler} placeholder="Title" />:null} 
        <textarea name="content" onClick={expand}value={note.content} onChange={changeHandler}placeholder="Take a note..." rows={isExpand?3:1} />
        <Zoom in={isExpand}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
