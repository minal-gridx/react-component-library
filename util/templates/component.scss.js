module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
@import "../variables.scss";
@import "../typography.scss";

.foo-bar {
  @include font-defaults;

  color: $template-green;
}
`,
  extension: `.scss`
});
