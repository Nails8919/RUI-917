const RightColumn = () => {
  return (
    <>
      <div className="text-purple-700 text-4xl font-bold p-5">Get 40% OFF on your first trip</div>
      <div>
        <p className="text-purple-700 text-xl pl-5 pr-5">Join our community and be the first to know about the latest news, offers and exciting content.</p>
        <div className="flex flex-col gap-4 p-5">
          <input type="text" placeholder='@ Your-email address' className="border border-purple-700 rounded-md p-2 w-1/2" />
          <button>
            <div className="bg-blue-900 text-white px-4 py-2 w-1/2 rounded-md hover:bg-red-700 cursor-pointer text-center">
              Claim Offer
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default RightColumn