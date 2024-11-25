"use client"

import React, { useEffect, useState } from 'react'

interface CountdownTimerProps {
    deadline: Date;
}

interface CountdownTimeLeft {
    days?: number;
    hrs?: number;
    mins?: number;
    secs?: number;
}

const INITIAL_TIME_LEFT = { days: 0, hr: 0, mins: 0, secs: 0 }

function CountdownTimer({ deadline }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState<CountdownTimeLeft>(INITIAL_TIME_LEFT)

    useEffect(() => {
        setTimeLeft(calculateTimeLeft())

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer);
    }, [])

    function calculateTimeLeft(): CountdownTimeLeft {
        let timeLeft: CountdownTimeLeft = {};
        const currentDate = new Date();
        const difference = deadline.getTime() - currentDate.getTime();

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
                mins: Math.floor((difference / 1000 / 60) % 60),
                secs: Math.floor((difference / 1000) % 60)
            }
        }

        return timeLeft;
    }

    return (
            <div className={'w-full relative xl:!w-[90%] m-auto flex justify-center'}>
                {
                    Object.entries(timeLeft).map(([unit, value], index, array) => (
                        <div key={unit} className={'text-center '}>
                            <div className={'flex items-center gap-x-2  justify-center  text-xl md:text-2xl xl:text-3xl '}>
                                <p style={{padding:'12px'}} className={`bg-white bg-opacity-60 border  rounded-lg border-black`}>{Math.floor(value / 10)}</p>
                                <p style={{padding:'12px'}} className={`bg-white bg-opacity-60   rounded-lg border-black`}>{value % 10}</p>
                                {index !== array.length - 1 && <span style={{marginRight:'10px'}} className='text-white font-serif !mr-5 font-bold'>:</span>}
                            </div>
                            <p className={'capitalize mt-2 text-white font-bold font-bebas_neue tracking-widest'}>{unit}</p>
                        </div>
                    ))
                }

            </div>
    )
}

export default CountdownTimer