import React from 'react'
import AboutComponent from '../components/AboutComponent'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Product from '../components/Product'
import P1 from '../components/products/1.jpeg'
import P2 from '../components/products/2.jpeg'
import P3 from '../components/products/3.jpeg'
import P4 from '../components/products/4.jpeg'
import P5 from '../components/products/5.jpeg'
import P6 from '../components/products/6.jpeg'

const HomePage = () => {
    return (
        <>
        <section id='home'>
        <div className="blur"></div>
            <div className="content-relative">
                <Header />
                <div className="home-content">
                    <div className="home-subtitle">Create Custom T-Shirts and Uniform</div>
                    <div className="home-title u">Creative Design</div>
                    <div className="button-1 u"><a href='/'>Purchase Now</a></div>
                </div>

            </div>
        </section>

            <section id='about'>
                <p className='page-title u black'>About Promotion Page</p>
                <p className='page-info black'>We always stay with our clients and respect their business. We deliver 100% and provide instant response to help them succeed in constantly changing and challenging business world.</p>
                <div className='component-sec'>
                    <AboutComponent title='Decorated Methods'/>
                    <AboutComponent title='Online Catalogs'/>
                    <AboutComponent title='New Products'/>
                </div>
            </section>

            <section id='products'>
                <p className='page-title u white'>Top Trending Products</p>
                <p className='page-info white'>These products are our current best sellers and have rave reviews from our customers. We think you'll like them too.</p>
                <div className='component-sec'>
                    <Product product1={P1} product2={P2} product3={P3}/>
                    <Product product1={P4} product2={P5} product3={P6}/>
                    <Product product1={P1} product2={P2} product3={P3}/>
                </div>

            </section>

            <Footer/>
        </>
    )
}

export default HomePage
