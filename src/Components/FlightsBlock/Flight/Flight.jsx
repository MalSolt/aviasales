import React from 'react'
import s from './Flight.module.css'

export const Flight = ({ price, carrier, segments }) => {
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60)
    let minutes = mins % 60
    return hours + 'ч. ' + minutes + 'м.'
  }

  return (
    <div className={s.flight}>
      <header>
        <span className={s.price}>
          {String(price)
            .split('')
            .map((e, i) => (i === 1 ? e + ' ' : e))
            .join('') + ' Р'}
        </span>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt='' />
      </header>
      <div className={s.description}>
        <div className={s.item}>
          <h6>Время и дата вылета </h6>
          <h5>
            {segments[0].date.slice(11, 16)} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {segments[0].date.slice(5, 10).split('-').reverse().join('.')}
          </h5>
        </div>
        <div className={s.item}>
          <h6>Время пути </h6>
          <h5>{getTimeFromMins(segments[0].duration)}</h5>
        </div>
        <div className={s.item}>
          <h6> Пересадки: {segments[0].stops.length} </h6>
          <h5>{segments[0].stops.join(' ')}</h5>
        </div>
      </div>
    </div>
  )
}
