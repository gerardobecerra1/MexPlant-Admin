import "./classificationList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ClassificationContext } from "../../context/classificationContext/ClassificationContext";
import {
  deleteClassification,
  getClassifications,
} from "../../context/classificationContext/apiCalls";

export default function ClassificationList() {
  const { classifications, dispatch } = useContext(ClassificationContext);

  useEffect(() => {
    getClassifications(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteClassification(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 190 },
    { field: "name", headerName: "Nombre", width: 150 },
    { field: "description", headerName: "Descripción", width: 500 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: `/classification/${params.row._id}`,
                classification: params.row,
              }}
            >
              <button className="productListEdit">Editar</button>
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
      <Link to="/newclassification">
        <button style={{ margin: "10px" }} className="productAddButton">
          Crear
        </button>
      </Link>
      <DataGrid
        rows={classifications}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
