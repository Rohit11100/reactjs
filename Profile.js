import React, { Component, useState, useEffect } from "react";

import { Container, Row, Col, Table } from 'reactstrap';

import moment from 'moment';





class Profile extends Component {
    render() {




        return (
            <>




                <h1>profile page is here</h1>


                <Weather />
               


                <Myyy />


               







            </>





        )
    }
}

export default Profile



function Myyy() {
    const [data, setData] = useState([])

    const mybtn = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                // console.log(json);

                setData(json);
            });




    };




    return (


        <>
            <button onClick={mybtn} >click me plz zzz</button>
            <table>
                <tbody>
                    {


                        data.filter((q) => {
                            return q.completed === true
                        }).map((w) => {
                            {/* console.log(w); */ }
                            return (<tr key={w.id}>
                                <td> UserId: {w.userId}</td>
                                <td> Id : {w.id}</td>
                                <td> title : {w.title}</td>
                                <td> completed : {w.completed}</td>



                            </tr>

                            )
                        })
                    }

                </tbody>



            </table>


        </>
    )



}


function Weather() {
    const [data, setData] = useState([]);

    const [search , setSearch]=useState('mohali');


    const [tb1, setTb1]=useState(false);
    const [tb2, setTb2]=useState(false);
    const [tb3, setTb3]=useState(false);
    const [tb4, setTb4]=useState(false);
    const [tb5, setTb5]=useState(false);


    

    let myarr = []
    let myfiveimg = []

    const myfun = async () => {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=7318041d5176e8a5b2c1c329c0ec49ab`;

        const response = await fetch(url);

        const json = await response.json();

        //console.log(json.list);
        let dd = json.list;
       
      setData(dd)

    }

    useEffect(() => { myfun() }, [])
    let darr = []



    if(!data){
        console.log('city does not found')
    }else{
    data.map((t) => {
        //    console.log(t.weather[0].icon);
        darr.push({
            my: t.main.temp_min,
            mx: t.main.temp_max,
            im: t.weather[0].icon

        })
    })
}

    var dmmone = darr.sort((a, b) => b - a).slice(0, 1);
    var dm2 = darr.sort((a, b) => b - a).slice(1, 2);
    var dm3 = darr.sort((a, b) => b - a).slice(2, 3);

    var dm4 = darr.sort((a, b) => b - a).slice(3, 4);
    var dm5 = darr.sort((a, b) => b - a).slice(4, 5);







console.log(search);


 let today=moment().format('dddd');


 let tw =moment().add(1,'days')
 let two = tw.format('dddd');

 let th=moment().add(2,'days');
 let three=th.format('dddd');

 let fo=moment().add(3,'days');
 let four=fo.format('dddd');

 let fi=moment().add(4,'days');
 let five=fi.format('dddd');


 const mysearch=()=>{

    myfun()

 }
 
 

    return (
        <>

            <h5>dhdfhdfshjsdfjhdfsdsf</h5>
            <div>
                <input type='search '  onKeyUp={(event)=> {setSearch(event.target.value) ; mysearch() }  }  />

               
            </div>
            <div style={{
                justifyContent:'center',
               alignItems:'center',
            }}>
            <h5>{search}</h5>
            </div>
            

          {!data ? (
                  <p>no Data fount</p>
              ):(
                <Container>
                <Row xs='5'>
                <Col  onClick={()=> { setTb1(!tb1) ; setTb2(false) ; setTb3(false); setTb4(false); setTb5(false) ;          }} style={{
                                    backgroundColor:'skyblue',
                                    margin:'10px',
                                    width:'200px',
                                    height:'150px',
                                    justifyContent:'center'

                                }}  >
                    {
                        dmmone.map((e) => {
                            {/* console.log(e.my);
                            console.log(e.mx);
                            console.log(e.im); */}

                            return(
                                

                        <Container key={e.my}>
                        <h6>{today}</h6>
                            <img src= {  `http://openweathermap.org/img/wn/` + e.im+ `.png ` }    alt="display image" style={{
                                width:'150px',
                               
                                height:'100px'
                                
                            }} />
                            <Row xs='2'>
                                <Col> {Number(e.my - 273.15).toFixed(1)}'C </Col>
 
                                <Col>  {Number(e.mx- 273.15).toFixed(2)}'C </Col>

                            </Row>
                        </Container>
                   

                            )
                        })


                    }
                    </Col>


                    <Col onClick={()=> { setTb2(!tb2) ; setTb1(false) ;setTb3(false);setTb4(false); setTb5(false) ;            }} style={{
                                    backgroundColor:'skyblue',
                                    margin:'10px',
                                    width:'200px',
                                    height:'150px',
                                    justifyContent:'center'

                                }}>
                    {
                        dm2.map((e) => {
                            {/* console.log(e.my);
                            console.log(e.mx);
                            console.log(e.im); */}

                            return(
                                

                        <Container key={e.my}>
                        <h6>{two} </h6>
                            <img src= {  `http://openweathermap.org/img/wn/` + e.im+ `.png ` }    alt="display image" style={{
                                width:'150px',
                               
                                height:'100px'
                                
                            }} />
                            <Row xs='2'>
                                <Col> {Number(e.my - 273.15).toFixed(1)}'C </Col>
 
                                <Col>  {Number(e.mx- 273.15).toFixed(2)}'C </Col>

                            </Row>
                        </Container>
                   

                            )
                        })


                    }
                    </Col>

                    <Col  onClick={()=> { setTb2(false) ; setTb1(false) ;  setTb3(!tb3);setTb4(false); setTb5(false) ;     }}  style={{
                                    backgroundColor:'skyblue',
                                    margin:'10px',
                                    width:'200px',
                                    height:'150px',
                                    justifyContent:'center'

                                }}>
                    {
                        dm3.map((e) => {
                            {/* console.log(e.my);
                            console.log(e.mx);
                            console.log(e.im); */}

                            return(
                                

                        <Container key={e.my}>
                        <h6>{three}  </h6>
                            <img src= {  `http://openweathermap.org/img/wn/` + e.im+ `.png ` }    alt="display image" style={{
                                width:'150px',
                               
                                height:'100px'
                                
                            }} />
                            <Row xs='2'>
                                <Col> {Number(e.my - 273.15).toFixed(1)}'C </Col>
 
                                <Col>  {Number(e.mx- 273.15).toFixed(2)}'C </Col>

                            </Row>
                        </Container>
                   

                            )
                        })


                    }
                    </Col>

                    <Col   onClick={()=> { setTb2(false) ; setTb1(false) ; setTb3(false); setTb4(!tb4); setTb5(false) ;     }}  style={{
                                    backgroundColor:'skyblue',
                                    margin:'10px',
                                    width:'200px',
                                    height:'150px',
                                    justifyContent:'center'

                                }}>
                    {
                        dm4.map((e) => {
                            {/* console.log(e.my);
                            console.log(e.mx);
                            console.log(e.im); */}

                            return(
                                

                        <Container key={e.my}>
                        <h6>{four} </h6>
                            <img src= {  `http://openweathermap.org/img/wn/` + e.im+ `.png ` }    alt="display image" style={{
                                width:'150px',
                               
                                height:'100px'
                                
                            }} />
                            <Row xs='2'>
                                <Col> {Number(e.my - 273.15).toFixed(1)}'C </Col>
 
                                <Col>  {Number(e.mx- 273.15).toFixed(2)}'C </Col>

                            </Row>
                        </Container>
                   

                            )
                        })


                    }
                    </Col>

                    <Col  onClick={()=> { setTb2(false) ; setTb1(false) ;  setTb3(false); setTb4(false); setTb5(!tb5)      }}  style={{
                                    backgroundColor:'skyblue',
                                    margin:'10px',
                                    width:'200px',
                                    height:'150px',
                                    justifyContent:'center'

                                }}>
                    {
                        dm5.map((e) => {
                            {/* console.log(e.my);
                            console.log(e.mx);
                            console.log(e.im); */}

                            return(
                                

                        <Container key={e.my}>
                        <h6> {five} </h6>
                            <img src= {  `http://openweathermap.org/img/wn/` + e.im+ `.png ` }    alt="display image" style={{
                                width:'150px',
                               
                                height:'100px'
                                
                            }} />
                            <Row xs='2'>
                                <Col> {Number(e.my - 273.15).toFixed(1)}'C </Col>
 
                                <Col>  {Number(e.mx- 273.15).toFixed(2)}'C </Col>

                            </Row>
                        </Container>
                   

                            )
                        })


                    }
                    </Col>





                </Row>

            </Container>

          


              )}

              {
               tb1? <One search={search}/> :null
           }

           {
               tb2? <Two search={search}/> :null
           }
           {
               tb3? <Three  search={search}/> :null
           }
           {
               tb4? <Four  search={search}/> :null
           }

           {
               tb5? <Five search={search} /> :null
           }







        </>
    )



}


