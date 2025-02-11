import React from 'react';

function EventOverlay({ events, color }) {
    return (
        <div className={`absolute top-0 left-0 w-full h-full ${color} bg-opacity-75 flex flex-col justify-center items-center`}>
            {events.map((event, index) => (
                <p key={index} className="text-white text-xs">{event}</p>
            ))}
        </div>
    );
}

export default EventOverlay;