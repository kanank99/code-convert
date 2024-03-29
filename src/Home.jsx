import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Home() {

  const javascriptCode = `let chars = ['A', 'B', 'A', 'C', 'B'];

let dupChars = chars.filter((c, index) => {
  return chars.indexOf(c) !== index;
});
  
console.log(dupChars);`

  const pythonCode = `chars = ['A', 'B', 'A', 'C', 'B']

dupChars = list(filter(lambda c: chars.count(c) > 1, chars))
  
print(dupChars)`

  return (
    <>
      <Navbar />
      <div className='home-content'>
          <div className='tagline'>Translate your code between programming languages with ease and more!</div>
          <div className='codeSnippet'>
            <p>Javascript</p>
            <SyntaxHighlighter language="javascript" style={tomorrowNight} wrapLongLines={true}>
              {javascriptCode}
            </SyntaxHighlighter>
          </div>
          <svg width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#3363ad" d="M32 64c-.65 0-1.26-.27-1.7-.75L8.5 39.66c-.87-.94-.81-2.41.13-3.28.94-.87 2.41-.81 3.28.13L32 58.26l20.09-21.75c.87-.94 2.34-1 3.28-.13s1 2.34.13 3.28L33.7 63.25c-.44.48-1.05.75-1.7.75z"/><path fill="#3363ad" d="M32 64c-1.28 0-2.32-1.04-2.32-2.32V2.32C29.68 1.04 30.72 0 32 0s2.32 1.04 2.32 2.32v59.36c0 1.28-1.04 2.32-2.32 2.32z"/></svg>
          <div className='codeSnippet'>
            <p>Python</p>
            <SyntaxHighlighter language="python" style={tomorrowNight} wrapLongLines={true}>
              {pythonCode}
            </SyntaxHighlighter>
          </div>
      </div>
      <Link to='/converter' style={{ textDecoration: 'none' }}><button>Get Started</button></Link>    
    </>
  )
}
