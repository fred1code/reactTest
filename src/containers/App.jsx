import React from 'react';
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import Carouselitem from "../components/Carouselitem";
import Footer from "../components/Footer"

import '../assets/styles/App.scss';
const App = () => (
    <div className="App">
        <Header/>
        <Search/>
        <Categories title="Mi Lista">
            <Carousel>
                <Carouselitem/>
                <Carouselitem/>
                <Carouselitem/>
                <Carouselitem/>
            </Carousel>
        </Categories>

        <Categories title="Tendencias">
            <Carousel>
                <Carouselitem/>
                <Carouselitem/>
                <Carouselitem/>
                <Carouselitem/>
                <Carouselitem/>
            </Carousel>
        </Categories>


        <Categories title="Originales">
            <Carousel>
                <Carouselitem/>
                <Carouselitem/>
            </Carousel>
        </Categories>

        <Footer/>
    </div>

);

export default App;
