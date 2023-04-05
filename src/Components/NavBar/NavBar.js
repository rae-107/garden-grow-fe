import "./NavBar.css"
import { useState } from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  const [showDropdown, setShowDropDown] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set the initial login state to false

  const tempUsers = [
    {
      name: "Rae",
      id: 7,
      zone: "6a"
    },{
      name: "Ciera",
      id: 2,
      zone: "5b"
    },{
      name: "Josephine",
      id: 1,
      zone: "9a"
    },{
      name: "Alex",
      id: 6,
      zone: "4b"
    },{
      name: "J",
      id: 5,
      zone: "5b"
    },{
      name: "Lacey",
      id: 4,
      zone: "5b"
    },{
      name: "Karim",
      id: 3,
      zone: "5b"
    }
  ];

  const toggleNavBar = () => {
    setShowNav(!showNav);
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropdown);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set the login state to false when the user clicks "Log Out"
  };

  return (
    <nav className="navigation">
     <button className="hamburger" onClick={() => toggleNavBar()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <div className={showNav ? "navigationMenu expanded" : "navigationMenu"}>
        <ul>
          {isLoggedIn && ( // Only render the "Log Out" link if the user is logged in
            <li>
              <Link className="log-out" to={"/"} onClick={handleLogout}>
                Log Out
              </Link>
            </li>
          )}
          <li
            className="profile" onClick={() => toggleDropDown()}>
            USER Profiles
          </li>
          <datalist className={showDropdown ? "dropdown active" : "dropdown"} key={Date.now()}>
            {tempUsers.map((user, index) => {
              return (
                <Link className="userProfiles" to={`/user/${user.id}`} style={{ textDecoration: "none" }} key={index}>
                  <option
                    key={index}
                    value={user.name}
                  >
                    {user.name}
                  </option>
                </Link>
              );
            })}
          </datalist>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;