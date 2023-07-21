import React from 'react';
import Accordion from '../../assets/js/Accordion';
import ContactForm from '../element/contact-form';

const Prevention = () => {
    const accordionData = [
        {
            title: '1. What are the potential complications of shingles?',
            content: `Shingles can lead to various potential complications including:
              • <strong>Postherpetic Neuralgia (PHN)</strong>: PHN is a condition characterized by persistent, severe pain that lasts for weeks, months, or even years after the rash has healed. It occurs due to nerve damage caused by the viral infection.
              • <strong>Vision Problems</strong>: If the shingles rash affects the area around the eye (Herpes Zoster Ophthalmicus), it can lead to eye-related complications such as corneal damage, uveitis (inflammation of the middle layer of the eye), and even vision loss.
              • <strong>Neurological Complications</strong>: Shingles can involve the nerves of the face, ears, and head, leading to conditions Ramsay Hunt syndrome or RHS (facial paralysis) which can result in facial muscle weakness or paralysis and sometimes cause hearing loss and dizziness.
              • <strong>Bacterial Infections</strong>: The shingles rash can be open, allowing bacteria to enter the skin and cause secondary infections. Cellulitis, a bacterial skin infection, is a common complication of untreated shingles.
              • <strong>Disseminated Shingles</strong>: In people with weakened immune systems, the varicella-zoster virus can spread beyond the original site of the rash, leading to a widespread and severe infection known as disseminated shingles.`
        },
        {
            title: '2. How does shingles impact individuals? Is shingles a potentially dangerous or a fatal condition?',
            content: `Although shingles is not associated with mortality, it significantly impacts the quality of your life. Most patients having shingles cannot do their routine activities due to the severe pain they go through.
            On the other hand, shingles can pose a risk of blindness if it affects the eye. In rare instances, shingles may lead to complications such as hearing problems, pneumonia, encephalitis (inflammation of the brain), and in extreme cases, even death.`
        },
        {
            title: '3. What is the recommended treatment for shingles, and are antiviral medications effective in managing the disease?',
            content: `There is no standard care procedure or treatment plan for shingles. Prescription drugs can reduce pain and lower the risk of complications. Most common line of treatment includes:
            •	<strong>Antiviral Medications:</strong> Antiviral drugs are most effective when started within 72 hours (about 3 days) of the appearance of the rash. They work by blocking the replication of the varicella-zoster virus, which causes shingles. By doing so, they can help reduce the severity and duration of the outbreak, as well as the risk of complications.
            •	<strong>Supportive Care:</strong> In addition to antiviral medications, various measures can help manage the symptoms of shingles and promote healing. These may include:
            •	Over-the-counter pain relievers to help alleviate discomfort. In some cases, stronger prescription pain medications may be necessary.
            •	Topical creams to help soothe the rash and reduce itching.
            •	<strong>Rest:</strong> Adequate rest can aid the body in fighting the infection and promote healing.
            •	<strong>Cool Compresses:</strong> Applying cool, damp compresses to the affected area may provide relief. `
        },
        {
            title: '4. What are some general tips for managing shingles symptoms? ',
            content: `Some general tips for managing shingles symptoms include:
            •	Maintaining good hygiene by keeping the rash clean and dry to minimize the risk of infection
            •	Wearing loose-fitting clothing to prevent irritation and promote airflow around the affected area
            •	Applying a cool compress multiple times, a day to help reduce discomfort and inflammation
            •	Taking over-the-counter pain relievers or prescribed medications to manage pain and discomfort
            •	Eating a nutritious diet (foods high in zinc and vitamins A, B12, C, and E) to boost your immune system
            •	Getting plenty of rest to support the body's healing process and boost the immune system
            •	Avoiding scratching or picking at the rash to prevent further irritation
            •	Keeping the affected area protected from excessive sunlight or extreme temperatures`
        },
        {
            title: '5. When can you safely resume work after having shingles?',
            content: `You can go back to work once you feel sufficiently recovered. The shingles rashes are no longer contagious once the rash has dried up and has formed scabs, which usually takes around 7 to 10 days from the initial appearance of the rash.`
        },
        {
            title: '6. Can shingles be prevented?',
            content: `Yes, shingles can be prevented with vaccination. There is a new and highly effective vaccine available in India now which can help prevent shingles.`
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

export default Prevention;