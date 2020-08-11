import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as CodeMirror from 'codemirror';

require('codemirror/lib/codemirror.css');
require('codemirror/mode/jsx/jsx.js');
require('codemirror/theme/material.css');

function TextEditor() {
  const options: CodeMirror.EditorConfiguration = {
    mode: 'text/typescript-jsx',
    theme: 'material',
    lineNumbers: true
  };

  const callback = (element: HTMLTextAreaElement) => {
    const editor = CodeMirror.fromTextArea(element, options);
    editor.setSize(null, 'auto');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    editor.setValue(require('!raw-loader!./index.tsx').default);
    // editor.on('change', (cm, change) => {
    //   console.log(cm.getValue());
    // });
  };

  return (
    <textarea ref={callback} />
  );
}

ReactDOM.render(
  <TextEditor />,
  document.getElementById('root')
);
