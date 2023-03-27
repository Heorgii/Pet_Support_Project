import * as Yup from 'yup';
// import { object, string } from 'yup';

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\s*\S+\s*$/, 'Email must be without spaces')
    .matches(/\S{7,}/, 'Email too short (min 7 symbols)')
    .matches(
      /^(?=.{7,63}$)([^а-яА-Я]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,
      'Invalid email',
    )
    .matches(
      /^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,
      'Dashes should only be inside email',
    )
    .required('Require field'),
  password: Yup.string()
    .min(7, 'Password too short (min 7)')
    .max(32, 'Password too long (max 32)')
    .matches(/^\s*\S+\s*$/, 'Password must be without spaces')
    .required('Require field'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password must match')
    .required('Require field'),
  name: Yup.string()
    .matches(/\S{2,}/, 'Name too short (min 2)')
    .matches(
      /((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/,
      'Name must includes only Latin alphabet',
    )
    .required('Require field'),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, 'Invalid number. valid +38(0xx) xxx-xx-xx')
    .required('Require field'),
  location: Yup.string()
    .matches(
      /^(\s*[a-zA-Z-]{2,}(?!,)\s*|\s*[a-zA-Z-]{2,},\s+([a-zA-Z-]+\s*)+\s*)$/,
      'Invalid format. valid: city or city, region',
    )
    .required('Require field'),
});

const schemasLogin = Yup.object().shape({
  email: Yup.string()
    .matches(/^\s*\S+\s*$/, 'Email must be without spaces')
    .matches(/\S{7,}/, 'Email too short (min 7 symbols)')
    .matches(
      /^(?=.{7,63}$)([^а-яА-Я]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,
      'Invalid email',
    )
    .matches(
      /^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,
      'Dashes should only be inside email',
    )
    .required('Require'),
  password: Yup.string()
    .min(7, 'Password too short (min 7)')
    .max(32, 'Password too long (max 32)')
    .matches(/^\s*\S+\s*$/, 'Password must be without spaces')
    .required('Require'),
});

const noticeSchemaFirst = Yup.object().shape({
  category: Yup.string().required('Categori is Required!'),
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(48, 'Too Long!')
    .required('Title is Required!'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Name is Required!'),
  birthday: Yup.date().required('BirthDay is Required!'),
  breed: Yup.string()
    .min(2, 'Too Short!')
    .max(34, 'Too Long!')
    .required('Breed is Required!'),
});
const noticeSchemaSecond = Yup.object().shape({
  sex: Yup.string().required('Sex is Required!'),
  location: Yup.string()
    // .matches(
    //   /^(\s*[a-zA-Z-]{2,}(?!,)\s*|\s*[a-zA-Z-]{2,},\s+([a-zA-Z-]+\s*)+\s*)$/,
    //   'Invalid format. valid: city or city, region, Example: Brovary, Kyiv',
    // )
    .required('Location is Required!'),
  imageUrl: Yup.mixed()
// .nullable()
    // .test("FILE_SIZE", "Uploaded file is too big.", 
    //     value => !value || (value && value.size <= 1000000))
    // .test("File_format", "Uploaded file has unsupported format.", 
        // value => {!value || (value && ['jpeg', 'png', 'webp', 'gif', 'jpg'].includes(value.type)); console.log(value)})
.required('Image is Required!')
,
  comments: Yup.string()
    .min(8, 'Too Short!')
    .max(120, 'Too Long!')
    .required('Comments are Required!'),
});

const noticeSchemaSecondPrice = noticeSchemaSecond.concat(Yup.object().shape({
  price: Yup.number()
    .moreThan('0')
    .positive()
    .integer()
    .required('Price is Required!'),
}));

const schemas = {
  registerSchema,
  schemasLogin,
  noticeSchemaFirst,
  noticeSchemaSecond,
  noticeSchemaSecondPrice,
};

export default schemas;
