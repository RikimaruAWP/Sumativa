
export function Nota(){



    return(
        <div>
            <div className="titulo">
                <h1>Post It Simulator!</h1>
            </div>
            <div className="">
                <input placeholder="Titulo" className="TituloPost" type="text" />
                <input placeholder="Descripcion" className="DescripcionPost" type="text" />
                <input type="checkbox" className="m-2" id="checkbox" />
                <label className="m-2">Importante!</label>
            </div>

        </div>
    )
}