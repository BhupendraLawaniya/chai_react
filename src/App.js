import {useState} from "react";
import './App.css';

function App() {
  const [color, setColor] = useState("skyblue");
  return (
 <div className="w-full h-screen duration-200 " style={{backgroundColor:color}} >
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
    <div className="flex flex-wrap justify-center gap-3 bg-white  rounded-3xl px-6 py-4">
      <button onClick={()=>setColor("red")}  className="outline-none px-4 py-1  rounded-full  text-white  shadow-lg" style={{backgroundColor:"red"}}> Red </button>
      <button onClick={()=>setColor("Brown")} className="outline-none px-4 py-1  rounded-full  text-white  shadow-lg" style={{backgroundColor:"Brown"}}> Brown </button>
      <button onClick={()=>setColor("Green")} className="outline-none px-4 py-1  rounded-full  text-white  shadow-lg" style={{backgroundColor:"Green"}}> Green </button>
      <button onClick={()=>setColor("Lavender")} className="outline-none px-4 py-1  rounded-full  text-white  shadow-lg" style={{backgroundColor:"Lavender"}}> Lavender </button>
      <button onClick={()=>setColor("Teal")} className="outline-none px-4 py-1  rounded-full  text-white  shadow-lg" style={{backgroundColor:"Teal"}}> Teal </button>
      <button onClick={()=>setColor("Pink")} className="outline-none px-4 py-1  rounded-full  text-white  shadow-lg" style={{backgroundColor:"Pink"}}> Pink </button>
      <button onClick={()=>setColor("Silver")} className="outline-none px-4 py-1  rounded-full  text-white  shadow-lg" style={{backgroundColor:"Silver"}}> Silver </button>
      <button onClick={()=>setColor("Orange")} className="outline-none px-4 py-1  rounded-full  text-white  shadow-lg" style={{backgroundColor:"Orange"}}> Orange </button>
      <button onClick={()=>setColor("Purple")} className="outline-none px-4 py-1  rounded-full  text-white  shadow-lg" style={{backgroundColor:"Purple"}}> Purple </button>





      </div>
  </div>

 </div>
  );
}

export default App;
