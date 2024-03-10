import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Col, Row, Space } from "antd";
import ButtonComponent from "components/ButtonComponent";
import DrawerComponent from "components/DrawerComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import PopDelete from "components/popup/PopDelete";
import useFormHook from "hooks/useFormHook";
import { Operations } from "utils/constants";

const initialValues = {
  OperationId:1,
  Id: 0,
  BranchId: 43,
  Name: "",
  ShortName: "",
  Enabled: true,
  Deleted: true,
};

export default function Department() {

  const { getColumnSearchProps, sortString } = TableConfig();
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
  } = useFormHook("Department", initialValues);
  const columns = [
    {
      key: "1",
      title: "Department Name",
      dataIndex: "Name",
      ...getColumnSearchProps("Name"),
      ...sortString("Name"),
    },
    {
      key: "2",
      title: "Is Active",
      dataIndex: "Enabled",
    },
    {
      key: "3",
      title: "Department Code",
      dataIndex: "ShortName",
      ...getColumnSearchProps("ShortName"),
      ...sortString("ShortName"),
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

  const searchfields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Department Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Department Code"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Branch"} name={"BranchId"} />
        </Col>
        <Col xs={24} md={12} xl={12}>
          <InputCheckbox label={"Is Active"} name={"Enabled"} />
        </Col>
      </Row>
    </>
  );
  const formfields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Department Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Department Code"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Branch"} name={"BranchId"} />
        </Col>
        <Col xs={24} md={12} xl={12}>
          <InputCheckbox label={"Is Active"} name={"Enabled"} />
        </Col>
      </Row>
    </>
  );

  return (
    <>
      <FormComponent
        title={"Search Department"}
        children={searchfields}
        handleSubmit={handleSubmit}
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
        columns={columns || []}
        rows={dataSet?.Table1 || []}
        title={"Department List"}
        loading={isTableLoading}
      />
      <DrawerComponent onClose={()=>handleDrawer(Operations.Select)} open={open}>
        <FormComponent
          children={formfields}
          handleSubmit={handleSubmit}
          form={add}
          submit={formData.OperationId == Operations.Update ? "Update" : "Save"}
          isLoading={isLoading}
          initialValues={initialValues}
        />
      </DrawerComponent>
    </>
  );
}
