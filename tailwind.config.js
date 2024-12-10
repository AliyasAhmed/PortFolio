export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg:'var(--bg)',
        border:'var(--border)',
        text: 'var(--text)',
        shadow:'var(--shadow)'
      },
    },
  },
  plugins: [],
}