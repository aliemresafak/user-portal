import * as Yup from "yup"

export const loginValidator = Yup.object().shape({
    email: Yup
        .string()
        .email("Please enter valid email")
        .required("Required field"),
    password: Yup
        .string()
        .min(8, "The password's minimum lenght is 8 character")
        .required("Password field is required")
        .matches(/^[a-zA-Z0-9]{8,}$/, "The password is not alphanumeric or minimum password lenght be 8 characters"),
})

export const registerValidator = Yup.object().shape({
    fullName: Yup
        .string()
        .required("Name surname field is required"),
    email: Yup
        .string()
        .email("Please enter valid email")
        .required("Email field is required"),
    password: Yup
        .string()
        .min(8, "The password's minimum lenght is 8 character")
        .required("Password field is required")
        .matches(/^[a-zA-Z0-9]{8,}$/, "The password is not alphanumeric or minimum password lenght be 8 characters"),
    password2: Yup
        .string()
        .oneOf([Yup.ref("password"), null], "Password must match"),
    lang: Yup
        .string()
        .required("Language field is required"),
    country: Yup
        .string()
        .required("Country field is required")
})