import { useFormContext } from "react-hook-form"

export default function LabeledSelect({ name, label, placeholder, options }) {
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
        <select {...register(name)} disabled={isSubmitting}>
          <option disabled>{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
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
