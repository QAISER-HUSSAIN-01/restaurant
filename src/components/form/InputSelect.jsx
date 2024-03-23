import { Form, Select } from "antd";

export default function InputSelect({
  label,
  placeholder,
  name,
  disabled,
  required,
  options=[]
}) {
  return (
    <Form.Item
      label={label}
      name={name}
      // initialValue={value}
      rules={[{ required: required, message: `${label} is required!` }]}
      className="ant-form-item-custom-style"
    >
      <Select
        style={{ width: "100%" }}
        placeholder={label}
        showSearch
        disabled={disabled}
        // onChange={(val) => onChange(val, name)}
        options={[{label:'Select',value:0},...options] || []}
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        // filterSort={(optionA, optionB) =>
        //   (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
        // }
      />
    </Form.Item>
   
  );
}