function One(props){
    const [data, setData] = useState([]);
    console.log(props.search);

    const myfun = async () => {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.search}&appid=7318041d5176e8a5b2c1c329c0ec49ab`;

        const response = await fetch(url);

        const json = await response.json();

        //console.log(json.list);
        let dd = json.list;
      setData(dd)

    }

    useEffect(() => { myfun() }, [])

    let darr = []
    data.map((t) => {
        //    console.log(t.weather[0].icon);
       
        
        darr.push({
            min: t.main.temp_min,
            max: t.main.temp_max,
            date:t.dt_txt.slice(0,10),
            time:t.dt_txt.slice(11,19)
           

        })
    })
    
    // const d = new Date();
    // let year = d.getFullYear();
    // let moun = d.getMonth() + 1;
    // let ddate = d.getDate();
   

    

    let fulldate = moment().format('YYYY-MM-DD');
    console.log(fulldate);

let far=[]
darr.map((w)=>{
        let date=w.date
        if(fulldate==date){
           
            far.push(w)
            
       
            
           
        }
        
    })
    

   
  


    return(

        <>
        <table>
        <thead>
        <tr>
        <th> Time</th>
        <th>Min Temp</th>
        <th>Max Temp</th>
</tr>
        </thead>

            <tbody>
                {
                    far.map((y)=>{
                      
                        return(
                            <tr key={y.min}>
                        <td>{y.time}</td>
                        <td>{Number(y.min - 273.15).toFixed(1)}'C</td>
                        <td>{Number(y.max - 273.15).toFixed(2)}'C</td>


                        </tr>

                        )})
                    
                }
            </tbody>
        </table>
 
        

        </>
    )

}

function Two(props){
    console.log(props.search);
    const [data, setData] = useState([]);

    const myfun = async () => {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.search}&appid=7318041d5176e8a5b2c1c329c0ec49ab`;

        const response = await fetch(url);

        const json = await response.json();

        //console.log(json.list);
        let dd = json.list;
      setData(dd)

    }

    useEffect(() => { myfun() }, [])

    let darr = []
    data.map((t) => {
        //    console.log(t.weather[0].icon);
       
        
        darr.push({
            min: t.main.temp_min,
            max: t.main.temp_max,
            date:t.dt_txt.slice(0,10),
            time:t.dt_txt.slice(11,19)
           

        })
    })
    
    // const d = new Date();
    // let year = d.getFullYear();
    // let moun = d.getMonth();
    // let ddate = d.getDate();
   
    let dd=moment().add(1,'days');
    let fulldate =dd.format('YYYY-MM-DD');
    

    // let fulldate = year + '-' + (moun+1) + '-0' + (ddate+1);

