import React from "react";
import GoogleMapReact from 'google-map-react';
import {Map, GoogleApiWrapper} from 'google-map-react';

export const Location = () => {
    return (
        <></>
    );
}
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export const Location =() =>{
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 11
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '100vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyDengr7yal1Hs_TJUoVtugQ4XUHQhyh_qU" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }