import {React,useState }from 'react'
import { FaBars } from "react-icons/fa";
import {FaTimes}from "react-icons/fa"


export default function Navbar({onStart}) {

  const[isOpen,setIsOpen]=useState(false)
  
return (
<div className='bg-white sticky top-0 '>
<header className='bg-white '>

<nav className=' 
border-b shadow-md mt-3 p-3 '>

  <div className='flex justify-between items-center p-3'>

<a href='#hero' className='font-bold'>FIELDWORK</a>

<ul className=' hidden md:flex gap-4 text-gray-400 items-center'>

<li><a href="#challenges" className=' hover:text-blue-600'>
  Challenges
  </a></li>
<li><a href="#criteria" className=' hover:text-blue-600'>
  How it Works
  </a></li>
<li><a href="#pricing" className=' hover:text-blue-600'>
  Pricing
  </a></li>
<li><button className='w-full rounded-md px-4 py-2 text-white
 bg-blue-700 hover:bg-blue-900'
 onClick={()=>onStart()}>
  Start Fieldwork
  </button></li>

</ul>
<button className='md:hidden'
onClick={()=>setIsOpen(!isOpen)}>
  {isOpen?<span><FaTimes/></span>:<FaBars/>}

</button>
</div>

{isOpen&&(
<div className=' bg-white px-4 py-4 md-hidden '>
<ul className='flex flex-col gap-4'>
  <li><a href='#challenges' className='block py-2 text-gray-600
  hover:text-blue-600' onClick={()=>setIsOpen(false)}>
    Challenges
    </a></li>
    
    <li><a href='#criteria' className='block py-2 text-gray-600
  hover:text-blue-600' onClick={()=>setIsOpen(false)}>
    How It Works
    </a></li>

    <li><a href='#pricing' className='block py-2 text-gray-600
  hover:text-blue-600' onClick={()=>setIsOpen(false)}>
    Pricing
    </a></li>

    <li ><button className='w-full rounded-md px-4 py-2 text-white
    bg-blue-700 hover:bg-blue-900'
     onClick={()=>onStart()}>
      Start Fieldwork
      </button></li>
</ul>

</div>

)}
</nav>
</header>

</div>
  )
}
