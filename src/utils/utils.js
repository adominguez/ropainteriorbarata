export const calculateCheaperProducts = (products = [], numberOfProducts = 4) => {
    const productsPriceTransformed = products.length && products.map(product => ({
        ...product,
        price: parseFloat(product.price.replace(' €'))
    }));
    const cheaper =  productsPriceTransformed.length && productsPriceTransformed.sort((a, b) => a.price - b.price).filter(item => item.price > 0)
    return cheaper.map(product => ({
        ...product,
        price: `${product.price} €`
    })).slice(0, numberOfProducts <= cheaper.length ? numberOfProducts : cheaper.length);
}

export const getBestProducts = (products, number = 1) => {
    return products && products.length && products.sort((a, b) => b.score - a.score).slice(0, number);
}

export const isOdd = (num) => num % 2;

export const logoPosition = {
    0: 'start',
    50: 'center',
    100: 'end'
}