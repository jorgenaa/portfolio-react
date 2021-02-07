import {useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        subject: yup.string().required("Subject is required"),
        email: yup.string()
        .email("Please enter a valid email")
        .required("Email is required"),
        comment: yup.string() 
        .required("Message must be minimum of 10 characters")
        .min(10, "Message must be minimum of 10 characters")	
    });

const ContactForm:React.FC = () => {
    const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

    const onSubmit = (data: any) => {
    console.log("data", data);
}

    return (
        <form id="contactForm" className="contact__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="contact__form-element">
                <label className="contact__label">Name</label>
                <input
                    type="text"
                    id="name"
                    className="contact__input contact__input--error"
                    name="name"
                    placeholder={errors.name && errors.name.message}
                    ref={register}
                />
            </div>
            <div className="contact__form-element">
                <label className="contact__label">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    className="contact__input contact__input--error"
                    placeholder={errors.email && errors.email.message}
                    ref={register}
                />
            </div>
            <div className="contact__form-element">
            <label className="contact__label">Subject</label>
                <input
                    type="text"
                    id="subject"
                    className="contact__input contact__input--error"
                    name="subject"
                    placeholder={errors.subject && errors.subject.message}
                    ref={register}
                />
            </div>
            <div className="contact__form-element">
                <label className="contact__label">Message</label>
                <textarea
                    name="message"
                    id="message"
                    className="contact__message contact__input--error"
                    placeholder={errors.comment && errors.comment.message}
                    ref={register}
                ></textarea>
            </div>

            <button
                id="sendButton"
                type="submit"
                className="contact__btn contact__btn--blue contact__btn--hover contact__btn--disabled"
            >
                Send a message
            </button>
        </form>
    )
}

export default ContactForm
