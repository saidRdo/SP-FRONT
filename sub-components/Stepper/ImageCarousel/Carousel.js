import Card from "@mui/material/Card";
import Carousel from "react-bootstrap/Carousel";
import {AiFillHeart, AiOutlineComment} from "react-icons/ai";
import Rating from "@mui/material/Rating";
import {CardActionArea} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

export const CarouselCard = () => {
    return (
        <Card sx={{ maxWidth: 250 ,margin:"5px"}}>
            <Carousel interval={null}>
                <Carousel.Item>
                    <img src={"https://blackstoneam.com/wp-content/uploads/2021/10/parking-Lot-with-cars.jpeg"} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={"https://img.freepik.com/premium-zdjecie/samochody-na-parkingu-w-wieczornym-swietle-slonca_150893-219.jpg"} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={"https://edito.seloger.com/sites/default/files/styles/480x/public/edito_migrate/article/image/investir-place-parking-seloger_1.jpg?itok=uf-5QVCY"} />
                </Carousel.Item>
            </Carousel>
            <div className={"d-flex justify-content-between align-items-center mt-2 ml-2 mr-2 mb-0"}>
                <div className={"d-flex align-items-center"}>
                    <AiFillHeart style={{color:"red"}} />
                    <p>+100</p>
                </div>
                <div className={"d-flex align-items-center"}>
                    <AiOutlineComment style={{color:"gray",fontSize:"18px"}} />
                    <p>+100</p>
                </div>
                <div>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="small"/>
                </div>
            </div>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Parking Ain diab
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className={"cardparkingBody"}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}
