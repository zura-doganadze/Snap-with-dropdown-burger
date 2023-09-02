import logo from "./images/snap.png";
import upchavron from "./images/upchevron.svg";
import downchavron from "./images/downCheveron.svg";
import burgeropen from "./images/burgeropen.svg";
import burgerClose from "./images/burgerclose.svg";
import list from "./images/List.svg";
import calendar from "./images/calendar.svg";
import ballSvg from "./images/Bell.svg";
import combinedsvg from "./images/Combined Shape.svg";
import { useState } from "react";

function App() {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    // className={`${isOpen ? "bg-current" : "bg-transparent"}`}
    // className={`w-full h-full  ${isOpen ? "bg-current" : "bg-transparent"}`}>
    <div>
      <header className="flex	mb-12 mt-7">
        <img
          src={logo}
          alt="logo img"
          className="cursor-pointer lg:h-8 h-6 mr-5"
        />
        <div className="flex items-center gap-x-4 w-full">
          <div
            className={`lg:flex flex-row justify-between space-x-4 w-52 h-full right-0 top-0 pl-7 lg:pt-0 pt-16 absolute bg-white  z-50 lg:w-full lg:static  ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div>
              <nav className="lg:flex flex-row justify-between gap-x-8 mb-8 lg:text-2xl text-sm capitalize items-center">
                <nav
                  className="mb-3 text-textColor"
                  onClick={() => setOpenFeatures(!openFeatures)}
                >
                  <a href="#" className="cursor-pointer hover:text-black">
                    features
                  </a>
                  <button className="border-none bg-none ml-1">
                    {" "}
                    {openFeatures ? (
                      <img src={upchavron} alt="up icon" />
                    ) : (
                      <img src={downchavron} alt="down icon" />
                    )}
                  </button>
                  {openFeatures && (
                    <ul className="lg:absolute lg:text-xl text-sm flex flex-col ml-5 lg:ml-0 justify-between gap-y-2 sm:relative">
                      <li className="hover:text-black mt-5">
                        <a href="#" className="flex">
                          <img src={list} alt="list icon" className="mr-2" />{" "}
                          todo list
                        </a>
                      </li>
                      <li className="hover:text-black">
                        <a href="#" className="flex">
                          <img
                            src={calendar}
                            alt="calendar icon"
                            className="mr-2"
                          />{" "}
                          todo list
                        </a>
                      </li>
                      <li className="hover:text-black">
                        <a href="#" className="flex">
                          <img src={ballSvg} alt="ball icon" className="mr-2" />{" "}
                          reminders
                        </a>
                      </li>
                      <li className="hover:text-black">
                        <a href="#" className="flex">
                          <img
                            src={combinedsvg}
                            alt="combiner icon"
                            className="mr-2"
                          />{" "}
                          planning
                        </a>
                      </li>
                    </ul>
                  )}
                </nav>
                <nav
                  className="mb-3 text-textColor "
                  onClick={() => setOpenCompany(!openCompany)}
                >
                  <a href="#" className="cursor-pointer hover:text-black">
                    company
                  </a>

                  <button className="border-none bg-none ml-1">
                    {" "}
                    {openCompany ? (
                      <img src={upchavron} alt="up icon" />
                    ) : (
                      <img src={downchavron} alt="down icon" />
                    )}{" "}
                  </button>
                  {openCompany && (
                    <ul className="lg:absolute lg:text-xl text-sm flex ml-5 lg:ml-0 flex-col justify-between gap-y-2 sm:relative">
                      <li className="hover:text-black mt-5">
                        <a href="#">todo list</a>
                      </li>
                      <li className="hover:text-black">
                        <a href="#">calendar</a>
                      </li>
                      <li className="hover:text-black">
                        <a href="#">reminders</a>
                      </li>
                      <li className="hover:text-black">
                        <a href="#">planning</a>
                      </li>
                    </ul>
                  )}
                </nav>
                <ul className="lg:flex flex-row gap-x-6 no-underline text-textColor">
                  <li className="hover:text-black cursor-pointer mb-3">
                    <a href="#">careers</a>
                  </li>
                  <li className="hover:text-black cursor-pointer">
                    <a href="#">about</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="lg:flex flex-row gap-x-7 text-textColor">
              <div className="mb-3 hover:text-black">
                <button className="lg:text-2xl text-sm  capitalize">
                  login
                </button>
              </div>
              <div className="hover:text-black">
                <button className="lg:text-2xl text-sm capitalize bg-none rounded-xl py-1 px-4 border-solid border-2 border-black">
                  register
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden left-1 z-50" onClick={toggleMenu}>
          <img src={isOpen ? burgerClose : burgeropen} alt="burger img" />
        </div>
        <div
          className={`w-full h-full absolute top-0 left-0 bottom-0 right-0 z-10  ${
            isOpen ? "lg:bg-inherit	bg-my-acgkround" : "bg-inherit"
          }`}
        ></div>
      </header>
    </div>
  );
}

export default App;
