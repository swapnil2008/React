import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length,setLength] = useState(8);
  const [useNum,setUseNum] = useState(false);
  const [useChar,setUseChar] = useState(false);
  const [password,SetPassword] = useState("");
  
  //useRef Hook
  const passwordRef= useRef(null)


  const passwordGenerator= useCallback(
    ()=>{
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(useNum) str += "0123456789"
      if(useChar) str += "~_[]{}()<>*+-=!?^$|@#$%^&";

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random()*str.length+1);
        pass += str.charAt(char)
      }
      SetPassword(pass)
    }
    ,[length,useNum,useChar,SetPassword])
    
    const copyPassword = useCallback(()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
    },[password])


    useEffect(()=>{passwordGenerator()},[length,useNum,useChar,passwordGenerator])

  return (
    <>
   <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-2 py-1 my-8 text-orange-600 bg-slate-700">
      <h1 className= "text-3xl text-center text-white py-0.5 underline ">PASSWORD GENERATOR</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 text-center">
          <input type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder='Password'
          readOnly 
          ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 "
          onClick={copyPassword}>GENERATE</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" 
             min={8}
             max={32}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{setLength(e.target.value)}}/>
             <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={useNum}
            id="numberInput"
            onChange={()=>{
              setUseNum((prev)=> !prev);
            }} />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input type="checkbox" 
            defaultChecked={useChar}
            id="charInput"
            onChange={()=>{
              setUseChar((prev)=> !prev);
            }} />
            <label htmlFor="charInput">Charecters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