let far=[]
darr.map((w)=>{
        let date=w.date
        if(fulldate==date){
           
            far.push(w)
            
       
            
           
        }
        
    })
    

   
  


    return(

        <>
        <table>
        <thead>
        <tr>
        <th> Time</th>
        <th>Min Temp</th>
        <th>Max Temp</th>
</tr>
        </thead>

            <tbody>
                {
                    far.map((y)=>{
                       
                        return(
                            <tr key={y.min}>
                        <td>{y.time}</td>
                        <td>{Number(y.min - 273.15).toFixed(1)}'C</td>
                        <td>{Number(y.max - 273.15).toFixed(2)}'C</td>


                        </tr>

                        )})
                    
                }
            </tbody>
        </table>
 
        

        </>
    )

}


function Three(props){
    const [data, setData] = useState([]);
    console.log(props.search);

    const myfun = async () => {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.search}&appid=7318041d5176e8a5b2c1c329c0ec49ab`;
        const response = await fetch(url);

        const json = await response.json();

        //console.log(json.list);
        let dd = json.list;
      setData(dd)

    }

    useEffect(() => { myfun() }, [])

    let darr = []
    data.map((t) => {
        //    console.log(t.weather[0].icon);
       
        
        darr.push({
            min: t.main.temp_min,
            max: t.main.temp_max,
            date:t.dt_txt.slice(0,10),
            time:t.dt_txt.slice(11,19)
           

        })
    })
    
//     const d = new Date();
//     let year = d.getFullYear();
//     let moun = d.getMonth();
//     let ddate = d.getDate();
//    let fulldate = year + '-' + (moun+1) + '-0' + (ddate+2);


let dd=moment().add(2,'days');
let fulldate =dd.format('YYYY-MM-DD');



let far=[]
darr.map((w)=>{
        let date=w.date
        if(fulldate==date){
           
            far.push(w)
            
       
            
           
        }
        
    })
    

   
  


    return(

        <>
        <table>
        <thead>
        <tr>
        <th> Time</th>
        <th>Min Temp</th>
        <th>Max Temp</th>
        </tr>

        </thead>

            <tbody>
                {
                    far.map((y)=>{
                       
                        return(
                            <tr key={y.min}>
                        <td>{y.time}</td>
                        <td>{Number(y.min - 273.15).toFixed(1)}'C</td>
                        <td>{Number(y.max - 273.15).toFixed(2)}'C</td>


                        </tr>

                        )})
                    
                }
            </tbody>
        </table>
 
        

        </>
    )

}
function Four(props){
    const [data, setData] = useState([]);
    console.log(props.search);

    const myfun = async () => {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.search}&appid=7318041d5176e8a5b2c1c329c0ec49ab`;

        const response = await fetch(url);

        const json = await response.json();

        //console.log(json.list);
        let dd = json.list;
      setData(dd)

    }

    useEffect(() => { myfun() }, [])

    let darr = []
    data.map((t) => {
        //    console.log(t.weather[0].icon);
       
        
        darr.push({
            min: t.main.temp_min,
            max: t.main.temp_max,
            date:t.dt_txt.slice(0,10),
            time:t.dt_txt.slice(11,19)
           

        })
    })
    
