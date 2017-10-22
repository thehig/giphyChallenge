module.exports = {
  extends: "airbnb",
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "no-bitwise": "off",
    "react/prop-types": "off",
    "react/prefer-stateless-function": "off",
    "linebreak-style": "off",
    "no-useless-constructor": "warn",
    
    "import/no-unresolved": "off",
    "import/extensions": "off"
  }
};
