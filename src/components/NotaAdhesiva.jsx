import React, { useRef, useState } from "react";
import { v4 as uuid } from 'uuid';
import { Nota } from "./Nota";


export function NotaAdhesiva() {
    const titleRef = useRef();
    const textRef = useRef();
    const ImportanteRef = useRef();
    const [notes, setNotes] = useState([{ id: uuid(), title:'hola', text:'Hola', importan:false },
        { id: uuid(), title:'hola', text:'prueba', importan:true },
        { id: uuid(), title:'hola', text:'Hola', importan:false },
        { id: uuid(), title:'hola', text:'TEsss', importan:true }]);

    function addNote() {
        const title = titleRef.current.value.trim();
        const text = textRef.current.value.trim();
        const importan = ImportanteRef.current.checked;

        if (text === ''){
            alert('La descripcion esta vacia')
            return;} 

        const newNote = { id: uuid(), title:title, text:text, importan:importan };
        setNotes([...notes, newNote]);
        textRef.current.value = '';
        titleRef.current.value = '';
        ImportanteRef.current.checked = false;
    }

    function removeNote(id) {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
    }

    return (
        <div className='app'>
        <header className="Header-app">
            <div className="titulo">
                <h1>Post It Simulator!</h1>
            </div>
            <div className="app">
                <input ref={titleRef} placeholder="Titulo" className="TituloPost" type="text" />
                <input ref={textRef} placeholder="Descripcion" className="DescripcionPost" type="text" />
                <input ref={ImportanteRef} type="checkbox" className="m-2" id="checkbox" />
                <label className="m-2">Importante!</label>
                <button className="btnss" onClick={addNote}> AGREGAR</button>
            </div>
            <div className="container" >
                {notes.map(note =>  <Nota key={note.id} notaa={note} removeNote={removeNote} />)}
            </div>
        </header>
    </div>
    
    );
}



