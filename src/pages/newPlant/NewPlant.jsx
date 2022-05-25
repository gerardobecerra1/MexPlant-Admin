import { useContext, useEffect, useState } from "react";
import { getClassifications } from "../../context/classificationContext/apiCalls";
import { ClassificationContext } from "../../context/classificationContext/ClassificationContext";
import { createPlant } from "../../context/plantContext/apiCalls";
import { PlantContext } from "../../context/plantContext/PlantContext";
import "./newPlant.css";

export default function NewPlant() {
  const [plant, setPlant] = useState({});

  const { dispatch } = useContext(PlantContext);
  const { classifications, dispatch: dispatchClassification } = useContext(
    ClassificationContext
  );

  useEffect(() => {
    getClassifications(dispatchClassification);
  }, [dispatchClassification]);

  const handleChange = (e) => {
    if (e.target.name === "file") {
      const value = e.target.files[0];
      setPlant({ ...plant, file: value });
      console.log(plant);
    } else {
      const value = e.target.value;
      setPlant({ ...plant, [e.target.name]: value });
      console.log(plant);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPlant(plant, dispatch);
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nueva Planta</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Imagen de la Planta</label>
          <input type="file" id="image" name="file" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Clasificación</label>
          <select
            name="classification"
            id="classification"
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
        </div>
        <div className="addProductItem">
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Huizache"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Nombre Científico</label>
          <input
            type="text"
            placeholder="Acacia farnesiana"
            name="scientificName"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Descripción</label>
          <textarea
            placeholder="La Acacia farnesiana, comúnmente conocida como Espinillo blanco, es así nombrada debido a las numerosas espinas distribuidas a lo largo de sus ramas, es conocido también como Huisache o Huizache o Vinorama."
            id="idDescripción"
            name="description"
            rows="4"
            cols="50"
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="addProductButton" onClick={handleSubmit}>
          Registrar
        </button>
      </form>
    </div>
  );
}
