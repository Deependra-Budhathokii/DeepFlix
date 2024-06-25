'use client'
// import { useState } from 'react'
import { useFormState } from 'react-dom'
import { createUser } from '@/action/contactaction'
import { useRef } from 'react'

const initialState = {
    status: '',
}

const NewContactform = () => {
    // const ref = useRef < HTMLFormElement > null
    const ref = useRef(null) // Just to reset form

    const [state, create] = useFormState(createUser, initialState)
    // State for contact submit status
    // const [status, setStatus] = useState()

    return (
        <form
            ref={ref}
            action={async (formdata) => {
                await create(formdata)
                ref.current?.reset()
            }}
            className="max-w-[30rem] min-w-[20rem] p-8 contact_card_shadow text-left"
        >
            {/*Name  */}
            <div className="mb-5">
                <label htmlFor="username" className="block capitalize">
                    Name
                </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    className="contact_input"
                    placeholder="Enter your name"
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
                    required
                />
            </div>

            {/*  submit*/}
            <div>
                <button
                    type="submit"
                    className="px-4 py-2 text-white duration-300 bg-black rounded-md hover:bg-transparent hover:outline hover:text-black"
                >
                    Send Message
                </button>
            </div>

            {/* Display submission status */}

            {/* <div className="mt-5 text-green-500"> {}</div> */}

            {state?.status === 'success' && (
                <div className="mt-5 text-green-500">Your message has been successfully submitted!</div>
            )}
            {state?.status === 'error' && (
                <div className="mt-5 text-red-500">Something went wrong. Please try again.</div>
            )}
        </form>
    )
}

export default NewContactform
