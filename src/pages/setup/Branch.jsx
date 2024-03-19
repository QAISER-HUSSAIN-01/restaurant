import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Checkbox, Col, Row, Space } from "antd";
import ButtonComponent from "components/ButtonComponent";
import DrawerComponent from "components/DrawerComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputText from "components/form/InputText";
import PopDelete from "components/popup/PopDelete";
import useFormHook from "hooks/useFormHook";
import { Operations } from "utils/constants";

const initialValues = {
  OperationId: 1,
  Id: 0,
  CompanyId: 1,
  Company: null,
  Name: "",
  ShortName: "",
  UniqueId: "00000000-0000-0000-0000-000000000000",
  HeadOffice: false,
  Enabled: true,
  Deleted: true,
};

export default function Branch() {
  const { getColumnSearchProps, sort, sortString } = TableConfig();
  const {
    isLoading,
    isTableLoading,
    handleDelete,
    handleDrawer,
    handleEdit,
    handleSearch,
    handleSubmit,
    open,
    add,
    formData,
    search,
    dataSet,
  } = useFormHook("Branch", initialValues);
  const columns = [
    {
      key: "1",
      title: "Branch Name",
      dataIndex: "Name",
      ...getColumnSearchProps("Name"),
      ...sortString("Name"),
    },
    {
      key: "2",
      title: "Branch Code",
      dataIndex: "ShortName",
      ...getColumnSearchProps("ShortName"),
      ...sort("ShortName"),
    },
    {
      key: "3",
      title: "Is Head Office",
      dataIndex: "HeadOffice",
      render: (_, record) => <Checkbox checked={record.HeadOffice} />,
      // className: "text-center",
    },
    {
      key: "4",
      title: "Is Active",
      dataIndex: "Enabled",
      render: (_, record) => <Checkbox checked={record.Enabled} />,
      // className: "text-center",
    },
    {
      key: "5",
      title: "Action",
      // className: "text-center",
      render: (_, record) => (
        <Space>
          {" "}
          <ButtonComponent
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />{" "}
          <PopDelete handleDelete={() => handleDelete(record)}>
            <ButtonComponent icon={<DeleteOutlined />} danger={true} />{" "}
          </PopDelete>
        </Space>
      ),
    },
  ];
  const formFields = (
    <Row gutter={[20, 0]}>
      <Col xs={24} md={12} xl={12}>
        <InputText label={"Branch Name"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={12}>
        <InputText label={"Branch Code"} name={"ShortName"} />
      </Col>
      <Col xs={12} md={6} xl={6} className="flex align-center">
        <InputCheckbox label={"Is Head Office"} name={"HeadOffice"} />
      </Col>
      <Col xs={12} md={6} xl={6} className="flex align-center">
        <InputCheckbox label={"Is Active"} name={"Enabled"} />
      </Col>
    </Row>
  );

  const searchFields = (
    <Row gutter={[20, 0]}>
      <Col xs={24} md={12} xl={8}>
        <InputText label={"Branch Name"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputText label={"Branch Code"} name={"ShortName"} />
      </Col>
      <Col xs={12} md={6} xl={4} className="flex align-center">
        <InputCheckbox label={"Is Head Office"} name={"HeadOffice"} />
      </Col>
      <Col xs={12} md={6} xl={4} className="flex align-center">
        <InputCheckbox label={"Is Active"} name={"Enabled"} />
      </Col>
    </Row>
  );
  return (
    // <Card>
    <>
      <FormComponent
        title={"Search Branch"}
        children={searchFields}
        handleSubmit={handleSearch}
        form={search}
        submit={"Search"}
        isLoading={isLoading}
        initialValues={initialValues}
        extra={
          <ButtonComponent
            icon={<EditOutlined />}
            text={"Add"}
            size={"small"}
            onClick={()=>handleDrawer(Operations.Insert)}
          />
        }
      />
      <br />
      <TableComponent
        title={"Branch List"}
        columns={columns || []}
        rows={dataSet?.Table1 || []}
        loading={isTableLoading}
      />
      <DrawerComponent onClose={()=>handleDrawer(Operations.Select)} open={open}>
        <FormComponent
          children={formFields}
          handleSubmit={handleSubmit}
          form={add}
          submit={formData?.OperationId == Operations.Update ? "Update" : "Save"}
          isLoading={isLoading}
          initialValues={initialValues}
        />
      </DrawerComponent>
    </>
    // </Card>
  );
}
