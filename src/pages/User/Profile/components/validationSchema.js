import * as Yup from 'yup';

const maxSize = 1024 * 1024;

const validationSchema = (id) => Yup.object({
    oldPassword:  Yup.string().min(6, "Password must grather than 6"),
    newPassword: Yup.string().min(6, "Password must grather than 6"),
    confirmNewPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
});

export default validationSchema;