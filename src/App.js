import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Stack, Container } from "@mui/material";
import ProductListComponent from "./components/product-list-component";
import FilesUploadComponent from "./components/files-upload-component";

import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <Container>
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <FilesUploadComponent />
          <ProductListComponent />
        </Stack>
        <ToastContainer />
      </Container>
    );
  }
}
export default App;
