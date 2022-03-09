import React ,{useState}from "react";



const dom = (
    <>
  <h1>Hello World</h1>
  <p>My name is ta</p>
  </>
  );

function Car(){
  const [color, setColor] = useState("red");
  const id = "630112418043";
    return (
      <>
      {dom}
      <p>ID : {id}</p>
      <p>My Color is {color}</p>
      <button onClick={
        ()=>{
          setColor("blue")
          }}
          >
            CHANGE</button>
      </>
    );
    
}
export default  Car