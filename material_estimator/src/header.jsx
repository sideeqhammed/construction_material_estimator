import { Link } from "react-router-dom"

function Header(){
  return(
    <div className="flex justify-between items-center bg-mist-400 py-3 px-5">
      <h1 className="text-3xl font-extrabold">Material Estimator</h1>
      <ul className="flex gap-3 justify-evenly">
        <li><Link to={"/"} className="hover:underline">Home</Link></li>
        <li><Link to={"/guide"} className="hover:underline">Guide</Link></li>
        <li><Link to={"/contact"} className="hover:underline">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Header