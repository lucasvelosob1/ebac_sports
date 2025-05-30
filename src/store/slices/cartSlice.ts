import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Tipagem base do produto
export interface ProdutoType {
  id: number
  nome: string
  preco: number
  imagem: string
}

export interface CartItemType extends ProdutoType {
  quantidade: number
}

interface CartState {
  items: CartItemType[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProdutoType>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)

      if (existingItem) {
        existingItem.quantidade += 1
      } else {
        state.items.push({ ...action.payload, quantidade: 1 })
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload)

      if (item) {
        if (item.quantidade > 1) {
          item.quantidade -= 1
        } else {
          state.items = state.items.filter(i => i.id !== action.payload)
        }
      }
    }
  }
})

export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer
