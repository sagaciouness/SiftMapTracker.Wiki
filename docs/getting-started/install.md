# 下载与安装

## 系统要求

- Windows 10 或 Windows 11，64 位系统。
- 能正常运行《洛克王国：世界》的显卡和显示环境。
- 建议至少保留 2 GB 可用内存和足够的解压空间。
- 游戏小地图必须完整可见，不能被其他窗口或录屏浮层遮挡。

## 官方获取渠道

客户端更新信息以内置更新提示和项目公开渠道为准：

- [GitHub 项目](https://github.com/sagaciouness/SiftMapTracker.Client)
- [QQ 频道](https://pd.qq.com/g/pd29655551)
- 客户端更新页提供的百度网盘或夸克网盘链接

::: danger 防骗提醒
本项目免费发布。任何以出售激活码、会员或付费安装为名收取费用的行为均与项目无关。
:::

## 解压检查

解压后至少应能看到：

```text
SIFT-Map-Tracker-v0.9.3/
├─ SiftMapTracker.Client.exe
└─ sift-map-tracker/
   ├─ service/
   │  ├─ service.exe
   │  └─ _internal/
   ├─ assets/
   ├─ routes/
   ├─ resources/
   └─ runtime/
```

如果 `service/_internal/cv2/cv2.pyd` 不存在，说明压缩包未完整下载、解压失败或被安全软件隔离，服务无法启动。

## 安全软件提示

程序内含由 Python 打包的本地识图服务，部分安全软件可能误报或隔离其运行库。不要盲目关闭系统安全功能；先核对下载渠道、包体版本与文件完整性，再为确认安全的目录恢复被隔离文件。

