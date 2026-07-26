# 下载与安装

## 系统要求

- Windows 10 或 Windows 11，64 位系统。
- 能正常运行《洛克王国：世界》的显卡和显示环境。
- 普通运行建议至少保留 2 GB 可用内存和足够的解压空间；首次生成小尺寸动态 SIFT 缓存时需要至少 4 GB 可用物理内存。
- 游戏小地图必须完整可见，不能被其他窗口或录屏浮层遮挡。

## 官方获取渠道

客户端及更新包只通过以下渠道发布：

- [B站：sicuncat](https://space.bilibili.com/1570010855)
- [抖音：偏差](https://www.douyin.com/user/MS4wLjABAAAAEVsQb2aABflGGf7fabxefdFMzV6GFwROH2jmYVMv0-ExGRsDxHaVjpgADCpsxoCs)
- 客户端“检查更新”页面提供的百度网盘或夸克网盘链接

GitHub 仓库用于代码与文档版本管理，不作为玩家安装包的官方获取渠道。网盘地址可能随版本变化，请以客户端更新页当时显示的链接为准。

::: danger 防骗提醒
本项目免费发布。任何以出售激活码、会员或付费安装为名收取费用的行为均与项目无关。
:::

## 解压检查

解压后至少应能看到：

```text
SIFT-Map-Tracker-v0.9.5/
├─ SiftMapTracker.Client.exe
├─ sift-map-tracker/
│  ├─ service/
│  │  └─ service.exe
│  ├─ assets/
│  ├─ routes/
│  ├─ resources/
│  └─ runtime/
└─ screen-recognition/
   └─ service/
      ├─ service.exe
      └─ screen-recognition.manifest.json
```

地图定位和 OCR 服务均为单文件程序，不应出现 `_internal` 运行库目录。如果任一 `service.exe` 缺失、大小明显异常或被安全软件隔离，请重新获取完整玩家包，不要从其他版本单独复制服务文件。

## 安全软件提示

程序内含由 Python 打包的本地识图服务，部分安全软件可能误报或隔离其运行库。不要盲目关闭系统安全功能；先核对下载渠道、包体版本与文件完整性，再为确认安全的目录恢复被隔离文件。
