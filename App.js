import React ,{Fragment} from 'react';
import { BrowserRouter as Router , Switch , Route ,Link} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

 import About from './file/About';
 import Contact from './file/Contact';
 import Profile from './file/Profile';
 import Demo from './file/demo.jsx';
 import Pagina from './file/Pagination';
 import CurdArr from "./file/CurdArr";
 import CurdLocal from './file/CurdLocal';
 



class App extends React.Component {
  render(){
  return (
   <Router>
    <main>

    <Navbar color="light" light expand="md">
        
        
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile">Profile</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/CurdArr">CurdArr</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/CurdLocal">CurdLocal</NavLink>
            </NavItem>
            
           
            <NavItem>
              <NavLink href="/Pagination">Pagination</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/demo">Demo</NavLink>
            </NavItem>
         
           
          </Nav>
          
        
      </Navbar>
     

    <Route path="/" exact component={Home} />
    <Route path="/about"  component={About} />
    <Route path="/contact"  component={Contact} />
    <Route path="/profile"  component={Profile} />
    <Route path="/demo"  component={Demo} />
    <Route path="/Pagination"  component={Pagina} />
    <Route path="/CurdArr"  component={CurdArr} />
    <Route path="/CurdLocal"  component={CurdLocal} />

    </main>
</Router>
  );
}
}
export default App;

const Home = () => (
  <Fragment>
    <h1>Home</h1>
  
  </Fragment>
  );

// const myyy = () => (
//   <Fragment>
//     <About/>


//   </Fragment>
//   );

// const Contact = () => (
//   <Fragment>
//     <h1>Contact</h1>

//   </Fragment>
//   );