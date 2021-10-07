import React , { useState } from 'react'
import moment from 'moment';

const Demo = () => {
    const [show, setShow]=useState(false);
    const [show1, setShow1]=useState(false);
    let dd=moment().add(1,'days');
    let fulldate =dd.format('YYYY-MM-DD');
    let da=moment().format('dddd')

    return (
        <div>
        <h1>hii this is demo</h1>
        <h4>{fulldate}</h4>
        <h4>{da}</h4>
        <div>
           {
               show? <h3>Toggle here one</h3>:null
           }

           {
               show1? <h3>Toggle here two</h3>:null
           }
        </div>
        

        <button onClick={()=>{setShow(!show); setShow1(false)}}> click me here</button>

        <button onClick={()=>{ setShow(false); setShow1(!show1); }}> click me me 2</button>


        
            
        </div>
    )
}

export default Demo
