import React from 'react';
import '../../assets/styles/ContactForm.css';
import Button from './Button';

const ContactForm = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-6 d-flex justify-content-end align-items-center my-3 my-md-5 bg-light section">
                    <div className='contact-form-container'>
                        <h2 className='mb-1 mb-md-4'>Contact Us</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="6"></textarea>
                            </div>
                            <div className='mr-0 mt-n1'>
                                <a href='https://drive.google.com/file/d/1axSkpav1FueUTXBZsy3qZhV36_49O80M/view?usp=sharing'>
                                    <Button text='Submit' type='submit' />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="contact-image col-md-12 col-lg-6 d-flex justify-content-center align-items-center my-3 my-md-5 section">
                </div>
            </div>
        </div>
    );
}

export default ContactForm;