import React from 'react'
import {Form,Input,Button,Typography} from "antd"



const Login = ({handleOnChange,email,password,handleOnSubmit}) => {



  return (
    <div className='bg-slate-100 px-20 py-14 rounded-xl'>
        <Typography.Title level={2} className='text-center pb-6'>Client Login</Typography.Title>
        <Form
        layout='vertical'
        name='login'
        onFinish={handleOnSubmit}
        >
            <Form.Item
            label="Email"
            name="email"
            rules={[
                {
                  required: true,
                  message: 'Please input your email !',
                },
              ]}
            >
            <Input 
            placeholder='Enter Email ' 
            onChange={handleOnChange} 
            value={email} 
            />
            </Form.Item>
            <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password 
      placeholder='Enter Password' 
      onChange={handleOnChange} 
      value={password} 
      />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button className='bg-blue-500 text-white mt-4' htmlType="submit" >
        Submit
      </Button>
    </Form.Item>
    <Typography.Link href="#">Forget Password?</Typography.Link>
        </Form>
    </div>
  )
}

export default Login