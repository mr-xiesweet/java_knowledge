



## 获取个人档案

说明：根据 `fid` 获取个人档案

**获取方式： ` HTTP GET`**

**发送参数:**

```json
{
	"fid": 10001
}
```
**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/personFile`**

**调用例子:  `http://localhost:3000/personFile`**

**返回示例:**

```json
//院长、部门主管
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "fid": 10005,
        "name": "吴一凡",
        "sex": "男",
        "age": 51,
        "phone": "15916100000",
        "email": "helloworld@qq.com",
        "positionId": 1,
        "positionName": "院长"
    }
}
```

```json
//教务员
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "fid": 10003,
        "name": "李四",
        "sex": "男",
        "age": 35,
        "phone": "13800000000",
        "email": "10001@qq.com",
        "sectionId": 1,
        "sectionName": "人事处",
        "positionId": 3,
        "positionName": "教务员"
    }
}
```

```json
//教师
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "fid": 10002,
        "name": "张三",
        "sex": "男",
        "age": 32,
        "phone": "15816993417",
        "email": "10086@qq.com",
        "stationId": 1,
        "stationName": "教师主体型",
        "levelId": 2,
        "positionId": 4,
        "positionName": "教师"
    }
}
```



## 获取所有人档案

说明：获取所有人档案，同时返回数据长度

**获取方式： ` HTTP GET`**

**发送参数:**

```json
{
	"page": 1
}
```
**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/memberFile`**

**调用例子:  `http://localhost:3000/memberFile`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "data": [
            {
                "fid": 10002,
                "name": "张三",
                "sex": "男",
                "age": 32,
                "phone": "15816993417",
                "email": "10086@qq.com",
                "positionId": 4,
                "positionName": "教师"
            },
            {
                "fid": 10003,
                "name": "李四",
                "sex": "男",
                "age": 35,
                "phone": "13800000000",
                "email": "10001@qq.com",
                "positionId": 3,
                "positionName": "教务员"
            },
            ...
        ],
        "sum": 10
    }
}
```



## 人员档案录入

说明：录入人员档案，自动生成人员档案ID

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
	"name": "苏少权",
  	"sex": "男",
  	"age": "22",
  	"phone": "15811000000",
  	"email": "sushaoquanssb@qq.com",
  	"positionId": 4,
    /**********以下参数需判断后进行录入***********/
    //教师
    "stationId": 3,
  	"levelId": 6,
    //教务员
    "sectionId": 2
}
```
**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/m_register`**

**调用例子:  `http://localhost:3000/m_register`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "注册成功，职工号10086"
}
```

```json
{
    "success": false,
    "code": 200,
    "msg": "注册失败，请重试"
}
```



## 入/离职申请

说明：入职、离职申请

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
	"fid": 10002,
    "positionId": 4,
    "applicant": "苏少权",
    "createTime": "2020-10-03T03:12:23.000Z",
    "reason": "我不干了",
    "applyTypeId": 2,
    "modeId": 0
}
```
**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/memberApply`**

**调用例子:  `http://localhost:3000/memberApply`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "申请成功，请等待审核"
}
```

```json
{
    "success": false,
    "code": 200,
    "msg": "申请失败，请重试"
}
```



## 所有入/离职申请(未审批数据)

说明：获取所有入职、离职申请数据，将数据库中的时间戳格式化成“YYYY-MM-DD”返回

**获取方式： ` HTTP GET`**

**发送参数:**

```json
{
    //每页返回8条数据
    "page": 1
}
```
**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/allMemberApply`**

**调用例子:  `http://localhost:3000/allMemberApply`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "data": [
            {
                "mid": 2,
                "applicant": "苏少权",
                "fid": 10002,
                "applyTypeId": 1,
                "reason": "我有个梦想，想做一个好老师",
                "modeId": 0,
                "applyTime": "2020-09-21",
                "updateTime": "2020-09-23",
                "positionId": 4,
                "positionName": "教师",
                "applyType": "入职",
                "applyMode": "未审批"
            },
            {
                "mid": 4,
                "applicant": "Madam koo",
                "fid": 10006,
                "applyTypeId": 1,
                "reason": "我不是一个花瓶，我是实力派",
                "modeId": 0,
                "applyTime": "2020-09-22",
                "updateTime": "2020-09-22",
                "positionId": 2,
                "positionName": "部门主管",
                "applyType": "入职",
                "applyMode": "未审批"
            }
            ...
        ],
        "sum": 4
    }
}
```



## 所有入/离职申请(已审批数据)

说明：获取所有入职、离职申请数据，将数据库中的时间戳格式化成“YYYY-MM-DD”返回

**获取方式： ` HTTP GET`**

**发送参数:**

```json
{
    //每页返回8条数据
    "page": 1
}
```
**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/allMemberFinished`**

