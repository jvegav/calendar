import React, { useState } from 'react';
import EventCalendar from './event';
import EventOverlay from './event-overlay';
import EventForm from './event-form';

function CalendarDays({ currentDate, events, darkMode }) {
    const [selectedDay, setSelectedDay] = useState(null);
    const [overlayColor, setOverlayColor] = useState('bg-green-500');
    const [showForm, setShowForm] = useState(false);
    const [dayEvents, setDayEvents] = useState(events);

    let firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    let weekdayOfFirstDay = firstDayOfMonth.getDay();

    let currentDays = [];

    for (let day = 0; day < 42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (day === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
        } else {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }

        let calendarDay = {
            currentMonth: (firstDayOfMonth.getMonth() === currentDate.getMonth()),
            date: (new Date(firstDayOfMonth)),
            month: firstDayOfMonth.getMonth(),
            number: firstDayOfMonth.getDate(),
            selected: (firstDayOfMonth.getDate() === currentDate.getDate()) && (firstDayOfMonth.getMonth() === currentDate.getMonth()),
            year: firstDayOfMonth.getFullYear()
        }

        currentDays.push(calendarDay);
    }

    const handleDayClick = (day) => {
        setSelectedDay(day);
        setShowForm(true);
    };

    const handleSaveEvent = (eventName, eventColor) => {
        const dayKey = `${selectedDay.year}-${String(selectedDay.month + 1).padStart(2, '0')}-${String(selectedDay.number).padStart(2, '0')}`;
        const newEvents = { ...dayEvents };
        if (!newEvents[dayKey]) {
            newEvents[dayKey] = [];
        }
        newEvents[dayKey].push({ name: eventName, color: eventColor });
        setDayEvents(newEvents);
    };

    return (
        <div className="grid grid-cols-7 w-full h-full">
            {
                currentDays.map((day, index) => {
                    const dayKey = `${day.year}-${String(day.month + 1).padStart(2, '0')}-${String(day.number).padStart(2, '0')}`;
                    const dayEvents = events[dayKey] || [];

                    return (
                        <div key={index} className={"calendar-day cursor-pointer" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "") + ` w-full h-16 relative border ${darkMode ? 'dark:bg-gray-800 text-white' : ''}`}
                            onClick={() => handleDayClick(day)}>
                            <p className={"absolute right-2 " + (day.selected ? "text-red-600 font-bold" : "text-black") + `${darkMode ? 'dark:bg-gray-800 text-white' + (day.selected ? "text-red-600 font-bold" : "text-white") : ''}`}>{day.number}</p>
                            {
                                dayEvents.map((event, index) => (
                                    <p key={index} className='text-xs'>{event.name}</p>
                                ))
                            }
                            {dayEvents.length > 0 && <EventOverlay events={dayEvents.map(event => event.name)} color={dayEvents[0].color} />}
                            {selectedDay && selectedDay.date.getTime() === day.date.getTime() && <EventOverlay events={dayEvents.map(event => event.name)} color={overlayColor} />}
                        </div>
                    )
                })
            }
            {showForm && <EventForm onSave={handleSaveEvent} onClose={() => setShowForm(false)} />}
        </div>
    )
}

export default CalendarDays;