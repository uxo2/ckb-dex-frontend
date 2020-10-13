import React, { useState } from 'react';
import { Form, Input, Button, Popover } from 'antd';
import { 
  DownOutlined,
  ApartmentOutlined
} from '@ant-design/icons';
import { 
  TradePage,
  TradeForm,
  ConectIconBox
} from './styled' 

export default () => {
const FormLayoutDemo = () => {
  const [ form ] = Form.useForm()
  const [ formLayout ] = useState('horizontal')
  const PopverContent = (
    <ul>
      <li>Nothing</li>
    </ul>
  )
  return (
    <div className="formBox">
      <div className="header">
        <span>DAI /</span>
        <Popover placement="bottomRight" title='' content={ PopverContent } trigger="click">
          <span></span>
          <Button type="text">
            CKB<DownOutlined />
          </Button>
        </Popover>
      </div>
      <Form
        layout="vertical"
        form={form}
        className="form"
        initialValues={{
          layout: formLayout,
        }}
      >
        <Form.Item>
          <span>You Pay</span>
          <Button className="max-btn" size="small" type="primary">Max</Button>
          <Input placeholder="Enter your Pay" suffix="RMB" />
        </Form.Item>
        <Form.Item>
          <span>Rate</span>
          <Button className="max-btn" size="small" type="primary">Current</Button>
          <Input placeholder="Rate" suffix="DAI / CKB" />
        </Form.Item>
        <ConectIconBox>
          <Button icon={ <ApartmentOutlined /> } shape="circle"></Button>
        </ConectIconBox>
        <Form.Item label="You Receive">
        <Input placeholder="Receive" suffix="DAI" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" style={{ display: "flex", margin: "0 auto" }}>Connect Wallet</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
  return (
    <TradePage className="Trade">
      <TradeForm>
        <FormLayoutDemo/>
      </TradeForm>
    </TradePage>
  )
}
