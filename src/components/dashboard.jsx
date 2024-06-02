import React from 'react'
import { RiGraduationCapFill } from "react-icons/ri";
import { SiPowerapps } from "react-icons/si";
import { SiMicrostrategy } from "react-icons/si";
import { FaPersonChalkboard } from "react-icons/fa6";
import { PiArticleNyTimesBold } from "react-icons/pi";
import { GoVideo } from "react-icons/go";
import { CiMoneyCheck1 } from "react-icons/ci";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
export default function Dashboard() {
  return (
    <ul className="dash bg-white p-0">
    <Link to='/home'><li className='curser icon'><SiPowerapps/></li></Link>
   <Link to='/sections'><li className='curser icon'><SiMicrostrategy/></li></Link>
   <Link to='/students'><li className='curser icon'><RiGraduationCapFill/></li></Link>
   <Link to='/teacher'><li className='curser icon'><FaPersonChalkboard/></li></Link>
   <Link to='/corsat'><li className='curser icon'><PiArticleNyTimesBold/></li></Link>
   <Link to='/lecs'><li className='curser icon'><GoVideo/></li></Link>
   <Link to='/subscribe'><li className='curser icon'><CiMoneyCheck1/></li></Link>
   <Link to='/contact'><li className='curser icon'><TbMessageCircle2Filled/></li></Link>
   <Link to='/chapter'><li className='curser icon'><IoPersonOutline/></li></Link>
   <li className='curser icon'><IoSettingsOutline/></li>
 </ul>
  )
}
