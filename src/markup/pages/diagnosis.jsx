import React from 'react';
import Accordion from '../../assets/js/Accordion';
import ContactForm from '../element/contact-form';

const Diagnosis = () => {

    const accordionData = [
        {
            title: '1. What is shingles?',
            content: `Shingles, also known as Herpes Zoster or Nagin, is a painful skin rash caused by the varicella-zoster virus (VZV). This virus is the same one responsible for causing chickenpox. After  a  person  recovers  from chickenpox, the virus remainssilent in our nerve tissues. However, with advancing age and age-related decline in immunity, 
            the virus can reactivate later in life (usually after 50 years of age), leading to shingles.`
        },
        {
            title: '2. How is shingles different from chickenpox?',
            content: `Here's how shingles is different from chickenpox: •Chickenpox is the initial infection caused by the varicella-zoster virus (VZV). It usually occurs in childhood and results in an itchy rash and flu-like symptoms.
            •Shingles, on the other hand, occurs when the dormant VZV reactivates at alater stage in life (when immunity starts to decline, usually after the age of 50 years ). The virus travels along the nerve pathways,
             causing a painful rash usually on one side of the body or face.`
        },
        {
            title: '3. What are the common symptoms of shingles?',
            content: `The most common symptoms of shingles include: •	Shingles presents as a painful, blistering rash that typically appears in a band or strip on one side of the body. It is often accompanied by tingling (mostly before the rash occurs), burning, shootingor stabbing pain. The burning pain can occur upto 5 days before the rash appears.
            •	The rash usually lasts for a few weeks and gradually crusts over before healing.
            •	Shingles can also lead to complications such as post-herpetic neuralgia (in up to 30% of the patients) where pain persists from anywhere between 90 days to years after the rash has healed. 
            Studies show that in 1 in 5 people, PHN lasts for more than 1 year. `
        },
        {
            title: '4. How does shingles pain feel and what is its intensity like?',
            content: `Shingles pain feels like burns from boiling water or electric shocks or nails piercing through the body. On the McGill Pain Scale, shingles pain has been found to be even more severe as compared tolabour pain. 
            This excruciating pain can last for weeks to months.`
        },
        {
            title: '5. Who is at a higher risk of developing shingles? Are there any specific age groups affected more frequently?',
            content: `Risk Factors for Developing Shingles: •	The risk of developing shingles increases with age.
            •	Older adults, typically those who are 50& above: As a person gets older, their immune system may weaken, making it 
            less effective in preventing the reactivation of the varicella-zoster virus. 
            •	People who have had chickenpox in the past:Shingles is caused by the varicella-zoster virus (VZV). This virus is the same one responsible for causing chickenpox. After a person recovers from chickenpox, the virus remains dormant in the nerve tissues. However, in most cases,
            the virus can reactivate later in life, leading to shingles.
            •	Those with weakened immune systems: Certain conditions like diabetes, HIV/AIDS, auto-immune disorders, cancer, etc. can lowerimmunity  in those individuals or 
            those taking immunosuppressive medications, are also at increased risk of developing shingles.`
        },
        {
            title: '6. How is shingles diagnosed by healthcare professionals?',
            content: `Shingles is typically diagnosed by healthcare professionals through a combination of the following: 
            •	Medical history:Asking the patient about their symptoms and any recent or past illnesses. They will inquire about the type of symptoms experienced, their duration, and whether the patient has had chickenpox in the past.
            •	Physical examination:Conducting a thorough physical examination, focusing on the affected area. The rash is characterized by red, fluid-filled blisters that may be surrounded by inflamed/reddened skin.
            •	Evaluation of current symptoms: Shingles is usually associated with pain or tingling in the affected area even before the rash appears. These symptoms will be evaluated to help confirm the diagnosis.
            •	Laboratory tests (if needed):Laboratory tests may beordered to seeif the symptoms are atypical or if the patient has a weakened immune system. These tests may involve taking a sample from the rash to look for the presence of the varicella-zoster virus (VZV), which causes both chickenpox and shingles.`
        },
        {
            title: '7. Why does shingles appear only on one side or in a specific area of the body?',
            content: `Shingles typically manifests on a single side or in a specific region of the body due to the virus's tendency to travel along specific nerves. Consequently, it often appears as a band-shaped rash corresponding along the path of the affected nerve. The rash remainsrelatively localized and does not spread across the entire body. 
            Common areas for shingles outbreaks include the torso and the face.`
        }
    ];

    return (
        <div className="container-fluid">
            <div className="auto-container">
                <div className="accordion">
                    {accordionData.map(({ title, item, content }) => (
                        <Accordion title={title} content={content
                            .split('•')
                            .map((point, index) =>
                                point.trim() ? (
                                    <li key={index}>
                                        <strong>{point.trim()}</strong>
                                    </li>
                                ) : null
                            )} />
                    ))}
                </div>
                <div class="btn-box btn5">
                    <ContactForm buttonText="CONSULT / BOOK" popupPosition="right" className='btn-style-one btn-diag' />
                </div>
            </div>
        </div>
    );
};

export default Diagnosis;