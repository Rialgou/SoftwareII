import { useNavigate } from "react-router-dom";
import { Stack, Badge, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { obtenerUsuario } from "../../Funciones/consultas";
import { useState, useEffect, useContext } from "react";
import { HomeContext } from "../../ComponentesGlobales/Contextos/HomeContext";
import ReportesUsuarios from "./Componentes/ReportesUsuarios";
import BarraSuperiorUsuario from "./Componentes/BarraSuperiorUsuario";

function Usuario() {
  const navigate = useNavigate();

  const handleNewReportClick = () => {
    navigate("/usuario/reporte");
  };

  const [usuario, setUsuario] = useState({});
  const {cuenta} = useContext(HomeContext);

  const usuarioId = cuenta.id;

  useEffect(() => {
    const fetchData = async () => {
      const datosUsuario = await obtenerUsuario(usuarioId);
      setUsuario(datosUsuario);
    };

    fetchData();
  }, [usuarioId]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <main className="contenido-principal">
        <BarraSuperiorUsuario></BarraSuperiorUsuario>

        <br></br>
        <br></br>

        <Stack gap={3}>
          <div className="text-center">
            <h2 className="titulo">
              <strong>Estado</strong> <Badge bg="primary">Reportes</Badge>
            </h2>
          </div>

          <div className="mx-auto acordeon">
            <ReportesUsuarios />
          </div>

          <div className="contenedor-boton">
            <Button
              className="boton-enviar"
              variant="dark"
              onClick={handleNewReportClick}
            >
              Crear nuevo reporte
            </Button>
          </div>
        </Stack>
      </main>
    </motion.div>
  );
}

export default Usuario;
