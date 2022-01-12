import { theme } from "app/style/theme"
import { forwardRef, PropsWithoutRef, ComponentPropsWithoutRef } from "react"
import { useFormContext } from "react-hook-form"

export interface LabeledTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
}

export const LabeledTextField = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ label, outerProps, labelProps, name, ...props }, ref) => {
    const {
      register,
      formState: { isSubmitting, errors },
    } = useFormContext()
    const error = Array.isArray(errors[name])
      ? errors[name].join(", ")
      : errors[name]?.message || errors[name]

    return (
      <div className="text-field" {...outerProps}>
        <label {...labelProps}>
          {label}
          <input disabled={isSubmitting} {...register(name)} {...props} />
        </label>

        {error && (
          <div role="alert" style={{ color: theme.color.red }}>
            {error}
          </div>
        )}

        <style jsx>{`
          .text-field {
            width: 100%;
          }

          label {
            display: flex;
            flex-direction: column;
            align-items: start;
            font-size: ${theme.fontSize.m};
            width: 100%;
          }

          input {
            font-size: ${theme.fontSize.m};
            padding: 0.25rem 0.5rem;
            appearance: none;
            margin-top: 0.5rem;
            background: inherit;
            border: none;
            border-bottom: 2px solid ${theme.color.red};
            width: 100%;
            font-family: ${theme.fontFamily};
          }

          input::placeholder {
            font-family: ${theme.fontFamily};
          }
        `}</style>
      </div>
    )
  }
)

export default LabeledTextField
