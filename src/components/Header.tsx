
const Header = () => {
  return (
    <>
    <div className="bg-[url(HeaderImage.jpeg)] h-120 w-full align-middle flex justify-center items-center">
      <div className="text-5xl font-bold text-white p-5 rounded-md text-center ">
        EXPLORE THE WORLD!
        <p className="text-3xl font-semibold italic font-mono text-white p-5 rounded-md text-center ">
        Your Travel destiny, written in the stars.
        </p>
        <div>
        <button className="bg-blue-900 text-sm text-white px-4 py-2 rounded-lg hover:bg-red-700 cursor-pointer">Learn More</button>
        </div>
      </div>

    </div>
    </>
  )
}

export default Header