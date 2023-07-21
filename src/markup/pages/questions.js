import React from 'react';
import Accordion from '../../assets/js/Accordion';
import ContactForm from '../element/contact-form';

const Questions = () => {
    const accordionData = [
        {
            title: '1. Is shingles a contagious disease? ',
            content: `Shingles is caused by the same virus that causes chickenpox. While shingles itself is not directly contagious, a person with shingles can transmit the varicella-zoster virus to individuals who have not had chickenpox or have not received the chickenpox vaccine
            The transmission of the virus occurs through direct contact with the fluid-filled blisters of the shingles rash.It is important to understand that shingles usually follows a pattern of development. It typically progresses with the following symptoms:
            •	To start with, you may experience a tingling or burning sensation in your skin.
            •	About 1 to 5 days later, a rash appears as small red spots.
            •	Fluid-filled blisters develop a few days later.
            •	After 7 to 10 days, the lesions crust over.
            •	The rash disappears over the next 2 to 4 weeks.
            The rash is non-contagious after the crust develops.`
        },
        {
            title: '2. Is it possible to have shingles more than once?',
            content: `Absolutely, it is possible to experience shingles more than once. Contrary to a popular misbelief, shingles is not a one-time occurrence disease. You can have multiple episodes of the condition. If you happen to contract shingles again, it is unlikely for the rash to appear in the same area/location as before.`
        },
        {
            title: '3. What is the chance of someone getting shingles? ',
            content: `According to the Centers for Disease Control and Prevention (CDC), the chance of getting shingles above the age of 50 years is‘1 in 3individuals’. `
        }

    ];

    return (
        <div className="container-fluid">
            <div className="auto-container">
                <div className="accordion">
                    {accordionData.map(({ title, content }) => (
                        <Accordion title={title} content={content.split('\n').map((point, idx) => (
                            <li key={idx}>
                                <span dangerouslySetInnerHTML={{ __html: point.trim() }} />
                            </li>
                        ))} />
                    ))}
                </div>
                <div class="btn-box text-center btn5 shin-btn1">
                    <ContactForm buttonText="CONSULT / BOOK" popupPosition="right" className='btn-style-one' />

                </div>
            </div>
        </div>
    );
};

export default Questions;