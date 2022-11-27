import React from "react";
import { Form, useFormik } from "formik";
import * as Yup from 'yup'

function App() {
  const formik = useFormik({
    initialValues: {username: 'licop', password: ''},
    // 表单验证
    // validate: values => {
    //   const errors = {}
    //   if(!values.username) {
    //     errors.username = '请输入用户名'
    //   } else if(values.username.length > 15) {
    //     errors.username = '用户名的长度不能大于15' 
    //   }
    //   if(values.password.length < 6) {
    //     errors.password = '密码的长度不能小于6'
    //   }
    //   return errors
    // },

    // 使用Yup库进行表单验证
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, '用户名的长度不能大于15')
        .required('请填写用户名'),
      password: Yup.string()
        .min(6, '密码的长度不能小于6')
        .required('请填写密码')
    }),
    onSubmit: values => {
      console.log(values)
    }
  })
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <input 
        type='text' 
        name="username" 
        {
          ...formik.getFieldProps('username')
        }
      />
      <p>{ formik.touched.username && formik.errors.username ? formik.errors.username : null }</p>
      <input 
        type="password" 
        name="password" 
        // 使用getFieldProps减少样板代码
        {
          ...formik.getFieldProps('password')
        }
      />
      <p>{ formik.errors.password ? formik.errors.password : null }</p>
      <input type="submit" />
    </form>
  )
  
}

export default App;
