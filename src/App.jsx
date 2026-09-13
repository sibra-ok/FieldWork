import { useState,React } from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import About from './components/About'
import Criteria from './components/Criteria'
import Statistics from './components/Statistics'
import Uses from './components/Uses'
import Testimonal from './components/Testimonal'
import Pricing from './components/Pricing'
import Challenges from './components/Challenges'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import StartFieldwork from './components/StartField'


function App() {
 
  const [showForm,setShowForm]=useState(false)

  return (
    <>
 <div className='bg-white'>
<Navbar onStart={()=>setShowForm(true)}/>
<Hero onStart={()=>setShowForm(true)}/>
<TrustedBy/>
<Features/>
<About/>
<Criteria/>
<Statistics/>
<Uses/>
<Testimonal/>
<Pricing onStart={()=>setShowForm(true)}/>
<Challenges/>
<FAQ/>
<CTA  onStart={()=>setShowForm(true)}/>
<Footer/>

{showForm&&(
  <StartFieldwork onClose={()=>setShowForm(false)}/>
)}
</div>
    </>
  )
}

export default App
