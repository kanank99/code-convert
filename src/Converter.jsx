import React, { useState } from 'react'
import { Configuration, OpenAIApi } from "openai";


export default function Converter(props) {
    const [message, setMessage] = useState("")
    const {userPrompt} = props;

    const configuration = new Configuration({
        apiKey: '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'
    });
    
    const openai = new OpenAIApi(configuration);
    
    const startPrompt = async (prompt) => {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {"role": "system", "content": "You convert code from one programming language to another."},
                {"role": "user", "content": prompt},
            ],
            max_tokens: 500,
        });
        console.log(response.data)
        setMessage((oldMessage) => oldMessage = response.data.choices[0].text)
    }

  return (
    <>
        <div>{message}</div>
        <button onClick={() => startPrompt({userPrompt})}>Convert</button>
    </>
  )
}
