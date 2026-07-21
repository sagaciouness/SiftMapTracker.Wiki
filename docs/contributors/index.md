# 项目结构与构建

项目由 WPF 客户端和本地 Python 追踪服务组成。

```text
SiftMapTracker.Client/   WPF UI、编辑器、HUD、配置与进程管理
sift-map-tracker/        截图、定位、导航和物品识别服务
```

客户端通过标准输入输出接收服务帧，通过 `runtime/control_state.json` 下发运行状态。路线、资源和测绘数据均为离线文件，不写入游戏目录。

## 客户端构建

```powershell
dotnet build SiftMapTracker.Client/SiftMapTracker.Client.csproj -v:minimal
dotnet build SiftMapTracker.Client/SiftMapTracker.Client.csproj -c Release -v:minimal
```

Publish 前会校验静态定位风险图及其输入哈希。不要跳过校验后发布过期资源。

## 分支与提交

- `verify` 用于验证版本和预发布修复；
- 一个提交只处理一个可独立回退的问题；
- 不提交 `bin`、`obj`、运行时 cache 和玩家数据；
- 客户端和服务端修改分别在各自仓库留下提交记录。

## 安全边界

- 更新与公告外链仅允许 HTTPS 可信主机；
- 路线、资源和配置写入使用同目录临时文件和原子替换；
- 不对不可信 PyTorch checkpoint 使用任意对象反序列化；
- 玩家文档不公开发布密钥、写入凭据或受版权保护的游戏解包内容。

