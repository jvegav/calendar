import React, { useState } from 'react';
import EventCalendar from './event';

function CalendarDays({ currentDate, events, ...props }) {
    const [selectedDay, setSelectedDay] = useState(null);

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
            selected: (firstDayOfMonth.getDate() === currentDate.getDate()),
            year: firstDayOfMonth.getFullYear()
        }

        currentDays.push(calendarDay);
    }

    return (
        <div className="grid grid-cols-7 w-full ">
            {
                currentDays.map((day, index) => {
                    const dayKey = `${day.year}-${String(day.month + 1).padStart(2, '0')}-${String(day.number).padStart(2, '0')}`;
                    const dayEvents = events[dayKey] || [];

                    return (
                        <div key={index} className={"calendar-day cursor-pointer" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "") + " w-full h-16 relative border"}
                            onClick={() => setSelectedDay(day)}>
                            <p className={"absolute right-2 " + (day.selected ? "text-red-600 font-bold" : "text-black")}>{day.number}</p>
                            {
                                dayEvents.map((event, index) => (
                                    <p key={index} className='text-xs p-1'>{event}</p>
                                ))
                            }
                        </div>
                    )
                })
            }
            {selectedDay && <EventCalendar day={selectedDay} events={events[selectedDay.date.toISOString().split('T')[0]] || []} />}
        </div>
    )
}

export default CalendarDays;