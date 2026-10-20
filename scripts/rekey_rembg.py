#!/usr/bin/env python3
"""Clean dark re-key for stock portraits: u2net matte -> studio-style dark backdrop.

Usage: python rekey_rembg.py <src.jpg> <dst.jpg> [<src2> <dst2> ...]
"""
import sys
import numpy as np
from PIL import Image, ImageFilter
from rembg import remove, new_session

TOP = (0x1D, 0x24, 0x31)     # --color-raised
BOT = (0x0E, 0x12, 0x1A)     # --color-field


def backdrop(w: int, h: int) -> np.ndarray:
    """Vertical gradient plus a soft glow behind the subject's head."""
    y = np.linspace(0.0, 1.0, h, dtype=np.float32)[:, None, None]
    bg = np.array(TOP, np.float32) * (1 - y) + np.array(BOT, np.float32) * y
    bg = np.repeat(bg, w, axis=1)
    xs = (np.arange(w, dtype=np.float32) - w / 2) / (w / 2)
    ys = (np.arange(h, dtype=np.float32) - h * 0.30) / (h * 0.55)
    r = np.sqrt(xs[None, :] ** 2 + ys[:, None] ** 2)
    glow = np.clip(1.0 - r, 0, 1) ** 2 * 22.0
    return np.clip(bg + glow[:, :, None], 0, 255)


def rekey(src: str, dst: str) -> None:
    im = Image.open(src).convert("RGB")
    w, h = im.size
    cut = remove(im, session=new_session("u2net")).convert("RGBA")
    a = np.asarray(cut).astype(np.float32)
    alpha = a[:, :, 3] / 255.0
    # tighten the matte: discard the wide semi-transparent fringe that carries backdrop colour
    alpha = np.clip((alpha - 0.28) / 0.60, 0, 1)
    m = Image.fromarray((alpha * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.9))
    al = (np.asarray(m).astype(np.float32) / 255.0)[:, :, None]
    rgb = a[:, :, :3]
    bg = backdrop(w, h)
    # decontaminate the transition ring so no bright fringe survives
    ring = ((al > 0.02) & (al < 0.98)).astype(np.float32)
    rgb = rgb * (1 - 0.55 * ring) + bg * (0.55 * ring)
    out = rgb * al + bg * (1 - al)
    Image.fromarray(out.astype(np.uint8)).save(dst, quality=90, optimize=True)
    print(f"{src} -> {dst}  size={w}x{h} coverage={100 * (al > 0.5).mean():.1f}%")


if __name__ == "__main__":
    args = sys.argv[1:]
    for i in range(0, len(args), 2):
        rekey(args[i], args[i + 1])
