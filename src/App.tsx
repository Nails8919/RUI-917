
import Footer from './components/Footer'
import Header from './components/Header'
import LeftColumn from './components/leftColumn'
import RightColumn from './components/Rightcolumn'

const App = () => {
  return (
    <>
      <div>
        <div className="w-screen overflow">
          <Header />
          {/* <div className="w-screen text-3xl font-bold text-center p-5 text-white">
            EXPLORE THE WORLD!
          </div> */}
        </div>
      </div>
      <div className="bg-stone-200 h-screen w-full flex justify-between">
        <div>
          <LeftColumn />
        </div>
        <div>
          <RightColumn />
        </div>
      </div>
        <div>
          <Footer />
        </div>
    </>
  )
}

export default App