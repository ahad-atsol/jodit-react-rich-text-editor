import React, { useMemo, useRef } from "react";
import JoditEditor from "jodit-react";

const TextEditor = ({ value, onChange }) => {
  const editor = useRef(null);
  console.log(value);
  return useMemo(
    () => (
      <JoditEditor
        ref={editor}
        value={value}
        config={{
          uploader: {
            insertImageAsBase64URI: true,
          },
        }}
        tabIndex={1}
        onChange={(newContent) => {
          onChange(newContent);
        }}
      />
    ),
    []
  );
};

export default TextEditor;
