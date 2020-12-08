import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { FilterBlock, FlightsBlock } from './Components'
import logo from './img/logo.png'
import { getFlightsThunk } from './redux/reducer'

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFlightsThunk())
  }, [dispatch])
  return (
    <>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='container'>
        <FilterBlock />
        <FlightsBlock />
      </div>
    </>
  )
}
