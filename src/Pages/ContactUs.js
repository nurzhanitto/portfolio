import React, { useState } from "react";
import "../Styles/ContactUs.css";

const ContactUs = () => {
    const phone = "77774534578"; 
    const message = encodeURIComponent("Здравствуйте! Пишу вам по поводу вакансии"); 
    const url = `https://wa.me/${phone}?text=${message}`;

    const handleClick = () => {
        window.open(url, "_blank", "noopener,noreferrer");
    };
    
    return <>
        <div className="contact-us">
            <h2 className="title">Contact me</h2>
            <form className="info">
                <button type="button" className="info-btn" onClick={handleClick}>
                    Direct Me
                </button>
            </form>
        </div>
    </>
}

export default ContactUs