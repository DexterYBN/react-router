import React from 'react';
import { YMaps, Map } from "react-yandex-maps";

const Contact = () => (
    <YMaps>
        <div style={{ height: '100vh', width: '100%' }}>
            <Map defaultState={{ center: [43.325903, 45.691734], zoom: 18 }} />
        </div>
    </YMaps>
)

export { Contact } 