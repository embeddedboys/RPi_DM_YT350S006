---
title: "fbmark"
description: ""
sidebar_position: 2
---

# [fbmark](https://github.com/caramelli/fbmark)

```markdown title="README.md"
Linux Framebuffer Benchmark

The fbmark package contains benchmarks that aim to test and measure the
performance of the frame buffer device (/dev/fb0).

It is licensed under the GNU General Public License v3.0 or later.

Have fun,

Nicolas Caramelli
```

```bash title=""
git clone https://github.com/caramelli/fbmark
cd fbmark && make
```

关闭控制台光标闪烁
```bash
sudo sh -c 'echo 0 > /sys/class/graphics/fbcon/cursor_blink'
```

| 测试项 | 成绩 | 单位 |
| --- | --- | --- |
| fb_rectangle | 14.41 | MPixels/second |
| fb_sierpinski 1024  | 366.04  | Frames/second  |      |
