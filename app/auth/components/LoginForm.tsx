import { AuthenticationError, useMutation, Routes, PromiseReturnType, useRouter } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"
import Button from "app/core/components/Button"

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)
  const router = useRouter()

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
      </Form>

      <div className="not-have-account">
        Nie masz jeszcze konta?&nbsp;&nbsp;
        <Button
          label="Zarejestruj Się"
          onClick={async () => await router.push(Routes.SignupPage())}
        />
      </div>

      <style global jsx>{`
        h1 {
          text-align: center;
        }

        .not-have-account {
          margin-top: 1rem;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default LoginForm
