import React, { Component } from 'react';
import CalendarDays from './calendar-days';

export default class Calendar extends Component {

    constructor() {
        super();
        this.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.state = {
            currentDate: new Date(),
            currentMonth: new Date()
        }
        console.log(this.state.currentDate.getDate());

        this.changeNextMonth = (date) => {
            this.setState({ currentDate: new Date(date.getFullYear(), date.getMonth() + 1, this.state.currentDate.getDate()) });
        }
        this.changePastMonth = (date) => {
            this.setState({ currentDate: new Date(date.getFullYear(), date.getMonth() - 1, this.state.currentDate.getDate()) });
        }
    }
    render() {
        return (
            <div className="calendar w-full h-full flex flex-col px-20 pt-5">
                <div className="calendar-header flex flex-col items-center p-4">
                    <h2 className='text-3xl font-bold cursor-pointer' >{this.months[this.state.currentDate.getMonth()]} {this.state.currentDate.getFullYear()}
                    </h2>
                    <button onClick={() => this.changeNextMonth(this.state.currentDate)} >Adelante</button>
                    <button onClick={() => this.changePastMonth(this.state.currentDate)} >Atras</button>
                </div>
                <div className="w-full flex-grow flex flex-col">
                    <div className="flex items-center justify-around">
                        {
                            this.weekdays.map((weekday, index) => {
                                return <p key={index} className='font-bold w-full text-center'>{weekday}</p>
                            })
                        }
                    </div>
                    <CalendarDays currentDate={this.state.currentDate} />
                </div>
            </div>
        );
    }
}