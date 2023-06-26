import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext';

const TareasCliente = () => {

  const PORT = window.location.port ? window.location.port : 80;
  const PROTOCOL = window.location.protocol;
  const HOSTNAME = window.location.hostname;
  const URL = `${PROTOCOL}//${HOSTNAME}:${PORT}`;

  const {
    idCliente,
    setIdCliente
  } = useContext(GlobalContext);

  const idCli = localStorage.getItem("cliSelect");
  setIdCliente(Number(idCli));
  //console.log(idCliente);

  return (
    <>
      <iframe
            loading="lazy"
            src={`${URL}/duoc/server/tareas_dashboard/tareasCliente/?idCliente=${idCliente}`}
            width={"100%"}
            height={"500"}
            style={{ border: "none" }}
            title="Tarea Cliente"
          ></iframe>
    </>
  )
}

export default TareasCliente;