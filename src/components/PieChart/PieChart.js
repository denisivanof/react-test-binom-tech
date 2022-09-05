import React, {useEffect, useRef} from 'react';
import s from './PieChart.module.scss'
const PieChart = ({options, ...props}) => {
    const {nit, nitAll, forecast, forecastAll, colorForecast, colorNit } = options
    const localNum = (num) => (num).toLocaleString('ru')
    const canvasRef = useRef()

    const a = Math.floor(nit*100/nitAll)
    const b = Math.floor(forecast*100/forecastAll)
    const getRan = (e) => (((e*1.5)/100)+0.5).toFixed(2)

    const draw =(ctx)=>{
        ctx.fillStyle = '#d0d0d0';
        ctx.beginPath();
        ctx.moveTo(100, 75)
        ctx.arc(100,75,50,0.5*Math.PI,2*Math.PI);
        ctx.arc(100,75,30,2*Math.PI, 0.5*Math.PI, true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = colorNit;
        ctx.beginPath();
        ctx.moveTo(100, 75)
        ctx.arc(100,75,50,0.5*Math.PI,getRan(a)*Math.PI);
        ctx.arc(100,75,30,getRan(a)*Math.PI, 0.5*Math.PI, true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#d0d0d0';
        ctx.beginPath();
        ctx.moveTo(100, 75)
        ctx.arc(100,75,70,0.5*Math.PI,2*Math.PI);
        ctx.arc(100,75,65,2*Math.PI, 0.5*Math.PI, true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = colorForecast;
        ctx.beginPath();
        ctx.moveTo(100, 75)
        ctx.arc(100,75,70,0.5*Math.PI,getRan(b)*Math.PI);
        ctx.arc(100,75,65,getRan(b)*Math.PI, 0.5*Math.PI, true);
        ctx.closePath();
        ctx.fill();


    }
    useEffect(()=>{
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        draw(ctx)
    })
    return (
        <div className={s.pieChart}>
            <canvas ref={canvasRef} {...props}></canvas>
            <div className={s.pieChart__num1}>{a}<span>%</span></div>
            <div className={s.pieChart__num2}>{b}%</div>
            <div className={s.pieChart__textItems}>
                <div className={s.pieChart__textItem}>
                    <span className={s.pieChart__title}>НИТ</span>
                    <div className={s.pieChart__count}>{localNum(nit)} <span>/ {localNum(nitAll)}</span></div>
                </div>
                <div className={s.pieChart__textItem}>
                    <span className={s.pieChart__title}>ПРОГНОЗ</span>
                    <div className={s.pieChart__count}>{localNum(forecast)} <span>/ {localNum(forecastAll)}</span></div>
                </div>
            </div>
        </div>
    );
};

export default PieChart;
