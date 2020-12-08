import React, { useState } from 'react'
import s from './FlightsBlock.module.css'
import { Flight } from './Flight/Flight'
import { useSelector } from 'react-redux'

export const FlightsBlock = () => {
  const [sort, setSort] = useState('Самый дешевый')
  const { flights, isLoading, filterItems } = useSelector(state => state.state)

  const stopsSelectedFilterItems = filterItems.filter(e => e.selected === true).map(e => e.stops)
  let copyFlights = [...flights]

  if (sort === 'Самый дешевый') {
    copyFlights.sort((a, b) => {
      if (a.price > b.price) {
        return 1
      }
      if (a.price < b.price) {
        return -1
      }
      return 0
    })
  } else if (sort === 'Самый быстрый') {
    copyFlights.sort((a, b) => {
      if (a.segments[0].duration > b.segments[0].duration) {
        return 1
      }
      if (a.segments[0].duration < b.segments[0].duration) {
        return -1
      }
      return 0
    })
  }

  const filterFlights = () => {
    if (stopsSelectedFilterItems.length) {
      return copyFlights.map((flight, i) => {
        return stopsSelectedFilterItems.some(e => e === flight.segments[0].stops.length) ? <Flight key={i} {...flight} /> : null
      })
    } else {
      return copyFlights.map((flight, i) => {
        return <Flight key={i} {...flight} />
      })
    }
  }

  const filteredFlights = filterFlights()

  return (
    <div>
      <div className={s.buttons}>
        <button className={sort === 'Самый дешевый' ? s.selectedButton : ''} onClick={() => setSort('Самый дешевый')}>
          Самый дешевый
        </button>
        <button className={sort === 'Самый быстрый' ? s.selectedButton : ''} onClick={() => setSort('Самый быстрый')}>
          Самый быстрый
        </button>
      </div>
      {isLoading ? 'Loading...' : filteredFlights}
    </div>
  )
}
