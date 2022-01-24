import React, {useState} from 'react'

export default function TextForm(props) {
    const toUppercase = () => {
        //console.log("Clicked");
        let convertedText = text.toUpperCase();
        changeText(convertedText);
    }

    const toLowercase = () => {
        //console.log("Clicked");
        let convertedText = text.toLowerCase();
        changeText(convertedText);
    }

    const toCapatalizeCase = () => {
        let str = text.toLowerCase().split(" ");
        for(let i=0;i<str.length;i++){
            str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
        }
        let convertedText = str.join(" ");
        changeText(convertedText);
    }

    const toFirstLineCase = () => {
        let str = text.toLowerCase().split(". ");
        for(let i=0;i<str.length;i++){
            str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
        }
        let convertedText = str.join(". ");
        changeText(convertedText);
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
    }

    const removeSpace = () => {
        let str = text.replace(/\s+/g,' ');
        changeText(str);
    }

    const clearText = () => {
        let convertedText = '';
        changeText(convertedText);
    }

    const typingText = (event) => {
        changeText(event.target.value);
    }

    const [text, changeText] = useState('');
    return (
        <section className={`text-gray-600 body-font relative ${props.mode==='light'?'bg-gray-100':'bg-gray-900'}`}>
            <div className="container px-5 py-6 mx-auto">
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="sm:text-3xl text-2xl mb-6 font-medium title-font mb-4 text-gray-900">{props.fetaureheading}</h1>
                            <div className="relative">
                                <textarea id="message" placeholder='Enter Your Text Here' name="message" value={text} onChange={typingText} className={`w-full bg-opacity-50 rounded border ${props.mode==='light'?'text-gray-700 bg-gray-100 border-gray-300':'text-white bg-gray-900 border-white-300'} h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button onClick={toUppercase} className={`flex-inline mr-2 text-white ${props.mode==='light'?'bg-indigo-500':'bg-red-900'} border-0 py-2 my-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg`}>UPPERCASE</button>
                            <button onClick={toLowercase} className={`flex-inline mr-2 text-white ${props.mode==='light'?'bg-indigo-500':'bg-red-900'} border-0 py-2 my-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg`}>lowercase</button>
                            <button onClick={toCapatalizeCase} className={`flex-inline mr-2 text-white ${props.mode==='light'?'bg-indigo-500':'bg-red-900'} border-0 py-2 my-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg`}>Capatalize First Letter</button>
                            <button onClick={toFirstLineCase} className={`flex-inline mr-2 text-white ${props.mode==='light'?'bg-indigo-500':'bg-red-900'} border-0 py-2 my-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg`}>Capatalize First Line Letter</button>
                            <button onClick={copyText} className={`flex-inline mr-2 text-white ${props.mode==='light'?'bg-indigo-500':'bg-red-900'} border-0 py-2 my-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg`}>Copy Text</button>
                            <button onClick={removeSpace} className={`flex-inline mr-2 text-white ${props.mode==='light'?'bg-indigo-500':'bg-red-900'} border-0 py-2 my-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg`}>Remove Extra Space</button>
                            <button onClick={clearText} className={`flex-inline mr-2 text-white ${props.mode==='light'?'bg-indigo-500':'bg-red-900'} border-0 py-2 my-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg`}>Clear Text</button>
                        </div>
                        <div className={`p-2 w-full ${props.mode==='light'?'text-gray-900':'text-white'}`}>
                            <h1 className="sm:text-3xl text-2xl mb-6 font-medium title-font mb-4">Counter</h1>
                            <p className="leading-relaxed text-base">You have typed {text.split(" ").length} word and {text.length} characters</p>
                        </div>
                        <div className={`p-2 w-full ${props.mode==='light'?'text-gray-900':'text-white'}`}>
                            <h1 className="sm:text-3xl text-2xl mb-6 font-medium title-font mb-4">Text Preview</h1>
                            <p className="leading-relaxed">{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
