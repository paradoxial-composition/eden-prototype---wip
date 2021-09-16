import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://www.cdiscount.com/pdt2/f/n/a/1/700x700/myda2fna/rw/apple-13-3-macbook-pro-touch-bar-2020-puce.jpg'},
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://cdn.shopify.com/s/files/1/0254/6299/7064/products/jordan-wmns-air-jordan-1-high-og-twist_14088905_27581779_2048_1024x.jpg?v=1618546409'}
]

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;