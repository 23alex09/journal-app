import { async } from "@firebase/util";
import { collection, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload, loadNotes } from "../../helpers";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from "./journalSlice";


export const startNewNote = () => {
    //getState es una funcion que reciben los thinks con el state de la aplicacion
    return async ( dispatch, getState ) => {

        dispatch( savingNewNote() );

        //necesitamos el uid del usuario
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: [],
        }

        //De esta manera obtenemos una referencia de donde queremos insertar el nuevo elemento
        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) )
        //para que esto funcione deberemos modificar las reglas en la DB de Firestore para que acepte petiones si el usuario esta autenticado
        await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );

    }
}

export const startLoadingNotes = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;
        if ( !uid ) throw new Error( 'The UID does not exist' );
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) )
    }
}

export const startUpdatingNote = () => {
    return async ( dispatch, getState ) => {
        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active } = getState().journal;

        if ( !uid ) throw new Error( 'The UID does not exist' );
        if ( !active ) throw new Error( 'Theres is no active note' );

        const noteToFirestore = { ...active };
        delete noteToFirestore.id;

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${active.id}` );
        await setDoc( docRef, noteToFirestore, { merge: true } );

        dispatch( updateNote( active ) );
    }
}

export const startUploadingFiles = ( files = [] ) => {
    return async ( dispatch ) => {
        dispatch( setSaving() );

        //subir todas las imagenes a la vez
        const fileUploadPromises = [];

        for ( const file of files ) {
            //Aqui no estamos lanzando el upload, estamos guardando la promesa que devuelve de cada archivo
            fileUploadPromises.push( fileUpload( file ) );
        }
        //Esto al acabar devuelve la respuesta de todas las promesas en un array en el mismo orden que se guardaron
        const photosUrls = await Promise.all( fileUploadPromises );

        dispatch( setPhotosToActiveNote( photosUrls ) );

    }
}

export const startDeletingNote = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;
        const { active } = getState().journal;

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${active.id}` );
        await deleteDoc( docRef );

        dispatch( deleteNoteById( active.id ) )
    }
}