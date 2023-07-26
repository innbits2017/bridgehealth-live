import React, { useState } from 'react';
import Accordion from '../../assets/js/Accordion';
import HealthTable from './healthTable';

const accordionData = [
    {
        title: '1. What is Proactive Healthcare? ',
        content: `Proactive care is everything you do to stay healthy and to avoid falling sick or developing a disease. It involves staying on top of your health with regular doctor consultations, diagnostic tests, eating well, exercising and managing stress.`
    },
    {
        title: '2. What is Longevity?',
        content: `Longevity has two components. The first is lifespan or how long you live, but the second and equally important part is healthspan or how well you live. The actions you take to improve your healthspan will almost always result in a longer lifespan. 
        At Bridge Health, we believe that proactive care will enable both lifespan and healthspan extension, simultaneously. The key is to focus on preventive healthcare that combines clinical and lifestyle interventions and care that is holistic in nature.  `
    },
    {
        title: '3. What are the Components of Proactive Health?',
        content: `The components of proactive health typically include regular exercise, a balanced diet, sufficient sleep, stress management, and preventive healthcare measures such as vaccinations and screenings. It also involves maintaining good mental and emotional well-being through activities like mindfulness and social connections.`
    },
    {
        title: '4. What are the Benefits of Proactive Health?',
        content: `    <strong>• Early detection and prevention:</strong>  Regular check-ups and screenings allow for early detection of potential health issues. This enables timely intervention and treatment.
        <strong>• Improved overall health outcomes: </strong>  By being proactive, you can actively manage your health and address any concerns before they turn into serious conditions. This leads to reduced hospitalizations and improved overall health outcomes.
        <strong>• Cost savings: </strong>  By preventing or detecting diseases at an early stage, the need for expensive treatments and hospitalizations can be minimized. 
        <strong>• Long-term health maintenance: </strong>  Proactive healthcare involves ongoing monitoring and management of health conditions, ensuring that individuals receive appropriate care and support over the long term. `
    },
    {
        title: '5. What is the difference between reactive and proactive health?',
        content: `Reactive healthcare involves seeking medical assistance only when a person is already ill or experiencing symptoms, with a focus on providing immediate relief and stabilizing the patient's condition. It often leads to higher costs due to emergency and urgent care. 
        In contrast, proactive healthcare aims to prevent health conditions from arising by focusing on disease prevention, early detection, and promoting wellness. Its objective is to identify risks earlier, reduce healthcare costs, and maintain overall well-being.`
    }
];

const accordionData2 = [
    {
        title: '1. What is an AHP/Annual Health Plan? ',
        content: `Bridge Health’s AHPs are preventive healthcare plans that focus on improving health outcomes and enhancing the quality of life.
        These 12-month plans are designed to optimize your health by including the following aspects:
           <strong> • Know current health status </strong> through physical examination, lab & radiology tests. 
           <strong> • Know future health risks </strong> through Comprehensive Health Risk Assessment for seven key areas.
           <strong> • Get guidance from family </strong> physicians through detailed discussions to understand all aspects of your reports.
           <strong> • Meet expert nutritionists & yoga/fitness trainers </strong> to make necessary lifestyle choices.
           <strong> • Get mental health support </strong> from our experienced psychologists.
           <strong> • Get access to our mobile app </strong> and manage all health records in a single place & easily download or share. 
           <strong> • Order lab tests & get medicines delivered at home </strong> at discounted prices.`
    },
    {
        title: '2. Which AHP do you recommend? How do I choose my AHP? ',
        content: <HealthTable />
    },
    {
        title: '3. How are our Annual Health Plans different from others?',
        content: `Four reasons you should choose Bridge Health AHPs:

        a.  <strong>  Holistic: </strong> We cover all key aspects of preventive health that give you insights about what factors you can control to improve your health.
        b. <strong>  Well-coordinated: </strong> We assign you a Relationship Manager who will coordinate your lab sample pick-ups, radiology tests, report delivery, doctor consultations & lifestyle consultations. We combine technology with human touch, because your health matters!
        c. <strong>  Measurable Outcomes: </strong> Our plans are focused on improving your ‘Health Score’ over the duration of the program – along with key clinical parameters specifically identified for improvement for you.
        d. <strong>  One-Stop Solution: </strong> With the BH App & your relationship manager, you have all the preventive care services you need – for yourself & your family – in one place.
    `
    },
    {
        title: '4. What are the benefits of enrolling for an AHP? ',
        content: `We know how busy your life can be! At the same time, there can be no excuses for neglecting your health! 
        After all, prevention is truly far better than cure! Chronic conditions like diabetes, high blood pressure and cardiac diseases do not develop overnight. They are the result of years of lack of awareness and neglect towards your health.
        With our Annual Health Plans, you choose a clinically meaningful bundle of preventive health services that are woven together & delivered simultaneously, keeping in mind your busy schedule & your bodily needs - covering comprehensive health checks, doctor consultations, lifestyle guidance on nutrition, fitness, yoga and emotional resilience.`
    },
    {
        title: '5. Can I take a health check instead of an AHP?',
        content: `We highly recommend you choose from one of our AHPs since all the clinically meaningful services are included in one single preventive care bundle. However, if you still choose to only take a health check, we can assist in choosing the most suitable health check for you. `
    }
]

