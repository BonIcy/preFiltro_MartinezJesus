import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Button, Form, Select } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Navbar from '../components/Nabvar';

export default function Post() {
  const [collectionName, setCollectionName] = useState('cursos');
  const [formData, setFormData] = useState({
    nombreCurso: '',
    descripcion: '',
    horario: '',
    cupoMaximo: 0,
    profesorACargo: '',
    estudiantesInscritos: []
  });
  const [profesoresOptions, setProfesoresOptions] = useState([]);
  const [estudiantesOptions, setEstudiantesOptions] = useState([]);
  const [asignaturasOptions, setAsignaturasOptions] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios
      .get('http://localhost:6925/api/profesores')
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
      .get('http://localhost:6925/api/estudiantes')
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
      .get('http://localhost:6925/api/asignaturas')
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

  const handleCollectionChange = (newCollection) => {
    setCollectionName(newCollection);
    const initialFormData = {
      cursos: {
        nombreCurso: '',
        descripcion: '',
        horario: '',
        cupoMaximo: 0,
        profesorACargo: '',
        estudiantesInscritos: []
      },
      asignaturas: {
        nombre: '',
        descripcion: '',
        horarioClases: '',
        profesorACargo: '',
        materialEstudio: '',
      },
      estudiantes: {
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        asignaturasInscritas: [],
        direccion: '',
        correoElectronico: '',
        numeroTelefono: '',
        matricula: '',
        notaFinal: 0,
      },
      profesores: {
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        direccion: '',
        correoElectronico: '',
        numeroTelefono: '',
        experienciaLaboral: '',
      },
      paseos: {
        nombre: '',
        descripcion: '',
        fechaInicio: '',
        fechaFin: '',
        duracionEnDias: 0,
      }
    }[newCollection];

    setFormData(initialFormData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const postData = () => {
    const updatedFormData = { ...formData };
    if (collectionName !== 'paseos') {
      if (collectionName !== 'profesores' && collectionName !== 'estudiantes') {
        updatedFormData.profesorACargo = [formData.profesorACargo];
      }
      updatedFormData.estudiantesInscritos = formData.estudiantesInscritos;
    }
  
    axios
      .post(`http://localhost:6925/api/add/${collectionName}`, updatedFormData)
      .then(() => {
        history.push('/');
      });
  };

  const navbarButtons = [
    { text: 'Cursos', collectionName: 'cursos' },
    { text: 'Asignaturas', collectionName: 'asignaturas' },
    { text: 'Estudiantes', collectionName: 'estudiantes' },
    { text: 'Profesores', collectionName: 'profesores' },
    { text: 'Paseos', collectionName: 'paseos' },
  ];

  return (
    <div>
      <Navbar title="Añadir datos" buttons={navbarButtons} setCollectionName={handleCollectionChange} isGet={false} />
      <div className="button-container">
        <Button onClick={() => history.goBack()} className='shadow2__btn'>Volver</Button>
      </div>
      <div className="center-content">
      <h2 className='Ttitul'>{collectionName}</h2>
        <div className="login-box">
          <Form className='create-form'>
            {Object.keys(formData).map((fieldName) => (
              <Form.Field key={fieldName}>
                <label style={{ color: 'white' }}>{fieldName}</label>
                {fieldName === 'profesorACargo' ? (
                  <Select
                    placeholder={`Seleccionar ${fieldName}`}
                    name={fieldName}
                    value={formData.profesorACargo}
                    options={profesoresOptions}
                    onChange={(event, data) => handleInputChange({ target: { name: fieldName, value: data.value } })}
                  />
                ) : fieldName === 'estudiantesInscritos' ? (
                  <Select
                    placeholder={`Seleccionar ${fieldName}`}
                    name={fieldName}
                    value={formData.estudiantesInscritos}
                    options={estudiantesOptions}
                    onChange={(event, data) => handleInputChange({ target: { name: fieldName, value: data.value } })}
                    multiple
                  />
                ) : fieldName === 'asignaturasInscritas' ? (
                  <Select
                    placeholder={`Seleccionar ${fieldName}`}
                    name={fieldName}
                    value={formData.asignaturasInscritas}
                    options={asignaturasOptions}
                    onChange={(event, data) => handleInputChange({ target: { name: fieldName, value: data.value } })}
                    multiple
                  />
                ) : (
                  <input
                    placeholder={fieldName}
                    name={fieldName}
                    value={formData[fieldName]}
                    onChange={handleInputChange}
                  />
                )}
              </Form.Field>
            ))}
            <center>
              <Button className='uwu' type='submit' onClick={postData}>
                Crear
              </Button>
            </center>
          </Form>
        </div>
      </div>
    </div>
  );
}