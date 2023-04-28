import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, Timestamp, doc } from 'firebase/firestore'

/*const firebaseConfig = {
  apiKey: "AIzaSyDPw3eRrfQ1GxP2-AxEap7CxyUKio4zdbA",
  authDomain: "softwareii-5cc9f.firebaseapp.com",
  databaseURL: "https://softwareii-5cc9f-default-rtdb.firebaseio.com",
  projectId: "softwareii-5cc9f",
  storageBucket: "softwareii-5cc9f.appspot.com",
  messagingSenderId: "669859230842",
  appId: "1:669859230842:web:673a67e098c264ab31f7c3",
  measurementId: "G-XCHL4L7892"
};
*/

const firebaseConfig = {
  apiKey: "AIzaSyB-Gd3NiRsil56lC_T9atUefC8Yv4rRzUY",
  authDomain: "softwareii-efe38.firebaseapp.com",
  projectId: "softwareii-efe38",
  storageBucket: "softwareii-efe38.appspot.com",
  messagingSenderId: "494819549074",
  appId: "1:494819549074:web:8a41fa1681b49fe3dfeb4b",
  measurementId: "G-XXDZ8FMPB1"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

async function addUsuarios() {
  const usuario1Data = {
    nombre: "Gonzalo Rojas",
    cuenta: {
      usuario: "Gonzalo",
      contraseña: "GonzaloRojas123",
      correo: "gonzalorojas@gmail.com"
    }
  };

  const usuario2Data = {
    nombre: "Eduardo Duran",
    cuenta: {
      usuario: "Eduardo",
      contraseña: "EduardoDuran123",
      correo: "eduardoduran@gmail.com"
    }
  };

  const usuario3Data = {
    nombre: "Benjamín Fernández",
    cuenta: {
      usuario: "Benjamín",
      contraseña: "BenjaminFernandez123",
      correo: "benjaminfernandez@gmail.com"
    }
  };

  const usuario4Data = {
    nombre: "Cristíbal Vera",
    cuenta: {
      usuario: "Cristóbal",
      contraseña: "CristobalVera123",
      correo: "cristobalvera@gmail.com"
    }
  };

  const usuario5Data = {
    nombre: "Javier Vidal",
    cuenta: {
      usuario: "Javier",
      contraseña: "JavierVidal123",
      correo: "javiervidal@gmail.com"
    }
  };

  const usuario6Data = {
    nombre: "Enrique Valenzuela",
    cuenta: {
      usuario: "Enrique",
      contraseña: "EnriqueValenzuela123",
      correo: "enriquevalenzuela@gmail.com"
    }
  };

  const usuario7Data = {
    nombre: "Cecilia Hernández",
    cuenta: {
      usuario: "Cecilia",
      contraseña: "CeciliaHernandez123",
      correo: "ceciliahernandez@gmail.com"
    }
  };

  const usuario8Data = {
    nombre: "Paola Rivas",
    cuenta: {
      usuario: "Paola",
      contraseña: "PaolaRivas123",
      correo: "paolarivas@gmail.com"
    }
  };

  const usuario9Data = {
    nombre: "Pedro Pinacho",
    cuenta: {
      usuario: "Pedro",
      contraseña: "PedroPinacho123",
      correo: "pedropinacho@gmail.com"
    }
  };

  const usuario10Data = {
    nombre: "Pablo Davidson",
    cuenta: {
      usuario: "Pablo",
      contraseña: "PabloDavidson123",
      correo: "pablodavidson@gmail.com"
    }
  };

  const usuario1Doc = await addDoc(collection(db, 'usuarios'), usuario1Data);
  const usuario2Doc = await addDoc(collection(db, 'usuarios'), usuario2Data);
  const usuario3Doc = await addDoc(collection(db, 'usuarios'), usuario3Data);
  const usuario4Doc = await addDoc(collection(db, 'usuarios'), usuario4Data);
  const usuario5Doc = await addDoc(collection(db, 'usuarios'), usuario5Data);
  const usuario6Doc = await addDoc(collection(db, 'usuarios'), usuario6Data);
  const usuario7Doc = await addDoc(collection(db, 'usuarios'), usuario7Data);
  const usuario8Doc = await addDoc(collection(db, 'usuarios'), usuario8Data);
  const usuario9Doc = await addDoc(collection(db, 'usuarios'), usuario9Data);
  const usuario10Doc = await addDoc(collection(db, 'usuarios'), usuario10Data);

  const usuariosIds = {
    usuario1Id: usuario1Doc.id,
    usuario2Id: usuario2Doc.id,
    usuario3Id: usuario3Doc.id,
    usuario4Id: usuario4Doc.id,
    usuario5Id: usuario5Doc.id,
    usuario6Id: usuario6Doc.id,
    usuario7Id: usuario7Doc.id,
    usuario8Id: usuario8Doc.id,
    usuario9Id: usuario9Doc.id,
    usuario10Id: usuario10Doc.id
  };

  return usuariosIds;
}

async function addAdministradores() {
  const administrador1Data = {
    nombre: "Marcelo Peña",
    correo: "marcelopena@gmail.com",
    cuenta: {
      usuario: "Marcelo",
      contraseña: "MarceloPeña123",
      correo: "marcelopena@gmail.com"
    }
  };

  const administrador2Data = {
    nombre: "Antonio Valenzuela",
    correo: "antoniovalenzuela@gmail.com",
    cuenta: {
      usuario: "Antonio",
      contraseña: "AntonioValenzuela123",
      correo: "antoniovalenzuela@gmail.com"
    }
  };

  const administrador3Data = {
    nombre: "Richard Gonzalez",
    correo: "richardgonzalez@gmail.com",
    cuenta: {
      usuario: "Richard",
      contraseña: "RichardGonzalez123",
      correo: "richardgonzalez@gmail.com"
    }
  };

  const administrador4Data = {
    nombre: "Alejandro Lara",
    correo: "alejandrolara@gmail.com",
    cuenta: {
      usuario: "Alejandro",
      contraseña: "AlejandroLara123",
      correo: "alejandrolara@gmail.com"
    }
  };

  const administrador1Doc = await addDoc(collection(db, 'administradores'), administrador1Data);
  const administrador2Doc = await addDoc(collection(db, 'administradores'), administrador2Data);
  const administrador3Doc = await addDoc(collection(db, 'administradores'), administrador3Data);
  const administrador4Doc = await addDoc(collection(db, 'administradores'), administrador4Data);

  const administradoresIds = {
    administrador1Id: administrador1Doc.id,
    administrador2Id: administrador2Doc.id,
    administrador3Id: administrador3Doc.id,
    administrador4Id: administrador4Doc.id
  };

  return administradoresIds;
}

async function addDepuradores() {
  const depurador1Data = {
    nombre: "José Toledo",
    correo: "josetoledo@gmail.com",
    nivelCarga: 1,
    cuenta: {
      usuario: "José",
      contraseña: "JoseToledo123",
      correo: "josetoledo@gmail.com"
    }
  };

  const depurador2Data = {
    nombre: "Ignacio Arcic",
    correo: "ignacioarcic@gmail.com",
    nivelCarga: 1,
    cuenta: {
      usuario: "Ignacio",
      contraseña: "IgnacioArcic123",
      correo: "ignacioarcic@gmail.com"
    }
  };

  const depurador3Data = {
    nombre: "Vanessa Suazo",
    correo: "vanessasuazo@gmail.com",
    nivelCarga: 1,
    cuenta: {
      usuario: "Vanessa",
      contraseña: "VanessaSuazo123",
      correo: "vanessasuazo@gmail.com"
    }
  };

  const depurador4Data = {
    nombre: "Andrea Ríos",
    correo: "andrearios@gmail.com",
    nivelCarga: 1,
    cuenta: {
      usuario: "Andrea",
      contraseña: "AndreaRios123",
      correo: "andrearios@gmail.com"
    }
  };

  const depurador5Data = {
    nombre: "Víctor Mora",
    correo: "victormora@gmail.com",
    nivelCarga: 1,
    cuenta: {
      usuario: "Victor",
      contraseña: "VictorMora123",
      correo: "victormora@gmail.com"
    }
  };

  const depurador6Data = {
    nombre: "Javier Lara",
    correo: "javierlara@gmail.com",
    nivelCarga: 1,
    cuenta: {
      usuario: "Javier",
      contraseña: "JavierLara123",
      correo: "javierlara@gmail.com"
    }
  };

  const depurador7Data = {
    nombre: "Elizabeth Bravo",
    correo: "elizabethbravo@gmail.com",
    nivelCarga: 1,
    cuenta: {
      usuario: "Elizabeth",
      contraseña: "ElizabethBravo123",
      correo: "elizabethbravo@gmail.com"
    }
  };

  const depurador8Data = {
    nombre: "Edith Campos",
    correo: "edithcampos@gmail.com",
    nivelCarga: 1,
    cuenta: {
      usuario: "Edith",
      contraseña: "EdithCampos123",
      correo: "edithcampos@gmail.com"
    }
  };

  const depurador1Doc = await addDoc(collection(db, 'depuradores'), depurador1Data);
  const depurador2Doc = await addDoc(collection(db, 'depuradores'), depurador2Data);
  const depurador3Doc = await addDoc(collection(db, 'depuradores'), depurador3Data);
  const depurador4Doc = await addDoc(collection(db, 'depuradores'), depurador4Data);
  const depurador5Doc = await addDoc(collection(db, 'depuradores'), depurador5Data);
  const depurador6Doc = await addDoc(collection(db, 'depuradores'), depurador6Data);
  const depurador7Doc = await addDoc(collection(db, 'depuradores'), depurador7Data);
  const depurador8Doc = await addDoc(collection(db, 'depuradores'), depurador8Data);
  
  const depuradoresIds = {
    depurador1Id: depurador1Doc.id,
    depurador2Id: depurador2Doc.id,
    depurador3Id: depurador3Doc.id,
    depurador4Id: depurador4Doc.id,
    depurador5Id: depurador5Doc.id,
    depurador6Id: depurador6Doc.id,
    depurador7Id: depurador7Doc.id,
    depurador8Id: depurador8Doc.id
  };

  return depuradoresIds;
}

async function addProyectos() {
  const usuariosIds = await addUsuarios();
  const administradoresIds = await addAdministradores();
  const depuradoresIds = await addDepuradores();

  const proyecto1Data = {
    nombre: "QuickCalc",
    fechaInicio: Timestamp.fromDate(new Date('January 20, 2023')),
    fechaTermino: Timestamp.fromDate(new Date('June 31, 2023')),
    descripcion: "Aplicación de cálculo simple para teléfonos móviles que permite a los usuarios realizar operaciones matemáticas básicas",
    usuario: doc(db, 'usuarios', usuariosIds.usuario1Id),
    administrador: doc(db, 'administradores', administradoresIds.administrador1Id),
    depuradores: [
      doc(db, 'depuradores', depuradoresIds.depurador1Id),
      doc(db, 'depuradores', depuradoresIds.depurador2Id),
      doc(db, 'depuradores', depuradoresIds.depurador5Id),
    ]
  };

  const proyecto2Data = {
    nombre: "CleanSweep",
    fechaInicio: Timestamp.fromDate(new Date('March 1, 2023')),
    fechaTermino: Timestamp.fromDate(new Date('July 31, 2023')),
    descripcion: "Software para limpieza de discos duros que ayuda a los usuarios a eliminar archivos innecesarios",
    usuario: doc(db, 'usuarios', usuariosIds.usuario2Id),
    administrador: doc(db, 'administradores', administradoresIds.administrador1Id),
    depuradores: [
      doc(db, 'depuradores', depuradoresIds.depurador2Id),
      doc(db, 'depuradores', depuradoresIds.depurador3Id),
    ]
  };

  const proyecto3Data = {
    nombre: "TaskMaster",
    fechaInicio: Timestamp.fromDate(new Date('April 1, 2023')),
    fechaTermino: Timestamp.fromDate(new Date('November 30, 2023')),
    descripcion: "Gerramienta de gestión de tareas para equipos que permite a los usuarios asignar tareas, establecer plazos y realizar un seguimiento del progreso",
    usuario: doc(db, 'usuarios', usuariosIds.usuario3Id),
    administrador: doc(db, 'administradores', administradoresIds.administrador2Id),
    depuradores: [
      doc(db, 'depuradores', depuradoresIds.depurador5Id),
      doc(db, 'depuradores', depuradoresIds.depurador6Id),
    ]
  };

  const proyecto4Data = {
    nombre: "SoundByte",
    fechaInicio: Timestamp.fromDate(new Date('December 5, 2022')),
    fechaTermino: Timestamp.fromDate(new Date('March 31, 2023')),
    descripcion: "Reproductor de música para computadoras que permite a los usuarios crear listas de reproducción personalizadas",
    usuario: doc(db, 'usuarios', usuariosIds.usuario4Id),
    administrador: doc(db, 'administradores', administradoresIds.administrador2Id),
    depuradores: [
      doc(db, 'depuradores', depuradoresIds.depurador7Id),
      doc(db, 'depuradores', depuradoresIds.depurador8Id),
    ]
  };

  const proyecto5Data = {
    nombre: "EduQuest",
    fechaInicio: Timestamp.fromDate(new Date('March, 2023')),
    fechaTermino: Timestamp.fromDate(new Date('September 30, 2023')),
    descripcion: "Plataforma de aprendizaje en línea para estudiantes de secundaria y preparatoria",
    usuario: doc(db, 'usuarios', usuariosIds.usuario5Id),
    administrador: doc(db, 'administradores', administradoresIds.administrador2Id),
    depuradores: [
      doc(db, 'depuradores', depuradoresIds.depurador1Id),
      doc(db, 'depuradores', depuradoresIds.depurador2Id),
      doc(db, 'depuradores', depuradoresIds.depurador8Id),
    ]
  };

  const proyecto6Data = {
    nombre: "StudyPal",
    fechaInicio: Timestamp.fromDate(new Date('October 1, 2022')),
    fechaTermino: Timestamp.fromDate(new Date('March 7, 2023')),
    descripcion: "Aplicación de estudio en grupo para estudiantes universitarios",
    usuario: doc(db, 'usuarios', usuariosIds.usuario6Id),
    administrador: doc(db, 'administradores', administradoresIds.administrador3Id),
    depuradores: [
      doc(db, 'depuradores', depuradoresIds.depurador3Id),
      doc(db, 'depuradores', depuradoresIds.depurador4Id),
      doc(db, 'depuradores', depuradoresIds.depurador7Id),
      doc(db, 'depuradores', depuradoresIds.depurador6Id),
    ]
  };

  const proyecto7Data = {
    nombre: "SportTrack",
    fechaInicio: Timestamp.fromDate(new Date('September 18, 2022')),
    fechaTermino: Timestamp.fromDate(new Date('January 2, 2023')),
    descripcion: "Aplicación de seguimiento de estadísticas para entrenadores y equipos deportivos",
    usuario: doc(db, 'usuarios', usuariosIds.usuario7Id),
    administrador: doc(db, 'administradores', administradoresIds.administrador3Id),
    depuradores: [
      doc(db, 'depuradores', depuradoresIds.depurador5Id),
      doc(db, 'depuradores', depuradoresIds.depurador6Id),
      doc(db, 'depuradores', depuradoresIds.depurador2Id),
    ]
  };

  const proyecto8Data = {
    nombre: "FitGoal",
    fechaInicio: Timestamp.fromDate(new Date('February 14, 2023')),
    fechaTermino: Timestamp.fromDate(new Date('June 16, 2023')),
    descripcion: "Aplicación de entrenamiento físico para usuarios individuales",
    usuario: doc(db, 'usuarios', usuariosIds.usuario8Id),
    administrador: doc(db, 'administradores', administradoresIds.administrador4Id),
    depuradores: [
      doc(db, 'depuradores', depuradoresIds.depurador7Id),
      doc(db, 'depuradores', depuradoresIds.depurador8Id),
      doc(db, 'depuradores', depuradoresIds.depurador4Id),
    ]
  };

  const proyecto9Data = {
    nombre: "SecureMail",
    fechaInicio: Timestamp.fromDate(new Date('July 17, 2022')),
    fechaTermino: Timestamp.fromDate(new Date('April 16, 2023')),
    descripcion: "Aplicación de correo electrónico cifrado para usuarios que desean privacidad y seguridad",
    usuario: doc(db, 'usuarios', usuariosIds.usuario9Id),
    administrador: doc(db, 'administradores', administradoresIds.administrador4Id),
    depuradores: [
      doc(db, 'depuradores', depuradoresIds.depurador1Id),
      doc(db, 'depuradores', depuradoresIds.depurador2Id),
      doc(db, 'depuradores', depuradoresIds.depurador2Id),
    ]
  };

  const proyecto10Data = {
    nombre: "Guardian",
    fechaInicio: Timestamp.fromDate(new Date('April 7, 2023')),
    fechaTermino: Timestamp.fromDate(new Date('September 10, 2023')),
    descripcion: "Aplicación de seguridad personal para viajeros y personas que viven solas",
    usuario: doc(db, 'usuarios', usuariosIds.usuario10Id),
    administrador: doc(db, 'administradores', administradoresIds.administrador4Id),
    depuradores: [
      doc(db, 'depuradores', depuradoresIds.depurador3Id),
      doc(db, 'depuradores', depuradoresIds.depurador4Id),
      doc(db, 'depuradores', depuradoresIds.depurador5Id),
    ]
  };

  const proyecto1Doc = await addDoc(collection(db, 'proyectos'), proyecto1Data);
  const proyecto2Doc = await addDoc(collection(db, 'proyectos'), proyecto2Data);
  const proyecto3Doc = await addDoc(collection(db, 'proyectos'), proyecto3Data);
  const proyecto4Doc = await addDoc(collection(db, 'proyectos'), proyecto4Data);
  const proyecto5Doc = await addDoc(collection(db, 'proyectos'), proyecto5Data);
  const proyecto6Doc = await addDoc(collection(db, 'proyectos'), proyecto6Data);
  const proyecto7Doc = await addDoc(collection(db, 'proyectos'), proyecto7Data);
  const proyecto8Doc = await addDoc(collection(db, 'proyectos'), proyecto8Data);
  const proyecto9Doc = await addDoc(collection(db, 'proyectos'), proyecto9Data);
  const proyecto10Doc = await addDoc(collection(db, 'proyectos'), proyecto10Data);

  const proyectosDepuradoresIds = {
    proyecto1Id: proyecto1Doc.id,
    proyecto2Id: proyecto2Doc.id,
    proyecto3Id: proyecto3Doc.id,
    proyecto4Id: proyecto4Doc.id,
    proyecto5Id: proyecto5Doc.id,
    proyecto6Id: proyecto6Doc.id,
    proyecto7Id: proyecto7Doc.id,
    proyecto8Id: proyecto8Doc.id,
    proyecto9Id: proyecto9Doc.id,
    proyecto10Id: proyecto10Doc.id,
    depurador1Id: depuradoresIds.depurador1Id,
    depurador2Id: depuradoresIds.depurador2Id,
    depurador3Id: depuradoresIds.depurador3Id,
    depurador4Id: depuradoresIds.depurador4Id,
    depurador5Id: depuradoresIds.depurador5Id,
    depurador6Id: depuradoresIds.depurador6Id,
    depurador7Id: depuradoresIds.depurador7Id,
    depurador8Id: depuradoresIds.depurador8Id
  };

  return proyectosDepuradoresIds;
}

// Estado: -1 Rechazado, 0 Pendiente, 1 En proceso, 2 Terminado 

async function addReportes() {
  const proyectosDepuradoresIds = await addProyectos();

  const reporte1Data = {
    fechaEmision: Timestamp.fromDate(new Date('April 15, 2023')),
    fechaEstimadaTermino: Timestamp.fromDate(new Date('April 20, 2023')),
    proyecto: doc(db, 'proyectos', proyectosDepuradoresIds.proyecto1Id),
    depurador: doc(db, 'depuradores', proyectosDepuradoresIds.depurador5Id),
    descripcionUsuario: "La aplicación no puede calcular correctamente los porcentajes",
    descripcionAdministrador: "Confirmo el error ingresado por el usuario ",
    prioridad: 4, 
    estado: 1
  };

  const reporte2Data = {
    fechaEmision: Timestamp.fromDate(new Date('April 20, 2023')),
    fechaEstimadaTermino: Timestamp.fromDate(new Date('May 2, 2023')),
    proyecto: doc(db, 'proyectos', proyectosDepuradoresIds.proyecto2Id),
    depurador: doc(db, 'depuradores', proyectosDepuradoresIds.depurador3Id),
    descripcionUsuario: "Software elimina archivos importantes por error.",
    descripcionAdministrador: "Confirmo el error ingresado por el usuario ",
    prioridad: 9, 
    estado: 1
  };

  const reporte3Data = {
    fechaEmision: Timestamp.fromDate(new Date('April 18, 2023')),
    fechaEstimadaTermino: Timestamp.fromDate(new Date('April 30, 2023')),
    proyecto: doc(db, 'proyectos', proyectosDepuradoresIds.proyecto3Id),
    depurador: doc(db, 'depuradores', proyectosDepuradoresIds.depurador6Id),
    descripcionUsuario: "Las notificaciones de tarea no se están enviando correctamente",
    descripcionAdministrador: "Confirmo el error ingresado por el usuario ",
    prioridad: 5, 
    estado: 1
  };

  const reporte4Data = {
    fechaEmision: Timestamp.fromDate(new Date('April 26, 2023')),
    fechaEstimadaTermino: Timestamp.fromDate(new Date('May 10, 2023')),
    proyecto: doc(db, 'proyectos', proyectosDepuradoresIds.proyecto4Id),
    depurador: doc(db, 'depuradores', proyectosDepuradoresIds.depurador8Id),
    descripcionUsuario: "Software no reproduce ciertos tipos de archivos de música correctamente.",
    descripcionAdministrador: "Confirmo el error ingresado por el usuario ",
    prioridad: 6, 
    estado: 1
  };

  const reporte5Data = {
    fechaEmision: Timestamp.fromDate(new Date('April 24, 2023')),
    fechaEstimadaTermino: Timestamp.fromDate(new Date('May 15, 2023')),
    proyecto: doc(db, 'proyectos', proyectosDepuradoresIds.proyecto5Id),
    depurador: doc(db, 'depuradores', proyectosDepuradoresIds.depurador1Id),
    descripcionUsuario: "Los recursos de aprendizaje no se cargan correctamente en algunos navegadores web.",
    descripcionAdministrador: "Confirmo el error ingresado por el usuario ",
    prioridad: 5, 
    estado: 1
  };

  const reporte6Data = {
    fechaEmision: Timestamp.fromDate(new Date('April 10, 2023')),
    fechaEstimadaTermino: Timestamp.fromDate(new Date('April 29, 2023')),
    proyecto: doc(db, 'proyectos', proyectosDepuradoresIds.proyecto6Id),
    depurador: doc(db, 'depuradores', proyectosDepuradoresIds.depurador7Id),
    descripcionUsuario: "La función de chat en tiempo real no funciona correctamente en algunos dispositivos móviles",
    descripcionAdministrador: "Confirmo el error ingresado por el usuario ",
    prioridad: 6, 
    estado: 1
  };

  const reporte7Data = {
    fechaEmision: Timestamp.fromDate(new Date('April 3, 2023')),
    fechaEstimadaTermino: Timestamp.fromDate(new Date('April 25, 2023')),
    proyecto: doc(db, 'proyectos', proyectosDepuradoresIds.proyecto7Id),
    depurador: doc(db, 'depuradores', proyectosDepuradoresIds.depurador2Id),
    descripcionUsuario: "Los datos de juego no se actualizan correctamente en la aplicación.",
    descripcionAdministrador: "Confirmo el error ingresado por el usuario",
    prioridad: 7, 
    estado: 1
  };

  const reporte8Data = {
    fechaEmision: Timestamp.fromDate(new Date('April 28, 2023')),
    fechaEstimadaTermino: Timestamp.fromDate(new Date('May 10, 2023')),
    proyecto: doc(db, 'proyectos', proyectosDepuradoresIds.proyecto8Id),
    depurador: doc(db, 'depuradores', proyectosDepuradoresIds.depurador4Id),
    descripcionUsuario: "Aplicación no registra correctamente las calorías quemadas durante el ejercicio.",
    descripcionAdministrador: "Confirmo el error ingresado por el usuario ",
    prioridad: 4, 
    estado: 1
  };

  const reporte1Doc = await addDoc(collection(db, 'reportes'), reporte1Data);
  const reporte2Doc = await addDoc(collection(db, 'reportes'), reporte2Data);
  const reporte3Doc = await addDoc(collection(db, 'reportes'), reporte3Data);
  const reporte4Doc = await addDoc(collection(db, 'reportes'), reporte4Data);
  const reporte5Doc = await addDoc(collection(db, 'reportes'), reporte5Data);
  const reporte6Doc = await addDoc(collection(db, 'reportes'), reporte6Data);
  const reporte7Doc = await addDoc(collection(db, 'reportes'), reporte7Data);
  const reporte8Doc = await addDoc(collection(db, 'reportes'), reporte8Data);
  console.log('Documentos agregados a la colección de usuarios con los IDs:', reporte1Doc.id, reporte2Doc.id, reporte3Doc.id, reporte4Doc.id,  reporte5Doc.id, reporte6Doc.id, reporte7Doc.id, reporte8Doc.id);
}
addReportes();
