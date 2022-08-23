export const default_category_colors: Record<string, string> = {
  'diatomic-nonmetal': `#ff8c00`, // darkorange
  'noble-gas': `#9932cc`, // darkorchid
  'alkali-metal': `#006400`, // darkgreen
  'alkaline-earth-metal': `#483d8b`, // darkslateblue
  metalloid: `#b8860b`, // darkgoldenrod
  'polyatomic-nonmetal': `#a52a2a`, // brown
  'transition-metal': `#008080`, // teal
  'post-transition-metal': `#938d4a`,
  lanthanide: `#58748e`,
  actinide: `#6495ed`, // cornflowerblue
}
export const category_colors: Record<string, string> = {
  ...default_category_colors,
}

export const category_color_ch_map = {
  'diatomic-nonmetal': `双原子非金属`, // darkorange
  'noble-gas': `惰性气体`, // darkorchid
  'alkali-metal': `碱金属`, // darkgreen
  'alkaline-earth-metal': `碱土金属`, // darkslateblue
  metalloid: `准金属`, // darkgoldenrod
  'polyatomic-nonmetal': `多原子非金属`, // brown
  'transition-metal': `过渡金属`, // teal
  'post-transition-metal': `后过渡金属`,
  lanthanide: `镧系元素`,
  actinide: `锕系元素`, // cornflowerblue
}