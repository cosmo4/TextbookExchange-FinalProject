const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "API Documentation",
    description: "API documentation for various services",
  },
  host: "localhost:9090", // Ensure this matches your server's host and port
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
// const endpointsFiles = ["./routes/books.js", "./routes/posts.js", "./routes/reviews.js", "./routes/users.js"]; // Add more files as needed
const endpointsFiles = ["./routes/"]; // Add more files as needed

// swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
//   console.log("Swagger documentation has been generated");
// });
