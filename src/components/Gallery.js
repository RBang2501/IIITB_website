import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import chitram_logo from "../assets/chitramlogo.png";


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export const Gallery = () => {
  return (
    <div
      className="bg-white shadow-lg pt-3 my-3 mt-5 rounded mx-auto"
      style={{ width: "96%" }}
    >
      <h3 className="text-center fw-bold">Gallery-@IIITB</h3>
      <h6 className="text-center text-secondary">
        All that's new and happening at IIITB
      </h6>
      <hr
        className="mx-5"
        style={{
          color: "grey",
          fontWeight: "700",
          height: "10px",
          fontSize: "20px",
        }}
      />
      <div className="pt-6 container " style={{ position: "relative" }}>
        <div className="row ">
          <div className="col d-flex justify-content-center" >
            <Card
              className="shadow"
              // sx={{ width: "80%" }}
            >
              <CardContent>
                <img
                  src={chitram_logo}
                  height="100px"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Chayachitra
                </Typography>
                <Typography className="border-bottom border-2 "sx={{ mb: 1, width: "86%"}} variant="h5" component="div">
                  Photos-IIITB
                </Typography>
                {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography> */}
                <Typography variant="body2 katin">
                  Let your words be few and pictures say more… Moments caught in
                  the lens of students, faculty and staff- savoring campus life
                  through their lens.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small mb-2">Gallery <KeyboardArrowRightIcon/></Button>
              </CardActions>
            </Card>
          </div>
          <div className="col d-flex justify-content-center ">
            <ImageList
              sx={{
                width: 800,
                height: 550,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.title}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </div>
    </div>
  );
};

const itemData = [
  //   {
  //     img: "https://iiitb.ac.in/includefiles/photos/Adrij_IMT2019004_(4).jpeg",
  //     title: "Breakfast",
  //     author: "@bkristastucchio",
  //     rows: 2,
  //     cols: 2,
  //     featured: true,
  //   },
  {
    img: "https://iiitb.ac.in/includefiles/photos/Adrij_IMT2019004_(37).jpg",
    title: "Lawn Area",
    author: "@AdrijSharma",
  },
  {
    img: "https://iiitb.ac.in/includefiles/photos/Adrij_IMT2019004_(29).jpg",
    title: "Ramanujan Block",
    author: "@AdrijSharma",
  },
  {
    img: "https://iiitb.ac.in/includefiles/photos/Heet_Vasani_iMTech_2020_(3).jpeg",
    title: "Bhaskara Mens Hostel",
    author: "@HeetVasani",
    cols: 2,
  },
  {
    img: "https://iiitb.ac.in/includefiles/photos/Apoorva-Panse,-MT2020-(5).jpg",
    title: "Vishveshvarya Mens Hostel",
    author: "@Apporva Panse",
    cols: 2,
  },
  {
    img: "https://iiitb.ac.in/includefiles/photos/Apoorva-Panse,-MT2020-(6).jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://iiitb.ac.in/includefiles/photos/Tejas_Kotha_(IMT2016.jpg",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://iiitb.ac.in/includefiles/photos/Ishaan_Jalan_IMT2020561-4.jpg",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://iiitb.ac.in/includefiles/photos/Ishaan_Jalan_IMT2020561-9.jpg",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://iiitb.ac.in/includefiles/photos/Heet_Vasani_iMTech_2020_(9).jpeg",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://iiitb.ac.in/includefiles/photos/PC__Jay_Kakkad_(MT2018_(4).jpg",
    title: "Sea star",
    author: "@peterlaster",
  },
  //   {
  //     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
  //     title: "Bike",
  //     author: "@southside_customs",
  //     cols: 2,
  //   },
];
