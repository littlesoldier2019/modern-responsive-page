import React from 'react';
import '../../assets/styles/ContactInfo.css';
import image from '../../assets/image/contact-form.jpg';
import Button from './Button';

const ContactInfo = () => {
  return (
    <div className="row">
        <div className="col-sm-12 col-md-6 d-flex justify-content-end align-items-center my-5 bg-light section">
            <div className='contact-form-container'>
              <h2 className='mb-4'>Contact Information</h2> 
              <form>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="name"/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea class="form-control" id="message" rows="6"></textarea>
                    </div>
                    <div className='mr-n5 mt-n1'>
                        <Button text='Submit' type='submit'/>
                    </div>
                </form> 
            </div>
        </div>
        <div 
            style={{backgroundImage: `url(${image}`, backgroundSize: 'cover'}}
            className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center  my-5 section"
            >
        </div>
    </div>
  );
}

export default ContactInfo;