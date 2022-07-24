import React, { Component } from "react";
import axios from "axios";
import fileDownload from "js-file-download";

export default class Download extends Component {
  handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then(res => {
        fileDownload(res.data, filename);
      });
  };
  render() {
    return (
      <div>
        Download
        <button
          onClick={() => {
            this.handleDownload(
              "https://ae01.alicdn.com/kf/H0d47d003eafc4d4584a3ac2731338cf00.jpg",
              "Kamera.jpg"
            );
          }}
        >
          Download Image
        </button>
      </div>
    );
  }
}
