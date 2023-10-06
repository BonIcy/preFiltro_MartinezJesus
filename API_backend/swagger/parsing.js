const fs = require("fs");
const path = require("path");

const yaml = require("js-yaml");
const swaggerJsdoc = require("swagger-jsdoc");

try {
  const yamlFile = fs.readFileSync(
    path.join(__dirname, "edit.swagger.yaml"),
    "utf8"
  );
  const swaggerDefinition = yaml.load(yamlFile);

  const options = {
    swaggerDefinition,
    apis: ["./routes/routes.js"],
  };

  const specs = swaggerJsdoc(options);

  module.exports = specs;
} catch (error) {
  console.error("Error al leer y analizar el archivo YAML:", error);
}
