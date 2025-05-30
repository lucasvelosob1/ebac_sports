import { useDispatch, useSelector } from 'react-redux'
import Produto from '../components/Produto'
import * as S from './styles'
import { useGetProductsQuery } from '../store/slices/apiSlice'
import { addToCart } from '../store/slices/cartSlice'
import { addFavorite, removeFavorite } from '../store/slices/favoritesSlice'
import { RootState } from '../store'
import { ProdutoType } from '../store/slices/cartSlice'

const ProdutosComponent = () => {
  const dispatch = useDispatch()
  const { data: produtos = [], isLoading, isError } = useGetProductsQuery()
  const favoritos = useSelector((state: RootState) => state.favorites.items)

  const produtoEstaNosFavoritos = (produto: ProdutoType) =>
    favoritos.some((f) => f.id === produto.id)

  const favoritar = (produto: ProdutoType) => {
    if (produtoEstaNosFavoritos(produto)) {
      dispatch(removeFavorite(produto.id))
    } else {
      dispatch(addFavorite(produto))
    }
  }

  const adicionarAoCarrinho = (produto: ProdutoType) => {
    dispatch(addToCart(produto))
  }

  if (isLoading) return <p>Carregando...</p>
  if (isError) return <p>Erro ao carregar produtos.</p>
  if (!produtos.length) return <p>Nenhum produto encontrado.</p>

  return (
    <S.Produtos>
      {produtos.map((produto: ProdutoType) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
          favoritar={favoritar}
          aoComprar={adicionarAoCarrinho}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
