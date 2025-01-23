import React, { useState } from 'react';
import CalendarDays from './calendar-days';

const Calendar = () => {

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const [state, setState] = useState({
        currentDate: new Date(),
        currentMonth: new Date()
    });

    const events = {
        '2025-01-01': ['Event 1', 'Event 2'],
        '2025-01-02': ['Event 3'],

    };

    const changeNextMonth = (date) => {
        setState({ ...state, currentDate: new Date(date.getFullYear(), date.getMonth() + 1, state.currentDate.getDate()) });
    }
    const changePastMonth = (date) => {
        setState({ ...state, currentDate: new Date(date.getFullYear(), date.getMonth() - 1, state.currentDate.getDate()) });
    }

    return (
        <div className="calendar w-full h-full flex flex-col px-20 pt-5">
            <div className="calendar-header flex flex-col items-center p-4">
                <div className='flex items-center justify-between w-full py-3'>
                    <h2 className='text-3xl font-bold cursor-pointer' >{months[state.currentDate.getMonth()]} {state.currentDate.getFullYear()}
                    </h2>
                    <div className='px-4 gap-4'>
                        <button onClick={() => changePastMonth(state.currentDate)} >{`<`} </button>
                        <button onClick={() => changeNextMonth(state.currentDate)} > {`>`} </button>
                    </div>


                </div>

                <div className="w-full flex-grow flex flex-col">
                    <div className="flex items-center justify-around">
                        {
                            weekdays.map((weekday, index) => {
                                return <p key={index} className='font-bold w-full text-center'>{weekday}</p>
                            })
                        }
                    </div>
                    <CalendarDays currentDate={state.currentDate} events={events} />
                </div>
            </div>
        </div>
    );
}

export default Calendar;