## 教师请假/加课记录

说明：添加教师请假/加课记录

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
    "fid": 10002, 
    "recordTypeId": 1, 
    "classHour": 3, 
    "recordTime": "2020-10-26T03:12:23.000Z"
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/teach_record`**

**调用例子:  `http://localhost:3000/teach_record`**

**返回示例:**

```json
{
    "success": false,
    "code": 200,
    "msg": "报备失败，请重试"
}
```

```json
{
    "success": false,
    "code": 200,
    "msg": "请确认是否为教师职工号"
}
```

```json
{
    "success": true,
    "code": 200,
    "msg": "报备成功"
}
```



## 录入教学工作量

说明：录入教学工作量, 若 `mode` 为check则先查询当前教学工作量返回， 若 `mode` 为update则将工作量录入数据库 

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
    "fid": 10009, 
    "mode": "check", //update
    "teachLoad": 405, 
    "updateTime": "2020-10-26T03:12:23.000Z"
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/teachLoad`**

**调用例子:  `http://localhost:3000/teachLoad`**

**返回示例:**

`mode` === "check"

```json
{
    "success": false,
    "code": 200,
    "msg": "请确认是否为教师职工号"
}
```

```json
//检查是否还有未录入的请假/加课记录
{
    "success": true,
    "code": 200,
    "msg": "该教师已录入完毕",
    "data": {
        "name": "吴汉标",
        "teachLoad": 400
    }
}
```

```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "name": "吴汉标",
        "teachLoad": 405
    }
}
```

`mode` === "update"

```json
{
    "success": false,
    "code": 200,
    "msg": "录入教学工作量失败，请重试"
}
```

```json
{
    "success": true,
    "code": 200,
    "msg": "录入教学工作量成功"
}
```

