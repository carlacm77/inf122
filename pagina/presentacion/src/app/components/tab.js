import style from './tab.module.css';


function Tab(){
    return (
        <div className={style.tabs}>
            <button className={style["tabs-background-item-active"]}>
                <p className={style["tabs-background-item-text"]}>Portfolio</p>
            </button>
            <button className={style["tabs-background-item"]}>
                <p className={style["tabs-background-item-text"]}>Skills</p>
            </button>

        </div>
    );
}
export default Tab;