## 所有公共工作量项

说明：获取数据库中所有公共工作量项数据

**获取方式： ` HTTP GET`**

**发送参数:**

```json
{
    //null
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/publicLoad_sum`**

**调用例子:  `http://localhost:3000/publicLoad_sum`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": [
        {
            "workLoadId": 1,
            "workLoad": "受学校邀约作讲座、报告",
            "measure": "次",
            "gpa": 5
        },
        {
            "workLoadId": 2,
            "workLoad": "专家评审期刊论文",
            "measure": "篇",
            "gpa": 2
        },
        {
            "workLoadId": 3,
            "workLoad": "专家评审科研课题、教改课题、其他项目，根据评审内容",
            "measure": "次",
            "gpa": 3
        }
        ...
    ]
}
```



## 所有教科研工作量项

说明：获取数据库中所有教科研工作量项和额外加分项列表，以及额外加分项单位列表

**获取方式： ` HTTP GET`**

**发送参数:**

```json
{
    //null
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/scientLoad_sum`**

**调用例子:  `http://localhost:3000/scientLoad_sum`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "scientList": [
            {
                "workLoadId": 1,
                "workLoad": "国家级科学技术一等奖",
                "gpa": 350,
                "measure": "项",
                "scientTypeId": 1,
                "scientLoadType": "科技类成果获奖"
            },
            {
                "workLoadId": 2,
                "workLoad": "国家级科学技术二等奖",
                "gpa": 260,
                "measure": "项",
                "scientTypeId": 1,
                "scientLoadType": "科技类成果获奖"
            },
            {
                "workLoadId": 3,
                "workLoad": "国家级科学技术三等",
                "gpa": 200,
                "measure": "项",
                "scientTypeId": 1,
                "scientLoadType": "科技类成果获奖"
            }
            ...
        ],
         "extraList": [
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            51,
            52,
            53,
            56,
            57,
            74
        ],
        "extraMeasureList": [
            {
                "extraMeasureId": 1,
                "extraMeasureName": "获批金额（每万元）"
            },
            {
                "extraMeasureId": 2,
                "extraMeasureName": "万字"
            },
            {
                "extraMeasureId": 3,
                "extraMeasureName": "转化经费(每万元)"
            }
        ]
    }
}
```



## 上传公共工作量项及佐证

说明：获取数据库中所有教科研工作量项和额外加分项列表，以及额外加分项单位列表

**获取方式： ` HTTP POST`**

**发送格式:	`multipart/form-data;`**

**发送参数:**

```json
{
    "file": `xxx.jpg`, 	//File类型
    "workLoadType": "public",
    "workLoadTypeId": 2,
    "fid": 10002,
    "workLoadId": 4,
    "modeId": 0,
    "extra": 0,
    "calc": 0
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/publicLoad`**

**调用例子:  `http://localhost:3000/publicLoad`**

**返回示例:**

```json
{
    "success": false,
    "code": 200,
    "msg": "上传失败"
}
```

```json
{
    "success": true,
    "code": 200,
    "msg": "上传成功"
}
```



## 上传教科研工作量项及佐证

说明：获取数据库中所有教科研工作量项和额外加分项列表，以及额外加分项单位列表

**获取方式： ` HTTP POST`**

**发送格式:	`multipart/form-data;`**

**发送参数:**

```json
{
    "file": `xxx.jpg`, 	//File类型
    "workLoadType": "scientific",
    "workLoadTypeId": 1,
    "fid": 10002,
    "workLoadId": 4,
    "modeId": 0,
    "extra": 0,
    "calc": 0,
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/scientLoad`**

**调用例子:  `http://localhost:3000/scientLoad`**

**返回示例:**

```json
{
    "success": false,
    "code": 200,
    "msg": "上传失败"
}
```

```json
{
    "success": true,
    "code": 200,
    "msg": "上传成功"
}
```



## 所有待审核工作量项

说明：获取所有待审核工作量佐证和信息

**获取方式： ` HTTP GET`**

**发送参数:**

```json
{
    "page": 1,
    "mode": "apply" //"finished"
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/load_manage`**

**调用例子:  `http://localhost:3000/load_manage`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "data":[
        	{
                "storageId": 11,
                "originalname": "总场景分场景描述.docx",
                "destination": "public/uploads/scientific/",
                "filename": "1601817285283.docx",
                "workLoadTypeId": 1,
                "fid": 10002,
                "workLoadId": 3,
                "modeId": 0,
                "extra": 0,
                "uploadTime": "2020-10-04",
                "name": "张三",
                "workLoadType": "教科研工作量",
                "applyMode": "未审批",
                "workLoad": "国家级科学技术三等"
            },
            {
                "storageId": 13,
                "originalname": "绩效考核系统接口文档2.0.md",
                "destination": "public/uploads/scientific/",
                "filename": "1602070764044.md",
                "workLoadTypeId": 1,
                "fid": 10002,
                "workLoadId": 41,
                "modeId": 0,
                "extra": 0,
                "uploadTime": "2020-10-07",
                "name": "张三",
                "workLoadType": "教科研工作量",
                "applyMode": "未审批",
                "workLoad": "国家级教学成果二等奖"
            }
 			...
    	],
		"sum": 20   
	}
}
```



## 下载佐证

说明：下载对应佐证

**获取方式： ` HTTP GET`**

**发送参数:**

```json
{
    "destination": xxx/xxx/xxx, 
    "filename": xxx.doc,   //存储名
    "originalname": xxx.doc 	//原名
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/download_load`**

**调用例子:  `http://localhost:3000/download_load`**

**返回示例:**

```json
//前端用window.open()调用
```



## 获取工作量计量单位

说明：根据 `workLoadTypeId` 和 `workLoadId` 查询相关计量单位，教科研工作量存在加分项单位，需联表 `scientload_extra_table`

**获取方式： ` HTTP GET`**

**发送参数:**

```json
{
    "workLoadTypeId": 1,
    "workLoadId": 30 
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/measure`**

**调用例子:  `http://localhost:3000/measure`**

**返回示例:**

```json
{
    "success": false,
    "code": 200,
    "msg": "查询失败"
}
```

```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "measure": "项",
        "extraMeasure": "获批金额（每万元）"
    }
}
```



## 审核工作量

说明：审核工作量，若审核通过，改变该用户相关绩点记录

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
    "workLoadTypeId": 1,
    "storageId": 3,
    "workLoadId": 30,
    "extra": 2,
    "calc": 1,
    "modeId": 1,
    "fid": 10009
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/audit_workLoad`**

**调用例子:  `http://localhost:3000/audit_workLoad`**

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



## 获取工作量类型

说明：获取公共和教科研的工作量类型列表

**获取方式： ` HTTP GET`**

**发送参数:**

```json
//null
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/workLoadType`**

**调用例子:  `http://localhost:3000/workLoadType`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "workLoadTypeRow": [
            {
                "workLoadTypeId": 1,
                "workLoadType": "教科研工作量"
            },
            {
                "workLoadTypeId": 2,
                "workLoadType": "公共工作量"
            },
            {
                "workLoadTypeId": 3,
                "workLoadType": "基础教学工作量"
            }
        ],
        "scientTypeRow": [
            {
                "scientTypeId": 1,
                "scientLoadType": "科技类成果获奖"
            },
            {
                "scientTypeId": 2,
                "scientLoadType": "艺术类成果获奖"
            },
            {
                "scientTypeId": 3,
                "scientLoadType": "成果鉴定"
            },
            {
                "scientTypeId": 4,
                "scientLoadType": "科研项目"
            },
            {
                "scientTypeId": 5,
                "scientLoadType": "教学成果获奖"
            },
            {
                "scientTypeId": 6,
                "scientLoadType": "教研项目"
            },
            {
                "scientTypeId": 7,
                "scientLoadType": "著作"
            },
            {
                "scientTypeId": 8,
                "scientLoadType": "学术论文"
            },
            {
                "scientTypeId": 9,
                "scientLoadType": "论文被收录、摘录"
            },
            {
                "scientTypeId": 10,
                "scientLoadType": "知识产权类"
            },
            {
                "scientTypeId": 11,
                "scientLoadType": "标准"
            },
            {
                "scientTypeId": 12,
                "scientLoadType": "科技平台与创新团队"
            },
            {
                "scientTypeId": 13,
                "scientLoadType": "工程中心"
            }
        ]
    }
}
```



## 获取绩点

说明：获取相应工作量项的绩点，部分教科研工作量项有加分项绩点

**获取方式： ` HTTP GET`**

**发送参数:**

```json
{
    //以含有加分项的教科研工作量项为例
    "workLoadTypeId": 1,
    "workLoadId": 30
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/gpa`**

**调用例子:  `http://localhost:3000/gpa`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "查询成功",
    "data": {
        "gpa": 50,
        "extraGpa": 5
    }
}
```



## 修改工作量项

说明：修改工作量项绩点值，部分教科研工作量项可修改加分项绩点

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
   //以含有加分项的教科研工作量项为例
   "workLoadTypeId": 1, 
   "workLoadId": 30,
   "measure": "项", 
   "gpa": 50, 
   "extraGpa": 5, 
   "extraMeasure": "获批金额（每万元）" 
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/mod_workLoad`**

**调用例子:  `http://localhost:3000/mod_workLoad`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "更改工作量成功"
}
```

```json
{
    "success": false,
    "code": 200,
    "msg": "更改工作量失败，请重试"
}
```



## 新增工作量项

说明：新增工作量项，用户定义名称和绩点值，教科研工作量项有 `教科研类型` 属性，部分教科研工作量项可添加加分项绩点

**获取方式： ` HTTP POST`**

**发送参数:**

```json
{
   //以含有加分项的教科研工作量项为例
   "workLoadTypeId": 1, 
   "workLoad": "创新创业科研项目",
   "measure": "项", 
   "gpa": 40, 
   "extraGpa": 3, 
   "extraMeasure": "获批金额（每万元）" ,
   "scientTypeId": 4
}
```

**返回数据格式:  ` JSON`**

**接口地址(模拟)：` http://localhost:3000/add_workLoad`**

**调用例子:  `http://localhost:3000/add_workLoad`**

**返回示例:**

```json
{
    "success": true,
    "code": 200,
    "msg": "新增工作量成功"
}
```

```json
{
    "success": false,
    "code": 200,
    "msg": "新增工作量失败，请重试"
}
```

