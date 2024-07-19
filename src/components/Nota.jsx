export function Nota({notaa, removeNote}) {
    const {id ,title ,text, importan } = notaa; /** {id: uuid, url:"asdadasdas", favorite:true} */

    const deleteNote = () => removeNote(id);
    
    if (importan) {
        return (
            <div className="alert Rojo " >
            <button type="button" className="close" onClick={deleteNote} aria-label="Cerrar">
                <span aria-hidden="true">X</span>
            </button>
            <strong>{title}</strong>
            <div>
                {text}
            </div>
        </div>
        )
    }

    return (
        <div className="alert Amarillo" >
        <button type="button" className="close" onClick={deleteNote} aria-label="Cerrar">
            <span aria-hidden="true">X</span>
        </button>
        <strong>{title}</strong>
        <div>
            {text}
        </div>
    </div>
    )
}