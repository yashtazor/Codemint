import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor( props ) {

    const {

        language,
        displayName,
        value,
        onChange

    } = props

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div className = "EditorContainer">

            <div className = "EditorTitle"> 
                {displayName}
            </div>

            <ControlledEditor
                onBeforeChange = {handleChange}
                value = {value}
                className = "editor-wrapper"
                options = {{
                    mode: language,
                    lint: true,
                    lineWrapping: true,                    
                    lineNumbers: true,
                    theme: 'material'
                }}
            />

        </div>
    );
}
