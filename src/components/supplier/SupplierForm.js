import React from 'react';
import Button from '../share/Button';

const SupplierForm = () => {
    return (
        <div className='container my-3 p-3 my-md-5 pd-5 bg-light'>
            <h2 className='text-center my-3 mt-md-5'>Supplier Form</h2>
            <p className='text-center mb-3 mb-md-5'>Please complete the following form if you are interested to be our supplier partner.</p>
            <form>
                <div className="form-row">
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="company">Company</label>
                        <input type="text" className="form-control" id="company" name="company" />
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" name="address" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="tax-number">Tax Number</label>
                        <input type="text" className="form-control" id="tax-number" name="tax-number" />
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="business-license">Business License</label>
                        <input type="text" className="form-control" id="business-license" name="business-license" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="contact-person">Contact Person</label>
                        <input type="text" className="form-control" id="contact-person" name="contact-person" />
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="contact-position">Position</label>
                        <input type="text" className="form-control" id="contact-position" name="contact-position" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" id="email" name="email" />
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" className="form-control" id="phone" name="phone" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="business-type">Product range</label>
                        <input type="text" className="form-control" id="business-type" name="business-type" />
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="phone">Monthly capacity</label>
                        <input type="text" className="form-control" id="phone" name="phone" />
                    </div>
                </div>
                <fieldset className="form-group mt-4">
                    <div className="row">
                        <legend className="col-form-label col-sm-3 pt-0">Trade Terms</legend>
                        <div className="col-sm-9">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="FOB" id="FOB" value="FOB" />
                                <label className="form-check-label" htmlFor="FOB">FOB</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="CF" id="CF" value="CF" />
                                <label className="form-check-label" htmlFor="CF">C &amp; F</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="CIF" id="CIF" value="CIF" />
                                <label className="form-check-label" htmlFor="CIF">CIF</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="other-term" id="other-term" />
                                <label className="form-check-label" htmlFor="other-term">Others</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="form-group">
                    <label htmlFor="catalog">Upload your product catalog</label>
                    <input type="file" className="form-control-file" name="catalog" id="catalog" />
                </div>
                <div className="form-group">
                    <label htmlFor="factory-info">Other information about your manufactories</label>
                    <textarea className="form-control" id="factory-info" name="factory-info" rows="8"></textarea>
                </div>
                <Button text='submit' />
            </form>
        </div>
    );
}

export default SupplierForm;

