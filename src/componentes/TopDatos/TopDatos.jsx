import '../../css/topDatos.css';

const TopDatos = () => {
    return(

        <>
            <ul className="topbarra">
                <li className='ubicacion'>
                    <a href="#">
                        <img src="https://stylewatchio.vtexassets.com/assets/vtex/assets-builder/stylewatchio.tienda/8.0.8/iconos/map-pin___bfdbaa662f22a6fad4233a6a101c289d.svg" alt="mi ubicacion"></img>
                    </a><p>Encontra una tienda</p>
                </li>
                <li className='modo'>
                <a href="#">
                        <img className='modoImg' src="https://stylewatchio.vteximg.com.br/arquivos/modo_logo.svg" alt="pago"></img>
                    </a><hr></hr><p>Visa y Master 20% off en 1 pago / Envio Gratis</p></li>
                <li className='telefono'>
                    <a href="#">
                        <img src="https://stylewatchio.vtexassets.com/assets/vtex/assets-builder/stylewatchio.tienda/8.0.8/header/phone___8c649c3260c8ce7b95684ac1e0ed3f63.svg" alt="mi telefono"></img>
                    </a><p>0800-998-3243</p>
                </li>
            </ul>
        </>
    )
}

export default TopDatos;

