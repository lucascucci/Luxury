import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import capturaUno from '../../assets/capturaUno.png'
import capturaDos from '../../assets/capturaDos.png'

    const CarouselRelojes = () => {
        const images = [
            { id: 1, src: ('../../assets/capturaUno.png').default, alt: 'Imagen1' },
            { id: 2, src: ('../../assets/capturaDos.png').default, alt: 'capturaDos' }
        ];

        return (
            <Carousel>
                {images.map((image) => (
                    <Carousel.Item key={image.id}>
                        <img className="d-block w-100" src={capturaUno} alt={image} />
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    };


export default CarouselRelojes;