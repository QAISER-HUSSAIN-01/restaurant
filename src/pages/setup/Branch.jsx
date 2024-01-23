import { Card, Checkbox, Col, Form, Row } from "antd";
import ButtonComponent from "components/ButtonComponent";
import TableComponent from "components/TableComponent";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputText from "components/form/InputText";
import React, { useEffect, useState } from "react";

export default function Branch() {
  const initialValues = {
    Id: 0,
    Name: "",
    ShortName: "",
    UniqueId: "",
    HeadOffice: true,
    Enabled: true,
    Deleted: true,
  };

  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [form] = Form.useForm();
  
  const columns = [
    {
      key: "1",
      title: "Branch Name",
      dataIndex: "Name",
      // filters: []?.map((item) => {
      //   return { text: item?.Name, value: item?.Name };
      // }),
      // filterSearch: true,
      // onFilter: (value, record) => record.Name.startsWith(value),
      // ellipsis: true,
      // sorter: (a, b) => a.Name - b.Name
    },
    {
      key: "2",
      title: "Branch Code",
      dataIndex: "ShortName",
    },
    {
      key: "3",
      title: "Is Head Office",
      dataIndex: "HeadOffice",
      render: (_,record)=>(<Checkbox checked={record.HeadOffice} />)
    },
    {
      key: "4",
      title: "Is Active",
      dataIndex: "Enabled",
      render: (_,record)=>(<Checkbox checked={record.Enabled} />)

    },
  ];

  const tabledata = [
    {
      key:'1',
      ShortName:'simens chourangi',
      Name:'Shershah Road',
      HeadOffice:true,
      Enabled:true
    },
    {
      key:'2',
      Name:'Maripur',
      ShortName:'gulbai',
      HeadOffice:false,
      Enabled:true
    },
    {
      key:'3',
      Name:'Defence Housing Authority',
      ShortName:'DHA',
      HeadOffice:false,
      Enabled:false
    }
  ]

  const fields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Branch Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Branch Code"} name={"ShortName"} />
        </Col>
        <Col xs={12} md={6} xl={3} className="flex align-center">
          <InputCheckbox label={"Is Head Office"} name={"HeadOffice"} />
        </Col>
        <Col xs={12} md={6} xl={3} className="flex align-center">
          <InputCheckbox label={"Is Active"} name={"Enabled"} />
        </Col>
      </Row>
    </>
  );

  const customAction = (
    <>
      <ButtonComponent text={"Delete"} />
      <ButtonComponent text={"Close"} />
      <ButtonComponent text={"Print"} />
    </>
  );

  const handleSubmit = (values) => {
    setIsLoading(true);
    console.log(values);
    setTimeout(() => {
      setIsLoading(false);
    }, [2000]);
  };

  useEffect(()=>{
    setRows(tabledata);
  },[]);

  return (
    // <Card>
    <>
      <FormComponent
        title={"Add Branch"}
        children={fields}
        handleSubmit={handleSubmit}
        form={form}
        submit={"Save"}
        isLoading={isLoading}
        initialValues={initialValues}
        // customAction={customAction}
      />
      <br />
      <TableComponent columns={columns || []} rows={rows || []} title={'Branch List'} />
    </>
    // </Card>
  );
}
