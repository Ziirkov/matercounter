import React, { useState, useEffect } from 'react'
import './Counter.css';

function Counter() {

    const [moneyMadeSinceStartOfTheYear, setMoneyMadeSinceStartOfTheYear] = useState(0);
    const [ethSinceStartOfTheYear, setETHSinceStartOfYear] = useState(0);
    //const [ethIn2030, setETHIn2030] = useState(0);
    //const [moneyMadeIn2030, setMoneyMadeIn2030] = useState(0);
    const [euroGainedFromLivretA, setEuroGainedFromLivretA] = useState(0);
    const [euroGainedFromLivretAIn2030, setEuroGainedFromLivretAIn2030] = useState(0);


    useEffect(() => {

        var dateStartYear = new Date("January 1, 22 00:00:00");

        var endDate = new Date();
        var startOfTheYearSeconds = Math.round((endDate.getTime() - dateStartYear.getTime()) / 1000);

        console.log();

        const timeout = setTimeout(() => {
            /**
             * Argent miné en 1 seconde * Nombre de secondes depuis le débute de l'année
             */
            setMoneyMadeSinceStartOfTheYear(Math.round((0.00014 * startOfTheYearSeconds) * 1000) / 1000)

            /**
             * Nombre de secondes depuis le début de l'année * Nombre d'ETH miné en 8 seconde (arrondit à 10^-8)
             */
            setETHSinceStartOfYear(Math.round((startOfTheYearSeconds * 0.000000069) * 100000000) / 100000000)

            /**
             * Nombre d'ETH minés en 2030 + nombre d'eth minés depuis le début de l'année 
             */
            //setETHIn2030(Math.round((15.33 + ethSinceStartOfTheYear + 0.000000069) * 100000000) / 100000000)

            /**
             * Nombre d'ETH minées en 2030 * 25000
             */
            //setMoneyMadeIn2030(Math.round(((ethIn2030 + 0.000000069) * 25000) * 100) / 100)

            /**
             * Taux d'intérêt du livret A depuis le début de l'année (Rendement du livret A pour 4999€ = 47.91 pour un an soit 0.0000015€ par seconde 10^-6)
             */
            setEuroGainedFromLivretA(Math.round((startOfTheYearSeconds * 0.0000015) * 1000000) / 1000000)

            /**
             * Taux d'intérêt du livret A en 2030 (Rendement du livret A pour 4999€ = 47.91 * 7 = 335,37 + rendement en cours pour 2030)
             */
            setEuroGainedFromLivretAIn2030(Math.round((335.37 + euroGainedFromLivretA + 0.0000015) * 1000000) / 1000000)
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [euroGainedFromLivretA, ethSinceStartOfTheYear]);

    return (
        <div className='bg-image'>
            <div className='counter'>
                <h1 className='title'>AVEC UN RIG A 4999€ :</h1>
                <h2 className='paragraph'>Vous auriez miné l'équivalent de {ethSinceStartOfTheYear} ETH soit {moneyMadeSinceStartOfTheYear} € depuis le début de l'année</h2>
                <h2 className='paragraph'>Si vous conservez vos ETH et que ETH continue la même croissance en 2030 vous aurez miné 16.15266644 ETH soit 403816.66€</h2>
                <h2 className='paragraph'>En ouvrant un livret A avec 4999€ vous auriez généré l'équivalent de {euroGainedFromLivretA}€ depuis le début de l'année</h2>
                <h2 className='paragraph'>En ouvrant un livret A avec 4999€ vous auriez généré l'équivalent de {euroGainedFromLivretAIn2030}€ EN 2030</h2>
            </div>
        </div>
    );
}

export default Counter