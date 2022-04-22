import React from 'react';
import Card from "./Card";
import ChiefSlider from "../utils/slider";
import {observe} from "web-vitals/dist/modules/lib/observe";

class ListSlider extends React.Component {
    componentDidMount() {
        new ChiefSlider('.slider',
            {
                loop: false,
                autoplay: false,
                interval: 5000,
                swipe: true,
                refresh: true
            })
    }

    render() {
        return (
            <div className="slider">
                <div className="slider__container">
                    <div className="slider__wrapper">
                        <div className="slider__items">
                            <div className="slider__item">
                                <Card news = {new Object()}/>
                            </div>
                            <div className="slider__item">
                                <Card news = {new Object()}/>
                            </div>
                            <div className="slider__item">
                                <Card news = {new Object()}/>
                            </div>
                            <div className="slider__item">
                                <Card news = {new Object()}/>
                            </div>
                            <div className="slider__item">
                                <Card news ={new Object()}/>
                            </div>
                            <div className="slider__item">
                                <Card news = {new Object()}/>
                            </div>
                            <div className="slider__item">
                                <Card news = {new Object()}/>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" className="slider__control" data-slide="prev"></a>
                <a href="#" className="slider__control" data-slide="next"></a>
            </div>
        );
    }
}

export default ListSlider;