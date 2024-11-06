---
title: "固件烧录"
description: ""
sidebar_position: 4
---

## UF2 烧录

<!-- ![image](./assets/blink-an-led-final.gif) -->

<img
  src={require('./assets/blink-an-led-final.gif').default}
  alt="Example banner"
/>

图片引用自[树莓派 Pico 中文站](https://pico.org.cn/)

图解步骤：

1. 准备好要烧录的UF2文件
2. 按住核心板上的BOOTSEL按键，插入USB线缆
3. 电脑识别到名为RPI-RP2的可移动存储设备
4. 将要烧录的文件拖放至名为RPI-RP2的可移动存储设备中
5. 等待传输完成，程序自动执行

## debugprobe & DAPLink 烧录{#debugprobe}

在使用本方式烧录之前，需要准备两块Pico核心板。

先安装openocd，windows用户不需要通过此方式手动安装


```bash
sudo apt install automake autoconf build-essential texinfo libtool libftdi-dev libusb-1.0-0-dev libhidapi-dev -y

git clone https://github.com/raspberrypi/openocd.git --recursive --branch rp2040 --depth=1

cd openocd
./bootstrap
./configure --enable-cmsis-dap
make -j12
sudo make install
```

Ubuntu用户还需设置udev规则才能正常使用调试器

```bash {title="~/openocd/"}
cd contrib
sudo cp 60-openocd.rules /etc/udev/rules.d/
sudo udevadm control --reload
sudo udevadm trigger
```


树梅派官方推出过基于RP2040的调试器，在github上开源：[https://github.com/raspberrypi/debugprobe](https://github.com/raspberrypi/debugprobe), 大概长这个样子：
<!-- {{< figure src="images/debugprobe.webp" alt="" >}} -->
![](./assets/debugprobe.webp)

如果有条件的话，可以购买支持官方。

实际上，他们也制作了适用于Pico的固件，我们只需要一个空闲的Pico核心板，然后烧录如下固件：

首选链接：[debugprobe_on_pico.uf2](http://embeddedboys.com/uploads/debugprobe_on_pico.uf2)

备用链接：[debugprobe_on_pico.uf2](https://github.com/raspberrypi/debugprobe/releases/download/debugprobe-v2.0/debugprobe_on_pico.uf2)

待烧录完成后，将Pico连接至电脑，在Ubuntu中可以使用`lsusb`命令可以看到如下设备
```shell
Bus 001 Device 018: ID 2e8a:000c Raspberry Pi Debugprobe on Pico (CMSIS-DAP)
```
在Windows设备上，也可以看到一个名为CMSIS-DAP的设备

然后将烧录好debugprobe的Pico， 按照如下表格中的方式，连接至需要调试的Pico核心板

| debugprobe | Pico |
| --- | --- |
| GND | GND |
| GP2 | SWCLK |
| GP3 | SWDIO |
| GP4/UART1_TX | GP1/UART0_RX |
| GP5/UART1_RX | GP0/UART0_TX |
| VSYS | VSYS |

<!-- {{< callout context="note" title="说明" icon="alert-octagon" >}} -->
:::tip
只将debugprobe连接至电脑即可，如果debugprobe无法给Pico提供电源，则
Pico也需要连接电源。
:::
<!-- {{< /callout >}} -->

连接完成之后 ，使用如下命令烧录固件至Pico，以blink.elf为例
```shell
openocd -f interface/cmsis-dap.cfg -c "adapter speed 5000" -f target/rp2040.cfg -s tcl -c "program blink.elf verify reset exit"
```

上传程序到 Pico


```bash
sudo openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program blink.elf verify reset exit"
```

## picotool 烧录

（待添加）

此方式需要RP2040处于BOOTSEL模式