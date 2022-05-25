import "./plantList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PlantContext } from "../../context/plantContext/PlantContext";
import { deletePlant, getPlants } from "../../context/plantContext/apiCalls";

export default function PlantList() {
  const { plants, dispatch } = useContext(PlantContext);

  useEffect(() => {
    getPlants(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deletePlant(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 190 },
    {
      field: "planta",
      headerName: "Planta",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "scientificName", headerName: "N/Científico", width: 150 },
    { field: "description", headerName: "Descripción", width: 200 },
    {
      field: "classification",
      headerName: "Classification",
      width: 190,
      valueFormatter: (params) => params.row.classification.name,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: `/plant/${params.row._id}`, plant: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={plants}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