const accordionData3 = [
    {
        title: '1. With regard to doctor consultations, will I have a private consultation with the doctor and for how long will it last?',
        content: `Yes, you will have private doctor consultations with our experienced in-house family physicians. Our consultations are designed to be detailed and give ample time and attention to each patient, lasting for about 30-40 minutes. You have the flexibility to consult our doctors either online or by visiting our Health Hub or clinics.`
    },
    {
        title: '2. Does Bridge Health offer both individual lab and radiology tests, or only as part of a lab test package?',
        content: `Bridge Health offers both individual lab and radiology tests. We have an extensive selection of lab tests that cover blood health, bone health, liver health, kidney health, heart health, hormonal health, and vitamin screening. In terms of radiology tests, we offer ECG, ECHO, ultrasound, TMT, and bone mineral density scans. Additionally, we also provide curated lab test packages that are designed by their experts, ensuring comprehensive insights into one's health.`
    },
    {
        title: '3. Can I get diet or nutrition-related advice at Bridge Health?',
        content: `Yes, at Bridge Health, you can receive diet and nutrition-related advice from our team of qualified & experienced nutritionists. Our nutritionists possess extensive knowledge of food and nutrition, and they will customize diet plans based on your preferences, choice, and ease of cooking, taking into account time considerations. They are also experienced in creating customized diet charts for individuals with health conditions like diabetes, hypertension, PCOS, obesity, among others. `

    },
    {
        title: '4. What are the available services that cater to physical activity or exercise?',
        content: `At our JP Nagar Health Hub in Bengaluru, we provide a gym facility where our fitness experts will design a personalized exercise regime for you. Additionally, we offer services like strength and conditioning, functional training, vitality exercises, posture corrective exercises and more. Your progress will be closely monitored on a weekly basis. We not only emphasize on workouts and exercises but also on your diet, sleep, and stress management. 
        You can opt for group classes, online fitness programs and corporate fitness programs to cater to different preferences and requirements.`
    },
    {
        title: '5. At Bridge Health, are yoga sessions conducted in person or virtually, and can individuals of all ages join these sessions?',
        content: `Bridge Health offers both in-person and virtual yoga sessions. Our experienced yoga therapists have extensive knowledge of various yoga styles such as Hatha yoga, Ashtanga Yoga, and Bhakti Yoga; including Kriyas, Asanas, Mudras, Pranayama, etc. 
        Our sessions cater mostly to adults and cover a wide range of needs, including general wellbeing, mental fitness, pregnancy, and specific disorders such as cardiovascular, respiratory, gastrointestinal, and musculoskeletal issues.`
    }
]

const accordionData4 = [
    {
        title: '1. What is the aim of Bridge Health?',
        content: `At Bridge Health, we aim to bridge the gap between individuals and their healthiest selves by promoting proactive healthcare practices. Our vision is centered around spreading happiness through good health. We strive to empower individuals to transition from reactive or curative care to a proactive or preventive healthcare approach. `
    },
    {
        title: '2. Can I consult specialist doctors at Bridge Health?',
        content: `Our experienced in-house family physicians can address various health concerns for all family members. We also have an in-house gynecologist, specializing in women's health issues. Furthermore, Bridge Health has established partnerships with several hospitals and clinics, enabling our care coordinators to arrange consultations with specialists based on your specific needs. `
    },
    {
        title: '3. Are you open on Sundays?',
        content: `Yes, we are open on Sundays. If you wish to avail any of our services on a Sunday, it is recommended you pre-book or schedule an appointment in advance.`
    },
    {
        title: '4. Do you have facilities for doing ECG, ECHO or TMT?',
        content: `   Yes, Bridge Health provides facilities for conducting ECG, ECHO, and TMT (treadmill test) examinations. Individuals can visit the Health Hub located in JP Nagar 2nd Phase in Bangalore for a seamless experience. Individuals can contact our care coordinators to schedule an appointment for any of the above radiology tests. Additionally, Bridge Health offers ultrasound and bone mineral density scans also.`
    },
    {
        title: '5. How many clinics and pharmacies does Bridge Health have?',
        content: `Currently, we have 5 Bridge Health clinics and 3 pharmacies in Bengaluru. We have an expansion plan and are looking to open more clinics and pharmacies soon.`
    },
    {
        title: '6. Does Bridge Health have PAN India services?',
        content: `We have tie-ups with 300+ reputed hospitals and clinics; and 500+ pick-up locations for lab/pathology tests across India. You can consult specialists in the best hospitals and clinics in India through our affiliate partnerships.`
    },
    {
        title: '7. Can I get a dental/derma or eye screening done at Bridge Health?',
        content: `Yes, you can get all of them – dental, derma and eye screening/consultations at Bridge Health Hub located in JP Nagar at Bangalore.`
    }
]


const FaqQuestions = ({ selectedCategory }) => {
    let selectedData = [];

    switch (selectedCategory) {
        
        case 'About Proactive Health':
            selectedData = accordionData;
            break;
        case 'Annual Health Plans':
            selectedData = accordionData2;
            break;
        case 'All Health Services':
            selectedData = accordionData3;
            break;
        case 'More Common Questions':
            selectedData = accordionData4;
            break;
        default:
            selectedData = accordionData;
    }


    return (
        <div className="container-fluid">
            <div className="auto-container">
                <div className="accordion">
                    {selectedData.map(({ title, content }) => (
                        <Accordion
                            key={title}
                            title={title}
                            content={
                                typeof content === 'string' ? (
                                    // Check if content has list items (ul or ol)
                                    content.includes('<ul') || content.includes('<ol') ? (
                                        <div dangerouslySetInnerHTML={{ __html: content }} />
                                    ) : (
                                        // If no list items, use ul tag to wrap content
                                        <ul>
                                            {content.split('\n').map((item, index) => (
                                                <li key={index}>
                                                    <span dangerouslySetInnerHTML={{ __html: item }} />
                                                </li>
                                            ))}
                                        </ul>
                                    )
                                ) : (
                                    content
                                )
                            }
                        />
                    ))}
                </div>

                <div className='faq-btn-bot'>
                    <button className="see-more-btn">
                        SEE MORE
                    </button>
                </div>

            </div>
        </div>
    );
};

export default FaqQuestions;