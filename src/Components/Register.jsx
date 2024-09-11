import FormStyles from "../Styles/Form.module.css"

const Register = ({nombre,correo}) => {
  return (
    <div className={FormStyles.container}>
        <h4>Gracias {nombre}, te contactaremos cuando antes vía mail.</h4>
    </div>
  )
}

export default Register