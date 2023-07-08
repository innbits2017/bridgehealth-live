import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Testimonial1 from '../element/testimonial1';
import Seo from '../layout/seo';

const aboutbg = require('./../../assets/images/background/image-11.jpg');
const wellcomebg1 = require('./../../assets/images/resource/image-1.jpg');

class Team extends Component {
    render() {
        const title = "Trusted Preventive Health Specialists | Bridge Health";
        const description = "Get to know the talented individuals who make up Bridge health's exceptional team. Experienced & dedicated in delivering high-quality services & driving our mission forward.";
        // const metadata = "steel building, steel buildings";
        return (
            <>
            <Seo title={title} description={description} />
                <Header />

                <div className='marginTopTeam'>
                </div>
                <Testimonial1 />

                {/* <!-- About Section Two --> */}
                <section class="about-section-two">
                    <div class="auto-container">
                        {/* <h3>Physicians</h3> */}
                        <div class="row ">

                            <div class="col-lg-4">
                                <div class="image-wrapper" >
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/team.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <h3>Dr. Dhanya Prabhu Ramdas</h3>
                                        <h4>Head – Clinical Services</h4>
                                        <div class="text font18">Dr. Dhanya Prabhu Ramadas is a highly motivated, team-oriented, and compassionate family physician. She believes in providing evidence-based holistic care to all her patients. Her fields of interest are geriatrics, neurology, women & child health and lifestyle medicine.<br></br>
                                            She has completed her DNB from Bangalore Baptist Hospital and thereafter, completed MRCGP [Int]. She is a member of The Academy of Family Physicians of India (AFPI) and is certified by the Karnataka Medical Council.<br></br>
                                            When not with her patients, she is busy travelling, spending time with family, listening to old English country music or reading. She keeps herself fit by practicing yoga, jogging and dancing.</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="row  marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper" >
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/team1.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <h3>Dr. Vedavathi. N</h3>
                                        <h4>Family Physician</h4>
                                        <div class="text font18">
                                            Dr. Vedavathi. N is an empathetic, competent and passionate doctor. She has over 10 years of experience in identifying and screening individuals of all age groups for risk factors to prevent diseases and their progression. She has a special interest in preventive medicine and anatomy.<br></br>
                                            She has completed her P.G Diploma in Family Medicine from Apollo Hospitals, Bangalore, through the Royal College of General Practitioners - United Kingdom. She is a certified NABH Assessor and ISO Assessor. Dr. Veda has also been a faculty member of the paramedical college at Dayanand Sagar University.<br></br>
                                            At a personal level, she loves learning rangoli designs and also enjoys dancing.
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                        <div class="row  marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper" >
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/team2.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <h3>Dr. Jyotsna Kurien Mathai</h3>
                                        <h4>Consultant Physician</h4>
                                        <div class="text font18">
                                            Dr. Jyotsna Mathai is a Consultant Physician with a special interest in Women's Health. She has completed her MBBS from Jawaharlal Nehru Medical College-Dharwad University and DGO from College of Physician and Surgeons- Mumbai. She was previously associated with Activ Doctors Clinic and NationWide Primary Health Clinic. She is known for her knowledge of Obstetrics and Gynaecology.<br></br>
                                            Dr Jyotsna believes in integrity, respect and responsibility, which have led her to have a successful practice and career.Her core beliefs have helped her reach out to all kinds of people, from every walk of life. She also loves reading about spirituality, esoteric philosophy, and human behaviour analysis.<br></br>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div class="row  marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper" >
                                    <div class="image-one">
                                        <img src={require('../../assets/images/team/Dr Jisha B.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <h3>Dr Jisha B</h3>
                                        <h4>Consultant Physician</h4>
                                        <div class="text font18">
                                            Dr Jisha B
                                            has an MBBS degree from Pondicherry University. With several years of experience in the healthcare industry, Dr. Benansia has worked in various prestigious hospitals, including MFine in Bangalore, PRS Hospital in Trivandrum. <br></br>
                                            Dr. Benansia has a keen interest in research and has conducted an observational study on the association between Vitamin D levels and serum lipid parameters among Indian adults working in the IT sector. Her findings have contributed to the growing body of research in this area. In her free time, she enjoys reading books, listening to songs, and practicing kathak dancing.
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div class="row  marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper" >
                                    <div class="image-one">
                                        <img src={require('../../assets/images/team/Krithika.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <h3>Dr. Krithika Prasad </h3>
                                        <h4>Head – Pathologist</h4>
                                        <div class="text font18">
                                            Dr. Krithika Prasad
                                            is the Head Pathologist at Bridge Health, where she brings over 7+ years of experience. With an MBBS degree from Yenepoya Medical College and Hospital, Mangalore, she went on to specialize in MD Pathology and has worked with some of the leading hospitals and diagnostic centres in the country.<br></br>
                                            Dr. Prasad has been associated with organizations such as The Madras Medical Mission in Chennai, SRL Diagnostics, Marigold Clinics and Diagnostics, in Bangalore. She has presented research papers at various conferences and forums in Karnataka and won awards for her poster presentations.<br></br>
                                            Dr. Krithika’s core belief is that there is no substitute for hard work. Apart from her work, she has a keen interest in skating, dancing, table tennis, and swimming, which she pursues in her free time.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="row  marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper" >
                                    <div class="image-one">
                                        <img src={require('../../assets/images/team/dummy.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <h3>Srinivasa Murthy K </h3>
                                        <h4>Senior Physiotherapist</h4>
                                        <div class="text font18">
                                            Srinivasa Murthy has completed his Bachelor of Physiotherapy from NTR University in Andhra Pradesh and thereafter, MPT in Rehabilitation from Pondicherry University. He is a member of the Indian Association of Physiotherapists (IAP).<br></br>
                                            The aim of his practice is to provide high-quality rehabilitation care to individuals with orthopaedic conditions, stroke rehabilitation, neuro rehabilitation, and spinal cord injuries, using the latest evidence-based clinical tools.<br></br>
                                            While not with his patients, he loves to watch movies, travel, cook and play cricket.             </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row  marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper" >
                                    <div class="image-one">
                                        <img src={require('../../assets/images/team/dummy.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <h3>Arpitha Mirchandani </h3>
                                        <h4>Psychologist</h4>
                                        <div class="text font18">
                                            Arpitha Mirchandani holds a Master’s degree in Psychology and has 17+ years of work experience. She has been associated with organizations and schools like Jindal Nature Cure Institute, K12 Techno Services, RIMS International School, Lenovo, etc. <br></br>
                                            Arpitha strongly believes that mental health plays a significant role in our overall well-being. Her counselling approach is grounded in a holistic and humanistic perspective, which involves providing guidance on diet, sleep, and stress management. Additionally, Arpitha has contributed articles to newspapers and created content for YouTube.<br></br>
                                            Alongside her professional pursuits, she derives pleasure from cooking, travelling, and reading.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row  marginTop50">
                            <div class="col-lg-4">
                                <div class="image-wrapper" >
                                    <div class="image-one">
                                        <img src={require('../../assets/images/team/dummy.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <h3>Sonal Preet Sachdev </h3>
                                        <h4>Psychologist</h4>
                                        <div class="text font18">
                                            Sonal Preet Sachdev  is a highly qualified and experienced Psychologist with a passion for helping people achieve optimal mental health. With a Master’s in Clinical Psychology and a Post Graduate Diploma in Special Education, she has specialized in anxiety-related issues, relationship issues and child/adolescent psychology.<br></br>
                                            Sonal has previously been associated with Credo Healthcare, World Brain Centre (as a consultant), and New Green Field School. As a committed professional, Sonal has presented several research papers at conferences and forums. Currently, she is pursuing research on Rehabilitation Psychology.<br></br>
                                            Sonal strongly believes in the importance of providing a safe and nurturing environment for her clients to achieve their mental health goals. When not working, she is either travelling, exploring different cuisines, cooking or watching movies.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row  marginTop50">
                            <div class="col-lg-4">
                                <div class="image-wrapper" >
                                    <div class="image-one">
                                        <img src={require('../../assets/images/team/anup.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <h3>Anoop M </h3>
                                        <h4>Optometrist</h4>
                                        <div class="text font18">
                                            Anoop M a certified clinical optometrist from the University of Kerela and has about 7 years of work experience. He has also completed a Diploma in Ophthalmic Assistance. He is passionate about helping others by solving vision problems and improving their quality of life with the right type of vision correction.<br></br>
                                            Anoop has mastered optometry technology tools and solutions to derive accurate diagnosis and determine ideal prescriptions for patients. His other areas of interest include community ophthalmic care, squint assessment, objective and subjective refraction, participating in eye check-up camps, etc. <br></br>
                                            During his time away from work, Anoop plays football, reads books and watches movies.
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row  marginTop50">
                            <div class="col-lg-4">
                                <div class="image-wrapper" >
                                    <div class="image-one">
                                        <img src={require('../../assets/images/team/nayak.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <h3>Shivakumara Nayaka </h3>
                                        <h4>Radiographer</h4>
                                        <div class="text font18">
                                            Shivakumara Nayaka is a highly skilled Radiographer with over 5 years of experience in the field. He holds a Diploma in Medical Imaging Technology and has expertise in X-ray, CT, PET CT, and other imaging technologies.<br></br>
                                            He has worked with some of the leading healthcare institutions in India, including Jana Priya Hospital, Wellspring Health Care PVT Ltd (Health spring), and Cure Fit. Throughout his career, he has demonstrated a customer-centric approach. He is specialized in troubleshooting and is highly cooperative, making him an invaluable member of any team.<br></br>
                                            In addition to his professional accomplishments, Shivakumara Nayaka is passionate about travelling, hiking, and listening to music.

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row  marginTop50">
                            <div class="col-lg-4">
                                <div class="image-wrapper" >
                                    <div class="image-one">
                                        <img src={require('../../assets/images/team/Maitreyee.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <h3>Maitreyee De Sarkar </h3>
                                        <h4>Senior Clinical Nutritionist </h4>
                                        <div class="text font18">
                                            Maitreyee De Sarkar
                                            with about 11 years of experience, Maitreyee’s goal is to simplify existing health issues by providing practical and enjoyable lifestyle management strategies without restricting favourite foods,
                                            suggesting extreme diets or fad diets. <br></br> She has done her Master’s in Nutrition & Dietetic Management and is a certified Diabetic Educator from Dr Mohan’s Diabetes Hospital, Chennai. Her areas of specialization include weight management, diabetes,
                                            women’s health, thyroid and eating disorders. She has previously worked with reputed institutions such as Apollo Hospitals, Narayana Health, to name a few. Maitreyee is an active member of the Indian Dietetic Association (IDA) and Indian Association for Parenteral and Enteral Nutrition (IAPEN). <br></br> In her leisure time, she enjoys glass painting, swimming, listening to music and cooking.
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="row  marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper" >
                                    <div class="image-one">
                                        <img src={require('../../assets/images/team/partima.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <h3>Prathima A </h3>
                                        <h4>Clinical Nutritionist </h4>
                                        <div class="text font18">
                                            Prathima A
                                            is a highly qualified and experienced professional in the field of food science and nutrition. She holds an MSc degree in Dietetics and Food Service Management (DFSM) and has completed specializations in DFSM and Diabetes Management. <br></br>
                                            Prathima has been associated with prestigious organizations such as Manipal Cure and Care, Dr Mohan’s Diabetes Centre, and St. John's Medical Hospital. Her other areas of interest include nutrition assessment, therapeutic diet planning, and clinical research. <br></br>
                                            During her career, she has presented research papers at conferences and forums, and her work has been published in leading scientific journals. Prathima believes in providing personalized care to each of her clients and ensuring that their nutritional needs are met effectively. <br></br>
                                            She has a keen interest in singing and dancing, experimenting with different cuisines and trying out exotic dishes.
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                        <div class="row  marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper" >
                                    <div class="image-one">
                                        <img src={require('../../assets/images/team/Madhura.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <h3>Madhura Paroolker Behki</h3>
                                        <h4>Senior Nutritionist </h4>
                                        <div class="text font18">
                                            Madhura Paroolker Behki
                                            is a MSc Dietetics & Applied Nutrition graduate from Manipal University, who has been working in the field of healthcare for over 5 years.
                                            She is also a Certified Diabetes Educator and is passionate about helping people understand the importance of healthy eating and how it impacts their overall health. <br></br>
                                            Madhura’s research work on the impact of precision nutrition on metabolic parameters in Type 2 Diabetes and Dyslipidaemia is published in the Indian Journal of Applied Research.
                                            She strongly believes that healthy dietary modifications help better over major eating restrictions. <br></br>
                                            Madhura enjoys reading, exploring newer restaurants and shopping.
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="row  marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper" >
                                    <div class="image-one">
                                        <img src={require('../../assets/images/team/dummy.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <h3>Vighneshwar Hebbar </h3>
                                        <h4>Yoga Therapist </h4>
                                        <div class="text font18">
                                            Vighneshwar Hebbar  is an advanced yoga expert and practitioner with 6 years of experience in instruction-led-delivery & therapy. He has worked with institutions such as NIMHANS, Pradipika Institute and S-Vyasa. Apart from the general yogic practices, Vighneshwar possesses rich experience in curing psychosomatic diseases and helping people cope with psychiatric disorders such as schizophrenia, anxiety, depression, and ADHD.<br></br>
                                            Vighneshwar is an expert at Hatha Yoga, Ashtanga Yoga and Bhakti Yoga. In his Yoga Therapy classes, he focuses on Yoga postures that help with bodily ailments and also conducts beginners’ and advanced-level meditation classes. <br></br>
                                            Personally, he feels a complete sense of rejuvenation when he finishes his everyday yoga practice and meditation. He enjoys walking and listening to music in his free time.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row  marginTop50">
                            <div class="col-lg-4">
                                <div class="image-wrapper" >
                                    <div class="image-one">
                                        <img src={require('../../assets/images/team/Shrilaxmi.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <h3>Shrilaxmi Hegde  </h3>
                                        <h4>Assistant Yoga Therapist </h4>
                                        <div class="text font18">
                                            Shrilaxmi Hegde
                                            is an accomplished yoga therapist and trainer. Besides doing her MSc in Yogic Science, specializing in Yoga Therapy from Mangalore University (where she was a gold medallist), she has extensive knowledge of Kriyas, Asanas, Bandhas, Mudras, Pranayama, Advanced Yoga Techniques for Pancha Koshas and Relaxation Techniques. <br></br>
                                            In addition to her academic achievements, Shrilaxmi is great with children and teens when it comes to teaching them yoga. She has also conducted research on the ‘Effect of Yoga Therapy on the well-being of Karnataka State Reserve Police and the Impact of Yoga Therapy on Back Pain’. <br></br>
                                            Her hardworking, dedicated, and supportive nature combined with excellent communication and problem-solving skills have helped countless individuals improve their overall well-being and commit to long-term health and fitness goals.
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row  marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper" >
                                    <div class="image-one">
                                        <img src={require('../../assets/images/team/roshan.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <h3>Roshan Madhusudhan Suvarna  </h3>
                                        <h4>Fitness Coach </h4>
                                        <div class="text font18">
                                            Roshan Madhusudhan Suvarna a certified exercise specialist with over 7 years of experience in the field of fitness and exercise science. With a passion for helping individuals achieve their health and fitness goals, he is adept at curating and implementing personalized exercise programs. <br></br>
                                            In addition to being internationally recognized by the American Council on Exercise, he has a Diploma in Sports and Exercise Science and is a specialist in Posture and Functional Corrective Exercise. He has worked with a wide spectrum of customers, including those who have conditions like diabetes, obesity, and cardiovascular disease. <br></br>
                                            Roshan is committed to staying up-to-date on the latest research and trends in exercise science and nutrition. In his free time, he prefers staying active through running, weightlifting, and yoga. He also enjoys spending time outdoors and hiking.
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <Footer />
            </>
        )
    }
}
export default Team;