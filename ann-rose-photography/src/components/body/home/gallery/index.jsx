import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Image from '../../../utilities/Image';
import CoupleBeach from '../../../utilities/images/CoupleBeach.jpeg';
import SunflowerField from '../../../utilities/images/SunflowerField.jpeg';
import HouseFamily from '../../../utilities/images/HouseFamily.jpeg';
import AppleFamily from '../../../utilities/images/AppleFamily.jpeg';



class Gallery extends Component {
    render() {
        const imageHeight = "700px"
        return (
            <Carousel>
                <Carousel.Item >
                    <Image
                        source={CoupleBeach}
                        classNames="d-block w-100"
                        alt="Picture 1"
                    />
                </Carousel.Item>

                <Carousel.Item >
                    <Image
                        source={SunflowerField}
                        classNames="d-block w-100"
                        alt="Picture 1"
                    />
                </Carousel.Item>

                <Carousel.Item >
                    <Image
                        source={HouseFamily}
                        classNames="d-block w-100"
                        alt="Picture 1"
                    />
                </Carousel.Item>

                <Carousel.Item >
                    <Image
                        source={AppleFamily}
                        classNames="d-block w-100"
                        alt="Picture 1"
                    />
                </Carousel.Item>

            </Carousel>
        );
    }
}

export default Gallery;