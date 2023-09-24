const Quiz = () => {
  return (
    <div className="w-[95%] md:w-[700px] py-5 mx-auto min-h-screen bg-center bg-cover bg-no-repeat">
      <ul className=" text-white min-h-[90vh] grid place-content-start gap-4">
        <li className=" border-b border-b-pink-700 pb-5">
          <p className=" pb-4 text-2xl">Which game was exclusive to Dreamcast?</p>
          <ul className=" flex flex-wrap gap-4">
            <li className=" text-sm cursor-pointer hover:bg-pink-600 border hover:border-0 border-pink-700 rounded-md px-4 py-1">Pen Pen TriIcelon</li>
            <li className=" text-sm cursor-pointer hover:bg-pink-600 border hover:border-0 border-pink-700 rounded-md px-4 py-1">Perfect Dark</li>
            <li className=" text-sm cursor-pointer hover:bg-pink-600 border hover:border-0 border-pink-700 rounded-md px-4 py-1">Sylvester & Tweety in Cagey Capers</li>
            <li className="text-[#FFFADD] text-sm cursor-pointer hover:bg-pink-600 border hover:border-0 border-pink-700 rounded-md px-4 py-1">Tetrisphere</li>
          </ul>
        </li>
        <li className=" border-b border-b-pink-700 pb-5">
          <p className=" pb-4 text-2xl">Which game was exclusive to Dreamcast?</p>
          <ul className=" flex flex-wrap gap-4">
            <li className=" text-sm cursor-pointer hover:bg-pink-600 border hover:border-0 border-pink-700 rounded-md px-4 py-1">Pen Pen TriIcelon</li>
            <li className=" text-sm cursor-pointer hover:bg-pink-600 border hover:border-0 border-pink-700 rounded-md px-4 py-1">Perfect Dark</li>
            <li className=" text-sm cursor-pointer hover:bg-pink-600 border hover:border-0 border-pink-700 rounded-md px-4 py-1">Sylvester & Tweety in Cagey Capers</li>
            <li className="text-[#FFFADD] text-sm cursor-pointer hover:bg-pink-600 border hover:border-0 border-pink-700 rounded-md px-4 py-1">Tetrisphere</li>
          </ul>
        </li>
      </ul>
      <div className="flex justify-center">
      <button className='bg-pink-500 px-8 py-2 rounded-md text-white hover:bg-transparent hover:border border-pink-500 hover:scale-105 transition-all capitalize'>check answers</button>
      </div>
    </div>
  )
}

export default Quiz