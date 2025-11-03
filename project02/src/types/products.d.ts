// .d 가 붙으면 ts -> js로 변환을 하지 않음
// .d 가 붙지 않으면 ts -> js로 변환을 함

export interface Product{
    id: number
    title: string
    price: number
    image: string
    category?: string
};

export interface CartItem{
    product: Product
    qty: number
}