import { useState, useEffect } from 'react';
import validation from './ContactFormValidation';
import axios from 'axios';

const useForm = (submitForm) => {

    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validation(input));

        const newRequest = {
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            number: input.number,
            message: input.message
        }

        setDataIsCorrect(true);

        axios.post('http://localhost:5000/contact', newRequest);
        setInput({
            firstName: '',
            lastName: '',
            email: '',
            number: '',
            message: ''
        });
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    }, [errors]);

    return { handleChange, handleSubmit, errors, input }
}

export default useForm;