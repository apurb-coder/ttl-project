import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Home:React.FC = () => {
  const navigate =  useNavigate()
  const [fileName, setfileName] = useState("")
  const handleUpload = (e:React.ChangeEvent) =>{
    const formData = new FormData()
    console.log(e.target.files);
    
    navigate("/result")
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <span className="text-center font-bold bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent text-5xl tracking-wide">
          Credit Card Fraud Detection System
        </span>
        <div className="flex flex-col items-center justify-center w-[20rem] h-[3rem] mt-36">
          <input
            type="text"
            name="input"
            id="input"
            className="w-full py-2 px-4 outline-none rounded-lg"
            disabled
            value={fileName}
          />
          <div className="mt-10 bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-5 rounded-md">
            <input
              type="file"
              name="csvFile"
              id="csvFile"
              onChange={handleUpload}
            />
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