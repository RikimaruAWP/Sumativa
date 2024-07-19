import React, { useRef, useState } from "react";
import { v4 as uuid } from 'uuid';


export function NotaAdhesiva() {
    const titleRef = useRef();
    const textRef = useRef();
    const ImportanteRef = useRef();
    const [notes, setNotes] = useState([]);

    function addNote() {
        const title = titleRef.current.value.trim();
        const text = textRef.current.value.trim();
        const importan = ImportanteRef.current.checked;

        if (title === '' || text === '') return;

        const newNote = { id: uuid(), title, text , importan };
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
            <div className="">
                <input ref={titleRef} placeholder="Titulo" className="TituloPost" type="text" />
                <input ref={textRef} placeholder="Descripcion" className="DescripcionPost" type="text" />
                <input ref={ImportanteRef} type="checkbox" className="m-2" id="checkbox" />
                <label className="m-2">Importante!</label>
                <button className="btn btn-success m-2" onClick={addNote}> AGREGAR</button>
            </div>
            <div>
                {notes.map(note => (
                    <div className="alert alert-warning" key={note.id}>
                        <button type="button" className="close" onClick={() => removeNote(note.id)} aria-label="Cerrar">
                            <span aria-hidden="true">X</span>
                        </button>
                        <strong>{note.title}</strong>
                        <div>
                            {note.text}
                        </div>
                    </div>
                ))}
            </div>
        </header>
    </div>
    
    );
}



