import React from 'react'
import {Form,Input,Button,Typography} from "antd"



const ResetPassword = ({handleOnResetPasswordSubmit}) => {

  return (
    <div className='bg-slate-100 px-20 py-14 rounded-xl'>
        <Typography.Title level={2} className='text-center pb-6'>Reset Password</Typography.Title>
        <Form
        layout='vertical'
        name='reset-password'
        onFinish={handleOnResetPasswordSubmit}
        >
            <Form.Item
            label="Email"
            name="email"
            rules={[
                {
                  message: 'Please enter a valid email',
                  type:"email"
                },
              ]}
            >
            <Input 
            placeholder='Enter Email ' 
            required
            />
            </Form.Item>
            
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button className='bg-blue-500 text-white mt-4' htmlType="submit" >
        Reset Password
      </Button>
    </Form.Item>
    <Typography.Link href="#">Login now </Typography.Link>
        </Form>
    </div>
  )
}

export default ResetPassword