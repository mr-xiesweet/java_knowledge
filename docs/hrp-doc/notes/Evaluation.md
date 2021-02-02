## 获取绩点记录情况

说明：获取所有教师绩点记录情况

**获取方式： ` HTTP GET`**

**发送参数:**

```json
{
	"page": 1,
    "year": "2020"
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/gpa_record`**

**调用例子:  `http://localhost:3000/gpa_record `**

**返回示例:**
```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "data": [
            {
                "loadRecordId": 3,
                "teachLoad": 240,
                "fid": 10008,
                "updateTime": "2020-10-12T03:03:02.000Z",
                "publicGpa": 0,
                "scientGpa": 0,
                "isExist": 1,
                "isUpdate": 0,
                "isEvaluate": 0,
                "stationId": 3,
                "levelId": 4
            },
            {
                "loadRecordId": 6,
                "teachLoad": 200,
                "fid": 10023,
                "updateTime": "2020-10-12T03:20:19.000Z",
                "publicGpa": 0,
                "scientGpa": 0,
                "isExist": 1,
                "isUpdate": 0,
                "isEvaluate": 0,
                "stationId": 2,
                "levelId": 3
            }
            ...
        ],
        "sum": 4
    }
}
```


## 获取绩效考核结果

说明：获取绩效考核结果

**获取方式： ` HTTP GET`

**发送参数:

```json
{
	"page": 1,
    "year": "2020"
}
```

**返回数据格式:  ` JSON`

**接口地址(模拟)：` http://localhost:3000/evaluation`

**调用例子:  `http://localhost:3000/evaluation `

**返回示例:
```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "data": [
            {
                "evaluateRecordId": 10,
                "fid": 10006,
                "evaluation": "差",
                "grade": 65,
                "createTime": "2020-11-04",
                "name": "赵肉丝"
            }
        ],
        "sum": 1
    }
}
```


## 绩效考核

说明：对教师绩效进行考核

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
	"fid": 10006,
	"teachLoad": 408,
	"publicGpa": 70,
	"scientGpa": 5,
	"stationId": 4,
	"levelId": 6
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/evaluate`**

**调用例子:  `http://localhost:3000/evaluate `**

**返回示例:**
```json
{
    "success": false,
    "code": 200,
    "msg": "请确保教务处已录入课时量"
}
```
```json
{
    "success": false,
    "code": 200,
    "msg": "考核失败，请重试"
}
```
```json
{
    "success": true,
    "code": 200,
    "msg": "考核成功"
}
```


## 获取个人绩效结果
说明：获取个人绩效结果

**获取方式： ` HTTP GET`

**发送参数:

```json
{
	"fid": 10006,
    "year": "2020"
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/person_eval`**

**调用例子:  `http://localhost:3000/person_eval `**

**返回示例:**
```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "evaluateRecordId": 10,
        "fid": 10006,
        "evaluation": "差",
        "grade": 65,
        "createTime": "2020-11-04",
        "name": "赵肉丝"
    }
}
```


## 绩效再评
说明：对绩效重新进行评价

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
    "evaluateRecordId": 1, 
    "grade": 80   //这里设定的分值是最后得分
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/reEvaluate`**

**调用例子:  `http://localhost:3000/reEvaluate `**

**返回示例:**
```json
{
    "success": true,
    "code": 200,
    "msg": "绩效再评成功"
}
```
```json
{
    "success": false,
    "code": 200,
    "msg": "绩效再评失败，请重试"
}
```