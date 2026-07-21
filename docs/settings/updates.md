# 更新、公告与数据

## 更新检查

客户端从官方更新清单读取版本、更新说明和下载地址。下载链接必须使用 HTTPS 且属于受信任主机，避免被篡改的清单启动任意协议。

更新通常通过 QQ 频道、百度网盘或夸克网盘分发。下载新版本后建议解压到新目录，不要直接覆盖正在运行的旧目录。

## 公告

公告支持标题、正文、强调色和最多五个 HTTPS 按钮。点击确认或忽略后，当前公告会消失；公告修订号增加后可再次显示。

## 需要备份的数据

升级前建议备份：

```text
sift-map-tracker/routes/
sift-map-tracker/resources/
sift-map-tracker/survey_maps/
sift-map-tracker/runtime/settings_override.json
sift-map-tracker/runtime/client_state.json
```

不要把旧版本的 `service`、`assets` 或 `_internal` 直接覆盖到新版本，它们可能与客户端和当前赛季地图不兼容。

