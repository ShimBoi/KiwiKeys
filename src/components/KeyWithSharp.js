import '../App.css';
import BlackKey from './BlackKey';
import {playNote} from './Keyboard';
import {useState} from 'react';
import {sampler} from './Keyboard';

function Key(props) {
    let [color, setColor] = useState('#fffff0');

    return(
        <div 
        className="key-with-sharp" 
        style={{backgroundColor: color}} 
        onMouseDown={(e)=>{
            console.log("Event target: " + e.target.className);
            
            if(e.target.className !== 'black-key'){
                setColor('#ADD8E6');
                playNote(props.note);   
                setTimeout(()=>{
                    setColor('#fffff0');
                }, 300)
            }
        }}
        onMouseUp={(e) => {
            if(e.target.className !== 'black-key'){
                console.log('mouse up')
                sampler.releaseAll();
            }
        }}
        >
        
        <BlackKey sharp={props.sharp}/>
        </div>
    )
}

export default Key;