import {useState, useCallback, useEffect, useRef} from 'react';


function App() {
  const [number, setNumber] = useState(false);
  const [length, setLength] = useState(8);
  const [character, setCharacter] = useState(false);
  const [passwords, setPassword] = useState('');

  const passwordsRef = useRef(null);

  const passwordGenerator = useCallback( () =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) str += "1234567890";
    if(character) str += "*&%$#@!~/"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor ( Math.random()* str.length+1 )
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, number, character,setPassword])

  const copyToClipBord = useCallback(()=>{
    passwordsRef.current?.select();
    passwordsRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(passwords)
  },[passwords])

  useEffect(()=>{
    passwordGenerator()
  },[number, character, length, passwordGenerator])

  return (
   <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-8 text-black bg-gray-500 mt-[5%]'>
     <h1 className='text-center my-3 text-white '>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
     
      <input 
      type='text' 
      value={passwords}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      ref={passwordsRef}
      readOnly
      >
      </input>
      <button  className="bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-200 active:bg-blue-600 focus:outline-none"
      onClick={copyToClipBord}
      >Copy</button>
    </div>


    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        ></input>
        <label>Length: {length}</label>
      </div>


      <div className='flex items-center gap-x-1'>
        <input
        type='checkbox'
        defaultChecked={number}
        onChange={(e)=>{setNumber((prev => !prev))}}
        >
        </input>
        <label>Number</label>
      </div>


      <div className='flex items-center gap-x-1'>
        <input
        type='checkbox'
        defaultChecked={character}
        onChange={(e)=>{setCharacter((prev => !prev))}}
        ></input>
        <label>Character</label>

      </div>
    </div>
   </div>
  );
}

export default App;
