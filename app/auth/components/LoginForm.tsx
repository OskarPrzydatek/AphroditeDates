import { AuthenticationError, Link, useMutation, Routes, PromiseReturnType } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)

  return (
    <div>
      <h1>Zaloguj Się</h1>

      <Form
        submitText="Zaloguj"
        schema={Login}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            const user = await loginMutation(values)
            props.onSuccess?.(user)
          } catch (error: any) {
            if (error instanceof AuthenticationError) {
              return { [FORM_ERROR]: "Login i/lub hasło nieprawidłowe." }
            } else {
              return {
                [FORM_ERROR]: "Coś poszło nie tak... Spróbuj ponownie. - " + error.toString(),
              }
            }
          }
        }}
      >
        <LabeledTextField name="email" label="Email" placeholder="Email" />
        <LabeledTextField name="password" label="Hasło" placeholder="Hasło" type="password" />
        <div>
          <Link href={Routes.ForgotPasswordPage()}>
            <a>Zapomniałeś Hasła?</a>
          </Link>
        </div>
      </Form>

      <div style={{ marginTop: "1rem" }}>
        Lub <Link href={Routes.SignupPage()}>Zarejestruj Się</Link>
      </div>
    </div>
  )
}

export default LoginForm
