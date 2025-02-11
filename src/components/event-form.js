import React, { useState } from 'react';

function EventForm({ onSave, onClose }) {
    const [eventName, setEventName] = useState('');
    const [eventColor, setEventColor] = useState('bg-green-500');

    const handleSave = () => {
        onSave(eventName, eventColor);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-4 rounded">
                <h2 className="text-lg mb-2">Add Event</h2>
                <input
                    type="text"
                    placeholder="Event Name"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="border p-2 mb-2 w-full"
                />
                <select
                    value={eventColor}
                    onChange={(e) => setEventColor(e.target.value)}
                    className="border p-2 mb-2 w-full"
                >
                    <option value="bg-green-500">Green</option>
                    <option value="bg-blue-500">Blue</option>
                    <option value="bg-red-500">Red</option>
                    <option value="bg-yellow-500">Yellow</option>
                </select>
                <div className="flex justify-end">
                    <button onClick={onClose} className="mr-2 p-2 border rounded">Cancel</button>
                    <button onClick={handleSave} className="p-2 border rounded bg-blue-500 text-white">Save</button>
                </div>
            </div>
        </div>
    );
}

export default EventForm;