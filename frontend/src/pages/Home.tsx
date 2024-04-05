import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

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
        <input
          type="text"
          name="input"
          id="input"
          className="mt-10 w-[30rem] h-[3rem] py-2 px-5 outline-none rounded-lg "
          onChange={(e) => setTextInput(e.target.value)}
        />
        <button
          className="mt-10 bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-5 rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Home