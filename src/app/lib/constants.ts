export const COLOR_FAMILIES = [
  'gray', 'mauve', 'slate', 'sage', 'olive', 'sand', 'amber', 'orange', 'red', 'pink', 'plum', 'purple', 'violet', 'indigo', 'blue', 'teal', 'green'
] as const;

// Hue group mapping
export const HUE_GROUPS = {
  grays: ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'],
  yellows: ['amber'],
  reds: ['orange', 'red'],
  purples: ['pink', 'plum', 'purple', 'violet'],
  blues: ['indigo', 'blue'],
  greens: ['teal', 'green'],
};

// Helper function to get hue group for a color family
export const getHueGroup = (colorFamily: string) => {
  if (HUE_GROUPS.grays.includes(colorFamily)) return 'grays';
  if (HUE_GROUPS.yellows.includes(colorFamily)) return 'yellows';
  if (HUE_GROUPS.reds.includes(colorFamily)) return 'reds';
  if (HUE_GROUPS.purples.includes(colorFamily)) return 'purples';
  if (HUE_GROUPS.blues.includes(colorFamily)) return 'blues';
  if (HUE_GROUPS.greens.includes(colorFamily)) return 'greens';
  return 'grays'; // default fallback
}; 