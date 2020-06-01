import React from 'react';
import Button from '../share/Button';

const QuotationForm = () => {
    return (
        <div className='container my-5 p-5 bg-light'>
            <h2 className='text-center mt-2 mt-md-5 mb-2'>Contact us</h2>
            <p className='text-center mb-4 mb-md-5'>Please complete the following form. We will get back to you shortly with quotation for your interested products.</p>
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
                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">Type of Business</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="importer" id="importer" />
                                <label className="form-check-label" htmlFor="importer">
                                    Importer
                        </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="manufacturer" id="manufacturer" />
                                <label className="form-check-label" htmlFor="manufacturer">
                                    Manufacturer
                        </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="wholesaler" id="wholesaler" />
                                <label className="form-check-label" htmlFor="wholesaler">
                                    Wholesaler
                        </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="distributor" id="distributor" />
                                <label className="form-check-label" htmlFor="distributor">
                                    Distributor
                        </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="other-business" id="other-business" />
                                <label className="form-check-label" htmlFor="other-business">
                                    Others
                        </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="form-group mt-4">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">Volume Traded</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="below1thousand" id="below1thousand" value="below1thousand" />
                                <label className="form-check-label" htmlFor="below1thousand">
                                    below 1 000 pcs per order
                        </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="1to3thousand" id="1to3thousand" value="1to3thousand" />
                                <label className="form-check-label" htmlFor="1to3thousand">
                                    1 000 to 3 000 pcs per order
                        </label>
                            </div>
                            <div className="form-check disabled">
                                <input className="form-check-input" type="radio" name="3to6thousand" id="3to6thousand" value="3to6thousand" />
                                <label className="form-check-label" htmlFor="3to6thousand">
                                    3 000 to 6 000 pcs per order
                        </label>
                            </div>
                            <div className="form-check disabled">
                                <input className="form-check-input" type="radio" name="above6thousand" id="above6thousand" value="above6thousand" />
                                <label className="form-check-label" htmlFor="above6thousand">
                                    Above 6 000 pcs per order
                        </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="form-group mt-4">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">Trade Terms</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="FOB" id="FOB" value="FOB" />
                                <label className="form-check-label" htmlFor="FOB">
                                    FOB
                        </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="CF" id="CF" value="CF" />
                                <label className="form-check-label" htmlFor="CF">
                                    C &amp; F
                        </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="CIF" id="CIF" value="CIF" />
                                <label className="form-check-label" htmlFor="CIF">
                                    CIF
                        </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="other-term" id="other-term" />
                                <label className="form-check-label" htmlFor="other-term">
                                    Others
                        </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="form-row">
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="destination">Port of Destination</label>
                        <input type="text" className="form-control" id="destination" name="destination" />
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="country">Country</label>
                        <input type="text" className="form-control" id="country" name="country" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="requirement">Details requirement</label>
                    <textarea className="form-control" id="requirement" rows="8"></textarea>
                </div>
                <Button text='submit'/>
            </form>
        </div>
    );
}

export default QuotationForm;

