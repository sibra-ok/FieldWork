import React, { useState } from 'react'
import {FaTimes} from 'react-icons/fa'

export default function StartFieldwork({ onClose }) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: ''
  })

  const handleChange = (e) => {
    setFormData({
     ...formData,
      [e.target.name]: e.target.value
  })
  }

  const handleSubmit = (e) => {
  e.preventDefault()

 console.log(formData)
 alert('Welcome to FIELDWORK!')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4">

    <div className="bg-white rounded-lg p-6 w-full max-w-md">

    <div className="flex justify-between items-center">
    <h2 className="text-2xl font-bold">
     Start Fieldwork
    </h2>

    <button onClick={onClose} className="text-xl">
    <FaTimes/>
    </button>
    </div>

    <p className="text-gray-600 mt-2">
     Tell us a little about yourself to get started.
    </p>

     <form onSubmit={handleSubmit} className="mt-6">

    <label className="block mb-4">
    <span className="block mb-1">Name</span>
    <input
     type="text"
     name="name"
     value={formData.name}
     onChange={handleChange}
     required
     className="border rounded-lg w-full p-2"/>
    </label>

    <label className="block mb-4">
    <span className="block mb-1">Email</span>
    <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    className="border rounded-lg w-full p-2" />
    </label>

    <label className="block mb-4">
    <span className="block mb-1">Choose your domain</span>

    <select
    name="domain"
    value={formData.domain}
    onChange={handleChange}
    required
    className="border rounded-lg w-full p-2">
    <option value="">Select a domain</option>
    <option value="Frontend Development">Frontend Development</option>
    <option value="JavaScript">JavaScript</option>
    <option value="UI/UX">UI/UX</option>
    </select>
    </label>

    <button
     type="submit"
      className="bg-black text-white rounded-lg w-full py-2" >
     Start Practicing
    </button>

    </form>

    </div>
    </div>
  )
}
