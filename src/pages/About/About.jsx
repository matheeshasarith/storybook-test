import React from 'react';
import Proptypes from 'prop-types'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import './about.css'
export const About = ({ }) => (

    <contaner>
        
    <Header/>

        <section>
            <h3>This is first section </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita suscipit voluptate culpa. Nihil totam odio adipisci ab aliquid odit placeat alias illum impedit facilis laborum, tenetur vel labore reiciendis architecto!</p>
    </section>

        <section>
            <h1>
                This is second section
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rem suscipit ea, facilis tempore facere sed in atque ad odit qui unde aut. Sunt, repellat perferendis cum officia et unde.</p>
           
    </section>

    <Footer />
        
   </contaner>
    
);


About.propTypes = {
            
};

About.dafaultProps = {
            
};