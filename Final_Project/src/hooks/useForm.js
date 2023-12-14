import React from 'react';
import { useState } from 'react';

const useForm = (initalState) => {
    const [formData, setFormData] = useState(initalState);

    const changeHandler = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    }

    const resetForm = () => {
        setFormData(initalState);
    }

    return { formData, changeHandler, resetForm };
}

export default useForm;