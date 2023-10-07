import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Nabvar';



export default function Get() {
  const [APIData, setAPIData] = useState([]);
  const [collectionName, setCollectionName] = useState('cursos');

  useEffect(() => {
    fetchData();
  }, [collectionName]);

  const fetchData = () => {
    axios
      .get(`http://localhost:6925/api/${collectionName}`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  };

  const setData = (data) => {
    localStorage.setItem('collectionName', collectionName);
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        localStorage.setItem(key, data[key]);
      }
    }
  };

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:6925/api/del/${collectionName}/${id}`)
      .then(() => {
        fetchData();
      });
  };

  const renderCardData = () => {
    if (APIData.length === 0) {
      return <div>No hay datos disponibles.</div>;
    }

    return APIData.map((data) => (
      <Card key={data._id}>
        <Card.Content>
          {collectionName === 'cursos' && (
            <>
              <Card.Header>{data.nombreCurso}</Card.Header>
              <Card.Meta><strong>A cargo de:</strong> {data.profesorACargo}</Card.Meta>
              <Card.Description>
                <strong>Horario:</strong> {data.horario}<br />
                <strong>Cupo Máximo:</strong> {data.cupoMaximo}<br />
                <strong>Descripcion:</strong> {data.descripcion}
              </Card.Description>
            </>
          )}

          {collectionName === 'asignaturas' && (
            <>
              <Card.Header>{data.nombre}</Card.Header>
              <Card.Meta>{data.profesorACargo}</Card.Meta>
              <Card.Description>
                <strong>Horario de Clases:</strong> {data.horarioClases} <br />
                <strong>Material de estudio:</strong> {data.materialEstudio} <br />
                <strong>Descripcion:</strong> {data.descripcion}
              </Card.Description>
            </>
          )}

          {collectionName === 'estudiantes' && (
            <>
              <Card.Header>{data.nombre} {data.apellido}</Card.Header>
              <Card.Meta> <strong>Matricula: </strong>{data.matricula}</Card.Meta>
              <Card.Description>
                <strong> Numero de celular:</strong> {data.numeroTelefono}<br />
                <strong> Nota Final:</strong> {data.notaFinal}<br />
                <strong> Correo Electronico:</strong> {data.correoElectronico}
              </Card.Description>
            </>
          )}
          {collectionName === 'profesores' && (
            <>
              <Card.Header>{data.nombre} {data.apellido}</Card.Header>
              <Card.Meta> <strong>Correo: </strong>{data.correoElectronico}</Card.Meta>
              <Card.Description>
                <strong> Numero telefonico:</strong> {data.numeroTelefono}<br />
                <strong> Direccion:</strong> {data.direccion}<br />
                <strong> Experiencia Laboral:</strong> {data.experienciaLaboral}
              </Card.Description>
            </>
          )}
          {collectionName === 'paseos' && (
            <>
              <Card.Header>{data.nombre}</Card.Header>
              <Card.Meta>{data.fechaInicio} - {data.fechaFin}</Card.Meta>
              <Card.Description>
                <strong> Dias de duracion: </strong> {data.duracionEnDias}<br />
                <strong> Descripcion: </strong> {data.descripcion}
              </Card.Description>
            </>
          )}


        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Link
              to={{
                pathname: '/update',
                state: { data: JSON.stringify(data), collectionName: collectionName },
              }}
              onClick={() => localStorage.setItem('dataID', data._id)}
            >
              <Button basic color="green">
                Actualizar
              </Button>
            </Link>
            <Button basic color="red" onClick={() => onDelete(data._id)}>
              Eliminar
            </Button>
          </div>
        </Card.Content>
      </Card>
    ));
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
      <Navbar title="Administrar datos de academia" buttons={navbarButtons} setCollectionName={setCollectionName} />
      <div className="center-content">
        <h2 className='Ttitul'>{collectionName}</h2>
        <div className="button-container">
          <div className="button-container">
            <Link to="/post">
              <Button className="post-button">Postear Datos</Button>
            </Link>
          </div>
        </div >

        <Card.Group>
          {renderCardData()}
        </Card.Group>
      </div>
    </div>
  );
}
