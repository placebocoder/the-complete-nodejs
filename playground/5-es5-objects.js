// Object property shortㅗ뭉

const name = 'Androw'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Boston'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    prict: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

console.log(product)

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel, stock, rating)

const transaction = (type, {label, price, rating}) => {
    console.log(type, label, price, rating)

}

transaction('order', product)