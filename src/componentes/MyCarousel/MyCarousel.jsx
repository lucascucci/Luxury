import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sliderUno from '../../assets/sliderUno.png'


const MyCarousel = () => {
    const images = [
        { id: 1, src: ('../../assets/sliderUno.png').default, alt: 'Imagen 1' },
        { id: 1, src: ('../../assets/sliderUno.png').default, alt: 'Imagen 1' },
        { id: 3, src: ('../../assets/sliderUno.png').default, alt: 'Imagen 3' }
    ];

    return (
        <Carousel>
            {images.map((image) => (
                <Carousel.Item key={image.id}>
                    <img className="d-block w-100" src={sliderUno} alt={sliderUno} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};



export default MyCarousel;
