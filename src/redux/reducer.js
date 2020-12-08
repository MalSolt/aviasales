import { createSlice } from '@reduxjs/toolkit'
import { getFlights } from '../api/api'

const reducerSlice = createSlice({
  name: 'todos',
  initialState: {
    flights: [],
    isLoading: false,
    filterItems: [
      { stops: 0, selected: false, text: 'Без пересадок' },
      { stops: 1, selected: false, text: '1 пересадка' },
      { stops: 2, selected: false, text: '2 пересадки' },
      { stops: 3, selected: false, text: '3 пересадки' },
    ],
  },
  reducers: {
    installFlights(state, action) {
      state.flights = action.payload
    },
    toggleLoading(state, action) {
      state.isLoading = action.payload
    },
    toggleSelected(state, action) {
      state.filterItems[action.payload].selected = !state.filterItems[action.payload].selected
    },
  },
})

export const getFlightsThunk = () => {
  return async dispatch => {
    dispatch(reducerSlice.actions.toggleLoading(true))
    const flights = await getFlights()
    await dispatch(reducerSlice.actions.installFlights(flights))
    dispatch(reducerSlice.actions.toggleLoading(false))
  }
}

export const { installFlights, toggleSelected } = reducerSlice.actions

export default reducerSlice.reducer
