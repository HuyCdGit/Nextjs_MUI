"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "react-slick";
import { Box, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Margin } from "@mui/icons-material";
const MainSlider = () => {
  function NextArrow(props: any) {
    return (
      <Button
        variant="outlined"
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          minWidth: 30,
          width: 35,
          zIndex: 2,
          cursor: "pointer",
        }}
        onClick={props.onClick}
      >
        <KeyboardArrowRightIcon />
      </Button>
    );
  }
  const PrevArrow = (props: any) => {
    return (
      <Button
        variant="outlined"
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          minWidth: 30,
          width: 35,
          zIndex: 2,
          cursor: "pointer",
        }}
        onClick={props.onClick}
      >
        <KeyboardArrowLeftIcon />
      </Button>
    );
  };
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box
      sx={{
        margin: "0 50px",
        ".abc": { padding: "0 10px" },
        h3: { border: "1px solid #ccc", padding: "20px", height: "200px" },
      }}
    >
      <Slider {...settings}>
        <div className="abc">
          <h3>Track1</h3>
        </div>
        <div className="abc">
          <h3>Track2</h3>
        </div>
        <div className="abc">
          <h3>Track3</h3>
        </div>
        <div className="abc">
          <h3>Track4</h3>
        </div>
        <div className="abc">
          <h3>Track5</h3>
        </div>
        <div className="abc">
          <h3>Track6</h3>
        </div>
        <div className="abc">
          <h3>Track7</h3>
        </div>
        <div className="abc">
          <h3>Track8</h3>
        </div>
        <div className="abc">
          <h3>Track9</h3>
        </div>
      </Slider>
    </Box>
  );
};
export default MainSlider;
