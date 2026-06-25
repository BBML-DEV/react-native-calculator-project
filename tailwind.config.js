/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Caminhos para os seus arquivos onde o Tailwind vai buscar classes
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  // theme: {
  //   // 2. Substituir completamente os valores padrão
  //   screens: {
  //     'sm': '640px',
  //     'md': '768px',
  //   },
  //   // 3. Estender ou adicionar novos valores aos existentes
  //   extend: {
  //     colors: {
  //       'brand-blue': '#1fb6ff',
  //       'brand-purple': '#7e5bef',
  //     },
  //     spacing: {
  //       '128': '32rem',
  //     },
  //     borderRadius: {
  //       '4xl': '2rem',
  //     }
  //   }
  // },
  // // 4. Plugins para funcionalidades extras (ex: formulários, tipografia)
  // plugins: [
  //   require('@tailwindcss/typography'),
  //   require('@tailwindcss/forms'),
  // ],
}