import React from 'react';
import Header from '../Header/Header';
import HeaderMidArticle from '../HeaderMidArticle/HeaderMidArticle';
import BusinessCardInfo from '../BusinessCardInfo/BusinessCardInfo.js'
import './Home.css'
import Services from '../../WorkDetail/Services/Services';
import ServiceTerms from '../../WorkDetail/Services/ServiceTerms/ServiceTerms';
import Appointment from '../../WorkDetail/Appointment/Appointment';
import Testimonial from '../../Testomonial/Testimonial';
import TestimonialCard from '../../Testomonial/TestimonialCard/TestimonialCard';
import Blog from '../../Blog/Blog/Blog';
import BlogCard from '../../Blog/BlogCard/BlogCard';
import Doctor from '../../Doctors/Doctor';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer/Footer';
const Home = () => {
    return (
        <div className="bg-split-backgorund">
            <Header></Header>
            
            <HeaderMidArticle></HeaderMidArticle>
          
            <BusinessCardInfo></BusinessCardInfo>
            
            <Services></Services>

            <ServiceTerms></ServiceTerms>

            <Appointment></Appointment>

            <Testimonial></Testimonial>

            <TestimonialCard></TestimonialCard>

            <Blog></Blog>

            <BlogCard></BlogCard>

            <Doctor></Doctor>

            <Contact></Contact>

            <Footer></Footer>
        </div>
    );
};

export default Home;