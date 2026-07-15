# 🎨 Tintly - Color Palette Generator

The objective of this project is **not** to generate random colors.
Instead, the goal is to generate **usable, accessible, visually harmonious color systems** that can be directly used in websites, applications, dashboards, and design systems.

### Why HSL instead of RGB?

**HSL is much easier for humans to understand and manipulate**.

- RGB describes how much Red, Green, and Blue light exists.
- Changing RGB values often produces unpredictable color shifts.
- HEX is simply another representation of RGB.

> Not ideal for generating palettes.

while HSL stands for ***Hue, Saturation & Lightness***

```text
hsl(217°, 90%, 61%)
```

Changing one property affects only one visual aspect.

- Increase Lightness : Blue → Lighter Blue
- Decrease Saturation : Blue → Grayish Blue
- Increase Hue  Blue → Purple → Pink → Red

## Understanding HSL

#### 1. Hue : Represents the actual color.

Range : 0° → 360°

| Hue  | Color  |
| ---- | ------ |
| 0°   | Red    |
| 30°  | Orange |
| 60°  | Yellow |
| 120° | Green  |
| 180° | Cyan   |
| 240° | Blue   |
| 300° | Purple |
| 360° | Red    |
#### 2. Saturation : Represents color intensity.

Range : 0% → 100%

- 0% -> Gray
- 25% -> Muted
- 50% -> Balanced
- 75% -> Vibrant
- 100% -> Pure Color
#### 3. Lightness : Represents brightness.

Range : 0% → 100%

- 0% -> Black
- 25% -> Dark 
- 50% -> Original Color
- 75% -> Light
- 100% -> White
## Typical Light Mode Values

> These are common ranges seen across modern websites

| Role       | Lightness |
| ---------- | --------- |
| Background | 95–99%    |
| Surface    | 92–97%    |
| Cards      | 90–96%    |
| Primary    | 40–60%    |
| Text       | 10–20%    |
| Border     | 80–90%    |

Most of the interface remains neutral. Only primary and accent colors carry strong saturation.


## Typical Dark Mode Values

> Dark mode is **not** an inverted light mode.

| Role       | Lightness |
| ---------- | --------- |
| Background | 8–15%     |
| Surface    | 12–20%    |
| Cards      | 15–25%    |
| Border     | 20–30%    |
| Text       | 85–95%    |

Dark interfaces generally soften whites and avoid pure black backgrounds while maintaining sufficient contrast. 

