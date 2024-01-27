import style from './facts.module.css';
import FactItem from "./factItem";

function Facts(){
    return (
        <div className={style.facts}>
            <FactItem number="1" description="Years of experience"/>
            <FactItem number="2" description="Completed projects"/>
            <FactItem number="#" description="Satisfied customers"/>
        </div>
    );
}

export default Facts;