import { Form, Input } from "antd";

export default function InputText({
  label,
  placeholder,
  name,
  disabled,
  min,
  max,
  pattern,
  type,
  required,
  size,
}) {
  const others = type != 'integer' ? [
    { min: min, message: `Minimum length must be ${min}` },
    { max: max, message: `Maximum length must be ${max}` },
    { pattern: pattern?.allow, message: pattern?.message },
  ] : []
  return (
    <Form.Item
      label={label}
      name={name}
      // initialValue={value}
      rules={[
        { required: required, message: `${label} is required!` },
        ...others
        // { min: min, message: `Minimum length must be ${min}` },
        // { max: max, message: `Maximum length must be ${max}` },
        // { pattern: pattern?.allow, message: pattern?.message },
      ]}
      className="ant-form-item-custom-style"
    >
      <Input
        // onChangeCapture={(e) => onChange(e, validation)}  //uncomment to work with you own useState
        disabled={disabled}
        placeholder={placeholder || label}
        size={size || "middle"}
      />
    </Form.Item>
  );
}
