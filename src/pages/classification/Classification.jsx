import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { updateClassification } from "../../context/classificationContext/apiCalls";
import { ClassificationContext } from "../../context/classificationContext/ClassificationContext";
import "./classification.css";


export default function Product() {
  const location = useLocation();
  const classification = location.classification;

  const [updtClassification, setUpdtClassification] = useState({});
  const { dispatch } = useContext(ClassificationContext);

  const handleChange = (e) => {
    updtClassification.id = classification._id;
    const value = e.target.value;
    if (value !== "") {
      setUpdtClassification({ ...updtClassification, [e.target.name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateClassification(updtClassification, dispatch);
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Clasificación</h1>
        <Link to="/newclassification">
          <button className="productAddButton">Crear</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{classification.name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID:</span>
              <span className="productInfoValue"> {classification._id}</span>
            </div>
            <div className="productInfoItem desc">
              <span className="productInfoKey">Descripción:</span>
              <p className="productInfoValue"> {classification.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Nuevo Nombre</label>
            <input
              name="name"
              type="text"
              placeholder={classification.name}
              onClick={handleChange}
            />
            <label>Nueva Descripción</label>
            <textarea
              placeholder={classification.description}
              id={classification._id}
              name="description"
              rows="4"
              cols="50"
              onClick={handleChange}
            ></textarea>
          </div>
          <div className="productFormRight">
            <button className="productButton" onClick={handleSubmit}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
