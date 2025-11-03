import { useCart } from "./CartContext"
import styles from './Cart.module.scss'

const Cart:React.FC = () => {
  const {cart, inc, dec, remove, clear, totalCount, totalPrice} = useCart()

  if(cart.length === 0){
    return (
      <div className={styles.empty}>
        <h1>장바구니</h1>
        <h3>선택된 상품이 없습니다</h3>
      </div>
    )
  }

  return (
    <div className={styles.main}>
      <h1>장바구니</h1>
      <ul className={styles.card}>
        { // cart = product(id, title, price, imga), qty
          cart.map(item => (
            <li key={item.product.id}>
              <img src={item.product.image} alt={item.product.title} style={{width: "100px", height: "100px", objectFit: 'cover'}} />
              <div className={styles.info}>
                <h3>{item.product.title}</h3>
                <h4>{(item.qty * item.product.price).toLocaleString()}원</h4>
                <div className={styles.btns}>
                  <button onClick={() => dec(item.product.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => inc(item.product.id)}>+</button>
                </div>
                <button onClick={() => remove(item.product.id)}>상품삭제</button>
              </div>
            </li>
          ))
        }
      </ul>
      <div>
        <div>총 수량 : {totalCount} 개</div>
        <div>총 금액 : {totalPrice.toLocaleString()}원</div>
        <button onClick={() => clear()}>전체 비우기</button>
      </div>
    </div>
  )
}

export default Cart