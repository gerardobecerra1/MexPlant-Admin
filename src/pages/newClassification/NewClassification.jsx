import { useContext, useState } from "react";
import { createClassification } from "../../context/classificationContext/apiCalls";
import { ClassificationContext } from "../../context/classificationContext/ClassificationContext";
import "./newClassification.css";

export default function NewPlant() {
  const [classification, setClassification] = useState({});

  const { dispatch } = useContext(ClassificationContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setClassification({ ...classification, [e.target.name]: value });
    console.log(classification);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createClassification(classification, dispatch);
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nueva Clasificación</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Nombre de Clasificación"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Descripción</label>
          <textarea
            placeholder="Describe la Clasificación"
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
