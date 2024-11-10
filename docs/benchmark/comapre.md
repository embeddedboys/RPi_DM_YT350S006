---
title: "成绩对比"
description: ""
sidebar_position: 10
---

## 有桌面环境类

### 测试环境

|          |                                      |
|----------|--------------------------------------|
| 操作系统 |  |
| 开发板   | Raspberry Pi 5                       |
| CPU      |            |


## 无桌面环境类

### 测试环境

|          |                                      |
|----------|--------------------------------------|
| 操作系统 | Raspberry Pi OS (LEGACY,32-BIT) Lite |
| 开发板   | Raspberry Pi B                       |
| CPU      | 单核 ARM1176JZF-S @ 700MHz           |

### 说明

1. 关闭控制台光标闪烁
```bash
sudo sh -c 'echo 0 > /sys/class/graphics/fbcon/cursor_blink'
```

2. 取系统空闲状态下测试项的成绩3次平均值，四舍五入保留两位小数

3. 部分测试项耗时较长，仅取一次结果

### fbmark

| 测试项             | LCD35-show | 本平台 | 单位           | 比例    |
|--------------------|------------|--------|----------------|---------|
| fb_rectangle       | 9.52       | 14.41  | MPixels/second | +51.36% |
| fb_sierpinski 1024 | 277.82     | 366.04 | Frames/second  | +31.75% |

### LVGL Benchmark