//     const d = new Date();
//     let year = d.getFullYear();
//     let moun = d.getMonth();
//     let ddate = d.getDate();
//    let fulldate = year + '-' + (moun+1) + '-0' + (ddate+3);



let dd=moment().add(3,'days');
let fulldate =dd.format('YYYY-MM-DD');

let far=[]
darr.map((w)=>{
        let date=w.date
        if(fulldate==date){
           
            far.push(w)
            
       
            
           
        }
        
    })
    

   
  


    return(

        <>
        <table>
        <thead>
        <tr>
        <th> Time</th>
        <th>Min Temp</th>
        <th>Max Temp</th>
        </tr>

        </thead>

            <tbody>
                {
                    far.map((y)=>{
                      
                        return(
                            <tr key={y.min} >
                        <td>{y.time}</td>
                        <td>{Number(y.min - 273.15).toFixed(1)}'C</td>
                        <td>{Number(y.max - 273.15).toFixed(2)}'C</td>


                        </tr>

                        )})
                    
                }
            </tbody>
        </table>
 
        

        </>
    )

}
function Five(props){
    const [data, setData] = useState([]);
    console.log(props.search);

    const myfun = async () => {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.search}&appid=7318041d5176e8a5b2c1c329c0ec49ab`;

        const response = await fetch(url);

        const json = await response.json();

        //console.log(json.list);
        let dd = json.list;
      setData(dd)

    }

    useEffect(() => { myfun() }, [])

    let darr = []
    data.map((t) => {
        //    console.log(t.weather[0].icon);
       
        
        darr.push({
            min: t.main.temp_min,
            max: t.main.temp_max,
            date:t.dt_txt.slice(0,10),
            time:t.dt_txt.slice(11,19)
           

        })
    })
    
    
    // const d = new Date();
    // let year = d.getFullYear();
    // let moun = d.getMonth();
    // let ddate = d.getDate();
    // let fulldate = year + '-' + (moun+1) + '-' + (ddate+4);


    let dd=moment().add(4,'days');
    let fulldate =dd.format('YYYY-MM-DD');



let far=[]
darr.map((w)=>{
        let date=w.date
        if(fulldate==date){
           
            far.push(w)
            
       
            
           
        }
        
    })
    

   
  


    return(

        <>
        <table>
        <thead>
        <tr>
        <th> Time</th>
        <th>Min Temp</th>
        <th>Max Temp</th>
        </tr>

        </thead>

            <tbody>
                {
                    far.map((y)=>{
                        
                        return(
                            <tr key={y.min}>
                        <td>{y.time}</td>
                        <td>{Number(y.min - 273.15).toFixed(1)}'C</td>
                        <td>{Number(y.max - 273.15).toFixed(2)}'C</td>


                        </tr>

                        )})
                    
                }
            </tbody>
        </table>
 
        

        </>
    )

}