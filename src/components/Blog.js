// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";


// import Box from "@mui/material/Box";
// import FormControl from "@mui/material/FormControl";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormLabel from "@mui/material/FormLabel";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import Switch from "@mui/material/Switch";
// import SpeedDial from "@mui/material/SpeedDial";
// import SpeedDialIcon from "@mui/material/SpeedDialIcon";
// import SpeedDialAction from "@mui/material/SpeedDialAction";
// import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
// import SaveIcon from "@mui/icons-material/Save";
// import PrintIcon from "@mui/icons-material/Print";


// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));


// const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
//   position: "absolute",
//   "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
//     bottom: theme.spacing(2),
//     right: theme.spacing(2),
//   },
//   "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
//     top: theme.spacing(2),
//     left: theme.spacing(2),
//   },
// }));

// const actions = [
//   { icon: <FileCopyIcon />, name: "Copy" },
//   { icon: <SaveIcon />, name: "Save" },
//   { icon: <PrintIcon />, name: "Print" },
//   { icon: <ShareIcon />, name: "Share" },
// ];

// export const Blog = () => {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const [direction, setDirection] = React.useState("up");
//   const [hidden, setHidden] = React.useState(false);

//   const handleDirectionChange = (event) => {
//     setDirection(event.target.value);
//   };

//   const handleHiddenChange = (event) => {
//     setHidden(event.target.checked);
//   };

//   return (
//     <div style={{ margin: "auto", width: "98%" }}>
//       <Card sx={{ border: "1px solid" }}>
//         <CardActions disableSpacing>
//           <IconButton aria-label="share">
//             <ShareIcon />
//           </IconButton>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//         </CardActions>
//         <CardMedia
//           component="img"
//           height="400"
//           image={require("../assets/Campus.jpg")}
//           title="Contemplative Reptile"
//           alt="IIITB-Campus"
//         />
//       </Card>
//     </div>
//   );
// };

//       {
//         /* <CardHeader
//         action={
//           <IconButton aria-label="settings">
//             <Box sx={{ position: "relative"}}>
//               <Box
//                 sx={{
//                     position: "absolute",
//                     backgroundColor: "black",
//                     width: "100%",
//                     height: "10%",
//                 }}
//               >
//                 <StyledSpeedDial
//                   style={{ mt: "3", alignContent: "right" }}
//                   ariaLabel="SpeedDial playground example"
//                   icon={<ShareIcon />}
//                   direction={direction}
//                 >
//                   {actions.map((action) => (
//                     <SpeedDialAction
//                       key={action.name}
//                       icon={action.icon}
//                       tooltipTitle={action.name}
//                     />
//                   ))}
//                 </StyledSpeedDial>
//               </Box>
//             </Box>
//           </IconButton>
//         }
//       /> */
//       }