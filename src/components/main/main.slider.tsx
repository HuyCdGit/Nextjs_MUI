"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "react-slick";
import { Box, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
interface Iprops {
  data: ItrackTop[];
}
const MainSlider = (props: Iprops) => {
  const { data } = props;
  function NextArrow(props: any) {
    return (
      <Button
        color="inherit"
        variant="contained"
        sx={{
          position: "absolute",
          right: 0,
          top: "30%",
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
        color="inherit"
        variant="contained"
        sx={{
          position: "absolute",
          left: 0,
          top: "30%",
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
        ".track": {
          padding: "0 10px",
          img: {
            height: 150,
            width: 150,
          },
        },
        h3: {
          border: "1px solid #ccc",
          padding: "20px",
          height: "200px",
        },
      }}
    >
      <Slider {...settings}>
        {data.map((items) => (
          <div className="track" key={"track._id"}>
            <img
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}images/${items.imgUrl}`}
            />
            <h4>{items.title}</h4>
            <h5>{items.description}</h5>
          </div>
        ))}
      </Slider>
    </Box>
  );
};
export default MainSlider;
