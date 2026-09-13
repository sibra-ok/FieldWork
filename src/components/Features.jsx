import React from 'react'
import { FaBriefcase } from 'react-icons/fa'
import { FaChartLine } from 'react-icons/fa'
import { FaCommentDots } from 'react-icons/fa'
import { FaFolderOpen } from 'react-icons/fa'
import { FaComments } from 'react-icons/fa'
import { FaClipboardCheck } from 'react-icons/fa'

export default function Features() {

    const features=[
{
    icon:FaBriefcase,
    title:'Real-World Projects',
    description:'Work on projects designed to mirror the kind of problems you will face beyond tutorials'
},
{
    icon:FaChartLine,
    title:'Progressive Challenges',
    description:'Start with focused tasks and move torwards complex, industry-style projects as your skills grow'
},
{
    icon:FaCommentDots,
    title:'Actionable Feedback',
    description:'Understand what is missing, where you went wrong, and how to improve your work'
},

{
    icon:FaFolderOpen,
title:'Portfolio Proof',
description:'Turn completed projects into tangible evidence of what you cn actually build.'
},

{
    icon:FaComments,
title:'Mock Interviews',
description:'Practice explaining your projects, decisions and technical thinking before the real interview.'
},

{
    icon:FaClipboardCheck,
title:'Hiring-Style Assesments',
description:'Test your skills through timed assessments that stimulate real evaluation enviroments.'
}
]

  return (
    <div>
<section id='features mt-4 p-4'>
    <div>
    <h1 className='font-bold text-2xl text-center my-4'>
        Features
    </h1>
    <div className='grid grid-cols-1
     md:grid-cols-2 lg:grid-cols-3 gap-6'>
{features.map((item)=>{
    
    const Icon=item.icon
    return(
    <div key={item.title}
    className='border rounded-lg p-6 text-center '>
    <div className='flex justify-center'><Icon /></div>
    <h3 className='text-xl font-semibold'>
        {item.title}
        </h3>
    <p className='mt-2 font-sans text-gray-700'>
        {item.description}
        </p>
    </div>
)})}
</div>
</div>
</section>

    </div>
  )
}