**调用例子:  `http://localhost:3000/allMemberFinished`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "data": [
            {
                "mid": 3,
                "applicant": "欧阳辣辣",
                "fid": 10002,
                "applyTypeId": 1,
                "reason": "我要做教务员，谢谢大家",
                "modeId": 1,
                "applyTime": "2020-09-21",
                "updateTime": "2020-10-07",
                "positionId": 3,
                "positionName": "教务员",
                "applyType": "入职",
                "applyMode": "通过"
            },
            {
                "mid": 9,
                "applicant": "丧钟",
                "fid": 10002,
                "applyTypeId": 1,
                "reason": "听说蒋世龍在你们这",
                "modeId": 2,
                "applyTime": "2020-09-25",
                "updateTime": "2020-10-07",
                "positionId": 1,
                "positionName": "院长",
                "applyType": "入职",
                "applyMode": "未通过"
            }
            ...
        ],
        "sum": 4
    }
}
```



## 审核入/离职申请

说明：根据 `mid` 将申请数据的 `modeId` 和 `updateTime` 进行更改

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
    "mid": 2,
    "modeId": 1
}
```
**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/auditMember`**

**调用例子:  `http://localhost:3000/auditMember`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "审批成功"
}
```

```json
{
    "success": false,
    "code": 200,
    "msg": "审批失败，请重试"
}
```



## 搜索个人档案

说明：根据 姓名或职工号查询个人档案

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
    "user": 10002 //张三
}
```
**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/searchMember`**

**调用例子:  `http://localhost:3000/searchMember`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "data": [
            {
                "fid": 10002,
                "name": "张三",
                "sex": "男",
                "age": 32,
                "phone": "15816993417",
                "email": "10086@qq.com",
                "positionId": 4,
                "positionName": "教师"
            }
        ],
        "sum": 1
    }
}
```



## 获取所有职位、岗位固定数据

说明：获取职位、岗位、岗位等级、部门的固定数据，以供动态调用

**获取方式： ` HTTP GET`**

**发送参数:**

```json
//null
```
**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/positionList`**

**调用例子:  `http://localhost:3000/positionList`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "levelRow": [
            {
                "levelId": 1,
                "levelName": "专业技术2级岗"
            },
            {
                "levelId": 2,
                "levelName": "专业技术3级岗"
            },
            {
                "levelId": 3,
                "levelName": "专业技术4级岗"
            },
            {
                "levelId": 4,
                "levelName": "专业技术5级岗"
            },
            {
                "levelId": 5,
                "levelName": "专业技术6级岗"
            },
            {
                "levelId": 6,
                "levelName": "专业技术7级岗"
            },
            {
                "levelId": 7,
                "levelName": "专业技术8级岗"
            },
            {
                "levelId": 8,
                "levelName": "专业技术9级岗"
            },
            {
                "levelId": 9,
                "levelName": "专业技术10级岗"
            },
            {
                "levelId": 10,
                "levelName": "专业技术11级岗"
            },
            {
                "levelId": 11,
                "levelName": "专业技术12级岗"
            }
        ],
        "stationRow": [
            {
                "stationId": 1,
                "stationName": "教师主体型"
            },
            {
                "stationId": 2,
                "stationName": "科研主体型"
            },
            {
                "stationId": 3,
                "stationName": "教学建设综合型"
            },
            {
                "stationId": 4,
                "stationName": "实践教学型"
            }
        ],
        "positionRow": [
            {
                "positionId": 1,
                "positionName": "院长"
            },
            {
                "positionId": 2,
                "positionName": "部门主管"
            },
            {
                "positionId": 3,
                "positionName": "教务员"
            },
            {
                "positionId": 4,
                "positionName": "教师"
            }
        ],
        "sectionRow": [
            {
                "sectionId": 1,
                "sectionName": "人事处"
            },
            {
                "sectionId": 2,
                "sectionName": "教务处"
            },
            {
                "sectionId": 3,
                "sectionName": "科研处"
            }
        ],
        "powerRow": [
            {
                "value": 1,
                "text": "管理员"
            },
            {
                "value": 2,
                "text": "院长"
            },
            {
                "value": 3,
                "text": "部门主管"
            },
            {
                "value": 4,
                "text": "教务员(人事处)"
            },
            {
                "value": 5,
                "text": "教务员(教务处)"
            },
            {
                "value": 6,
                "text": "教务员(科研处)"
            },
            {
                "value": 7,
                "text": "教师"
            }
        ]
    }
}
```



## 修改个人档案

说明：修改个人档案

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
    "fid": 10002, 
    "name": "张三", 
    "sex": "男", 
    "age": 22, 
    "phone": "13800000000", 
    "email": "zansan@qq.com"
}
```
**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/personFile`**

**调用例子:  `http://localhost:3000/personFile`**

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
    "msg": "修改失败，请重试"
}
```



## 获取离职状态

说明：获取离职状态

**获取方式： ` HTTP GET`**

**发送参数:**

```json
{
    "fid": 10009
}
```
**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/checkResign`**

**调用例子:  `http://localhost:3000/checkResign`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "applyTypeId": 2,
        "modeId": 2
    }
}
```



## 删除任免申请记录

说明：删除任免申请记录

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
    "mid": 10009
}
```
**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/del_memTransfer`**

**调用例子:  `http://localhost:3000/del_memTransfer`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "删除成功"
}
```

```json
{
    "success": false,
    "code": 200,
    "msg": "删除失败"
}
```


## 删除个人档案

说明：删除个人所有相关档案

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
    "positionId": 3,
    "fid": 10009
}
```
**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/del_memberFile`**

**调用例子:  `http://localhost:3000/del_memberFile`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "删除档案成功"
}
```

```json
{
    "success": false,
    "code": 200,
    "msg": "删除档案失败"
}
```