
## 获取个人用户信息

说明：获取个人用户信息

**获取方式： ` HTTP GET`**

**发送参数:**

```json
{
	"uid": 10001
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/personInfo`**

**调用例子:  `http://localhost:3000/personInfo?uid=10001`**

**返回示例:**

```json
{
    "code": 200,
    "success": true,
    "msg": null,
    "data": {
        	"uid": 10001,
            "username": "lv",
            "age": 18,
        	"sex": "男",
            "phone": "15816990000",
            "email": "lyuxxx@foxmail.com",
            "powerId": 1
        }
}
```



## 所有用户信息

说明：查询所有用户信息，同时返回数据长度

**获取方式： ` HTTP GET`**

**发送参数:**

```json
{
	"page": 1
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/allInfo`**

**调用例子:  `http://localhost:3000/allInfo`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "null",
    "data": {
        "data": [
            {
                "uid": 10001,
                "username": "lv",
                "sex": "男",
                "age": 22,
                "phone": "15816990000",
                "email": "lyuhongzhi@foxmail.com",
                "powerId": 1,
                "powerName": "管理员"
            },
            {
                "uid": 10002,
                "username": "张三",
                "sex": "女",
                "age": 33,
                "phone": "15816993417",
                "email": "10086@qq.com",
                "powerId": 7,
                "powerName": "教师"
            },
            {
                "uid": 10003,
                "username": "李四",
                "sex": "男",
                "age": 35,
                "phone": "13800000000",
                "email": "10001@qq.com",
                "powerId": 5,
                "powerName": "教务员(教务处)"
            }
        ...
    ],
       "sum": 10
    }
}
```



## 修改个人信息

说明：修改个人信息

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
	"uid": 10001, 
	"username": "lv", 
	"sex": "男", 
	"age": 22 , 
	"phone": "110", 
	"email": "110@qq.com", 
	"powerId": 1, 
	"pwd": "123" //判断是否为空去决定是否改密码
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/personInfo`**

**调用例子:  `http://localhost:3000/personInfo`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "保存成功"
}
```

```json
{
    "success": false,
    "code": 200,
    "msg": "保存失败"
}
```



## 搜索用户信息

说明：根据用户名或职工号查询数据

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
	"user": 10001 //或用户名
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/searchInfo`**

**调用例子:  `http://localhost:3000/searchInfo`**

**返回示例:**

```json
{
    "success": false,
    "code": 200,
    "msg": "查询无结果"
}
```

```json
{
    "success": true,
    "code": 200,
    "msg": "null",
    "data": {
        "data":[
            {
                "uid": 10001,
                "username": "lv",
                "sex": "男",
                "age": 22,
                "phone": "15816993417",
                "email": "lyuhongzhi@foxmail.com",
                "powerId": 1
            }
        ],
       "sum": 1
    }
}
```

