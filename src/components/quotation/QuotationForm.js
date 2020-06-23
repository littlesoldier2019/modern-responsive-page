import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../share/Button';

const QuotationForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className='bg-light py-lg-5 '>
            <div className='container p-3 pd-5 bg-light'>
                <h2 className='text-center my-3 mt-md-5'>Inquiry</h2>
                <p className='text-center mb-3 mb-md-5'>Please complete the following form. We will get back to you shortly with quotation for your interested products.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="company">Company</label>
                            <input
                                type="text"
                                className="form-control"
                                id="company"
                                name="company"
                                ref={register({
                                    required: "Company is required",
                                    maxLength: { value: 100, message: "Max 100 characters" },
                                    minLength: { value: 3, message: "Min 3 characters" }
                                })} />
                            {errors.company && <p className='error-message'>{errors.company.message}</p>}
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                ref={register({
                                    required: "Address is required",
                                    maxLength: { value: 200, message: "Max 200 characters" },
                                    minLength: { value: 10, message: "Min 10 characters" }
                                })} />
                            {errors.address && <p className='error-message'>{errors.address.message}</p>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="contactPerson">Contact Person</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contactPerson"
                                name="contactPerson"
                                ref={register({
                                    required: "Contact person is required",
                                    maxLength: { value: 100, message: "Max 100 characters" },
                                    minLength: { value: 3, message: "Min 3 characters" }
                                })} />
                            {errors.contactPerson && <p className='error-message'>{errors.contactPerson.message}</p>}
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="contactPosition">Position</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contactPosition"
                                name="contactPosition"
                                ref={register({
                                    required: "Position is required",
                                    maxLength: { value: 100, message: "Max 100 characters" },
                                    minLength: { value: 3, message: "Min 3 characters" }
                                })} />
                            {errors.contactPosition && <p className='error-message'>{errors.contactPosition.message}</p>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                ref={register({
                                    required: "Email is required",
                                    pattern: {
                                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Please enter a valid email"
                                    }
                                })}
                            />
                            {errors.email && <p className='error-message'>{errors.email.message}</p>}
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                name="phone"
                                ref={register({
                                    required: "Phone number is required",
                                    maxLength: { value: 12, message: "Max 12 characters" },
                                    minLength: { value: 6, message: "Min 8 characters" }
                                })} />
                            {errors.phone && <p className='error-message'>{errors.phone.message}</p>}
                        </div>
                    </div>
                    <fieldset className="form-group">
                        <div className="row">
                            <legend className="col-form-label col-sm-3 pt-0">Type of Business</legend>
                            <div className="col-sm-9">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="businessType"
                                        id="importer"
                                        value="importer"
                                        ref={register({ required: true })}
                                    />
                                    <label className="form-check-label" htmlFor="importer">Importer</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="businessType"
                                        id="manufacturer"
                                        value="manufacturer"
                                        ref={register({ required: true })}
                                    />
                                    <label className="form-check-label" htmlFor="manufacturer">Manufacturer</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="businessType"
                                        id="wholesaler"
                                        value="wholesaler"
                                        ref={register({ required: true })}
                                    />
                                    <label className="form-check-label" htmlFor="wholesaler">Wholesaler</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="businessType"
                                        id="distributor"
                                        value="distributor"
                                        ref={register({ required: true })}
                                    />
                                    <label className="form-check-label" htmlFor="distributor">Distributor</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="businessType"
                                        id="others"
                                        value="others"
                                        ref={register({ required: true })}
                                    />
                                    <label className="form-check-label" htmlFor="others">Others</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="form-group mt-4">
                        <div className="row">
                            <legend className="col-form-label col-sm-3 pt-0">Volume Traded</legend>
                            <div className="col-sm-9">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="volume"
                                        id="below1thousand"
                                        value="below1thousand"
                                    />
                                    <label className="form-check-label" htmlFor="below1thousand">below 1 000 pcs per order</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="volume"
                                        id="1to3thousand"
                                        value="1to3thousand"
                                    />
                                    <label className="form-check-label" htmlFor="1to3thousand">1 000 to 3 000 pcs per order</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="volume"
                                        id="3to6thousand"
                                        value="3to6thousand"
                                    />
                                    <label className="form-check-label" htmlFor="3to6thousand">3 000 to 6 000 pcs per order</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="volume"
                                        id="above6thousand"
                                        value="above6thousand"
                                    />
                                    <label className="form-check-label" htmlFor="above6thousand">Above 6 000 pcs per order</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="form-group mt-4">
                        <div className="row">
                            <legend className="col-form-label col-sm-3 pt-0">Trade Terms</legend>
                            <div className="col-sm-9">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="tradeTerm"
                                        id="FOB"
                                        value="FOB"
                                        ref={register({ required: true })}
                                    />
                                    <label className="form-check-label" htmlFor="FOB">FOB</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="tradeTerm"
                                        id="CF"
                                        value="CF"
                                        ref={register({ required: true })}
                                    />
                                    <label className="form-check-label" htmlFor="CF">C &amp; F</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="tradeTerm"
                                        id="CIF"
                                        value="CIF"
                                        ref={register({ required: true })}
                                    />
                                    <label className="form-check-label" htmlFor="CIF">CIF</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="tradeTerm"
                                        id="otherTerm"
                                        value="otherTerm"
                                        ref={register({ required: true })}
                                    />
                                    <label className="form-check-label" htmlFor="otherTerm">Others</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="destination">Port of Destination</label>
                            <input
                                type="text"
                                className="form-control"
                                id="destination"
                                name="destination"
                                ref={register({ required: "This is required" })}
                            />
                            {errors.destination && <p className='error-message'>{errors.destination.message}</p>}
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="country">Country</label>
                            <input
                                type="text"
                                className="form-control"
                                id="country"
                                name="country"
                                ref={register({ required: "This is required" })}
                            />
                            {errors.country && <p className='error-message'>{errors.country.message}</p>}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="requirement">Details requirement</label>
                        <textarea 
                        className="form-control" 
                        id="requirement" 
                        name="requirement"
                        rows="8"
                        ref={register({ required: "This is required" })}
                        >
                    </textarea>
                    {errors.requirement && <p className='error-message'>{errors.requirement.message}</p>}
                    </div>
                    <Button text='submit' type='submit' />
                </form>
            </div>
        </div>
    );
}

export default QuotationForm;

