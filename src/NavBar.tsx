import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

const NavBar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  // const [searchText, setSearchText] = useState({});

  const toggleDropdown = () => {      
    setDropdownVisible(prev => !prev);
  };

  const hideDropdown = () => {
    setDropdownVisible(false);
  };

    // const handleChange = 
    // (e: React.ChangeEvent<HTMLInputElement>) => {
    //   setSearchText(e.target.value);
    // };

    // console.log(searchText, "searchTexh")

  return (
      <header className="header">
        <nav className="header__nav">
          <article className="header__nav-upper-row">
            <div className="header__menu-icon-and-search-form-container">
            <img
              src="/src/assets/images/menuIcon.svg"
              onClick={toggleDropdown} 
              alt="menu icon"
              className="header__menu-icon lg:hidden"
            />

              <form className="header__search-form">
                <div className="flex items-center">
                  <span className="flex items-center pr-1">
                    <svg
                      className="h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                    >
                      <path
                        fill="currentColor"
                        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    className="w-full bg-transparent text-white py-0 pl-0 pr-0 focus:outline-none"
                    type="text"           
                    name="houseName"
                    id="searchedText"              
                    // onChange={e=> handleChange(e)} 
                  />
                </div>
              </form>
            </div>

            <NavLink className={"navLink header__title"} to={"/"}>
              <h1 className="text-center block md:flex md:justify-center">
                <p className="block md:inline md:pr-4">News </p>
                <p className="block md:inline pb-3 -mt-1 md:mt-0"> Page</p>
              </h1>
            </NavLink>

            <div>
              <NavLink className={"navLink"} to={"/login"}>
                <img
                  src="/src/assets/images/accountIcon.svg"
                  alt="account icon"
                  className="header__account-image md:hidden"
                />
              </NavLink>

            <div className="hidden md:flex justify-between gap-4 w-40 text-lg header__register-and-signin-button-container">
              <NavLink className={"navLink"} to={"/register"}>
                Register
              </NavLink>
              <NavLink className={"navLink"} to={"/login"}>
                Sign in
              </NavLink>
            </div>

            </div>

          </article>

          <ul className={`header__nav-topic-dropdown ${isDropdownVisible ? 'visible' : ''} `}>
              {[
                "Home",
                "Business",
                "Sport",              
                "Innovation",
                "Culture",
                "Arts",
                "Travel",
                "Earth",
              ].map((topic) => (

                <NavLink  className={({ isActive }) => (isActive ? 'active' : '')} to={`/news/${topic}`} key={topic} >
                  <li onClick={hideDropdown}>
                    {topic}
                  </li>
              </NavLink>
              ))}
            </ul>
      
        </nav>
      </header>
  );
};

export default NavBar;
