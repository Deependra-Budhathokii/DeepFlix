'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const getMenuClasses = () => {
        let menuClasses = []
        if (isOpen) {
            menuClasses = [
                'absolute',
                'bg-gray-700',
                'w-full',
                'top-[80px]',
                'left-0',
                'flex',
                'flex-col',
                'gap-6',
                'py-[20px]',
                'pl-[20px]',
                'text-white',
            ]
        } else {
            // menuClasses.push('hidden')
            menuClasses = ['hidden', 'md:flex', 'gap-6']
        }

        return menuClasses.join(' ')
    }

    // console.log(getMenuClasses())

    // To ensure the menu bar closes when a navigation link is clicked
    // you need to add a click handler to each Link component that sets isOpen to false
    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <nav className="z-50">
            <ul className={`${getMenuClasses()} `}>
                <li className="">
                    <Link href="/" className="menu_style" onClick={handleLinkClick}>
                        Home
                    </Link>
                </li>
                <li className="">
                    <Link href="/about" className="menu_style" onClick={handleLinkClick}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/movie" className="menu_style" onClick={handleLinkClick}>
                        Movie
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="menu_style" onClick={handleLinkClick}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Button */}
            {/* <button onClick={() => setIsOpen(!isOpen)} className="md:hidden"></button> */}
            <button
                data-collapse-toggle="navbar-default"
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
                // aria-controls="navbar-default"
                aria-controls="menu-list"
                // aria-expanded="false"
                aria-expanded={isOpen}
                aria-label="Toggle menu"
            >
                <span class="sr-only">Open main menu</span>
                <img src="/menu.svg" alt="menu_icon" />
            </button>
        </nav>
    )
}

export default Nav
