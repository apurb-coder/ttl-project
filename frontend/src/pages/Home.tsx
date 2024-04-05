import React from 'react'

const Home:React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <span className="text-center font-bold bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent text-5xl">
          TEXT
        </span>
        <input
          type="text"
          name="input"
          id="input"
          className="mt-10 w-[30rem] h-[3rem] py-2 px-5 outline-none rounded-lg "
        />
        <button className="mt-10 bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-5 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Home