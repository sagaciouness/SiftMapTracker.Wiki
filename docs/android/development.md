# Android 构建与贡献

## 项目结构

- `app`：Android 主界面、屏幕采集、框选、悬浮 HUD、路线导入和更新检查。
- `engine`：SIFT、模板匹配、特征缓存和路线数学。
- `tools`：构建、APK 内容校验、安装和采集诊断脚本。

当前配置使用 Android SDK 35、最低 API 29、OpenCV 4.13.0，仅打包 `arm64-v8a`。

## Debug 构建

项目当前没有 Gradle Wrapper，需要开发机提供可用的 `gradle` 命令和 Android SDK。使用 PowerShell 7：

```powershell
pwsh -NoLogo -NoProfile -File .\tools\build-debug.ps1
```

脚本依次运行引擎单元测试、Debug APK 构建和包体校验。输出位于：

```text
app\build\outputs\apk\debug\app-debug.apk
```

APK 校验会检查包名、版本、体积、8192×8192 地图、SIFTBIN2 特征缓存、路线数量和仅 arm64 原生库，并拒绝已移除的 ONNX 物品识别资产。

## 发布签名

`release-signing.properties` 和密钥库属于本地秘密，不得提交。玩家升级必须持续使用同一签名；丢失签名会导致新版 APK 无法覆盖安装旧版。

## 测试重点

- Android 10、13、14 及更新版本的通知和 MediaProjection 行为。
- 不同厂商小窗/分屏及悬浮层实现。
- “整个屏幕”授权与错误单应用授权的提示路径。
- SIFT/TM 锁定、丢失和重新定位。
- HUD 拖动、尺寸、透明度、地图缩放和长时间运行稳定性。
- 新旧路线 JSON 导入、路线总览和异常文件隔离。

真机采集问题可运行 `tools/collect-capture-diagnostics.ps1` 收集设备信息、屏幕尺寸、MediaProjection 状态和 `SiftCapture` 日志。诊断输出位于 `build/capture-diagnostics/<timestamp>/`，提交前应检查其中是否包含设备标识等隐私信息。
