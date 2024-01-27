import style from './factItem.module.css';


function FactItem({number,description}){
    return (
        <div className={style["fact-item"]}>
            <h2>{number}</h2>
            <p>{description}</p>
        </div>
    );
}
export default FactItem;