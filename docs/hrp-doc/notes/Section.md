

## 获取部门档案

说明：获取各部门档案

**获取方式： ` HTTP GET`**

**发送参数:**

```json
{
    "page": 1, 
    "sectionId": 2
}
```
**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/sectionFile`**

**调用例子:  `http://localhost:3000/sectionFile`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "data": [
            {
                "id": 1,
                "fid": 10003,
                "name": "李四",
                "sectionId": 2,
                "sectionName": "教务处",
                "updateTime": "2020-09-16"
            },
            {
                "id": 3,
                "fid": 10013,
                "name": "小明",
                "sectionId": 2,
                "sectionName": "教务处",
                "updateTime": "2020-09-18"
            }
        ],
        "sum": 2
    }
}
```



## 调部门申请

说明：申请调整部门

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
    "fid": 10002, 
    "oldSectionId": 1, 
    "sectionId": 2, 
    "reason": "111", 
    "applyTime": "2020-10-26T03:12:23.000Z", 
    "modeId": 0
}
```
**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/sectionApply`**

**调用例子:  `http://localhost:3000/sectionApply`**

**返回示例:**

```json
{
    "success": false,
    "code": 200,
    "msg": "该用户已提交同类型申请"
}
```

```json
{
    "success": false,
    "code": 200,
    "msg": "申请失败，请重试"
}
```

```json
{
    "success": true,
    "code": 200,
    "msg": "申请成功，请等待审核"
}
```



## 获取部门申请数据

说明：根据待审核和已审核条件返回部门申请数据

**获取方式： ` HTTP GET`**

**发送参数:**

```json
{
    "mode": "apply", //"finished" 
    "page": 1
}
```
**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/all_sectionApply`**

**调用例子:  `http://localhost:3000/all_sectionApply`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "data": [
            {
                "transferId": 2,
                "fid": 10003,
                "oldSectionId": 2,
                "sectionId": 1,
                "updateTime": "2020-10-23",
                "applyTime": "2020-10-23",
                "reason": "111",
                "modeId": 0,
                "name": "李四",
                "sectionName": "人事处",
                "oldSectionName": "教务处"
            }
        ],
        "sum": 1
    }
}
```



## 部门申请审核

说明：审核调部门申请

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
    "transferId": 1, 
    "sectionId": 1, 
    "modeId": 1, 
    "fid": 10002
}
```
**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/audit_sectionApply`**

**调用例子:  `http://localhost:3000/audit_sectionApply`**

**返回示例:**

```json
{
    "success": false,
    "code": 200,
    "msg": "审核失败，请重试"
}
```

```json
{
    "success": true,
    "code": 200,
    "msg": "审核成功，已驳回"
}
```

```json
{
    "success": true,
    "code": 200,
    "msg": "审核成功，信息已修改"
}
```



## 设置部门

说明：修改部门名称或新增部门


**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
  //以添加部门为例
  "mode": "add",
  "sectionId": null,
  "newName": "财务处"
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/set_section`**

**调用例子:  `http://localhost:3000/set_section`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "部门设置成功"
}
```

```json
{
    "success": false,
    "code": 200,
    "msg": "部门设置失败，请重试"
}
```


## 删除部门申请记录

说明：删除部门申请记录

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
  "transferId": 1,
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/del_sectionRec`**

**调用例子:  `http://localhost:3000/del_sectionRec`**

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