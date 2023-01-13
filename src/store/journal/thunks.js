import { async } from "@firebase/util";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote } from "./journalSlice";


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