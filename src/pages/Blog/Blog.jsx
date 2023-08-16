import React from 'react';
import Proptypes from 'prop-types'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Form } from '../../components/Form/Form'
import { Card } from '../../components/Card/Card'
import './blog.css'
export const Blog = ({ }) => (

    <>

        <Header />

        <section>
            <h3>This is first section </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita suscipit voluptate culpa. Nihil totam odio adipisci ab aliquid odit placeat alias illum impedit facilis laborum, tenetur vel labore reiciendis architecto!</p>
        </section>

       

        <section>
            <Card />
        </section>

        <Footer />

    </>

);


Blog.propTypes = {

};

Blog.dafaultProps = {

};