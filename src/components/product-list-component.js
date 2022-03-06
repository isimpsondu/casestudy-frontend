import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "productId", headerName: "Product ID", flex: 5 },
  { field: "price", headerName: "Price", flex: 1 },
  { field: "stock", headerName: "Stock", flex: 1 },
  { field: "updatedAt", headerName: "Updated Date", type: "date", flex: 5 },
];

const ProductListComponent = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(`${window.env.API_BASE_URL}/api/product/all`)
      .then((data) => data.json())
      .then((data) => setProductList(data));
  }, []);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={productList}
        columns={columns}
      />
    </div>
  );
};

export default ProductListComponent;
