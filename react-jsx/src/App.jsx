import React from 'react'
import Header from './Header';
import "./App.css"
const App = () => {
  // let name = "sam";
  // let age = 23
  // function greet(){
  //   return "My Name is uffexx";
  // }

  let arr = ["sam", "uffexx", "ali", "khan", "samreen"];
  return (
    <>
      {/* <h1>Hello {name} {greet()}</h1> */}
      {/* <h1>{age >= 18 ? 'You can drive': 'You cannot drive'}</h1> */}

      {/* <h1 style={{
        backgroundColor:"teal",
        fontSize:"82px",
      }}>Hello Style</h1> */}

      <div>
        {/* {age >= 18 ? <p style={{color:"green"}}>You can vote</p> :<p style={{color:"red"}}>You can't vote</p> } */}

        {/* short circuiting */}
        {/* {true && <p>rare paragraph</p>} */}

      
      {/* {arr.map((items, idx, arr)=>{
        return <h1 key={items}>{items}</h1>
      })} */}

      {/* <Header title="alpha"/> */}

      {React.createElement("h1", null, "hello, world")}
      

      </div>
    </>
  )
}

export default App