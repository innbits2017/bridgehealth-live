import React from 'react';
import Accordion from '../../assets/js/Accordion';

const Diagnosis = () => {
    const accordionData = [
        {
            title: '1. What is shingles?',
            content: `Shingles, also known as herpes zoster, is a painful skin rash caused by the varicella-zoster virus
            (VZV). This virus is the same one responsible for causing chickenpox. After a person recovers from chickenpox,
             the virus remains silent in our nerve tissues. However, in some cases, the virus can reactivate later in life, 
             leading to shingles.`
        },
        {
            title: '2. How is shingles different from chickenpox?',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
            title: '3. What are the common symptoms of shingles?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        },
        {
            title: '4. Who is at a higher risk of developing shingles? Are there any specific age groups affected more frequently?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        },
        {
            title: '5. How is shingles diagnosed by healthcare professionals?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        },
        {
            title: '6. Why does shingles appear only on one side or in a specific area of the body?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        }
    ];

    return (
        <div className="backimag">
            <div className="container">
                <div className="accordion">
                    {accordionData.map(({ title, content }) => (
                        <Accordion title={title} content={content} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Diagnosis;