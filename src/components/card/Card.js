import './Card.css';

function Card(catalogo){
    return(
        <div class = "card">
            <div class = "fotoCard">
                    <img src="https://media.istockphoto.com/id/914314318/photo/young-man-using-laptop-with-female-student-watching-and-smiling.jpg?s=612x612&w=0&k=20&c=ky2a8mV2Fw8v4QYXFUtxAOOMs14lbOM5BPVyK1xw7-k=" />
            </div>
            <div class="info">
                    <h3>Inglés para todos</h3>
                    <p>
                        URMoocs
                    </p>
            </div>

        </div>
    )
}

export default Card;