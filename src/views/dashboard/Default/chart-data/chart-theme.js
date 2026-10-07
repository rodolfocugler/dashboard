// apexcharts options that follow the MUI light/dark theme
const chartTheme = (theme) => ({
  theme: { mode: theme.palette.mode },
  chart: { background: 'transparent', foreColor: theme.palette.text.secondary, fontFamily: theme.typography.fontFamily },
  grid: { borderColor: theme.palette.divider, strokeDashArray: 4 },
  tooltip: { theme: theme.palette.mode }
});

export default chartTheme;
