'use client'
import { useState } from 'react'

// import '@/app/api/contact/route'

const Contactform = () => {
    // State for contact submit status
    const [status, setStatus] = useState('')

    // handle change state
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        message: '',
    })

    // handle Change

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // handle form submit

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                setStatus('Your details have been submitted successfully')

                // Clear form fields
                setFormData({
                    username: '',
                    email: '',
                    phone: '',
                    message: '',
                })
            } else {
                setStatus('Failed to submit your details. Please try again.')
            }
        } catch (error) {
            setStatus('An error occurred. Please try again.')
        }
    }

    return (
        <form
            action=""
            className="max-w-[30rem] min-w-[20rem] p-8 contact_card_shadow text-left"
            onSubmit={handleFormSubmit}
        >
            {/*Name  */}
            <div className="mb-5">
                <label htmlFor="username" className="block capitalize">
                    Enter your name
                </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    className="contact_input"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    value={formData.username}
                    required
                />
            </div>

            {/* Email */}
            <div className="mb-5">
                <label htmlFor="email" className="block capitalize">
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    className="contact_input"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                />
            </div>

            {/* Phone number */}
            <div className="mb-5">
                <label htmlFor="phone" className="block capitalize">
                    Phone number
                </label>
                <input
                    type="number"
                    name="phone"
                    id="phone"
                    className="contact_input"
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                    value={formData.phone}
                    required
                />
            </div>

            {/* Message/ text area */}
            <div className="mb-5">
                <label htmlFor="message" className="block capitalize">
                    Enter your Messgae
                </label>
                <textarea
                    type="text"
                    name="message"
                    id="message"
                    className="contact_input"
                    placeholder="Enter your message"
                    rows={5}
                    onChange={handleChange}
                    value={formData.message}
                    required
                />
            </div>

            {/*  submit*/}
            <div>
                <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-xl hover:bg-[#334ca6fc]">
                    Send Message
                </button>
            </div>

            {/* Status Messgae */}

            {status && (
                <div className={`mt-5 ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                    {status}
                </div>
            )}
        </form>
    )
}

export default Contactform
