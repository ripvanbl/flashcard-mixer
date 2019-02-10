import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { ValidationSchema } from './validationSchema'; 

class FlashcardForm extends PureComponent {
  
  renderFormContent = props => {
    const {
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting,
      isValid,
      errors,
      touched
    } = props;

    return(
      <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="question">Create a question</label>
            <input 
              name="question"
              type="text"
              className={errors.question && touched.question ? 'form-control is-invalid' : 'form-control'}
              onBlur={handleBlur}
              onChange={handleChange}
              />
              {errors.question && touched.question && <small className='text-danger'>{errors.question}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="answer">Provide the answer</label>
            <input 
              name="answer"
              type="text"
              className={errors.answer && touched.answer ? 'form-control is-invalid' : 'form-control'}
              onBlur={handleBlur}
              onChange={handleChange}
              />
              {errors.answer && touched.answer && <small className='text-danger'>{errors.answer}</small>}
          </div>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting || !isValid}>
            Submit
          </button>
        </form>
    );
  };

  render() {
    const { 
      onSubmit,
      initialData = {}
    } = this.props;

    return (
      <Formik
        initialValues={{...initialData}}
        onSubmit={onSubmit}
        render={this.renderFormContent}
        validationSchema={ValidationSchema} />
    );
  }
}

export { FlashcardForm };
