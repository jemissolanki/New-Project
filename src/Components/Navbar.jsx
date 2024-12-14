import logo from "../assets/Images/logo.png";

const Navbar = () => {
  return (
    <>
    
      <nav className="flex items-center space-x-10 justify-between">
        <a href="" className="">
          <img
            className="h-15 min-h-10 max-h-14 w-auto "
            src={logo}
            alt="logo image "
          />
        </a>
        <ul className=" space-x-10 ml-10 flex ml-10">
          <li className="">
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </nav>
      
    </>
  );
};
export default Navbar;
