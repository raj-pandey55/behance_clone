import React from "react";

const Footer = () => {
  return (
    <section className="px-4 py-3 w-full bg-black text-white font-acumin-pro">
      <div className="container mx-auto my-10 pb-20 border-b">
        <a href="#">
          <img
            src="https://cdn-icons-png.flaticon.com/512/51/51916.png"
            alt="Behance Logo"
            width="100"
            height="100"
            className="bg-white mb-10"
          />
        </a>
        <div className="grid grid-cols-4">
          <div>
            <h3 className="font-bold">Built For Creatives</h3>
            <ul>
              <li className="links">
                <a href="#">Try Behance Pro</a>
              </li>
              <li className="links">
                <a href="#">Find Inspiration</a>
              </li>
              <li className="links">
                <a href="#">Get Hired</a>
              </li>
              <li className="links">
                <a href="#">Sell Creative Assets</a>
              </li>
              <li className="links">
                <a href="#">Sell Freelance Services</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Find Talent</h3>
            <ul>
              <li className="links">
                <a href="#">Post a Job</a>
              </li>
              <li className="links">
                <a className="flex flex-col" href="#">
                  <span>All Featured Freelance</span>
                  <span>Designers</span>
                </a>
              </li>
              <li className="links">
                <a href="#">Graphic Designers</a>
              </li>
              <li className="links">
                <a href="#">Photographers</a>
              </li>
              <li className="links">
                <a href="#">Video Editors</a>
              </li>
              <li className="links">
                <a href="#">Web Designers</a>
              </li>
              <li className="links">
                <a href="#">Illustrators</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Behance</h3>
            <ul>
              <li className="links">
                <a href="#">About Behance</a>
              </li>
              <li className="links">
                <a href="#">Adobe Portfolio</a>
              </li>
              <li className="links">
                <a href="#">Download the App</a>
              </li>
              <li className="links">
                <a href="#">Blog</a>
              </li>
              <li className="links">
                <a href="#">Careers</a>
              </li>
              <li className="links">
                <a href="#">Help Center</a>
              </li>
              <li className="links">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Social</h3>
            <ul>
              <li className="links flex items-center">
                <svg
                  fill="#ffffff"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="-143 145 512 512"
                  xml:space="preserve"
                  className="mr-2"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8 c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"></path>{" "}
                      <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 "></polygon>{" "}
                      <path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157 c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"></path>{" "}
                      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8 c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157 c27.3,0,49.5,22.2,49.5,49.5V374.7z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <a href="#">Instagram</a>
              </li>
              <li className="links flex items-center">
                <svg
                  fill="#ffffff"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="-143 145 512 512"
                  xml:space="preserve"
                  className="mr-2"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2 c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7 c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9 C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5 c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6 c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"></path>{" "}
                  </g>
                </svg>
                <a href="#">Twitter</a>
              </li>
              <li className="links flex items-center">
                <svg
                  fill="#ffffff"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="-143 145 512 512"
                  xml:space="preserve"
                  className="mr-2"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M113,528.3 c-12.6,0-24.8-1.9-36.3-5.3c4.9-7.7,10.2-17.6,12.9-27.4c1.6-5.7,9-35.2,9-35.2c4.4,8.5,17.4,15.9,31.3,15.9 c41.2,0,69.1-37.5,69.1-87.7c0-38-32.2-73.3-81-73.3c-60.8,0-91.5,43.6-91.5,80c0,22,8.3,41.6,26.2,48.9c2.9,1.2,5.5,0,6.4-3.2 c0.6-2.2,2-7.9,2.6-10.3c0.9-3.2,0.5-4.3-1.8-7.1c-5.1-6.1-8.4-13.9-8.4-25.1c0-32.3,24.2-61.3,63-61.3c34.4,0,53.3,21,53.3,49 c0,36.9-16.3,68-40.6,68c-13.4,0-23.4-11.1-20.2-24.6c3.8-16.2,11.3-33.7,11.3-45.4c0-10.5-5.6-19.2-17.3-19.2 c-13.7,0-24.7,14.2-24.7,33.1c0,12.1,4.1,20.2,4.1,20.2s-14,59.4-16.5,69.7c-2.3,9.7-2.6,20.5-2.2,29.4 C16.5,497.8-15,452.7-15,400.3c0-70.7,57.3-128,128-128s128,57.3,128,128S183.7,528.3,113,528.3z"></path>{" "}
                  </g>
                </svg>
                <a href="#">Pinterest</a>
              </li>
              <li className="links flex items-center">
                <svg
                  fill="#000000"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 w-5 h-5 rounded-full bg-white"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                  </g>
                </svg>
                <a href="#">Facebook</a>
              </li>
              <li className="links flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  className="mr-2"
                  fill="#ffffff"
                >
                  <path d="M17.75,3H6.25C4.458,3,3,4.458,3,6.25v11.5C3,19.542,4.458,21,6.25,21h11.5c1.792,0,3.25-1.458,3.25-3.25V6.25	C21,4.458,19.542,3,17.75,3z M9.237,16H7.063V9.962h2.174V16z M8.11,8.857C7.445,8.857,7,8.412,7,7.819	c0-0.589,0.445-1.033,1.186-1.033c0.665,0,1.105,0.445,1.105,1.033C9.291,8.412,8.851,8.857,8.11,8.857z M17,16h-2.107v-3.302	c0-0.912-0.562-1.123-0.773-1.123c-0.211,0-0.912,0.144-0.912,1.123c0,0.144,0,3.302,0,3.302h-2.174V9.962h2.174v0.845	c0.283-0.494,0.845-0.845,1.896-0.845S17,10.807,17,12.698V16z"></path>
                </svg>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-10 flex items-start justify-start gap-10 font-medium">
      <div className="adobe-button flex items-center align-middle font-medium justify-start gap-1 ">
        <img
          className="adobe size-6 bg-white"
          src="https://pic.onlinewebfonts.com/thumbnails/icons_521761.svg"
          alt="img"

        />
        <a href="#" className="adobe text-m">
          Adobe
        </a>
      </div>
      <div>
        <p className="text-m mb-5">
          © 2024 Adobe Inc. All rights reserved.
        </p>
        <ul className="flex gap-5">
        <l1>English</l1>
        <l1>TOU</l1>
        <l1>Privacy</l1>
        <l1>Community</l1>
        <l1>Cookie preferences</l1>
        <l1>Do not sell or share my personal information</l1>
        </ul>
      </div>
      </div>
    </section>
  );
};

export default Footer;
