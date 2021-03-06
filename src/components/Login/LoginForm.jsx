import {Field, Formik, Form} from "formik";
import * as Yup from 'yup';

const LoginValidation = Yup.object().shape({
    email: Yup.string()
        .required("You must write your email"),
    password: Yup.string()
        .min(6, "To short...Not safe!")
        .max(20, "Wow!Wow!That's enough.Calm down...")
        .required("You must write your password")
});
const LoginForm = (props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false
                }}
                validationSchema={LoginValidation}
                onSubmit={
                    (values, err) => {
                        props.logInThunk(values.email, values.password, values.rememberMe);
                    }
                }
            >
                {({errors, touched}) => (
                    <Form>
                        <div>
                            <Field name={"email"}/>
                            {errors.email && touched.email ?
                                <div>{errors.email}</div> :
                                null
                            }
                        </div>
                        <div>
                            <Field name={"password"} type={"password"}/>
                            {errors.password && touched.password ?
                                <div>{errors.password}</div> :
                                null
                            }
                        </div>
                        <div>
                            <Field name={"rememberMe"} type={"checkbox"}/> remember me
                        </div>
                        {
                            props.logInErrorMessage.length > 0 ?
                                <div>{props.logInErrorMessage}</div> :
                                null
                        }
                        <div>
                            {
                                props.isAuthorized ?
                                    <button type={"button"} onClick={props.logOutThunk}>Log Out</button> :
                                    <button type={"submit"}>Log In</button>
                            }
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default LoginForm;