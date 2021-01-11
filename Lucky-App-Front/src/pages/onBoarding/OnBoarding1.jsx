import React from 'react'
import onboarding from "../../ImgAppLucky/onboarding.png";
import LuckyTitle from "../../ImgAppLucky/LuckyTitle.png";
import './OnBoarding.scss'
import { Link } from 'react-router-dom';


export default function OnBoarding1() {
    return (
        <Link to ="/untited_sections" >

            <div className="b-pet container-img">
                <img className="b-image d-block mx-auto"
                    src={onboarding}
                    alt="On boarding"
                />

                <img className="b-lucky-title d-block mx-auto"
                    src={LuckyTitle}
                    alt="Lucky Title"
                />

            </div>

        </Link>
    )
}
