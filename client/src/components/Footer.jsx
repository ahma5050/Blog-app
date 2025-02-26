import { Footer, FooterCopyright, FooterIcon } from "flowbite-react";
import React from "react";

import { Link } from "react-router-dom";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';



const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto md:px">
        <div className="w-full justify-between lg:flex grid md:grid-cols-1">
          <div className="mt-5">
            {" "}
            <Link
              to="/Signup"
              className="self-center text-xl md:text-lg whitespace-nowrap dark:text-white font-semibold"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ">
                Cleverly's{" "}
              </span>
              Blog
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-8 mt-4">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
              <Footer.Link
                href="https://www.100jsprojects.com"
                target="_blanck"
                rel="noopener noreferrer"
              >
                100js, Projects
              </Footer.Link>

              <Footer.Link                
                href="/About"
                target="_blank"
                rel="noopener noreferrer"
              >Cleaverly's Blog</Footer.Link>
              </Footer.LinkGroup>
               </div>
               <div>
               <Footer.Title title='FOLLOW US' />
               <Footer.LinkGroup col>
              <Footer.Link                
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >Discord</Footer.Link>

              <Footer.Link                
                href="https://www.Github.com/ahma5050"
                target="_blank"
                rel="noopener noreferrer"
              >Github</Footer.Link>
              </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                <Footer.Link href='#'>Priva Policy</Footer.Link>
                <Footer.Link href='#'>Priva Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
          </div>
        </div>

        <Footer.Divider />
        <div className="md:flex gap-6 justify-between">
<FooterCopyright href="#" by="Ahmisha'Teka" year={new Date().getFullYear()} className="text-center p-1"/>
          <div className="flex gap-6 mt-0 justify-center">
         <Footer.Icon href="#" icon={BsFacebook}/>
         <Footer.Icon href="#" icon={BsInstagram}/>
         <Footer.Icon href="#" icon={BsTwitter}/>
         <Footer.Icon href="https://www.Github.com/ahma5050" icon={BsGithub}/>
         <Footer.Icon href="#" icon={BsDribbble}/>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
