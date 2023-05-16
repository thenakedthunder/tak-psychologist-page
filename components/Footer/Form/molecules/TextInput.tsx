import ErrorMessage from '../atoms/ErrorMessage';

interface TextInputProps {
  id: string;
  name: string;
  className?: string;
  placeholder: string;
  value: string;
  onChanged: ((value: string) => void);
  error: string;
}

const TextInput = ({
  id, name, className = '', placeholder, value, onChanged, error,
}: TextInputProps) => (
  <div>
    <input
      type="text"
      id={id}
      className={className}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(input) => onChanged(input.target?.value)}
    />

    {error && <ErrorMessage error={error} />}
  </div>
);

export default TextInput;
