// Importa las funciones necesarias de la biblioteca Firestore de Firebase.
import { type } from '@testing-library/user-event/dist/type';
import { getFirestore, doc, getDoc, collection, query, where, getDocs, serverTimestamp, addDoc, orderBy } from 'firebase/firestore';

// Función asíncrona para obtener todos los reportes asociados a los proyectos de un administrador específico.
export const obtenerReportesAdministrador = async (administradorId, estado) => {
    try {
        console.log("obtenerReportesAdministrador");
        // Crea una instancia de Firestore.
        const db = getFirestore();

        // Crea una referencia al documento del administrador en la colección "administradores" utilizando el ID proporcionado.
        const referenciaAdministrador = doc(db, 'administradores', administradorId);

        // Crea referencias a las colecciones "proyectos" y "reportes" en la base de datos.
        const proyectosCollection = collection(db, "proyectos");
        const reportesCollection = collection(db, "reportes");

        // Crea una consulta que filtra los proyectos que tienen la referencia del administrador proporcionado.
        const proyectosFiltrados = query(proyectosCollection, where("administrador", "==", referenciaAdministrador));

        // Declara un arreglo vacío llamado "proyectoRefs" y obtiene el resultado de la consulta de proyectos filtrados.
        const proyectoRefs = [];
        const proyectosQuerySnapshot = await getDocs(proyectosFiltrados);

        // Agrega las referencias de los proyectos filtrados al arreglo "proyectoRefs".
        proyectosQuerySnapshot.forEach((doc) => {
            proyectoRefs.push(doc.ref);
        });
        console.log(typeof estado);
        // Crea una consulta que filtra los reportes que están asociados a los proyectos filtrados previamente.
        const reportesFiltrados = query(reportesCollection, where("proyecto", "in", proyectoRefs),where("estado","==",estado),orderBy("fechaEmision"));

        // Obtiene el resultado de la consulta de reportes filtrados.
        const reportesQuerySnapshot = await getDocs(reportesFiltrados);

        // Declara un arreglo vacío llamado "reportes".
        const reportes = [];

        // Agrega los reportes filtrados al arreglo "reportes", incluyendo los datos y el ID del documento.
        reportesQuerySnapshot.forEach((doc) => {
            reportes.push({ ...doc.data(), id: doc.id });
        });

        // Retorna el arreglo de reportes.
        return reportes.reverse();

    } catch (error) { // Captura cualquier error que pueda ocurrir durante la ejecución.
        console.log(error); // Muestra el error en la consola.
        return []; // Retorna un arreglo vacío en caso de error.
    }
};



// Función asíncrona para obtener los datos de un administrador específico.
export const obtenerDatosAdministrador = async (administradorId) => {
    try {
        console.log("obtenerDatosAdministrador");
        // Crea una instancia de Firestore.
        const db = getFirestore();

        // Crea una referencia al documento del administrador en la colección "administradores" utilizando el ID proporcionado.
        const referenciaAdministrador = doc(db, 'administradores', administradorId);

        // Obtiene el documento del administrador utilizando la referencia creada previamente.
        const administradorSnapshot = await getDoc(referenciaAdministrador);

        // Verifica si el documento existe en Firestore.
        if (administradorSnapshot.exists()) {
            // Si el documento existe, retorna un objeto con los datos del administrador y su ID.
            return { ...administradorSnapshot.data(), id: administradorId };
        } else {
            // Si el documento no existe, retorna un objeto vacío.
            return {};
        }
    } catch (error) { // Captura cualquier error que pueda ocurrir durante la ejecución.
        console.log(error); // Muestra el error en la consola.
        return {}; // Retorna un objeto vacío en caso de error.
    }
};



// Función asíncrona para obtener los datos de un administrador específico.
export const obtenerUsuario = async (usuarioId) => {
    try {
        console.log("obtenerUsuario");
        // Crea una instancia de Firestore.
        const db = getFirestore();

        // Crea una referencia al documento del usuario en la colección "usuarios" utilizando el ID proporcionado.
        const referenciaUsuario = doc(db, 'usuarios', usuarioId);

        // Obtiene el documento del usuario utilizando la referencia creada previamente.
        const usuarioSnapshot = await getDoc(referenciaUsuario);

        // Verifica si el documento existe en Firestore.
        if (usuarioSnapshot.exists()) {
            // Si el documento existe, retorna un objeto con los datos del usuario y su Id
            return { ...usuarioSnapshot.data(), id: usuarioId };
        } else {
            // Si el documento no existe, retorna un objeto vacío.
            return {};
        }
    } catch (error) { // Captura cualquier error que pueda ocurrir durante la ejecución.
        console.log(error); // Muestra el error en la consola.
        return {}; // Retorna un objeto vacío en caso de error.
    }
};





