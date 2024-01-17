import { Checkbox, Form, message } from "antd";

export default function InputCheckbox({
  label,
  name,
  disabled,
  required,
}) {
  return (
    <Form.Item
      // initialValue={value}
      name={name}
      valuePropName="checked"
      rules={[{ required: required, message: `${label} is required!` }]}
    >
      {/* onChange={onChange} */}
      <Checkbox disabled={disabled}>
        {label} {required && <span className="steric">*</span>}
      </Checkbox>
    </Form.Item>
  );
}
