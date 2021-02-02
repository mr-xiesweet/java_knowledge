

## 岗/职位调整申请

说明：用户提交岗/职位调整申请,若已存在相同fid且未审核，则无法申请

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
    //以职位调动为例
	"fid": 10002, 
	"transferTypeId": 1,  
    //当transferTypeId为2时，oldPositionId和positionId为null，剩下四个有值
	"oldPositionId": 4, 
	"positionId": 3, 
	"oldStationId": null, 
	"stationId": null, 
	"oldLevelId": null, 
	"levelId": null, 
	"modeId": 0, 
	"reason": "哈哈哈", 
	"applyTime": "2020-10-03T03:12:23.000Z" 
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/pos_transfer`**

**调用例子:  `http://localhost:3000/pos_transfer`**

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



## 获取所有岗/职位申请

说明：根据mode返回未审核或已审核的数据，统一分页获取所有岗/职位调整申请信息，8条数据一页

**获取方式： ` HTTP GET`**

**发送参数:**

```json
{
    "page": 1,
    "mode": "apply" //或者"finished"
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/pos_transferApply`**

**调用例子:  `http://localhost:3000/pos_transferApply`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "data": [
            {
                "transferId": 4,
                "transferTypeId": 2,
                "fid": 10009,
                "oldStationId": 4,
                "stationId": 2,
                "oldLevelId": 7,
                "levelId": 4,
                "positionId": null,
                "oldPositionId": null,
                "reason": "哈哈哈啊",
                "applyTime": "2020-10-14",
                "updateTime": "2020-10-14",
                "modeId": 0,
                "name": "吴汉标",
                "transferTypeName": "岗位调动",
                "stationName": "科研主体型",
                "oldStationName": "实践教学型",
                "levelName": "专业技术5级岗",
                "oldLevelName": "专业技术8级岗"
            }
        ],
        "sum": 1
    }
```



## 岗/职位调整审核

说明：审核岗/职位调整申请，若通过，同时修改 `station_file_table`  , `teachLoad_record_table` 相关的字段

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
  "transferId": 6,
  "transferTypeId": 1,
  "fid": 10002,
  "oldStationId": null,
  "stationId": null,
  "oldLevelId": null,
  "levelId": null,
  "positionId": 3,
  "oldPositionId": 4,
  "reason": '哈巴儿',
  "applyTime": '2020-10-15',
  "updateTime": '2020-10-15',
  "modeId": 1,
  "name": '张三',
  "transferTypeName": '职位调动',
  "positionName": '教务员',
  "oldPositionName": '教师'
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/audit_posTransfer`**

**调用例子:  `http://localhost:3000/audit_posTransfer`**

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



## 删除岗/职位调整已审核记录

说明：删除岗/职位调整已审核记录

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
  "transferId": 6,
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/delete_posTransfer`**

**调用例子:  `http://localhost:3000/delete_posTransfer`**

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
    "msg": "删除失败，请重试"
}
```



## 设置岗位

说明：修改岗位名称或新增岗位

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
  //以添加岗位为例
  "mode": "add",
  "stationId": null,
  "newName": "职业规划型"
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/set_station`**

**调用例子:  `http://localhost:3000/set_station`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "岗位设置成功"
}
```

```json
{
    "success": false,
    "code": 200,
    "msg": "岗位设置失败，请重试"
}
```



## 设置职位

说明：修改职位名称或新增职位

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
  //以添加职位为例
  "mode": "add",
  "positionId": null,
  "newName": "主任"
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/set_position`**

**调用例子:  `http://localhost:3000/set_position`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "职位设置成功"
}
```

```json
{
    "success": false,
    "code": 200,
    "msg": "职位设置失败，请重试"
}
```