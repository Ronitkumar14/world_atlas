import React from 'react'
import footercontact from "../../API/footerAPi.json"
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import {MdPadding, MdPlace} from "react-icons/md"
import {IoCallSharp} from "react-icons/io5"
import {TbMailPlus} from "react-icons/tb"
import { NavLink } from 'react-router-dom'
const Footers = () => {
  
    const footerIcon={
        MdPlace:<MdPlace/>,
        IoCallSharp:<IoCallSharp/>,
        TbMailPlus:<TbMailPlus/>
    }
  return <footer className='footer-section'>
        <div className="container grid grid-three-cols">
        {
          // footercontact.map((curdata,index)=>{
          //  const {icon,title,contact}=curdata 
          // })
            footercontact.map((curdata,index)=>{
                const {icon,title,details}=curdata;
                return(
                    <div className='footer-contact' key={index}>
                        <div className='icon ' >{footerIcon[icon]}:</div>
                        <div className="footer-text">
                            <p>{title}</p>
                            <p>{details}</p>
                        </div>
                    </div>
                )
            })
        }
        </div>
        <div className="footer-lastcontent">
            <div className="copyrightarea">
                <p>
                Copyright &copy; 2025, All Rights Reserved;
                
                </p>
                </div>
                <div className="footer-menu ">
              <ul className='grid grid-four-cols'>
                <li>
                   <NavLink to="https://www.linkedin.com/" target='_blank'> 
                    <FaLinkedin size={20} color="#0077B5" />Linkedin </NavLink>
                  
                </li>
                <li>
                  <NavLink to={"https://www.facebook.com/"} target='_blank'>
                  <FaFacebook size={20} color="#1877F2" />Facebook</NavLink>
                </li>

                <li>
                  <NavLink to={"https://www.instagram.com/"} target='_blank'>
                  <FaInstagram size={20} color="#E4405F"/>Instagram</NavLink>
                </li>
                <li>
                  <NavLink to={"https://www.whatsapp.com/"} target='_blank'>
                <FaWhatsapp size={20} color="#25D366"/>Whatsapp</NavLink>
                </li>
              </ul>
            

            </div>
            

        </div>
    </footer>
  
}

export default Footers
