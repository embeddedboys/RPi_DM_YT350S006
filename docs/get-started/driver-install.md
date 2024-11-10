---
title: "安装驱动"
description: ""
sidebar_position: 3
---

您需要安装这些前置软件包
```
sudo apt install git -y
```

复制下面的命令到您的树莓派终端，可通过 ssh 方式登录。
```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/embeddedboys/rpi_dm_yt350s006_software/main/install.sh)"
```

您可能需要提供一些参数，这是一个例子:

假设我们正在用 RPi_DM_YT350S006 进行测试，他的硬件规格如下：

| 项目 | 型号 |
| --- | --- |
| 屏幕面板 | YT350S006 |
| 触摸屏 | GT911 |

