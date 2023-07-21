import React from 'react';
import Accordion from '../../assets/js/Accordion';
import ContactForm from '../element/contact-form';

const Vaccine = () => {
    const accordionData = [
        {
            title: '1. How is the shingles vaccine taken?',
            content: `The shingles vaccine istypically administered intramuscularly as an injectionin the upper arm.`
        },
        {
            title: '2. How many doses are required for the shingles vaccine?',
            content: `The number of doses required for the shingles vaccine is 2 doses, given 2 months apart. The interval between the 1st& the 2nd dose can be between 2 to 6 months.`
        },
        {
            title: '3. What is the importance of vaccination against shingles? ',
            content: `Vaccination against shingles is crucial for preventing the disease and reducing its severity in those who still contract it. 
            Importance of Vaccination:
            <strong>•	Prevention of Shingles:</strong> The primary benefit of vaccination is preventing shingles in the first place. By stimulating the immune system against the varicella-zoster virus, the vaccine significantly reduces the risk of developing shingles.
            <strong>•	Reduced Severity:</strong> In cases, where vaccinated individuals still develop shingles, the vaccine can help reduce the severity and duration of the illness. Vaccinated individuals are less likely to experience the intense pain associated with shingles and are less likely to suffer from complications.
            <strong>•	Postherpetic Neuralgia Prevention:</strong> One of the most concerning complications of shingles is postherpetic neuralgia (PHN), which is persistent nerve pain that can last for months or even years after the rash has healed. Vaccination has been found to be highly effective in reducing the risk of developing PHN in those who still contract shingles.
            <strong>•	Protection for Immunocompromised Individuals:</strong> Vaccination is essential for individuals with compromised immune systems who are more susceptible to getting shingles. By reducing the risk of infection, the vaccine helps protect vulnerable populations.`
        },
        {
            title: '4. Who should consider getting vaccinated against shingles?  ',
            content: `The Centers for Disease Control and Prevention (CDC) and other health authorities generally recommend the shingles vaccine for the following groups:
            •	90% of individuals who are above 50 years already have the varicella zoster virus in their body and are at risk of getting shingles.
            •	Adults over 50 years of age: Shingles becomes more common with increasing age, so vaccination is particularly important for adults aged 50 and older.1 in 3 people above the age of 50 are at risk of developing shingles. 
            •	Individuals with a history of chickenpox: If you have had chickenpox in the past, you are at risk of developing shingles, and vaccination can help reduce this risk.
            •	Individuals who have not had chickenpox but have received the chickenpox vaccine: People who have received the chickenpox vaccine are still at risk of developing shingles since they have been exposed to the varicella-zoster virus. Vaccination can help reduce the risk of shingles in these individuals.
            •	Individuals with a weakened immune system: If you have a compromised immune system due to certain medical conditions like diabetes, heart disease, cancers, COPD, auto-immune disorders like Rheumatoid Arthritis(RA)& Lupus,or chronic kidney disease, or due to medications, getting vaccinated can be even more crucial to prevent severe shingles.
            •	Individuals with diabetes: Diabetes weakens the immune system, making it more difficult for the body to fight off infections and viruses, including the varicella-zoster virus responsible for causing shingles. Additionally, high blood sugar levels associated with diabetes can further impair the immune response and delay the healing process. Therefore, individuals with diabetes should discuss vaccination options with their healthcare provider.
            It's important to consult with a healthcare professional to determine the most appropriate vaccination plan based on individual health status and risk factors. `
        },
        {
            title: '5. Are there any side effects of the shingles vaccine, and how common are they?',
            content: `The shingles vaccine, also known as the herpes zoster vaccine, is generally safe and well-tolerated. Like any other vaccine, it can have side effects although they are typically mild to moderate and transient in nature. 
            Most Common Side Effects
            <strong>•	Injection site reactions:</strong> This may include pain, redness, swelling, or tenderness at the site of injection. These reactions are usually mild and go away on their own within 2 to 3 days.
            <strong>•	Headache:</strong> Some individuals may experience a mild headache after receiving the vaccine. This symptom is usually temporary and resolves without intervention.
            <strong>•	Fatigue:</strong> Feeling tired or experiencing fatigue is a possible side effect, but it is usually short-lived.
            Less Commonly Experienced Side Effects
            <strong>•	Muscle pain:</strong> Some people may have temporary muscle pain, typically in the arm where the vaccine was administered.
            <strong>•	Fever:</strong> Low-grade fever may occur as a response to the vaccine. It is usually mild and transient.
            Severe side effects are rare. However, if they do occur, they can include allergic reactions (such as difficulty breathing, swelling of the face or throat, or hives) or a rare neurological condition called Guillain-Barré syndrome (GBS).
            It's important to note that the risk of these severe side effects is extremely low.`
        },
        {
            title: '6. Is the shingles vaccine readily available, and where can someone go to get vaccinated?',
            content: `The shingles vaccine is now available in India for adults aged 50 years and above. It must be prescribed by your doctor after a consultation. You can get the vaccine at Bridge Health’s Hub (JP Nagar, 2nd Phase, Bangalore) and at other Bridge Health Clinics across Bangalore. 
            Call us at +91 6366504571 to schedule an appointment at the location nearest to you.`
        },
        {
            title: '7. What is the efficacy of the shingles vaccine?',
            content: `According to the Centers for Disease Control and Prevention (CDC), two doses of the shingles vaccine are over 90 percent effective inpreventing shingles. 
            Studies suggest that the protection with shingles vaccine lasts for at least 10 years after being vaccinated.`
        },
        {
            title: '8. Who should not get the shingles vaccine?',
            content: `The shingles vaccine should not be administered to:
            •	A person with a history of severe allergic reaction, such as anaphylaxis, to any component of the shingles vaccine.
            •	A person currently experiencing an acute episode of herpes zoster. The shingles vaccine is not for treatment of herpes zoster or postherpetic neuralgia (PHN). The general guidance for any vaccine is to wait until the acute stage of the illness is over and symptoms abate.
            •	Women who are pregnant`
        },
        {
            title: '9. Can you take the vaccine after getting shingles once to prevent future occurrence? If you have had shingles in the past, are you still eligible for taking the vaccine?',
            content: `Yes, even if you have had an episode of shingles earlier/in the past, you are still at a risk of getting shingles again. To prevent any future occurrences, you should consult a doctor and consider taking the vaccine.`
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

export default Vaccine;