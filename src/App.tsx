import Navbar from "./components/Navbar"
import Home from "./components/home"

export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>
    </div>    
  )
}