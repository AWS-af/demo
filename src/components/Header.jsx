import { TfiAlignRight } from "react-icons/tfi";
import { Link } from "react-router-dom";
import styles from "../Styles";
import logoWhite from "../assets/logo-white.png";
import logoRed from "../assets/logo-red.png";
import { useEffect, useState } from "react";

export default function header() {
  const [menuButton, setMenuButton] = useState(true);
  const [headerLinks, setHeaderLinks] = useState(true);
  const [humIcon, setHumIcon] = useState(false);
  const [header, setHeader] = useState(false);

  const [sideBar, setSideBar] = useState(false);

  const donateButton = () => {
    if (window.innerWidth < 1000) {
      setHeaderLinks(false);
      setMenuButton(false);
      setHumIcon(true);
    } else {
      setHeaderLinks(true);
      setMenuButton(true);
      setHumIcon(false);
    }
    if (window.scrollY > 16) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  useEffect(() => {
    donateButton();
  }, []);
  window.addEventListener("resize", donateButton);
  window.addEventListener("scroll", donateButton);

  return (
    <>
      <header className={`${header ? styles.headerWhite : styles.header}`}>
        <div className={sideBar ? `${styles.sideBarActive}` : `${styles.sideBar}`}>
          <span>
            <img src={logoWhite} alt="logo" className="w-40" />
          </span>
          <ul className="flex flex-col items-center w-full">
            <li className={`${styles.sideBarLi}`}>
              <span>
                <Link to="/">HOME</Link>
              </span>
            </li>
            <li className={`${styles.sideBarLi}`}>
              <span>
                <Link to='/aboutUs'>ABOUT US</Link>
              </span>
            </li>
            <li className={`${styles.sideBarLi}`}>
              <span>
                <Link to="/whatwedo">WHAT WE DO</Link>
              </span>
            </li>
            <li className={`${styles.sideBarLi}`}>
              <span>
                <Link to="/events">EVENTS</Link>
              </span>
            </li>
            <li className={`${styles.sideBarLi}`}>
              <span>
                <Link to="/gallery">GALLERY</Link>
              </span>
            </li>
            <li className={`${styles.sideBarLi}`}>
              <span>
                <Link to="/contacts">CONTACTS</Link>
              </span>
            </li>
          </ul>
          <span className=" bg-amber-400 py-4 px-11 hover:bg-amber-100 duration-700 text-black cursor-pointer">
            DONATE
          </span>
        </div>
        <div className={`${styles.flexBetween} gap-4`}>
          <img
            src={header ? logoRed : logoWhite}
            alt="logoWhite"
            className="w-20"
          />
        </div>
        {headerLinks && (
          <div className="w-fit h-full flex items-center">
            <ul
              className={`${styles.flexBetween} gap-12 relative text-[14px] cursor-pointer font-thin w-full h-full`}
            >
              <li className="headerLi ">
                <Link to="/">HOME</Link>
              </li>
              <li className="headerLi hover:text-gray-400">
                <Link to= "/aboutUs">ABOUT US</Link>
              </li>
              <li className="headerLi hover:text-gray-400">
                <Link to="/whatwedo">WHAT WE DO</Link>
              </li>
              <li className="headerLi hover:text-gray-400">
                <Link to="/events">EVENTS</Link>
              </li>
              <li className="headerLi hover:text-gray-400">
                <Link to="/gallery">GALLERY</Link>
              </li>
              <Link to="/contacts">
                <li className="headerLi hover:text-gray-400">CONTACTS</li>
              </Link>
            </ul>
          </div>
        )}
        <div className="flex justify-between items-center gap-10">
          {humIcon && (
            <span className="text-4xl font-semibold z-[1]" onClick={() => setSideBar(!sideBar)}>
              <TfiAlignRight />
            </span>
          )}
          {menuButton && (
            <span className="bg-amber-400 py-4 px-11 hover:bg-amber-100 duration-700 text-black cursor-pointer">
              <Link to="/" className="font-semibold">
                DONATE
              </Link>
            </span>
          )}
        </div>
      </header>
    </>
  );
}
