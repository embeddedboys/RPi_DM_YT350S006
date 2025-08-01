---
sidebar_position: 2
---

# 软件构成

一般来说，一块带有触摸面板的显示屏，其驱动主要由三个组件构成，显示、背光和触摸。

在该项目中，显示接口为 SPI ，背光接口为 GPIO/PWM，触摸接口为 I2C。

原则上，若非必要，应避免对内核代码及配置进行修改。

文中示例所使用的平台为 [Luckfox Pico Pi](https://wiki.luckfox.com/zh/Luckfox-Pico-Pi/)

## 1. 显示

默认使用 ["panel-mipi-dbi-spi"](https://elixir.bootlin.com/linux/v6.16/source/drivers/gpu/drm/tiny/panel-mipi-dbi.c) 驱动

如下是设备树节点示例:

### ["panel-mipi-dbi-spi"](https://elixir.bootlin.com/linux/v6.16/source/drivers/gpu/drm/tiny/panel-mipi-dbi.c)

pinctrl 配置

```c
&pinctrl {
	tft {
		tft_pins: tft_pins {
			rockchip,pins =
				/* tft_dc */
				<1 RK_PD1 RK_FUNC_GPIO &pcfg_pull_none>,
				/* tft_reset */
				<1 RK_PD3 RK_FUNC_GPIO &pcfg_pull_none>;
		};
	};
};
```

SPI 设备节点配置

```c
&spi0 {
	status = "okay";

	spidev@0 {
		status = "disabled";
		spi-max-frequency = <50000000>;
	};

	panel-mipi-dbi@0 {
		#address-cells = <1>;
		#size-cells = <1>;

		pinctrl-names = "default";
		pinctrl-0 = <&tft_pins>;

		compatible = "panel-mipi-dbi-spi";

		spi-max-frequency = <50000000>;
		reg = <0>;

		width-mm = <55>;
		height-mm = <84>;

		reset-gpios = <&gpio1 RK_PD3 GPIO_ACTIVE_HIGH>;
		dc-gpios = <&gpio1 RK_PD1 GPIO_ACTIVE_HIGH>;
		write-only;

		status = "okay";

		panel-timing {
			hactive = <480>;
			vactive = <320>;
			hback-porch = <0>;
			vback-porch = <0>;

			clock-frequency = <0>;
			hfront-porch = <0>;
			hsync-len = <0>;
			vfront-porch = <0>;
			vsync-len = <0>;
		};
	};
};
```

## 2. 背光

先使用 ["gpio-backlight"](https://elixir.bootlin.com/linux/v6.16/source/drivers/video/backlight/gpio_backlight.c) 驱动测试背光，如果目标平台上对应屏幕背光控制引脚具有PWM功能，则可以使用 ["pwm-backlight"](https://elixir.bootlin.com/linux/v6.16/source/drivers/video/backlight/pwm_bl.c) 驱动。 如果以上条件均不满足，可以使用 ["gpio-leds"](https://elixir.bootlin.com/linux/v6.16/source/drivers/leds/leds-gpio.c) 驱动点亮背光。

### ["gpio-backlight"](https://elixir.bootlin.com/linux/v6.16/source/drivers/video/backlight/gpio_backlight.c)
```c
backlight: backlight {
	compatible = "gpio-backlight";
	gpios = <&gpio1 RK_PC6 GPIO_ACTIVE_HIGH>;
	default-on;
};
```

### ["pwm-backlight"](https://elixir.bootlin.com/linux/v6.16/source/drivers/video/backlight/pwm_bl.c)
```c
&pwm10 {
	status = "okay";
	pinctrl-0 = <&pwm10m1_pins>;
};
```

```c
backlight: backlight {
	compatible = "pwm-backlight";
	pwms = <&pwm10 0 50000 0>;
	brightness-levels = <0 4 8 16 32 64 128 255>;
	default-brightness-level = <7>;
	status = "okay";
};
```

注意一下，如果使用 **gpio-backlight** 或者 **pwm-backlight** 驱动，需要在 panel-mipi-dbi 节点中添加如下属性
```c
backlight = <&backlight>; // 放到 panel-timing 配置之前
```

### ["gpio-leds"](https://elixir.bootlin.com/linux/v6.16/source/drivers/leds/leds-gpio.c)
```c
bl_leds {
	compatible = "gpio-leds";

	pinctrl-names = "default";
	pinctrl-0 = <&bl_pins>;

	bl_led0 {
		label = "disaplay:backlight:led0";
		gpios = <&gpio1 RK_PC6 GPIO_ACTIVE_HIGH>;
		default-state = "on";
	};
};
```

## 3. 触摸

根据触摸IC型号选择合适的驱动，目前主流触摸有 GT911 使用 ["goodix,gt911"](https://elixir.bootlin.com/linux/v6.16/source/drivers/input/touchscreen/goodix.c)，FT6236 使用 ["focaltech,ft6236"](https://elixir.bootlin.com/linux/v6.16/source/drivers/input/touchscreen/edt-ft5x06.c) ，电阻触摸屏使用 NS2009 或 TSC2007，对应 ["ti,tsc2007"](https://elixir.bootlin.com/linux/v6.16/source/drivers/input/touchscreen/tsc2007_core.c) （NS2009 是 TSC2007的兼容型号，主要区别是 NS2009 无硬件滤波）

### ["goodix,gt911"](https://elixir.bootlin.com/linux/v6.16/source/drivers/input/touchscreen/goodix.c)

```c
&i2c2 {
	status = "okay";

	touchscreen: gt911@0x5d {
		status = "okay";

		compatible = "goodix,gt911";
		reg = <0x5d>;
		pinctrl-names = "default";
		pinctrl-0 = <&ts_pins>;
		interrupt-parent = <&gpio2>;
		interrupts = <RK_PA7 IRQ_TYPE_EDGE_FALLING>;
		irq-gpios = <&gpio2 RK_PA7 GPIO_ACTIVE_HIGH>;
		reset-gpios = <&gpio2 RK_PA6 GPIO_ACTIVE_HIGH>;
		touchscreen-swapped-x-y;
		touchscreen-inverted-x;
	};
};
```

### ["focaltech,ft6236"](https://elixir.bootlin.com/linux/v6.16/source/drivers/input/touchscreen/edt-ft5x06.c)

:::warning

下面的配置是树莓派平台的

:::

```c
ft6236: ft6236@38 {
	compatible = "focaltech,ft6236";
	reg = <0x38>;
	pinctrl-names = "default";
	pinctrl-0 = <&focaltech_pins>;
	interrupt-parent = <&gpio>;
	interrupts = <23 2>; // IRQ_TYPE_EDGE_FALLING
	reset-gpios = <&gpio 24 1>; // GPIO_ACTIVE_LOW
	touchscreen-size-x = <320>;
	touchscreen-size-y = <480>;
	touchscreen-swapped-x-y;
	touchscreen-inverted-x;
};
```

### ["ti,tsc2007"](https://elixir.bootlin.com/linux/v6.16/source/drivers/input/touchscreen/tsc2007_core.c)

:::warning

下面的配置是树莓派平台的

:::


```c
tsc2007: tsc2007@49 {
	compatible = "ti,tsc2007";
	reg = <0x49>;
	pinctrl-names = "default";
	pinctrl-0 = <&ti_pins>;
	interrupt-parent = <&gpio>;
	interrupts = <4 0x2>; // IRQ_TYPE_EDGE_FALLING
	gpios = <&gpio 4 1>; // GPIO_ACTIVE_LOW
	ti,x-plate-ohms = <257>;
	ti,fuzzx = <320>;
	ti,fuzzy = <480>;
};
```
