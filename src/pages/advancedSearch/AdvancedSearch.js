import './AdvancedSearch.css';
import Header from '../../components/header/header';
import Subheader from '../../components/subheader/Subheader';
import Selection from '../../components/checklist/Selection';

function AdvancedSearch(){
    return(
        <div>
           <Header/>
           <div className='content'>
           <Subheader 
           title = "Búsqueda espefícica"/>
           <br/>
           <br/> 
           <p>
            Realiza tu búsqueda según las aptitudes del Foro Económico Mundial
           </p>
            <Selection/>


           </div>

        </div>
    )
}

export default AdvancedSearch;