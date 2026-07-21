# Android 下载与安装

## 官方获取渠道

Android 安装包只通过以下渠道发布：

- [B站：sicuncat](https://space.bilibili.com/1570010855)
- [抖音：偏差](https://www.douyin.com/user/MS4wLjABAAAAEVsQb2aABflGGf7fabxefdFMzV6GFwROH2jmYVMv0-ExGRsDxHaVjpgADCpsxoCs)
- Android 客户端“检查更新”弹窗提供的当前下载链接

GitHub 仓库用于代码与文档版本管理，不作为玩家 APK 的官方获取渠道。

::: danger 防骗提醒
本项目免费发布。任何出售激活码、会员或付费安装的行为均与项目无关。
:::

## v0.9.0 包体信息

- 文件名：`SIFTMapTracker-Android-0.9.0.apk`
- 包名：`com.siftmaptracker.android`
- 架构：`arm64-v8a`
- 大小：`192,578,773` 字节（约 183.66 MiB）
- SHA-256：`50F82004587FD2FA6BA3CFB39E04FB92B6AD00EF5129A034F3FD7F26B27EF059`

文件名可以被修改，校验时应以包名、版本和 SHA-256 为准。

## 安装步骤

1. 下载 APK 后，在系统文件管理器中打开。
2. 如果系统阻止安装，为当前文件管理器或浏览器临时允许“安装未知应用”。
3. 完成安装后关闭该来源的安装权限，不需要长期开放。
4. 启动器中的应用名称为“SIFT 地图追踪”。

升级官方版本时可直接安装新 APK，应用设置和已导入路线通常会保留。若系统提示签名不一致，不要卸载后强行安装，应重新核对下载渠道；卸载会清除应用私有设置和导入路线。

## 安装失败

- “无法解析安装包”：确认系统不低于 Android 10，下载文件完整。
- “与设备不兼容”：当前只打包 `arm64-v8a`，不支持 32 位设备。
- “签名不一致”：当前 APK 与已安装版本不是同一签名，先核对来源。
- 空间不足：APK 包含大地图与特征缓存，安装时需要额外临时空间。
