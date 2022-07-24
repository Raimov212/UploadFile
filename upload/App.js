import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadFiles from "./components/upload-files.component";

class App extends Component {
  render() {
    return <div>
        <UploadFiles/>
    </div>;
  }
}
export default App;
