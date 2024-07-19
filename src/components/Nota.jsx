export function Nota({song, setFavorite}) {
    const { id, url, favorite } = song; /** {id: uuid, url:"asdadasdas", favorite:true} */

    const newFavorite = () => setFavorite(id);

    const urlSong = "https://open.spotify.com/embed/album/" + url

    if (favorite) {
        return (
            <div className="alert Rojo " key={note.id}>
            <button type="button" className="close" onClick={() => removeNote(note.id)} aria-label="Cerrar">
                <span aria-hidden="true">X</span>
            </button>
            <strong>{note.title}</strong>
            <div>
                {note.text}
            </div>
        </div>
        )
    }

    return (
        <div className="alert Amarillo" key={note.id}>
        <button type="button" className="close" onClick={() => removeNote(note.id)} aria-label="Cerrar">
            <span aria-hidden="true">X</span>
        </button>
        <strong>{note.title}</strong>
        <div>
            {note.text}
        </div>
    </div>
    )
}