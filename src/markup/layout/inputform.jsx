import React, { useState } from 'react';


const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <form className='form1' onSubmit={handleSubmit}>
            <div>

                <input className='name-form inputclass '
                    type="text"
                    placeholder='Name*'
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='email-phone'>

                <input className='inputclass'
                    placeholder='Email'
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            

                <input className='inputclass'
                    placeholder='Phone*'
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>

                <textarea className='messagearea'
                    placeholder='Message'
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <div className="tick">
                <label htmlFor="tick">
                    <input type="checkbox" id="tick" name="tick" required />
                    I agree that Bridge Health may contact me at the email <br></br> address or phone number above.
                </label>
            </div>
            <button className='btn-formdata' type="submit">SUBMIT</button>
        </form>
    );
};

export default Form;
