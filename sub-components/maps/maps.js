import React, {useEffect, useMemo, useState} from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import ipapi from 'ipapi.co';
import axios from "axios";
import {DotSpinner} from "@uiball/loaders";


function Map({setZoneData}) {

    const [clickedLocation, setClickedLocation] = useState(null);
    const [centerLocation, setCenterLocation] = useState(null);
    const [Zoom,setZoom]=useState(0)
    const MapOptions = useMemo(
        () => ({
            mapId: "eaf8e615cb72032b",
            disableDefaultUI: true,
            clickableIcons: false,
            gestureHandling: "greedy"
        }),
        []
    )

    const handleMapClick = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();

        setClickedLocation({ lat, lng });
        //console.log('Click Coordinates:',{lat,lng});
        setZoneData(prevData => {
            return {
                ...prevData,
                zone: {
                    ...prevData.zone,
                    lat:lat,
                    lng:lng
                }
            }
        });
    };


    useEffect(() => {
        if ('geolocation' in navigator) {
            // Try to get the user's current location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setZoom(15)
                    setCenterLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => {
                    //console.error('Error getting location:', error);

                         axios.get('https://api.ipify.org').then(re=> {
                             ipapi.location((data)=>{
                                 const { ip, city, region, country, postal, latitude, longitude, timezone } = data;
                                setZoom(12)
                                 setCenterLocation({lat:parseFloat(latitude),lng:parseFloat(longitude)})
                             }, re.data, '', '');
                         }).catch(err=>console.log(err));

                }
            );
        } else {
            console.error('Geolocation is not supported');
        }

    }, []);

    return (
        centerLocation?
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '400px' }}
                center={centerLocation}
                zoom={Zoom}
                options={MapOptions}
                onClick={handleMapClick}
            >
                 {clickedLocation && <Marker position={clickedLocation} />}
            </GoogleMap> :
            <DotSpinner
                size={40}
                speed={0.9}
                color="black"
                />
    );
}

export default Map;
