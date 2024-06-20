function Header() {
  return (
    <div className="header border-b  px-6 flex justify-between text-s font-sans sticky top-0 z-50 bg-white">
      {/*NavBar Left*/}
      <div className="header_left flex">
        <ul className="flex items-center align-center justify-between font-bold">
          <li className="logo_behance mr-2 w-[30px] ">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/behance-icon.png"/>
          </li>
          <li className="mx-3 mt-1 my-0">
            <a className="nav-items flex items-center" href="#">
              <span>Explore</span>
              <svg
                className="w-5 h-5 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="Down"
              >
                <path
                  fill="rgb(107 114 128)"
                  d="M5.305 8.306a1.046 1.046 0 0 0 0 1.478l5.904 5.91c.228.228.536.33.834.302.27 0 .539-.101.744-.306l5.907-5.907a1.044 1.044 0 1 0-1.477-1.477l-5.22 5.22-5.216-5.22a1.043 1.043 0 0 0-1.476 0Z"
                  class="color000000 svgShape"
                ></path>
              </svg>
            </a>
          </li>
          <li className=" mx-3 mt-1 my-0">
            <a className="nav-items" href="#">
              Assets
            </a>
          </li>
          <li className="mx-3 mt-1 my-0">
            <a className="nav-items" href="#">
              Jobs
            </a>
          </li>
          <li className="mx-3 mt-1 pr-4 my-0 border-r">
            <a className="nav-items" href="#">
              <span>Behance</span>
              <span className="ml-2 text-white bg-blue-700 rounded-lg px-2 py-1 text-xs ">
                PRO
              </span>
            </a>
          </li>
          <li className="mx-3 mt-1 my-0">
            <a className="nav-items flex items-center" href="#">
              <span>Hire Freelancers</span>
              <svg
                className="w-5 h-5 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="Down"
              >
                <path
                  fill="rgb(107 114 128)"
                  d="M5.305 8.306a1.046 1.046 0 0 0 0 1.478l5.904 5.91c.228.228.536.33.834.302.27 0 .539-.101.744-.306l5.907-5.907a1.044 1.044 0 1 0-1.477-1.477l-5.22 5.22-5.216-5.22a1.043 1.043 0 0 0-1.476 0Z"
                  class="color000000 svgShape"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      {/*Navbar Right*/}
      <div className="header_right flex items-center align-middle justify-between font-medium ">
      <svg className="notification-bell mx-2" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z"/></svg>
        <button
          type="button"
          className="log-in mt-3 mx-2 text-blue-600 bg-sky-50 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-sm px-5 py-2 me-2 mb-3"
        >
          Log In
        </button>

        <button
          type="button"
          className="sign-up mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full  px-6 py-2 text-sm me-2 mb-0"
        >
          Sign Up
        </button>

        <div className="adobe-logo mx-2 font-medium ">
          <img
            className="adobe-image size-8"
            src="https://pic.onlinewebfonts.com/thumbnails/icons_521761.svg"
            alt="adobe-logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
