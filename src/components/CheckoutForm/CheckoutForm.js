import React, { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();
        const userData = {
            name, phone, email
        };
        onConfirm(userData);
    };

    return (
        <div>
            <form onSubmit={handleConfirm} className="Form">
                <label>
                    Name
                    <input
                        className="Input"
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label>
                    Phone
                    <input
                        className="Input"
                        type='text'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label>
                    Email
                    <input
                        className="Input"
                        type='text'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <div>
                    <button type='submit' className="Button">Create order</button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
