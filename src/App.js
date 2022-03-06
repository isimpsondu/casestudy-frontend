import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import FilesUploadComponent from "./components/files-upload-component";

import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilesUploadComponent />
        <ToastContainer />
      </div>
    );
  }
}
export default App;
