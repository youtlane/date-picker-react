// src/components/DateTimePicker.js
import React, { useState } from 'react';

const DateTimePicker = () => {
    const [date, setDate] = useState('');

    const handleChange = (e) => {
        setDate(e.target.value);
    };

    return (
        <div className="flex flex-col items-center mt-5">
            <label className="mb-2 text-lg font-semibold text-gray-700">Select Date</label>
            <input
                type="date" // Change to date only
                value={date}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>
    );
};

export default DateTimePicker;
