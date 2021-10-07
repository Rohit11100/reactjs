import React, { Component } from "react";
import { useState, useEffect } from "react";

class Contact extends Component {
  render() {



    const cars = ["Ford", "BMW", "Audi"];

    return (
      <>
        <h1>Contact page is here</h1>
        {cars.length > 0 && <h2>hiiii {cars[0]}</h2>}

        <Myfun />
        <Myfff />
        <Timer />

        <Mytime />
        <Myfundd />
        <Users />


      </>
    );
  }
}

export default Contact;

const Users = () => {
  let test = [
    {
      _id: "614c2258c685a60eb773be7b",
      updatedAt: "2021-09-23T06:44:40.673Z",
      createdAt: "2021-09-23T06:44:40.673Z",
      pouchName: "Small",
      price: 120,
      deliveryType: "Express",
      limit: 12,
      additionalPrice: 0,
      __v: 0,
      isNCR: true,
    },
    {
      _id: "614c2276c685a60eb773be7c",
      updatedAt: "2021-09-23T07:33:53.915Z",
      createdAt: "2021-09-23T06:45:10.884Z",
      pouchName: "large",
      price: 1111,
      deliveryType: "standard",
      limit: 10,
      additionalPrice: 0,
      __v: 0,
      isNCR: true,
    },
    {
      _id: "614c5523fdd72d07055f45b4",
      updatedAt: "2021-09-23T10:21:23.879Z",
      createdAt: "2021-09-23T10:21:23.879Z",
      pouchName: "Medium",
      price: 150,
      deliveryType: "standard",
      limit: 10,
      additionalPrice: 0,
      __v: 0,
      isNCR: false,
    },
    {
      _id: "614c5a53fdd72d07055f45b5",
      updatedAt: "2021-09-23T10:43:31.176Z",
      createdAt: "2021-09-23T10:43:31.176Z",
      pouchName: "Medium",
      price: 120,
      deliveryType: "Express",
      limit: 10,
      additionalPrice: 0,
      __v: 0,
      isNCR: true,
    },
    {
      _id: "614c5a62fdd72d07055f45b6",
      updatedAt: "2021-09-23T10:43:46.184Z",
      createdAt: "2021-09-23T10:43:46.184Z",
      pouchName: "Small",
      price: 150,
      deliveryType: "Gencar",
      limit: 10,
      additionalPrice: 0,
      __v: 0,
      isNCR: false,
    },
    {
      _id: "614c5a77fdd72d07055f45b7",
      updatedAt: "2021-09-23T10:44:07.297Z",
      createdAt: "2021-09-23T10:44:07.297Z",
      pouchName: "large",
      price: 150,
      deliveryType: "standard",
      limit: 12,
      additionalPrice: 0,
      __v: 0,
      isNCR: true,
    },
    {
      _id: "614c5b78fdd72d07055f45b8",
      updatedAt: "2021-09-23T10:48:24.097Z",
      createdAt: "2021-09-23T10:48:24.097Z",
      pouchName: "gencar",
      price: 150,
      deliveryType: "ahjhj",
      limit: 12,
      additionalPrice: 0,
      __v: 0,
      isNCR: true,
    },
    {
      _id: "614c5b83fdd72d07055f45b9",
      updatedAt: "2021-09-23T10:48:35.995Z",
      createdAt: "2021-09-23T10:48:35.995Z",
      pouchName: "gencar",
      price: 152,
      deliveryType: "Express",
      limit: 11,
      additionalPrice: 0,
      __v: 0,
      isNCR: true,
    },
    {
      _id: "614c5baffdd72d07055f45ba",
      updatedAt: "2021-09-23T10:49:19.231Z",
      createdAt: "2021-09-23T10:49:19.231Z",
      pouchName: "Small",
      price: 152,
      deliveryType: "ahjhj",
      limit: 12,
      additionalPrice: 12,
      __v: 0,
      isNCR: true,
    },
    {
      _id: "614c6034fdd72d07055f45bb",
      updatedAt: "2021-09-23T11:08:36.134Z",
      createdAt: "2021-09-23T11:08:36.134Z",
      pouchName: "gencar 2",
      price: 150,
      deliveryType: "done",
      limit: 11,
      additionalPrice: 0,
      __v: 0,
      isNCR: true,
    },
    {
      _id: "614ec43c90b85922634e722b",
      updatedAt: "2021-09-25T06:39:56.812Z",
      createdAt: "2021-09-25T06:39:56.812Z",
      pouchName: "Small",
      price: 120,
      deliveryType: "Express",
      limit: 12,
      additionalPrice: 0,
      __v: 0,
      isNCR: true,
    },
    {
      _id: "6155679268d6340f40a3de75",
      updatedAt: "2021-09-30T07:30:26.869Z",
      createdAt: "2021-09-30T07:30:26.869Z",
      pouchName: "Small",
      price: 150,
      deliveryType: "Express",
      limit: 10,
      additionalPrice: 0,
      __v: 0,
      isNCR: true,
    },
    {
      _id: "6155679268d6340f40a3de75",
      updatedAt: "2021-09-30T07:30:26.869Z",
      createdAt: "2021-09-30T07:30:26.869Z",
      pouchName: "Small12555",
      price: 150,
      deliveryType: "Express",
      limit: 10,
      additionalPrice: 0,
      __v: 0,
      isNCR: true,
    },
  ];
  let main = [];
  let arrs = [];
  let myary = [];


  let ff = test.map((r) => {
    arrs.push(r.pouchName);
  });

  let item = test.map(i => {
    const nn = i.pouchName;
    let myag = [];
    let secfil = test.filter(j => j.pouchName == nn)
    myag.name = nn;
    myag.obj = secfil;
    return myag
  })

  let fill = item.filter((k) => {
    //  console.log(k);
    main[(k.name)] = k.obj

  })
  // console.log(main);


  const counts = [];
  arrs.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

  myary.push(counts)


  // myary.map((e) => {
  //   console.log(e);
  // })
  let keyss = [];
  myary.map((e) => {
    let mm = Object.keys(e);

    keyss.push(mm)
  })

  main.map((re) => {
    console.log(re);
  })
  // console.log(arrs);

  // for (const i in main) {
  //  console.log(i);
  // }

  let dd = Object.keys(main);
  // console.log(dd);



  return(
    <>

    <h2>gggggggggggggggggggggg</h2>

    <table>
    <tbody>
    <tr>

    {
      dd.map((ww)=>{
        console.log(ww)

        let qq=main[ww].map((ee)=>{
          console.log(ee)
          return(
                  <tr>
                  <td>{ee.price}</td>
                  <td>{ee.pouchName}</td>
                  
                  </tr>
            
          )
        })

        return (
          <td style={{
           
            position:'relative',
            width:'100px',
          }}>
                    <table style={{
                       
                       position:'absolute',

                    }}>
                        <tr>
                            <th>{ww}</th>
                        </tr>
                        <tr>
                            <td>{qq}</td>

                        </tr>
                    </table>
                </td>

        )
      })
    }


    </tr>



    </tbody>



    </table>

    </>







  )

  

 
 
  
}



 





function Myfundd() {
  const [count, setCount] = useState(0);
  const [calculation, setcalculation] = useState(0);
  useEffect(() => {
    setcalculation(() => count * 2);
  }, [count]);

  return (
    <>
      <p> count:::: {count}</p>
      <button onClick={() => setCount((e) => e + 1)}> Click Me </button>

      <p> calculation ::::{calculation}</p>
    </>
  );
}

function Myfff() {
  const [color, setcolor] = useState("red");

  return (
    <>
      <h2>hiiii : : : : {color}</h2>
      <button onClick={() => setcolor("pink")}> pink</button>
      <button onClick={() => setcolor("green")}> green</button>
      <button onClick={() => setcolor("white")}> white</button>
      <button onClick={() => setcolor("blue")}> blue</button>
      <button onClick={() => setcolor("Voilate")}> Voilate</button>
    </>
  );
}

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I have rendered {count} times!</h1>;
}

function Mytime() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h4> ::::: {count}</h4>;
}

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>GOAL!</h1>;
}

function Myfun(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
}
