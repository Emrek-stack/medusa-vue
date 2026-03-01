const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const srcDir = path.resolve(__dirname, '../../../reference/icons/src/components');
const destDir = path.resolve(__dirname, '../src/components');
const indexFile = path.resolve(__dirname, '../src/index.ts');

async function build() {
  await fs.ensureDir(destDir);

  const files = glob.sync('*.tsx', { cwd: srcDir });
  const exports = [];
  const componentNames = new Set();

  for (const file of files) {
    let componentName = path.basename(file, '.tsx')
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');

    // Explicitly exclude X icon due to build issues
    if (componentName === 'X') {
      continue;
    }

    componentName = componentName.replace(/[^a-zA-Z0-9]/g, '');

    if (componentNames.has(componentName)) {
      continue;
    }
    componentNames.add(componentName);

    const content = await fs.readFile(path.join(srcDir, file), 'utf8');

    const svgMatch = content.match(/<svg[\s\S]*?<\/svg>/);
    if (!svgMatch) {
      continue;
    }

    let svg = svgMatch[0];

    // Remove complex style attributes FIRST
    svg = svg.replace(/ style={{.*?}}/gs, '');

    // Handle attributes
    svg = svg.replace(/className=/g, 'class=');
    svg = svg.replace(/ref={ref}/g, '');
    svg = svg.replace(/\{\.\.\.props\}/g, 'v-bind="$attrs"');

    // Handle numeric values {15} -> "15"
    svg = svg.replace(/=\{([0-9.]+)\}/g, '="$1"');

    // Handle color prop bindings e.g. fill={color} -> :fill="color"
    // We capture the attribute name
    svg = svg.replace(/ ([a-zA-Z-]+)=\{color\}/g, ' :$1="color"');

    // Handle any remaining ={color} -> ="currentColor" (fallback)
    svg = svg.replace(/=\{color\}/g, '="currentColor"');

    // Handle kebab-case transformation for common SVG attributes
    const attrs = [
      'strokeWidth', 'strokeLinecap', 'strokeLinejoin', 'fillRule', 'clipRule', 'clipPath',
      'strokeMiterlimit', 'stopColor', 'floodOpacity', 'colorInterpolationFilters', 'stdDeviation'
    ];

    attrs.forEach(attr => {
      const kebab = attr.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
      // Handle attr="val"
      const regex1 = new RegExp(attr + '=', 'g');
      svg = svg.replace(regex1, kebab + '=');
      // Handle :attr="val" (if it was bound)
      const regex2 = new RegExp(':' + attr + '=', 'g');
      svg = svg.replace(regex2, ':' + kebab + '=');
    });

    const vueComponent = `
<template>
  ${svg}
</template>

<script lang="ts">
export default {
  name: '${componentName}',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
`;

    const destFile = path.resolve(destDir, `${componentName}.vue`);
    await fs.writeFile(destFile, vueComponent.trim());

    exports.push(`export { default as ${componentName} } from './components/${componentName}.vue'`);
  }

  await fs.writeFile(indexFile, exports.join('\n'));
  console.log(`Generated ${exports.length} icons.`);
}

build().catch(console.error);
