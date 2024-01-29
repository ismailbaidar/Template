import React, { useState, useRef, useMemo, useEffect } from "react"
import JoditEditor from "jodit-react"
export default function TextEditor({ placeholder }) {
  const editor = useRef(null)
  const [content, setContent] = useState("")

  const config = useMemo(() => {
    {
      readonly: false, placeholder
    }
  }, [placeholder])
  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={(newContent) => setContent(newContent)}
        onChange={(newContent) => {
          console.log(newContent)
        }}
      />
    </div>
  )
}
