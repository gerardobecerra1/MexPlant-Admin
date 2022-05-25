import { Link, useLocation } from "react-router-dom";
import "./plant.css";
import { Publish } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { ClassificationContext } from "../../context/classificationContext/ClassificationContext";
import { getClassifications } from "../../context/classificationContext/apiCalls";
import { PlantContext } from "../../context/plantContext/PlantContext";
import { updatePlant } from "../../context/plantContext/apiCalls";

export default function Plant() {
  const { classifications, dispatch } = useContext(ClassificationContext);

  useEffect(() => {
    getClassifications(dispatch);
  }, [dispatch]);

  const location = useLocation();
  const plant = location.plant;

  const [updtPlant, setUpdtPlant] = useState({});

  const { dispatch: dispatchPlant } = useContext(PlantContext);

  const handleChange = (e) => {
    updtPlant.id = plant._id;
    if (e.target.name === "file") {
      const value = e.target.files[0];
      setUpdtPlant({ ...updtPlant, file: value });
      console.log(updtPlant);
    } else {
      const value = e.target.value;
      setUpdtPlant({ ...updtPlant, [e.target.name]: value });
      console.log(updtPlant);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePlant(updtPlant, dispatchPlant);
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Planta</h1>
        <Link to="/newplant">
          <button className="productAddButton">Crear</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={plant.image}
              alt="Imagen de la Planta"
              className="productInfoImg"
            />
            <span className="productName">
              {plant.name} / {plant.scientificName}
            </span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID:</span>
              <span className="productInfoValue"> {plant._id}</span>
            </div>
            <div className="productInfoItem desc">
              <span className="productInfoKey">Clasificación:</span>
              <span className="productInfoValue">
                {plant.classification.name}
              </span>
            </div>
            <div className="productInfoItem desc">
              <span className="productInfoKey">Descripción:</span>
              <p className="productInfoValue"> {plant.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Nueva Clasificación</label>
            <select
              name="classification"
              id="idClassification"
              onChange={handleChange}
            >
              <option value="0">Selecciona una Clasificación</option>
              {classifications.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <label>Nuevo Nombre</label>
            <input
              name="name"
              type="text"
              placeholder={plant.name}
              onChange={handleChange}
            />
            <label>Nuevo Nombre Científico</label>
            <input
              name="scientificName"
              type="text"
              placeholder={plant.scientificName}
              onChange={handleChange}
            />
            <label>Nueva Descripción</label>
            <textarea
              placeholder={plant.description}
              id={plant._id}
              name="description"
              rows="4"
              cols="50"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={plant.image}
                alt="Imagen de la Planta"
                className="productUploadImg"
              />
              <label className="label" for="file">
                <Publish />
                Nueva Imagen
              </label>
              <input
                name="file"
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={handleChange}
              />
            </div>
            <button className="productButton" onClick={handleSubmit}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
