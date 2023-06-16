import {getAuth,signInWithEmailAndPassword  } from 'firebase/auth';

export const signIn = async (email, password) =>{
    try{
        const auth = getAuth();
        await signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            console.log("estas intentando iniciar sesión");
            console.log(userCredential.user);
        })
    }catch(error){
        console.log(error);
        console.log("ingresa bien los datos oe");
    }
    
};
