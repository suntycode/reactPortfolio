module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        animation: {
          aurora: "aurora 8s infinite alternate ease-in-out",
        },
        keyframes: {
          aurora: {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        },
      },
    },
    plugins: [],
  };
  