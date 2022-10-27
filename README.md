# TDX TRA Transfers
該工具是用於以TDX上的台鐵車站ID查詢轉乘車站用

## 使用方式
```
import getTransfersByTraStationId from '../src/index.js'
const transfers = getTransfersByTraStationId('1000')) // 1000 為台北站
```

## 回傳資料格式

```bash
[
  {
    Service: 'THSR',
    StationID: '1000',
    StationName: { Zh_tw: '台北', En: 'Taipei' } // 站名
  },
  ...
]
```

Service 欄位代表轉乘車站是什麼服務，服務類型如下：
THSR:台灣高鐵,TRTC:臺北捷運,KRTC:高雄捷運,TYMC:桃園捷運,TMRT:臺中捷運,KLRT:高雄輕軌,NTDLRT:淡海輕軌,TRTCMG:貓空纜車
StationID 欄位為車站ID
StationName 欄位為站名

## 範例
clone該專案後執行
```bash
npm run test
```