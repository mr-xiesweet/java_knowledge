## 消息通知管理



### 获取通知消息

说明：根据 `fid` 和 `positionId` 获取通知消息

#### 获取方式： ` HTTP GET`

#### 发送参数:

```json
{
	"fid": 10009,
    "positionId": 3
}
```

#### 返回数据格式:  ` JSON`

#### 接口地址(模拟)：` http://localhost:3000/notice`

#### 调用例子:  `http://localhost:3000/notice`

#### 返回示例:

```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": [
        {
            "noticeId": 7,
            "noticeModeId": 2,
            "noticeSourceId": 2,
            "noticeTypeId": 2,
            "createTime": "2020-11-02T13:15:22.000Z",
            "noticeMode": "私发",
            "noticeType": "已通过",
            "noticeSource": "岗位"
        }
    ]
}
```

