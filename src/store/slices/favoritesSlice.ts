import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProdutoType } from './cartSlice'

interface FavoritesState {
  items: ProdutoType[]
}

const initialState: FavoritesState = {
  items: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<ProdutoType>) {
      if (!state.items.some((item) => item.id === action.payload.id)) {
        state.items.push(action.payload)
      }
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
