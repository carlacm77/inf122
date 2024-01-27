import style from './facts.module.css';
import FactItem from "./factItem";

function Facts(){
    return (
        <div className={style.facts}>
            <FactItem number="7" description="Years of work experience"/>
            <FactItem number="50+" description="Completed projects"/>
            <FactItem number="20+" description="Satisfied customers"/>
        </div>
    );
}

export default Facts;