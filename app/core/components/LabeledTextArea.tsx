import { theme } from "app/style/theme"
import React from "react"
import { useFormContext } from "react-hook-form"

export default function LabeledTextArea({ name, label, placeholder }) {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext()
  const error = Array.isArray(errors[name])
    ? errors[name].join(", ")
    : errors[name]?.message || errors[name]

  return (
    <div className="labeled-textarea">
      <label>
        {label}
        <textarea placeholder={placeholder} {...register(name)} disabled={isSubmitting}></textarea>
      </label>

      {error && (
        <div role="alert" style={{ color: "red" }}>
          {error}
        </div>
      )}

      <style jsx>{`
        .labeled-textarea {
          width: 100%;
        }

        label {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        textarea {
          width: 100%;
          min-height: 200px;
          resize: none;
          background: inherit;
          border: none;
          border: 2px solid ${theme.color.red};
          font-family: ${theme.fontFamily};
        }
      `}</style>
    </div>
  )
}
