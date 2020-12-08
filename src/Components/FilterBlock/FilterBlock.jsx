import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSelected } from '../../redux/reducer'
import s from './FilterBlock.module.css'

export const FilterBlock = () => {
  const { filterItems } = useSelector(state => state.state)
  return (
    <div className={s.container}>
      <h2 className={s.heading}>Количество пересадок</h2>
      {filterItems.map(e => (
        <FilterItem key={e.stops} text={e.text} stops={e.stops} selected={e.selected} />
      ))}
    </div>
  )
}

const FilterItem = ({ text, stops, selected }) => {
  const dispatch = useDispatch()
  return (
    <div className={s.item} onClick={() => dispatch(toggleSelected(stops))}>
      <input type='checkbox' checked={selected} readOnly />
      <span>{text}</span>
    </div>
  )
}
