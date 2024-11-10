---
title: "LVGL Benchmark"
description: ""
sidebar_position: 3
---

```bash
git clone https://gitee.com/embeddedboys/lv_port_linux
cd lv_port_linux
git checkout release/v8.2
git submodule update --init

# 修改 lv_conf.h
#define LV_COLOR_DEPTH 16
#define LV_FONT_MONTSERRAT_12 1
#define LV_FONT_MONTSERRAT_16 1
#define LV_USE_DEMO_BENCHMARK   1
#define LV_USE_DEMO_MUSIC       1
# define LV_DEMO_MUSIC_AUTO_PLAY    1

# 修改 main.c
disp_drv.hor_res    = 480;
disp_drv.ver_res    = 320;

make -j$(nproc)
```

| 测试项 | 成绩 | 单位 |
| lv_demo_benchmark | 