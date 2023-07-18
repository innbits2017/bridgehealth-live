import React from 'react';
import Accordion from '../../assets/js/Accordion';

const Postherpetic  = () => {
    const accordionData = [
        {
            id: 1,
            title: 'Postherpetic neuralgia (PHN)',
            content: `PHN is a health complication that affects up to 25% of people with Shingles. One of the main 
            symptoms of PHN is nerve pain that continues for months or years after the Shingles rash is healed. 
            The pain usually is experienced in the affected area.`,
            imageSrc: '../../assets/images/shape/blog.png',
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
        <div className="container-fluid">
            <div className="container">
                <div className="accordion">
                    {accordionData.map((card) => (
                        <Accordion key={card.id} title={card.title} content={card.content} imageSrc={card.imageSrc} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Postherpetic;