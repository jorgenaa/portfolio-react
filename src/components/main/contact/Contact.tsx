import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  
return (
    <section id="contact" className="contact">
        <h2 className="contact__heading">Contact Me</h2>
        <div className="contact__loader"></div>
        <div className="contact__response-message" id="responseMessage"></div>
        <ContactForm/>
    </section>
    )
}

export default Contact;
