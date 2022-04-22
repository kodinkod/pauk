import React from 'react';
import Card from "./Card";

function ListSlider(props) {
    return (
        <div className="slider">
            <div className="slider__container">
                <div className="slider__wrapper">
                    <div className="slider__items">
                        <div className="slider__item">
                            <Card/>
                        </div>
                        <div className="slider__item">
                            <Card/>
                        </div>
                        <div className="slider__item">
                            <Card/>
                        </div>
                        <div className="slider__item"><Card>
                        </Card>
                        </div>
                        <div className="slider__item">
                            <Card></Card>
                        </div>
                        <div className="slider__item">
                            <Card>

                            </Card>
                        </div>
                        <div className="slider__item">
                            <Card>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Кнопки для перехода к предыдущему и следующему слайду -->
            <a href="#" className="slider__control" data-slide="prev"></a>
            <a href="#" className="slider__control" data-slide="next"></a>
        </div>
    );
}

export default ListSlider;