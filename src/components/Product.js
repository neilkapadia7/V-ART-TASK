import React, {useState} from 'react'

const Product = ({product1, product2, product3}) => {

    const [count, setCount] = useState(product1);

    

    return (
        <div className='product-box'>
            <img src={count} alt='Alt'/>
            <p className='box-title white'>Title Here</p>
            <p className='box-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            
            <center>
                <div className='color-div'>
                    <div className='color-1' onClick={() => setCount(product1)}></div>
                    <div className='color-2' onClick={() => setCount(product2)}></div>
                    <div className='color-3' onClick={() => setCount(product3)}></div>
                </div>
            </center>
        </div>
    )
}

export default Product
