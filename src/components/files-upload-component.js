import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default class FilesUploadComponent extends Component {
  constructor(props) {
    super(props);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      csvFile: "",
    };
  }
  onFileChange(e) {
    this.setState({ csvFile: e.target.files[0] });
  }
  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("csvFile", this.state.csvFile);
    axios
      .post(
        `${window.env.API_BASE_URL}/api/product/uploadCsvFile`,
        formData,
        {}
      )
      .then((res) => {
        console.log(res);
        axios
          .post(`${window.env.API_BASE_URL}/api/product/processCsvFile`, {
            csvFileName: res.data.filename,
          })
          .then((_) => {
            toast.success("Your csv file was processed successfully!");
          })
          .catch((_) => toast.error("Your csv file is invalid"));
      })
      .catch(_ => toast.error("Something is wrong!"));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="file" onChange={this.onFileChange} />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
