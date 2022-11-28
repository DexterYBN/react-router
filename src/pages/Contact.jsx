import React from 'react';
import GoogleMapReact from 'google-map-react';

const Contact = () => {
    const defaultProps = {
        center: {
            lat: 43.325903,
            lng: 45.691734
        },
        zoom: 11
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            </GoogleMapReact>
        </div>
    );
}

export { Contact } 