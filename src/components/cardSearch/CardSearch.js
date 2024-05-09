import './CardSearch.css';

function CardSearch({title, area, descripcion, onClick}){
    const handleClick = () =>{
        console.log('onClick prop in CardSearch:', onClick); 
        onClick(descripcion)
    };

    return(
        <div className='cardSearch'>
            <div className='contenido'>
                <h3>{title}</h3>
                <p>Área: {area}</p>
                <a onClick={handleClick}> Ver descripción</a>
            </div>
        </div>

    )
}

export default CardSearch;