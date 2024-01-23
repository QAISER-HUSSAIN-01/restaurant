import React, { useState } from "react";
import { Card, Col, Input, Row, Space, Table, Typography } from "antd";
import {
  DeleteOutlined,
  DownloadOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import ButtonComponent from "./ButtonComponent";

export default function TableComponent({
  title,
  columns,
  rows,
  loading,
  expandable,
  header,
  pagination,
}) {
  const [selectedRows,setSelectedRows] = useState([]);
  console.log(selectedRows);
  const headerContent = (
    <Row className="space-between">
      <Typography.Title level={5} className="line-h-1 mb-auto mt-auto">
        {title || "Item Lists"}
      </Typography.Title>
      {header && (
        <Col>
          <Space size={"middle"}>
            <ButtonComponent
              icon={<ReloadOutlined />}
              type={"default"}
              tooltip="Reload Table"
              shape={"circle"}
            />
            <ButtonComponent
              icon={<DownloadOutlined />}
              type={"default"}
              tooltip="Download"
              shape={"circle"}
            />
            <ButtonComponent
              icon={<DeleteOutlined />}
              type={"default"}
              tooltip="Delete Selected Items"
              shape={"circle"}
              disabled={true}
            />

            <Input.Search
              placeholder="Search"
              onSearch={(e) => {
                console.log(e);
              }}
            />
          </Space>
        </Col>
      )}
    </Row>
  );
  return (
    
    <Card bordered={false} bodyStyle={{ padding: "0px" }}>
      <Table
        title={() => headerContent}
        columns={columns}
        dataSource={rows}
        scroll={{ x: 500, y: 400 }}
        bordered
        loading={loading}
        rowSelection={{
          onSelect: (prop) => {
            setSelectedRows([...selectedRows, prop]);
          },
          onSelectAll:(_,rows)=>{setSelectedRows([...rows]);},
        }}
        expandable={
          expandable && {
            expandedRowRender: (record) => {
              console.log(record);
            },
            rowExpandable: (record) => (record.key > 2 ? true : false),
          }
        }
        size="small"
        pagination={
          !pagination && {
            className: "px-3",
            showSizeChanger: true,
            onShowSizeChange: (currentnumber, sizenumber) => {},
            total: 100, //rows?.length
            simple: true,
            showTotal: (total, range) => {},
          }
        }
      />
    </Card>
  );
}
