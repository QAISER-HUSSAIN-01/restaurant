import React from "react";
import { Card, Table } from "antd";

export default function TableComponent({ columns, rows, loading }) {
  return (
    <Card bordered={false}>
      <Table
        columns={columns}
        dataSource={rows}
        scroll={{ x: 500, y: 400 }}
        bordered
        loading={loading}
        expandable={{
          expandedRowRender: (record) => {
            console.log(record);
          },
          rowExpandable: (record) => (record.key > 2 ? true : false),
        }}
        size="small"
        pagination={{
          showSizeChanger: true,
          onShowSizeChange: (currentnumber, sizenumber) => {},
          total: 500,
          simple: true,
          showTotal: (total, range) => {},
        }}
      />
    </Card>
  );
}
