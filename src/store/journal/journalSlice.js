import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice( {
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active:{
        //     id: '',
        //     title: '',
        //     body: '',
        //     date: 12334,
        //     imageUrls: [],
        // }
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: ( state, action ) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: ( state, action ) => {
            state.notes = action.payload;
        },
        setSaving: ( state ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: ( state, action ) => {
            state.isSaving = false;
            const index = state.notes.findIndex( note => note.id == action.payload.id )
            state.notes[ index ] = action.payload;
            state.messageSaved = `Note successfully saved`;
        },
        deleteNoteById: ( state, action ) => {

        },
        clearActiveNote: ( state ) => {
            state.active = null;
        }

    }
} );
export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    clearActiveNote,
} = journalSlice.actions;