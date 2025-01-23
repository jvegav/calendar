function CalendarDays({ currentDate, ...props }) {
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
        console.log("Date: " + calendarDay.date + " Selected: " + calendarDay.selected + "primer" + firstDayOfMonth.getDate() + "segundo" + currentDate.getDate());


        currentDays.push(calendarDay);
    }

    return (
        <div className="grid grid-cols-7 w-full">
            {
                currentDays.map((day, index) => {
                    return (
                        <div key={index} className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "") + " w-full h-16 relative border cursor-pointer"}
                        >
                            <p className={"absolute right-2 " + (day.selected ? "text-red-600 font-bold" : "") + (day.currentMonth ? "text-black font-bold" : "text-gray-500 font-bold")}  >{day.number} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CalendarDays;