import React, { useState } from 'react'
import Editor from './Editor'

function App() {

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')

  const srcDoc = `
    <html> ${html} </html>
    <style> ${css} </style>
    <script> ${js} </script>
  `
  return (
    <>

      <div className = "pane top-pane">

        <Editor
          language = "xml"
          displayName = "HTML"
          value = {html}
          onChange = {setHtml}
        />

        <Editor
          language = "css"
          displayName = "CSS"
          value = {css}
          onChange = {setCss}
        />

        <Editor
          language = "javascript"
          displayName = "Javascript"
          value = {js}
          onChange = {setJs}
        />

      </div>

      <div className = "pane">

        <iframe
          
          title = "output"
          sandbox = "allow-scripts"
          srcDoc = {srcDoc}
          frameBorder = "0"
          width = "100%"
          height = "100%"
        />

      </div>

    </>
  );
}

export default App;
