import React from 'react';
import { Formik } from 'formik';
import styles from './forms.module.css';
import InputGroup from './InputGroup';
import GlobalButton from '../../Atoms/Button/Button';

const FormSmall = ({ title, initialValues, fields, handleSubmit }) => {
    //FormSmall takes in "initialValues"-an object with keys that match the fields and "fields"-an array of objects. 
    //Each field object contains a name, a label, and a function called 'validate' which takes in a value and an errors object.
    //If the value is a valid submission for the given field, the object is returned. If not, a key/value pair is added to the 
    //errors object with the key being the field name and the value being a description of the problem. 
    //The errors object is returned always.

    const validate = (values, fields) => {
        let errors = {};
        fields.map(field => {
            errors = field.validate(values[field.name], errors);
        })
        return errors;
    }
    const renderInputs = (fields, values, handleChange, handleBlur, errors, touched) => {
        return fields.map(field => {
            return <InputGroup
                type={field.type}
                label={field.label}
                value={values[field.name]}
                handleChange={handleChange}
                handleBlur={handleBlur}
                placeholder={field.label}
                name={field.name}
                errors={errors}
                touched={touched}
            />
        })
    }
    return (
        <Formik
            initialValues={initialValues}
            validate={(values) => validate(values, fields)}
            onSubmit={handleSubmit}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form
                    className={styles.formSmall}
                    onSubmit={handleSubmit}
                >
                    <h1 className = {styles.formTitle}>{title}</h1>
                    {renderInputs(fields, values, handleChange, handleBlur, errors, touched)}
                    <div className={styles.btnWrapper}>
                    <GlobalButton type='submit' disabled={isSubmitting} content="Login" />
                    </div>
                </form>
            )}

        </Formik>
    )
}

export default FormSmall;