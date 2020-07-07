import React from 'react';
import { useForm } from 'react-hook-form';
import CognitoForm from '@tylermenezes/cognitoforms-react';

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
                <CognitoForm
                    accountId="Kq3V6yB36UK8BsoBzXr5NA"
                    formId={1}
                />
            </div>
        </div>
    );
}

export default QuotationForm;

