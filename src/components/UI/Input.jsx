import css from './Input.module.css'

function Input({id, type, name, label, formik}){

    return (
        <>
            <label className={css.label}>
                {label}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                defaultValue={formik.values[`${name}`]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={css.input}
                min={1}
            />
            {
                formik.touched[name] && formik.errors[name] &&
                <span className={css.error}>
                    {formik.errors[name]}
                </span>
            }

        </>

    )
}

export default Input;