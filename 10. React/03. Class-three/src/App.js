import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import HeroSection from "./components/heroSection/HeroSection"
import { College as clg, School } from "./utils/constant"
// import * as data from "./utils/constant"
import smitWebsiteLink from "./utils/constant"

function App() {

  // let username = "Jhon"

  // const foo = (a) => {
  //   console.log("running...", a);
  // }

  let obj = { name: "" }

  // const cities = ["Karachi", "Karachi", "Lahore"]

  // let loader = false

  return (
    // <div>
    //   <h1>React</h1>
    //   {/* <h2>Welcome {username}</h2>  */}
    //   <h2>Welcome {obj.name}</h2> 
    //   <Header />
    //   <HeroSection />
    //   <Footer />
    //   <button onClick={() => foo("SMIT")}>Click</button>
    // </div>
    <div>
      {/* <ul>
        {cities.map((v, i) => <li key={i}>{v}</li>)}
      </ul> */}

      {/* {loader ? <h1>Loading...</h1> : <h1>Website</h1>} */}
      {/* {obj.name ? obj.name : "No Data Found"} */}
      {/* {obj.name || "No Data Found"} */}
      <h1>{clg}</h1>
      {/* <h1>{School}</h1> */}
      {/* <button onClick={() => sum(2, 3)}>Sum</button> */}
      {/* <h1>{smitWebsiteLink}</h1> */}
      {/* <h1>{data.College}</h1>
      <h1>{data.School}</h1> */}
      <Footer />
    </div>
  )
}

export default App