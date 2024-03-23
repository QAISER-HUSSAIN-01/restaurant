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
  Id:0,
  Name: "",
  Enabled: true,
  Deleted: false,
};

export default function Unit() {
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
  } = useFormHook("Units", initialValues);
  const columns = [
    {
      key: "1",
      title: "Unit Name",
      dataIndex: "Name",
      ...getColumnSearchProps("Name"),
      ...sortString("Name"),
    },
    {
      key: "2",
      title:"Enabled",
      dataIndex: "Enabled",
      render: (_, record) => <Checkbox checked={record.Enabled} />,
      // className: "text-center",
    },
    {
      key: "3",
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
        <InputText label={"Unit Name"} name={"Name"} required={true} />
      </Col>
      <Col xs={12} md={6} xl={6} className="flex align-center">
        <InputCheckbox label={"Enabled"} name={"Enabled"} />
      </Col>
    </Row>
  );

  const searchFields = (
    <Row gutter={[20, 0]}>
      <Col xs={24} md={12} xl={8}>
        <InputText label={"Unit Name"} name={"Name"} />
      </Col>
      <Col xs={12} md={6} xl={4} className="flex align-center">
        <InputCheckbox label={"Enabled"} name={"Enabled"} />
      </Col>
    </Row>
  );

  return (
    // <Card>
    <>
      <FormComponent
        title={"Search Unit"}
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
        title={"Unit List"}
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
