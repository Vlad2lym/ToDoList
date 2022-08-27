import React from "react";
import check from '../img/check.png'
import cross from '../img/cross.png'

const TargetsList = (props) => {
    return (
        <div className="container">
            {props.targets.map ((targ, i) => {
            let styleStatus = '';
            if (targ.status === 'processing') styleStatus = 'targetText';
            else if (targ.status === 'ready') styleStatus = 'targetTextReady';
            else if (targ.status === 'unready') styleStatus = 'targetTextUnready';
            return <div className={styleStatus} key={i+1}>
                {i+1}. {targ.value}
                <div className="btn_container">
                    {targ.status === 'ready' ? <img src={check} className="readyIcon" /> : ''}
                    {targ.status === 'unready' ? <img src={cross} className='readyIcon' /> : ''}
                    <div className="btns">
                    <button className='btn_text' onClick={() => props.isReady(targ, i)} >Выполнено</button>
                    <button className='btn_text' onClick={() => props.isUnready(targ, i)} >Не выполнено</button>
                    <button className='btn_text' onClick={() => props.delete(i)} >Удалить</button>
                    </div>
                </div>
            </div>}) }
        </div>
    );
};

export default TargetsList;