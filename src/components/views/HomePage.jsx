import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';

const HomePage = () => {
  function handleChange(newValue) {
    console.log("change", newValue);
    // Handle the change here
  }

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={handleChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
      {/* Other content and components for your home page */}
    </div>
  );
};

export default HomePage;
