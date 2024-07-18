import './Nota.css';


export function Nota(){

    return(
        <div className='app'>
            <header className="Header-app">
                <div className="titulo">
                    <h1>Post It Simulator!</h1>
                </div>
                <div className="">
                    <input placeholder="Titulo" className="TituloPost" type="text" />
                    <input placeholder="Descripcion" className="DescripcionPost" type="text" />
                    <input type="checkbox" className="m-2" id="checkbox" />
                    <label className="m-2">Importante!</label>
                    <button className="btn btn-success m-2">AGREGAR</button>
                </div>
            </header>
        </div>
    )
}