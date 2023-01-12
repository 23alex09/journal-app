import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";


export const useCheckAuth = () => {
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect( () => {
        //Esta funcion de Firebase esta pendiente de si cambia el estado de la autenticacion
        onAuthStateChanged( FirebaseAuth, async ( user ) => {
            if ( !user ) return dispatch( logout() );
            const { uid, email, displayName, photoURL } = user;
            dispatch( login( { uid, email, displayName, photoURL } ) )
        } );
    }, [] )

    return {
        status
    }
}
