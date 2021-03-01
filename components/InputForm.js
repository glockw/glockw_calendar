import "@tailwindcss/forms";

export default function InputForm({ error, errorMessage, ...inputSettings }) {
  const classes = {
    input: (error) => (error ? `input-form error` : "input-form"),
  };
  return (
    <label className="block">
      <input {...inputSettings} className={classes.input(error)} />
      {error && (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {errorMessage}
        </span>
      )}
    </label>
  );
}
