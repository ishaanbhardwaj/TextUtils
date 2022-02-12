import React from 'react'

export default function About(props) {
  return (
    <section className={`text-gray-600 body-font relative ${props.mode==='light'?'bg-gray-100':'bg-gray-900'}`}>
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
            <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-4 ${props.mode==='light'?'text-gray-900':'text-white'}`}>Contact Us</h1>
            <p className={`lg:w-2/3 mx-auto leading-relaxed text-base ${props.mode==='light'?'text-gray-900':'text-white'}`}>Fill the Form to Contact Us</p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                <div className="relative">
                    <label for="name" className={`leading-7 text-sm ${props.mode==='light'?'text-gray-900':'text-white'}`}>Name</label>
                    <input type="text" id="name" name="name" className={`w-full ${props.mode==='light'?'text-gray-700 bg-gray-100 border-gray-300':'text-white bg-gray-900 border-white-300'} bg-opacity-50 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`} />
                </div>
                </div>
                <div className="p-2 w-1/2">
                <div className="relative">
                    <label for="email" className={`leading-7 text-sm ${props.mode==='light'?'text-gray-900':'text-white'}`}>Email</label>
                    <input type="email" id="email" name="email" className={`w-full ${props.mode==='light'?'text-gray-700 bg-gray-100 border-gray-300':'text-white bg-gray-900 border-white-300'} bg-opacity-50 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`} />
                </div>
                </div>
                <div className="p-2 w-full">
                <div className="relative">
                    <label for="message" className={`leading-7 text-sm ${props.mode==='light'?'text-gray-900':'text-white'}`}>Message</label>
                    <textarea id="message" name="message" className={`w-full ${props.mode==='light'?'text-gray-700 bg-gray-100 border-gray-300':'text-white bg-gray-900 border-white-300'} bg-opacity-50 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}></textarea>
                </div>
                </div>
                <div className="p-2 w-full text-center">
                    <button className={`flex-inline text-white ${props.mode==='light'?'bg-indigo-500':'bg-red-900'} border-0 py-2 my-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg`}>Submit</button>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}
