import { Button, Drawer, Space } from 'antd'
import React from 'react'

export default function DrawerComponent(props) {
  return (
    <Drawer
        title="Add"
        width={600}
        onClose={props?.onClose}
        open={props?.open}
        extra={
          <Space>
            <Button onClick={props?.onClose}>Cancel</Button>
            <Button type="primary" onClick={props?.onClose}>
              Save
            </Button>
          </Space>
        }
      >
       {props?.children}
      </Drawer>
  )
}
