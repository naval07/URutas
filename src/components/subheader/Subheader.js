import './Subheader.css';

function Subheader({title}){
    return(
        <div className="subheader">
            <div className="Title">
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default Subheader;