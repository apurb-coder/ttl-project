import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { IoSend } from "react-icons/io5";

const Home:React.FC = () => {
  const navigate =  useNavigate()
  const [textInput, setTextInput] = useState("")
  const handleSubmit = () =>{
    navigate("/result")
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <span className="text-center font-bold bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent text-4xl tracking-wide">
          Credit Card Fraud Detection System
        </span>
        <div className="flex items-center w-[30rem] h-[3rem] mt-20 relative">
          <input
            type="text"
            name="input"
            id="input"
            className="w-full py-4 px-5 outline-none rounded-lg"
            onChange={(e) => setTextInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          <div
            className="bg-gradient-to-r from-orange-500 to-orange-800 p-3 rounded-lg absolute right-2"
            onClick={handleSubmit}
          >
            <IoSend />
          </div>
        </div>
        {/* <button
          className="mt-10 bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-5 rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button> */}
      </div>
    </div>
  );
}

export default Home