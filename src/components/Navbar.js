import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
        <header className={`text-gray-600 body-font ${props.mode==='light'?'bg-indigo-500':'bg-red-500'}`}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl text-white">{props.logo}</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-gray-900 text-white">{props.about}</a>
                <a onClick={props.colorChange} className="mr-5 hover:text-gray-900 text-white">Pink</a>
                </nav>
                <button onClick={props.toggleMode} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">{props.mode==='light'?'Enable Dark Mode':'Enable Light Mode'}</button>
            </div>
        </header>
        </>
    )
}

Navbar.propTypes = {
    logo: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    logo: 'Set Logo Here',
    about: 'Set About Text Here',
}
