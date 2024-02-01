import React, { useState } from 'react';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log('Form submitted:', formData);
        
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name (required)"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email (required)"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message (required)"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <input type="submit" value="Send" />
            </form>
        </div>
    );
}

export default App;
