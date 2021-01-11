import React from 'react';
import { Carousel } from 'primereact/carousel';
import { useState } from 'react';
import onboarding1 from "../../ImgAppLucky/onboarding1.png";
import onboarding2 from "../../ImgAppLucky/onboarding2.png";
import onboarding3 from "../../ImgAppLucky/onboarding3.png";
import './OnboardingSections.scss';
import { Link } from 'react-router-dom';

export default function OnboardingSections() {
    const [pages] = useState([
        {
            title: 'Encuentra todo tipo de servicios que tienes cerca de ti',
            description: '',
            img: onboarding1
        },
        {
            title: 'Adopta desde tu móvil ',
            description: 'Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos para encontrar el que mejor se adapte a ti',
            img: onboarding2
        },
        {
            title: 'HAGA CLICK EN NUESTRO GATO PARA EMPEZAR .Si eres asociación sube a tus peludos para darles más difusión , gracias por darles una oportunidad.',
            description: '',
            img: onboarding3
        }
    ]);

    const itemTemplate = (page) => <div className="b-primereact-carousel__general ">
        <Link to ="/AccessLogin" >


            <img src={page.img} className="b-primeract-carousel__photo" alt="" />
        </Link>

        <span className="b-primereact-carousel__title">
            {page.title}
        </span>

        <span className="b-primereact-carousel__description">
            {page.description}
        </span>

    </div>


    return (
        //<>

        <Carousel className="b-primereact-carousel" value={pages} itemTemplate={itemTemplate} orientation="horizontal"></Carousel>

        //</>
    );
}