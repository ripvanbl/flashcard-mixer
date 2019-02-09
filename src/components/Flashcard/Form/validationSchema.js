import * as Yup from 'yup';

export const ValidationSchema = Yup.object().shape({
  question: Yup.string().required('Please enter a question'),
  answer: Yup.string().required('Please provide the answer to the question')
});
