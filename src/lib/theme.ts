const a = {
  bg: "#0c0c0c",
  bg2: "#000000",
  bg3: "#181818",
  bg4: "#232323",
  bg5: "#1f1f1f",
  bg6: "#2f2f2f",
  fg: "#fbfbfb",
  fg1: "#cbcbcb",
  fg2: "#ababab",
  fg3: "#8b8b8b",
}

export function themeToCss(attrs: Record<string, string>): string {
  var s = ""

  Object.entries(attrs).forEach(([k, v]) => {
    s += `--${k}:${v};`
  })

  return s;
}

export default a;
