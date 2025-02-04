import React from 'react'

const CalendarWeek = () => {

    const rows = 336

    return (
        <div className='flex justify-center items-center h-full w-full pr-20'>
            <div className='grid grid-cols-1 w-36 h-full'>
                {
                    Array.from({ length: 24 }, (_, i) => {
                        return (
                            <div key={i} className="w-full h-8 relative">
                                <p className="absolute right-2 text-white">{i}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="grid grid-cols-7 w-full h-full">
                {
                    Array.from({ length: rows }, (_, i) => {
                        return (
                            <div key={i} className="w-full h-4 relative border">

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CalendarWeek