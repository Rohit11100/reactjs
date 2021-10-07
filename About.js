import React, { Component } from "react";
import { useState } from "react";

class About extends Component {

  render() {
    const data="hello"
    return (
      <>
        <h1>this is about</h1>
        <table>
  <tr>
    <th></th>
    <th>{data}Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
      </>
    );
  }
}

export default About;







// function MyForm() {

//     const [name, setName] = useState("");

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       alert('The name you entered was:' + name)
//       console.log(name);
//     }

//     return (
//       <form onSubmit={handleSubmit}>
//         <label>Enter your name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <input type="submit" />
//       </form>

//     )
//   }

// function Namee() {
//   const [inputs, setinput] = useState("");

//   const handelchange = (event) => {
//       const name = event.target.name;
//       const value = event.target.value;

//       setinput(values => ({...values , [name]:value}))

//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Enter Your name
//         <input type="text" name="username" value={inputs.username || ""} onChange={handelchange} />
//       </label>

//       <label>
//         Enter Your name
//         <input  type="number"  name="age"  value={inputs.age || ""}  onChange={handelchange} />
//       </label>

//       <input type="submit" />
//     </form>
//   );
// }


// function Selec(){
//     const [myCar , setcar]= useState('');

//  const handleChange= (event)=>{
//      setcar(event.target.value);



//  }
//  console.log(myCar);
//     return(
//       <form>


//         <select value={myCar} onChange={handleChange}>
//         <option value="None">Select Option</option>
//         <option value="Ford">Ford</option>
//         <option value="Volvo">Volvo</option>
//         <option value="Fiat">Fiat</option>
//       </select>



//       </form>



//     )

// }