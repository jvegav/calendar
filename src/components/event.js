import React from 'react';

const EventCalendar = ({ day, events }) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-800 p-4 border dark:border-gray-700">
            <h3 className="text-lg font-bold dark:text-white">Events for {day.date.toDateString()}</h3>
            {events.length > 0 ? (
                events.map((event, index) => (
                    <p key={index} className="text-sm dark:text-gray-300">{event}</p>
                ))
            ) : (
                <p className="text-sm dark:text-gray-300">No events</p>
            )}
        </div>
    );
}

export default EventCalendar;