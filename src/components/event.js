import React from 'react';

const EventCalendar = ({ day, events }) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-white p-4 border">
            <h3 className="text-lg font-bold">Events for {day.date.toDateString()}</h3>
            {events.length > 0 ? (
                events.map((event, index) => (
                    <p key={index} className="text-sm">{event}</p>
                ))
            ) : (
                <p className="text-sm">No events</p>
            )}
        </div>
    );
}

export default EventCalendar;