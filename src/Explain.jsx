import React, { useState, useRef, useEffect} from 'react';
import Loading from './Loading';
import { Configuration, OpenAIApi } from "openai";
import Select from 'react-select';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Navbar from './Navbar';

export default function Explain() {
    const [message, setMessage] = useState("");
    const [selectedFrom, setSelectedFrom] = useState(null);
    const [showLoading, setShowLoading] = useState(false);
    const userPrompt = useRef();

    useEffect(() => {
      setShowLoading(false)
    }, [message]);

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_API_KEY
    });
    
    const openai = new OpenAIApi(configuration);
    
    const startPrompt = async () => {
        setShowLoading(true)
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {"role": "system", "content": `You will explain what the following ${selectedFrom.value} code does. Make a good and thorough explanation.`},
                {"role": "user", "content": userPrompt.current.value},
            ],
            max_tokens: 1000,
        });
        setMessage((oldMessage) => oldMessage = response.data.choices[0].message.content)
    }

    const options = [
        {value: 'c', label: 'C'},
        {value: 'javascript', label: 'Javascript'},
        {value: 'java', label: 'Java'},
        {value: 'python', label: 'Python'},
    ]

  const handleChangeFrom = (selectedOption) => {
    setSelectedFrom(selectedOption);
  };

  return (
    <>
        <Navbar />
        <form>
            <label htmlFor="">Select your language: </label>
            <Select className='selectFrom' options={options} onChange={handleChangeFrom}/>
            {/* <label htmlFor="">Convert to: </label>
            <Select className='selectTo' options={options} onChange={handleChangeTo} /> */}
            <label htmlFor="">Your Code: </label>
            <textarea className='userCode' ref={userPrompt} type="text" />
            <div className='codeResult'>
              {showLoading === true ? <Loading /> : null}
              {message !== "" ? 
              <SyntaxHighlighter language={selectedFrom.value} style={tomorrowNight} wrapLongLines={true}>
                {message}
              </SyntaxHighlighter>
              : null}
            </div>
        </form>
        <button onClick={() => startPrompt({userPrompt})}>Explain</button>
    </>
  )
}
