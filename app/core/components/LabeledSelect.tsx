import { theme } from "app/style/theme"
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
    <div className="labeled-select">
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
        <div role="alert" style={{ color: theme.color.red }}>
          {error}
        </div>
      )}

      <style jsx>{`
        .labeled-select {
          width: 100%;
        }

        label {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        select {
          background: inherit;
          border: none;
          border-bottom: 2px solid ${theme.color.red};
          font-family: ${theme.fontFamily};
        }

        select option {
          background: ${theme.color.white};
        }
      `}</style>
    </div>
  )
}
