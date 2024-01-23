import {
  DashboardOutlined,
  AccountBookOutlined,
  LogoutOutlined,
  SettingOutlined,
  GroupOutlined,
  EditTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
export const sidebarList = [
  {
    key: "/",
    icon: <DashboardOutlined />,
    label: <Link to="">Dashboard</Link>,
  },
  {
    key: "/inventory",
    icon: <AccountBookOutlined />,
    label: "Inventory",
    children: [
      {
        key: "/inventory/opening-inventory",
        icon: <EditTwoTone />,
        label: <Link to="inventory/opening-inventory">Opening Inventory</Link>,
      },
      {
        key: "/inventory/purchase-order",
        icon: <EditTwoTone />,
        label: <Link to="inventory/purchase-order">Purchase Order</Link>,
      },
      {
        key: "/inventory/grn",
        icon: <EditTwoTone />,
        label: <Link to="inventory/grn">GRN</Link>,
      },
      {
        key: "/inventory/production",
        icon: <EditTwoTone />,
        label: <Link to="inventory/production">Production</Link>,
      },
      {
        key: "/inventory/issuance",
        icon: <EditTwoTone />,
        label: <Link to="inventory/issuance">Issuance</Link>,
      },
      {
        key: "/inventory/customer-sale-invoice",
        icon: <EditTwoTone />,
        label: (
          <Link to="inventory/customer-sale-invoice">
            Customer Sale Invoice
          </Link>
        ),
      },
      {
        key: "/inventory/adjustment",
        icon: <EditTwoTone />,
        label: <Link to="inventory/adjustment">Adjustment</Link>,
      },
      {
        key: "/inventory/wastage",
        icon: <EditTwoTone />,
        label: <Link to="inventory/wastage">Wastage</Link>,
      },
      {
        key: "/inventory/physical-stock",
        icon: <EditTwoTone />,
        label: <Link to="inventory/physical-stock">Physical Stock</Link>,
      },
      {
        key: "/inventory/issuance-return",
        icon: <EditTwoTone />,
        label: <Link to="inventory/issuance-return">Issuance Return</Link>,
      },
      {
        key: "/inventory/invoice",
        icon: <EditTwoTone />,
        label: <Link to="inventory/invoice">Invoice</Link>,
      },
      {
        key: "/inventory/grn-return",
        icon: <EditTwoTone />,
        label: <Link to="inventory/grn-return">GRN Return</Link>,
      },
      {
        key: "/inventory/quotation",
        icon: <EditTwoTone />,
        label: <Link to="inventory/quotation">Quotation</Link>,
      },
    ],
  },
  {
    key: "/setup",
    icon: <GroupOutlined />,
    label: "Setup",
    children: [
      {
        key: "/setup/branch",
        icon: <EditTwoTone />,
        label: <Link to="setup/branch">Add Branch</Link>,
      },
      {
        key: "/setup/category",
        icon: <EditTwoTone />,
        label: <Link to="setup/category">Add Category</Link>,
      },
      {
        key: "/setup/department",
        icon: <EditTwoTone />,
        label: <Link to="setup/department">Add Department</Link>,
      },
      {
        key: "/setup/item",
        icon: <EditTwoTone />,
        label: <Link to="setup/item">Add Item</Link>,
      },
      {
        key: "/setup/subcategory",
        icon: <EditTwoTone />,
        label: <Link to="setup/subcategory">Add Sub-Category</Link>,
      },
    ],
  },
  {
    key: "/setting",
    icon: <SettingOutlined />,
    label: <Link to="setting">Setting</Link>,
  },
];

export const rowFn = () => {
  let rows = [];
  for (let i = 0; i < 50; i++) {
    rows.push({
      key: i,
      name: "Customer" + " " + i,
      age: i,
      address: "address" + " " + i,
    });
  }
  return rows;
};

export const colFn = () => {
  let cols = [
    {
      key: "1",
      title: "Name",
      dataIndex: "name",
      fixed: "left",
      width: "200px",
    },
    {
      key: "2",
      title: "Age",
      dataIndex: "age",
      width: "200px",
    },
    {
      key: "3",
      title: "Address",
      dataIndex: "address",
      width: "200px",
    },
    {
      key: "4",
      title: "Gender",
      dataIndex: "name",
      width: "200px",
    },
    {
      key: "5",
      title: "Designation",
      dataIndex: "age",
      width: "200px",
    },
    {
      key: "6",
      title: "Volunteer",
      dataIndex: "address",
      width: "200px",
    },
    {
      key: "7",
      title: "Name",
      dataIndex: "name",
      width: "200px",
    },
    {
      key: "8",
      title: "Age",
      dataIndex: "age",
      width: "200px",
    },
  ];

  return cols;
};

export const fields = [
  {
    label: "First Name",
    type: "text",
    placeholder: "firstname",
    name: "FirstName",
    value: "",
    startIcon: "",
    endIcon: "",
    validation: "alphabet", // ['alphanumeric,numeric,alphabet,boolean']
    maxLength: 50,
    showCount: true,
    required: true,
    responsive: [24, 16, 8], // [xs, md, xl ]
  },
  {
    label: "Last Name",
    type: "text",
    placeholder: "lastname",
    name: "LastName",
    value: "",
    startIcon: "",
    endIcon: "",
    validation: "", // ['alphanumeric,numeric,alphabet,boolean']
    maxLength: 50,
    showCount: true,
    required: false,
    responsive: [24, 16, 8], // [xs, md, xl ]
  },
  {
    label: "Password",
    type: "password",
    placeholder: "password",
    name: "Password",
    value: "",
    startIcon: "",
    endIcon: "",
    validation: "alphabet", // ['alphanumeric,numeric,alphabet,boolean']
    maxLength: 50,
    required: true,
    responsive: [24, 16, 8], // [xs, md, xl ]
  },
  {
    label: "Text Area",
    type: "textarea",
    placeholder: "description",
    name: "Description",
    value: "",
    startIcon: "",
    endIcon: "",
    validation: "alphanumeric", // ['alphanumeric,numeric,alphabet,boolean']
    maxLength: 200,
    showCount: true,
    required: true,
    responsive: [24, 16, 8], // [xs, md, xl ]
  },
  {
    label: "University",
    type: "select",
    placeholder: "select",
    name: "University",
    value: "",
    options: [{ value: "", label: "" }],
    startIcon: "",
    endIcon: "",
    validation: "alphabet", // ['alphanumeric,numeric,alphabet,boolean']
    required: true,
    responsive: [24, 16, 8], // [xs, md, xl ]
  },
  {
    label: "Contact",
    type: "text",
    placeholder: "contact",
    name: "Contact",
    value: "",
    startIcon: "",
    endIcon: "",
    validation: "numeric", // ['alphanumeric,numeric,alphabet,boolean']
    maxLength: 11,
    showCount: false,
    required: false,
    responsive: [24, 16, 8], // [xs, md, xl ]
  },
  {
    label: "Male",
    type: "checkbox",
    placeholder: "Male",
    name: "Male",
    value: "",
    validation: "boolean", // ['alphanumeric,numeric,alphabet,boolean']
    required: true,
    responsive: [24, 16, 8], // [xs, md, xl ]
  },
];
