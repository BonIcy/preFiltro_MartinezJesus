import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Button, Form, Select } from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

export default function Update() {
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const [formInitialized, setFormInitialized] = useState(false);
  const id = localStorage.getItem("dataID");
  const location = useLocation();
  const { data, collectionName } = location.state || {};
  const dataFromGet = location.state.data
    ? JSON.parse(location.state.data)
    : {};
  const [profesoresOptions, setProfesoresOptions] = useState([]);
  const [estudiantesOptions, setEstudiantesOptions] = useState([]);
  const [asignaturasOptions, setAsignaturasOptions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6925/api/profesores")
      .then((response) => {
        const options = response.data.map((profesor) => ({
          key: profesor.correoElectronico,
          value: profesor.correoElectronico,
          text: `${profesor.nombre} ${profesor.apellido}`,
        }));
        setProfesoresOptions(options);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:6925/api/estudiantes")
      .then((response) => {
        const options = response.data.map((estudiante) => ({
          key: estudiante.matricula,
          value: estudiante.matricula,
          text: `${estudiante.nombre} ${estudiante.apellido}`,
        }));
        setEstudiantesOptions(options);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:6925/api/asignaturas")
      .then((response) => {
        const options = response.data.map((asignatura) => ({
          key: asignatura.nombre,
          value: asignatura.nombre,
          text: asignatura.nombre,
        }));
        setAsignaturasOptions(options);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (!formInitialized) {
      const filteredDataFromGet = Object.keys(dataFromGet)
        .filter((fieldName) => fieldName !== "_id")
        .reduce((obj, key) => {
          obj[key] = dataFromGet[key];
          return obj;
        }, {});

      setFormData(filteredDataFromGet);
      setFormInitialized(true);
    }
  }, [formInitialized, dataFromGet]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (formData[name] !== value) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSelectChange = (name, value) => {
    if (formData[name] !== value) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const updateData = () => {
    const { _id, ...updatedData } = formData;

    if (!id) {
      console.error('El valor de "id" no es válido.');
      return;
    }

    axios
      .put(`http://localhost:6925/api/upd/${collectionName}/${id}`, updatedData)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="button-container">
        <Button onClick={() => history.goBack()} className="shadow2__btn">
          Volver
        </Button>
      </div>
      <div className="button-container vertical-buttons"></div>
      <div className="center-content">
        <div className="login-box">
          <Form className="create-form">
            {Object.keys(formData).map((fieldName) => (
              <Form.Field key={fieldName}>
                <label style={{ color: "white" }}>{fieldName}</label>
                {fieldName === "profesorACargo" ? (
                  <Select
                    placeholder={`Seleccionar ${fieldName}`}
                    name={fieldName}
                    value={formData[fieldName]}
                    options={profesoresOptions}
                    onChange={(_, data) =>
                      handleSelectChange(fieldName, data.value)
                    }
                  />
                ) : fieldName === "estudiantesInscritos" ||
                  fieldName === "asignaturasInscritas" ? (
                  <Select
                    placeholder={`Seleccionar ${fieldName}`}
                    name={fieldName}
                    value={formData[fieldName]}
                    options={
                      fieldName === "estudiantesInscritos"
                        ? estudiantesOptions
                        : asignaturasOptions
                    }
                    onChange={(_, data) =>
                      handleSelectChange(fieldName, data.value)
                    }
                    multiple
                  />
                ) : (
                  <input
                    className="input-field"
                    placeholder={fieldName}
                    name={fieldName}
                    value={formData[fieldName] || ""}
                    onChange={handleInputChange}
                  />
                )}
              </Form.Field>
            ))}
            <center>
              <Button className="uwu" type="submit" onClick={updateData}>
                Actualizar
              </Button>
            </center>
          </Form>
        </div>
      </div>
    </div>
  );
}
