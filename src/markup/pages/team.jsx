import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Testimonial1 from '../element/testimonial1';

const aboutbg = require('./../../assets/images/background/image-11.jpg');
const wellcomebg1 = require('./../../assets/images/resource/image-1.jpg');

class Team extends Component {

    componentDidMount() {
        document.title = 'Team | Bridge Health';
    }


    render() {
        return (
            <>
                <Header />

                <div className='margin150'>
                </div>
                <Testimonial1 />

                {/* <!-- About Section Two --> */}
                <section class="about-section-two">
                    <div class="auto-container">
                        <div class="row align-items-center">

                            <div class="col-lg-4">
                                <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/team.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">

                                        <div class="text font18"><strong>Dr. Dhanya Prabhu </strong>Ramadas is a highly motivated, team-<br></br>oriented, and compassionate family physician. She believes in <br></br>providing evidence-based holistic care to all her patients. Her <br></br>fields of interest are geriatrics, neurology, women & child health <br></br>and lifestyle medicine.<br></br>
                                            She has completed her DNB from Bangalore Baptist Hospital<br></br> and thereafter, completed MRCGP [Int]. She is a member of The <br></br>Academy of Family Physicians of India (AFPI) and is certified by <br></br>the Karnataka Medical Council.<br></br>
                                            When not with her patients, she is busy travelling, spending <br></br>time with family, listening to old English country music or <br></br>reading. She keeps herself fit by practicing yoga, jogging and <br></br>dancing.</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="row align-items-center marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/team1.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <div class="text font18">
                                            <strong>Dr. Vedavathi. N </strong>is an empathetic, competent and passionate <br></br>doctor. She has over 10 years of experience in identifying and <br></br>screening individuals of all age groups for risk factors to <br></br>prevent diseases and their progression. She has a special <br></br>interest in preventive medicine and anatomy.<br></br>
                                            She has completed her P.G Diploma in Family Medicine from<br></br> Apollo Hospitals, Bangalore, through the Royal College of<br></br> General Practitioners - United Kingdom. She is a certified NABH <br></br>Assessor and ISO Assessor. Dr. Veda has also been a faculty <br></br>member of the paramedical college at Dayanand Sagar<br></br> University.<br></br>
                                            At a personal level, she loves learning rangoli designs and also <br></br>enjoys dancing.
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                        <div class="row align-items-center marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/team2.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <div class="text font18">
                                            <strong>Dr. Jyotsna Mathai </strong>is a Consultant Physician with a special<br></br> interest in Women's Health. She has completed her MBBS from <br></br>Jawaharlal Nehru Medical College-Dharwad University and<br></br> DGO from College of Physician and Surgeons- Mumbai. She<br></br> was previously associated with Activ Doctors Clinic and <br></br>NationWide Primary Health Clinic. She is known for her knowledge of Obstetrics and Gynaecology.<br></br>
                                            Dr Jyotsna believes in integrity, respect and responsibility,<br></br> which have led her to have a successful practice and career. <br></br>Her core beliefs have helped her reach out to all kinds of <br></br>people, from every walk of life. She also loves reading about spirituality, esoteric philosophy, and human behaviour analysis.<br></br>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                        <div class="row align-items-center marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/t9.jpeg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <div class="text font18">
                                            <strong>Dr. Pradeep Kumar </strong>
                                            is a highly experienced consultant physician. He completed his MBBS degree from Mysore University. He has previously been associated with top organizations such as Healthspring Pvt Ltd, Dhani Health Care, and Jai Maruthi Hospital. <br></br>
                                            Apart from his clinical work, Dr. Kumar has also contributed significantly to the research community. He has worked as a co-investigator from St. Johns Hospital, Bangalore in Phase 4 global clinical trial of diabetes reduction assessment with Ramipril and Rosiglitazone medication. <br></br>
                                            He believes in the power of patient education and strives to empower his patients to take charge of their health. In his free time, he enjoys traveling and trekking.
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div class="row align-items-center marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/t3.jpeg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <div class="text font18">
                                            <strong>Dr Jisha B </strong>
                                            has an MBBS degree from Pondicherry University. With several years of experience in the healthcare industry, Dr. Benansia has worked in various prestigious hospitals, including MFine in Bangalore, PRS Hospital in Trivandrum. <br></br>
                                            Dr. Benansia has a keen interest in research and has conducted an observational study on the association between Vitamin D levels and serum lipid parameters among Indian adults working in the IT sector. Her findings have contributed to the growing body of research in this area. In her free time, she enjoys reading books, listening to songs, and practicing kathak dancing.
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div class="row align-items-center marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/t4.jpeg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <div class="text font18">
                                            <strong>Maitreyee De Sarkar </strong>
                                            with about 11 years of experience, Maitreyee’s goal is to simplify existing health issues by providing practical and enjoyable lifestyle management strategies without restricting favourite foods,
                                            suggesting extreme diets or fad diets. <br></br> She has done her Master’s in Nutrition & Dietetic Management and is a certified Diabetic Educator from Dr Mohan’s Diabetes Hospital, Chennai. Her areas of specialization include weight management, diabetes,
                                            women’s health, thyroid and eating disorders. She has previously worked with reputed institutions such as Apollo Hospitals, Narayana Health, to name a few. Maitreyee is an active member of the Indian Dietetic Association (IDA) and Indian Association for Parenteral and Enteral Nutrition (IAPEN). <br></br> In her leisure time, she enjoys glass painting, swimming, listening to music and cooking.
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div class="row align-items-center marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/team2.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <div class="text font18">
                                            <strong>Madhura Paroolker Behki </strong>
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

                        <div class="row align-items-center marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/t6.jpeg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <div class="text font18">
                                            <strong>Prathima A </strong>
                                            is a highly qualified and experienced professional in the field of food science and nutrition. She holds an MSc degree in Dietetics and Food Service Management (DFSM) and has completed specializations in DFSM and Diabetes Management. <br></br>
                                            Prathima has been associated with prestigious organizations such as Manipal Cure and Care, Dr Mohan’s Diabetes Centre, and St. John's Medical Hospital. Her other areas of interest include nutrition assessment, therapeutic diet planning, and clinical research. <br></br>
                                            During her career, she has presented research papers at conferences and forums, and her work has been published in leading scientific journals. Prathima believes in providing personalized care to each of her clients and ensuring that their nutritional needs are met effectively. <br></br>
                                            She has a keen interest in singing and dancing, experimenting with different cuisines and trying out exotic dishes.
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>


                        <div class="row align-items-center marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/t10.jpeg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <div class="text font18">
                                            <strong>Vighneshwar Hebbar </strong>
                                            is an advanced yoga expert and practitioner with 6 years of experience in instruction-led-delivery & therapy. He has worked with institutions such as NIMHANS, Pradipika Institute and S-Vyasa. Apart from the general yogic practices, Vighneshwar possesses rich experience in curing psychosomatic diseases and helping people cope with psychiatric disorders such as schizophrenia, anxiety, depression, and ADHD. <br></br>
                                            Vighneshwar is an expert at Hatha Yoga, Ashtanga Yoga and Bhakti Yoga. In his Yoga Therapy classes, he focuses on Yoga postures that help with bodily ailments and also conducts beginners’ and advanced-level meditation classes. <br></br>
                                            Personally, he feels a complete sense of rejuvenation when he finishes his everyday yoga practice and meditation. He enjoys walking and listening to music in his free time.
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div class="row align-items-center marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/t8.jpeg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <div class="text font18">
                                            <strong>Shrilaxmi Hegde </strong>
                                            is an accomplished yoga therapist and trainer. Besides doing her MSc in Yogic Science, specializing in Yoga Therapy from Mangalore University (where she was a gold medallist), she has extensive knowledge of Kriyas, Asanas, Bandhas, Mudras, Pranayama, Advanced Yoga Techniques for Pancha Koshas and Relaxation Techniques. <br></br>
                                            In addition to her academic achievements, Shrilaxmi is great with children and teens when it comes to teaching them yoga. She has also conducted research on the ‘Effect of Yoga Therapy on the well-being of Karnataka State Reserve Police and the Impact of Yoga Therapy on Back Pain’. <br></br>
                                            Her hardworking, dedicated, and supportive nature combined with excellent communication and problem-solving skills have helped countless individuals improve their overall well-being and commit to long-term health and fitness goals. 
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