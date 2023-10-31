import "../Styles/ContactUs.css";

const ContactUs = () => {
    return <>
        <div className="contact-us">
            <h2 className="title">Contact Us</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate
                aperiam neque.</p>

            <form className="info">
                <input type="text" placeholder="Your name"/>
                <input type="text" placeholder="Your email"/>
                <input type="text" placeholder="Phone number"/>
                <input type="text" placeholder="Your name"/>
                <button className="info-btn">submit now</button>
            </form>
        </div>
    </>
}

export default ContactUs