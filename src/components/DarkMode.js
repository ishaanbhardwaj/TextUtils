import React, {useState} from 'react'

export default function DarkMode(props) {

    const [darkmode, changeStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [text, modeText] = useState("Enable Dark Mode")

    const toggleDarkmode = () => {
        if(darkmode.backgroundColor === "white"){
            changeStyle({
                color: 'white',
                backgroundColor: 'black',
            })
            modeText("Disable Dark Mode")
        } else {
            changeStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            modeText("Enable Dark Mode")
        }
    }

    return (
        <section className="text-gray-600 body-font" style={darkmode}>
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Kickstarter Actually Pinterest Brunch Bitters Occupy</h2>
                <div className="md:w-3/5 md:pl-6">
                <p className="leading-relaxed text-base">Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.</p>
                <div className="flex md:mt-4 mt-6">
                    <button onClick={toggleDarkmode} className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">{text}</button>
                </div>
                </div>
            </div>
        </section>
    )
}
