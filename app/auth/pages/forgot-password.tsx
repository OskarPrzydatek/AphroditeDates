import { BlitzPage, useMutation } from "blitz"
import Layout from "app/core/layouts/Layout"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { ForgotPassword } from "app/auth/validations"
import forgotPassword from "app/auth/mutations/forgotPassword"

const ForgotPasswordPage: BlitzPage = () => {
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword)

  return (
    <div>
      <h1>Zapomniałeś Hasła?</h1>

      {isSuccess ? (
        <div>
          <h2>Wniosek złożony</h2>
          <p>
            Jeśli Twój e-mail jest w naszym systemie, otrzymasz instrukcje dotyczące resetowania
            hasła.
          </p>
        </div>
      ) : (
        <Form
          submitText="Zmień Hasło"
          schema={ForgotPassword}
          initialValues={{ email: "" }}
          onSubmit={async (values) => {
            try {
              await forgotPasswordMutation(values)
            } catch (error: any) {
              return {
                [FORM_ERROR]: "Coś poszło nie tak... Spróbuj ponownie.",
              }
            }
          }}
        >
          <LabeledTextField name="email" label="Email" placeholder="Email" />
        </Form>
      )}
    </div>
  )
}

ForgotPasswordPage.redirectAuthenticatedTo = "/"
ForgotPasswordPage.getLayout = (page) => <Layout>{page}</Layout>

export default ForgotPasswordPage
