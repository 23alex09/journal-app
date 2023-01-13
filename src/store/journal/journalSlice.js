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
        },
        setNotes: ( state, action ) => {
            state.notes = action.payload;
        },
        setSaving: ( state ) => {
            state.isSaving = true;
        },
        updateNote: ( state, action ) => {
            state.isSaving = false;
            const index = state.notes.findIndex( note => note.id == action.payload.id )
            state.notes[ index ] = action.payload;
        },
        deleteNoteById: ( state, action ) => {

        },
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
} = journalSlice.actions;