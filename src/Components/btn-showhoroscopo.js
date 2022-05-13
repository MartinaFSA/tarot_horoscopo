export default function BtnShowhoroscopo(props) {
    return (
        <div>
            <button className="btn btn-primary" onClick={props.mostrarHoroscopo}>
                Generar la lectura
            </button>
        </div>
    )
}