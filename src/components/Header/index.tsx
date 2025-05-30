import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Header = () => {
  const itensNoCarrinho = useSelector((state: RootState) => state.cart.items)
  const favoritos = useSelector((state: RootState) => state.favorites.items)

  const totalItens = itensNoCarrinho.reduce(
    (acc, item) => acc + item.quantidade,
    0
  )
  const valorTotal = itensNoCarrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  )

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Carrinho" />
        <span>
          {totalItens} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
