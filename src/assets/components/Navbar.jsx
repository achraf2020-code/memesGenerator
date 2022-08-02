import logo from "../images/troll-face.png"

const Navbar = ()=>{
    return(
    <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <small>React Project</small>
    </div> 
    )
}
export default Navbar