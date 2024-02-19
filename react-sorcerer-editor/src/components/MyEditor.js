import React, { useCallback, useState } from 'react';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding, Modifier, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';

function MyEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const keyBindingFn = useCallback((event) => {
    if (event.keyCode === 32) {
      // 32 is the key code for space
      return "apply-style";
    }
    return getDefaultKeyBinding(event);
  }, []);

  const handleKeyCommand = useCallback(
    (command) => {
      if (command === "apply-style") {
        const selectionState = editorState.getSelection();
        const contentState = editorState.getCurrentContent();
        const startKey = selectionState.getStartKey();
        const currentBlock = contentState.getBlockForKey(startKey);
        const startOffset = selectionState.getStartOffset();
        const blockText = currentBlock.getText();

        // Check if the line starts with '#' and the cursor is at the second position
        if (blockText.startsWith('#') && startOffset === 1) {
          const newContentState = Modifier.setBlockType(
            contentState,
            selectionState,
            currentBlock.getType() === 'header-one' ? 'unstyled' : 'header-one'
          );
          setEditorState(EditorState.push(editorState, newContentState, 'change-block-type'));
          return 'handled';
        }

       
      }

      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        setEditorState(newState);
        return 'handled';
      }

      return 'not-handled';
    },
    [editorState]
  );

  return (
    <div style={{ border: "2px solid black" }}>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={keyBindingFn}
      />
    </div>
  );
}

export default MyEditor;
