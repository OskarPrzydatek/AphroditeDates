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
    <div>
      <label>
        {label}
        <textarea placeholder={placeholder} {...register(name)} disabled={isSubmitting}></textarea>
      </label>

      {error && (
        <div role="alert" style={{ color: "red" }}>
          {error}
        </div>
      )}

      <style jsx>{``}</style>
    </div>
  )
}
