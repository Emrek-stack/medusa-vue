const icons = require("./dist/index.js");
console.log("Icons loaded:", Object.keys(icons).length);
if (icons.AcademicCap && icons.Trash) {
    console.log("Success: Icons exported correctly.");
} else {
    console.error("Error: Icons missing.", icons);
    process.exit(1);
}
