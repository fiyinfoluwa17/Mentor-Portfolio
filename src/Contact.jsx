import React, {useState , useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./components/Project.css"
import './components/Home.css'
import img1 from "./images/Vector 1.png"
import img8 from "./images/Ellipse 2.png"
import img9 from "./images/Group 11.png"
import img10 from "./images/Vector (2).png"
import img11 from "./images/Vector (3).png"
import "./components/Contact.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Contact = () => {
    const { pathname } = useLocation();
    const [state, handleSubmit] = useForm("mrgnpqoo");
    const [formFields, setFormFields] = useState({
        from: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value,
        });
    };

    const clearFormFields = () => {
        setFormFields({
            from: '',
            subject: '',
            message: ''
        });
    };

    const handleSuccess = () => {
        clearFormFields();
        toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 3000, // 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    useEffect(() => {
        if (state.succeeded) {
            handleSuccess();
        }
    }, [state.succeeded]);

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
        <div className="bodyman">
        <div className="werey container">

            <div className="navman1">
                <a className="name" href="/">Mentor Jnr.</a>
            </div>
            <div className="under1">
                <div className="section1">
                    <h1 className="fuller">Full Stack Developer</h1>
                    <h1 className="fullname">Dev. Mentor Jnr.</h1>
                    <p className='sectionpara'>Welcome to my portfolio! As a front-end web developer, I specialize in creating dynamic, user-friendly websites and applications. From front-end design to back-end functionality, I'm passionate about delivering high-quality solutions that exceed client expectations. Let's collaborate and bring your vision to life!</p>
                    <div className="number">
                        <NavLink to="/project" className={`nom ${pathname === '/project' ? 'active' : 'non-active'}`}>
                            <p>01</p>
                            <img src={img1} alt="" />
                            <p id="myLink" className='proman'>Projects</p>
                        </NavLink>
                        <NavLink to="/download" className={`nom ${pathname === '/download' ? 'active' : 'non-active'}`}>
                            <p>02</p>
                            <img src={img1} alt="" />
                            <p>Download Resume</p>
                        </NavLink>
                        <NavLink to="/contact" className={`nom ${pathname === '/contact' ? 'active' : 'non-active'}`}>
                            <p>03</p>
                            <img src={img1} alt="" />
                            <p className='prowoman'>Contact</p>
                        </NavLink>
                    </div>
                    <div className="avatar1">
                        <img src={img8} alt="" />
                        <div className="email">
                            <a href="mailto:adegokeoyesanya305@gmail.com?subject=Subject%20Here&body=Write%20your%20message%20here" target='blank' className="button">
                                <img src={img9} alt="" />
                                <p>Email Me</p>
                                <img src={img10} alt="" />
                            </a>
                        </div>
                        <div className="github">
                            <a href="https://github.com/fiyinfoluwa17" target='blank' className="button">
                                <img src={img11} alt="" />
                                <p>Github</p>
                                <img src={img10} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <section>
                    <h1 className='message'>Send A Message</h1>
                    <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="From:"
                    id="from"
                    name="from"
                    value={formFields.from}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Subject:"
                    id="subject"
                    name="subject"
                    value={formFields.subject}
                    onChange={handleChange}
                />
                <textarea
                    placeholder="Write Message..."
                    id="message"
                    name="message"
                    value={formFields.message}
                    onChange={handleChange}
                />
                <button type="submit" disabled={!formFields.from || !formFields.subject || !formFields.message || state.submitting}>
                {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
                <ValidationError
                    prefix="From"
                    field="from"
                    errors={state.errors}
                />
                <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </form>
                </section>
            </div>
            <ToastContainer />
            </div>
            </div>
        </>
    );
}

export default Contact;
