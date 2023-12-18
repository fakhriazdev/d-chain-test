import * as Yup from 'yup';

const maxSize = 2000; // Adjust the maximum file size as needed

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    province: Yup.string().required('Province is required'),
    city: Yup.string().required('City is required'),
    address: Yup.string().required('Address is required'),
    email: Yup.string().required('Email is required'),
    phoneNumber: Yup.string().required('phoneNumber is required'),
    username: Yup.string().required('username is required'),
    documents: Yup.mixed()
        .test('fileType', 'Unsupported File Format', (value) => {
            if (!value) {
                return true;
            }
            return value.type === 'application/pdf';
        })
        .test('fileSize', 'File size is too large', (value) => {
            if (!value) {
                return true;
            }
            return value.size <= maxSize;
        }),
});

export default validationSchema;