// funcion para mostrar todos los docs
export const getReportesUsuario = async(usuarioId) => {
  try{
    console.log("getReportesUsuario");
     // Crea una instancia de Firestore.
    const db = getFirestore();

    const proyectosCollection = collection(db, "proyectos");
    const reportesCollection = collection(db, "reportes");

    const referenciaUsuario = doc(db,'usuarios',usuarioId)

    //obtenemos los proyectos que pertenecen al usuario
    const proyectosFiltrados = query(proyectosCollection, where("usuario", "==", referenciaUsuario))

    //se crea una lista donde se guardaran los proyectos
    const proyectoRefs = [];
    const proyectosQuerySnapshot = await getDocs(proyectosFiltrados);

    proyectosQuerySnapshot.forEach( (doc) => {
      proyectoRefs.push(doc.ref);
    })    
    //se recuperan los reportes que pertenezcan a alguno de los proyectos
    const reportesFiltrados = query(reportesCollection, where("proyecto","in", proyectoRefs),orderBy("fechaEmision"))
    //se recuperan los documentos filtrados
    const reportesQuerySnapshot = await getDocs(reportesFiltrados);
    const reportes = []

    reportesQuerySnapshot.forEach((doc) => {
      reportes.push({...doc.data(),id:doc.id});
    })
    return reportes.reverse()
  }catch(error){
    console.log(error)
  }
}
// obtener proyectos correspondientes a un usuario
export const getProyectosUsuario = async(usuarioId) => {
    try{
        console.log("getproyectoUsuario")
        const db = getFirestore();

        const referenciaUsuario = doc(db,'usuarios',usuarioId)

        const proyectosQuery = query(collection(db,"proyectos"), where("usuario","==",referenciaUsuario));
        const proyectosQuerySnapshot = await getDocs(proyectosQuery);
        const proyectos = [];
        proyectosQuerySnapshot.forEach((doc) => {
            proyectos.push({...doc.data(), id:doc.id});
        });
    
        return(proyectos)
    }catch(error){
        console.log(error)
        return {};
    }
};

export const enviarReporteUsuario = async(datosReporte) => {
    try{
        console.log("enviarReporteUsuario");
        const db = getFirestore();

        const referenciaProyecto = doc(db,'proyectos',datosReporte.proyecto);

        const reporteData ={
            asunto: datosReporte.titulo,
            depurador: '',
            descripcionAdministrador: '',
            descripcionUsuario: datosReporte.descripcion,
            estado: 1,
            fechaEmision: serverTimestamp(),
            proyecto: referenciaProyecto
        };
        await addDoc(collection(db,"reportes"), reporteData);
        return true;
        //alert("reporte enviado con éxito!");
    }catch(error){
        console.log(error);
        return false;
        //alert("error en enviar el reporte");
    }
}

// obtener datos reporte dado un id
export const obtenerDatosReporte = async (reporteId) => {
    try {
        console.log("obtenerDatosReporte");
        const db = getFirestore();

        const referenciaReporte = doc(db,'reportes',reporteId);

        const reporteSnapshot = await getDoc(referenciaReporte);

        if(reporteSnapshot.exists()){
              // Si el documento existe, retorna un objeto con los datos del administrador y su ID.
              return {  id: reporteSnapshot.id, ...reporteSnapshot.data()};
            } else {
                // Si el documento no existe, retorna un objeto vacío.
                return {};
            }
        } catch (error) { // Captura cualquier error que pueda ocurrir durante la ejecución.
            console.log(error); // Muestra el error en la consola.
            return {}; // Retorna un objeto vacío en caso de error.
        }
    };




// Función asíncrona para obtener la información del proyecto y su identificador a partir del id de un reporte.
export const obtenerInfoProyectoDesdeReporte = async (reporteId) => {
    try {
        console.log("obtenerInfoProyectoDesdeReporte");
        // Crea una instancia de Firestore.
        const db = getFirestore();

        // Crea una referencia al documento del reporte en la colección "reportes" utilizando el ID proporcionado.
        const referenciaReporte = doc(db, 'reportes', reporteId);

        // Obtiene el documento del reporte utilizando la referencia creada previamente.
        const reporteSnapshot = await getDoc(referenciaReporte);

        // Verifica si el documento existe en Firestore.
        if (reporteSnapshot.exists()) {
            // Si el documento existe, obtiene la referencia del proyecto.
            const referenciaProyecto = reporteSnapshot.data().proyecto;

            // Obtiene el documento del proyecto utilizando la referencia del proyecto.
            const proyectoSnapshot = await getDoc(referenciaProyecto);

            // Verifica si el documento existe en Firestore.
            if (proyectoSnapshot.exists()) {
                // Si el documento existe, retorna un objeto con los datos del proyecto y su ID.
                return { ...proyectoSnapshot.data(), id: proyectoSnapshot.id };
            } else {
                // Si el documento del proyecto no existe, retorna un objeto vacío.
                return {};
            }
        } else {
            // Si el documento del reporte no existe, retorna un objeto vacío.
            return {};
        }
    } catch (error) { // Captura cualquier error que pueda ocurrir durante la ejecución.
        console.log(error); // Muestra el error en la consola.
        return {}; // Retorna un objeto vacío en caso de error.
    }
};
