## 用户登录

说明：用户登录系统

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
	//user可以为用户名也可以为职工号
	"user": 10001
	"password": "123"
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/login`**

**调用例子:  `http://localhost:3000/login`**

**返回示例:**

```json
{
    "code": 200,
    "success": false,
    "msg": "用户名错误"
}
```

```json
{
    "code": 200,
    "success": false,
    "msg": "密码错误"
}
```

```json
{
    "success": true,
    "code": 200,
    "msg": "登录成功",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imx2IiwidWlkIjoxMDAwMSwicG93ZXIiOjEsImlhdCI6MTYwMDMwNjQ5OSwiZXhwIjoxNjAwMzI4MDk5fQ._NhfYNngIwtA4C2iwenhiSji10G3rGEZyEaQqVNh0ME",
        "uid": 10001,
        "pid": 1,
        "username": "lv"
    }
}
```



## token验证接口

说明：路由跳转时验证token

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
	header.authorization //头部中的Authorization参数，它的值为token
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/check`**

**调用例子:  `http://localhost:3000/check`**

**返回示例:**

```json
{
    "success": false,
    "code": 200,
    "msg": "token验证失败"
}
```

```json
{
    "success": true,
    "code": 200,
    "msg": "验证成功",
    "data": {
        "username": "lv",
        "uid": 10001,
        "powerId": 1
    }
}
```



## 系统用户注册

说明：可从人员档案调取信息进行注册，非教职工不能注册

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
	"uid": 10086, 
    "username": "苏少权", 
    "sex": "男", 
    "age": 23, 
    "pwd": "123", 
    "phone": "15811000000", 
    "email": "sushaoquanssb@qq.com", 
    "powerId": 5
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/u_register`**

**调用例子:  `http://localhost:3000/u_register`**

**返回示例:**

```json
{
    "success": false,
    "code": 200,
    "msg": "该职工号不存在"
}
```

```json
{
    "success": false,
    "code": 200,
    "msg": "注册失败"
}
```

```json
{
    "success": true,
    "code": 200,
    "msg": "新用户'苏少权'注册成功"
}
```



## 修改个人密码

说明：修改个人密码

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
	"uid": 10001, 
	"oldPassword": "123", 
	"newPassword": "1234"
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/modifyPw`**

**调用例子:  `http://localhost:3000/modifyPw`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "修改成功"
}
```

```json
{
    "success": false,
    "code": 200,
    "msg": "原密码错误"
}
```

```json
{
    "success": false,
    "code": 200,
    "msg": "修改失败"
}
```



## 获取人数占比

说明：获取人数占比

**获取方式： ` HTTP GET`**

**发送参数:**

```json
//null
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/percent`**

**调用例子:  `http://localhost:3000/percent`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "memberList": [
            {
                "name": "教师",
                "percent": 42.8571
            },
            {
                "name": "教务员",
                "percent": 28.5714
            },
            {
                "name": "部门主管",
                "percent": 14.2857
            },
            {
                "name": "院长",
                "percent": 14.2857
            }
        ],
        "sectionList": [
            {
                "name": "教务处",
                "percent": 50
            },
            {
                "name": "科研处",
                "percent": 25
            },
            {
                "name": "人事处",
                "percent": 25
            }
        ]
    }
}
```



## 删除用户

说明：删除用户

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
    "uid": 10009
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/u_delete`**

**调用例子:  `http://localhost:3000/u_delete`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "删除用户成功"
}
```

```json
{
    "success": false,
    "code": 200,
    "msg": "删除用户失败，请重试"
}
```

