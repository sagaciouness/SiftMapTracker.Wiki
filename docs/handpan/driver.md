# 驱动下载、安装与卸载

适用：自动手碟 0.1.6，Interception v1.0.1。本页包含首次安装、下载校验与卸载步骤。

## 下载哪些文件

- [Interception v1.0.1 官方发布页](https://github.com/oblitum/Interception/releases/tag/v1.0.1)
- [官方 Interception.zip 直链](https://github.com/oblitum/Interception/releases/download/v1.0.1/Interception.zip)
- [上游说明](https://github.com/oblitum/Interception#driver-installation)

在 Assets 中选择 **Interception.zip**，不要下载 Source code。本教程固定使用该版本，不使用第三方重打包驱动。

![官方驱动下载选项示意，选择 Interception.zip](/screenshots/handpan/driver-download.svg)

| 文件 | 在哪里 | 玩家需要做什么 |
| --- | --- | --- |
| `install-interception.exe` | 驱动 ZIP 内 `Interception/command line installer/` | 管理员终端执行安装或卸载，之后重启 |
| x64 `interception.dll` | 驱动 ZIP 内 `Interception/library/x64/` | 当前手碟包已自带对应 DLL，正常使用无需另行复制 |
| 软件自带的 DLL | 自动手碟目录 `Input/Interception/x64/interception.dll` | 保留目录结构；缺失时重新完整解压官方软件包 |
| `interception.lib`、源码和示例 | 上游驱动包内 | 正常使用不需要操作，也不用编译 |

“键盘品牌驱动”不等于 Interception，例如键盘厂商用来调灯光的软件不能替代此步骤。不必为了使用手碟卸载厂商软件。

## 安装与重启

![安装目录和管理员 PowerShell 命令示意，需替换为自己的真实路径](/screenshots/handpan/driver-install.svg)

1. 下载并完整解压上面的 **Interception.zip**。
2. 打开解压后的 `command line installer` 文件夹，确认其中有 `install-interception.exe`，点击资源管理器地址栏复制完整路径。
3. 在 Windows 开始菜单搜索 **PowerShell**，右键选择 **以管理员身份运行**。
4. 保存工作并关闭游戏。在管理员 PowerShell 中执行下面两条命令，**把第一条的路径换成刚才复制的路径**：

```powershell
Set-Location -LiteralPath "D:\Downloads\Interception\command line installer"
Test-Path -LiteralPath ".\install-interception.exe"
```

显示 `True` 表示已找到安装器；显示 `False` 时重新检查文件夹路径。找到安装器后执行：

```powershell
.\install-interception.exe /install
```

看到 `Interception successfully installed. You must reboot for it to take effect.` 后，通过 Windows 开始菜单选择 **重启**。

重启后打开自动手碟，继续[下载并导入曲子](./quick-start#_3-下载一首曲子-导入并试听)。安装报错时，保留完整提示并查看[驱动问题](./troubleshooting#驱动装不上或查找不到键盘)。

上游 README 写明需要管理员命令行安装，测试范围仅明确到 Windows 10；更新的系统不能据此保证可用。系统拒绝加载时，不关闭安全启动、内存完整性或签名保护。

## 可选：检查下载文件是否一致

在普通 PowerShell 中运行，替换成你实际下载的文件路径：

```powershell
Get-FileHash -LiteralPath "D:\Downloads\Interception.zip" -Algorithm SHA256
```

本项目核对过的 v1.0.1 文件记录：

| 文件 | SHA-256 |
| --- | --- |
| `Interception.zip` | `AD038963D6413055765128B0B931F6E765147C9916DBA79E65D872B261F9AF10` |
| `install-interception.exe` | `E137863A79DA797F08E7A137280FF2A123809044A888FD75CE9C973198915ABE` |
| x64 `interception.dll` | `AB88164C11B1B48488772D4C3BFAA4509D5B0AE9DBC5A691DC4F96F0260443C8` |

不一致时先停止安装，核对版本、下载地址和是否解压了正确文件。哈希一致只能说明与记录的文件相同，不能保证游戏兼容或没有风险。

本项目对安装器和 DLL 的检查显示没有嵌入式 Authenticode 签名；这不是对内部驱动签名的结论，也不是让你忽略系统拦截的理由。

## 不用了怎么卸载

1. 保存曲谱，停止演奏，关闭自动手碟和其他使用 Interception 的软件。
2. 找到原来解压的 `install-interception.exe`。丢失时重新从本页的官方链接获取同版本驱动包。
3. 以管理员身份打开 PowerShell，进入安装器所在文件夹。
4. 执行以下命令，查看输出并保存错误信息：

```powershell
.\install-interception.exe /uninstall
```

5. 卸载成功后手动重启电脑。

删除自动手碟文件夹**不会卸载系统驱动**。卸载 Interception 也会影响其他依赖它的工具，请确认后再操作。不要手工删除 Windows 系统目录里的驱动文件。
