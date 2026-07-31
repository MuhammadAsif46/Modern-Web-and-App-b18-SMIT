import Card from "./components/card/Card"
import { College as clg, School } from "./utils/constant"
// import * as data from "./utils/constant"
import smitWebsiteLink from "./utils/constant"
import "./App.css"
import carImage from "./images/CAR 1.jpg"
import tShirtImage from "./images/black t shirt.jpg"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {

//   const foo = (username) => {
//     console.log("test", username);
//   }

//   return (
//     <div className="app">
//       {/* <Card 
//         image={carImage} 
//         title={"Civic"} 
//         description={"A card description is a short text field used to label. "} 
//         foo={foo}
//         /> */}
//       {/* <Card image={tShirtImage} title={"Adidas"} description={"This description is a short "}/> */}
//       {/* <Card />
//       <Card /> */}

//       {/* <Button variant="primary">Primary</Button> */}
//       {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Navbar
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Link
//                 </a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Dropdown
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Action
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Another action
//                     </a>
//                   </li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Something else here
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link disabled" aria-disabled="true">
//                   Disabled
//                 </a>
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav> */}

//       {/* <div className="bg-primary text-white p-4">
//           hello world
//       </div> */}

      

//     </div>
//   )
// }

// export default App



import React from 'react';
import { Input, QRCode, Space } from 'antd';
import Login from "./components/login/Login"
const App = () => {
  // const [text, setText] = React.useState('https://ant.design/');
  return (
    // <Space vertical align="center">
    //   <QRCode value={"https://www.facebook.com"} color="red" bgColor="aqua" size={300}/>
    //   {/* <Input placeholder="-" maxLength={60} value={text} onChange={e => setText(e.target.value)} /> */}
    // </Space>
    <Login />
  );
};
export default App;