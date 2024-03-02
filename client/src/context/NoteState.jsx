import React,{useState} from 'react'
import NoteContext from './notecontext.jsx'

const NoteState = (props) => {
    const s1 = {
        "name": "mansa",
        "class": "final"
    }
    const [state, setState] = useState(s1)
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "mukesh"
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState