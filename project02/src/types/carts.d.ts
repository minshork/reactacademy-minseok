// .d 가 붙으면 ts -> js로 변환을 하지 않음
// .d 가 붙지 않으면 ts -> js로 변환을 함

// .d.ts :: 컴파일시 파일 생성 안함
// 타입스크립트 :: js 안전성 ==? 컴파일 단계에서 에러 표시
// let name = "홍길동" :: 타입추론(자동인식)
// let name:string = "홍길동"
// let name:number = "123"
// let name:bloon = false
// let name:array = []
import type { Product } from './product'

// 🛒 장바구니의 단일 항목
export interface CartItem {
    product: Product
    qty: number
}

// 🧺 장바구니 전체 배열
export type Cart = CartItem[]

// import type [Cart, cartItem] from '../type/cart'
// let [item, setItem] = useState<Cart>([])
// .then((data) => setItem(data))
