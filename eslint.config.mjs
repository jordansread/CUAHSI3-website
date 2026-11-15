// ESLint for the site (roadmap task 5). Vue files: the template AND the TypeScript <script> blocks are read
// (@typescript-eslint/parser handles the script). Plain .ts files are parsed with the same parser. .mjs, .js and .cjs
// files are matched by ESLint's defaults and parsed with its default parser; .mts files are not matched. The rules are
// eslint-plugin-vue's "essential" set (errors and things that break rendering; its config has no `files` key, so it
// also runs on scripts, where it finds nothing), not style rules, plus footgun rules for .vue and .ts files: patterns
// from "Known footguns" in CLAUDE.md, written with core no-restricted-syntax (script) and vue/no-restricted-syntax
// (template), so no plugin is needed. scripts/verify.sh has grep checks for the same three footguns (4, 6, 7 there);
// these rules read the parsed code instead, so they see multi-line chains and template literals, and they are errors
// where verify.sh only warns on 1 and 5. Each message names its footgun:
//   1  queryContent('news') ('/news' and `news` too; any content folder whose name starts another folder's name)
//      in a file whose script has no startsWith('/news/') call (the trailing-slash filter). Per file: it cannot see
//      that the filter is applied to that query's result, a filter written only in the <template> does not count,
//      and a variable argument is not seen.
//   2  On <component>, an :is that is a ternary (cond ? 'a' : 'NuxtLink'; any ternary, even 'h2' : 'h3') or that
//      contains the string 'NuxtLink' / 'nuxt-link' (.vue only). A computed that returns it (:is="tag") is not seen.
//   5  .findOne() not directly followed by .catch(...). Stricter than the footgun: try/catch around an await, or
//      .then().catch(), is also flagged (none on main; rewrite as .findOne().catch()).
// Footgun 6 (throw createError in setup) is not here yet. No other core JS rules are switched on: Nuxt auto-imports
// (ref, computed, useAsyncData ...) would make no-undef report hundreds of false problems, and the type-aware
// unused-variable rule lives in @typescript-eslint/eslint-plugin, which is not installed.
import { readdirSync } from 'node:fs'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

// Footgun 1: content folders whose name is a prefix of another folder's name. Read from content/ so a new
// collision (say a 'job' folder next to 'jobs') is caught without editing this file.
const collections = readdirSync(new URL('./content/', import.meta.url), { withFileTypes: true })
  .filter(d => d.isDirectory()).map(d => d.name)
const prefixCollections = collections.filter(a => collections.some(b => b !== a && b.startsWith(a)))

const footgunSyntax = [
  {
    selector: "CallExpression[callee.property.name='findOne']:not(MemberExpression[property.name='catch'] > CallExpression)",
    message: 'CLAUDE.md footgun 5: findOne() throws when nothing matches. Follow it directly with .catch(() => null).',
  },
  ...prefixCollections.map(name => ({
    selector: `Program:not(:has(CallExpression[callee.property.name='startsWith'][arguments.0.value='/${name}/'])) CallExpression[callee.name='queryContent']:matches([arguments.0.value=/^\\x2F?${name}$/], [arguments.0.quasis.0.value.cooked=/^\\x2F?${name}$/])`,
    message: `CLAUDE.md footgun 1: queryContent('${name}') also returns every folder whose name starts with '${name}'. Filter the result with _path?.startsWith('/${name}/').`,
  })),
]

export default [
  { ignores: ['.nuxt/**', '.output/**', '.agent/**', 'node_modules/**', 'dist/**', 'public/**', 'content/**', 'visual/**'] },
  ...vue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: { parser: vueParser, parserOptions: { parser: tsParser, ecmaVersion: 'latest', sourceType: 'module' } },
    rules: {
      'vue/multi-word-component-names': 'off',   // Nuxt pages are named index.vue and [slug].vue
      'vue/no-restricted-syntax': ['error', {
        selector: "VElement[name='component'] > VStartTag > VAttribute[directive=true][key.name.name='bind'][key.argument.name='is'] > VExpressionContainer > ConditionalExpression",
        message: 'CLAUDE.md footgun 2: a conditional :is on <component> renders but does not navigate. Use v-if / v-else with real <a> and <NuxtLink> tags.',
      }, {
        selector: "VElement[name='component'] > VStartTag > VAttribute[directive=true][key.name.name='bind'][key.argument.name='is'] Literal[value=/^(NuxtLink|nuxt-link)$/]",
        message: 'CLAUDE.md footgun 2: <component :is> with the string NuxtLink renders but does not navigate. Use a real <NuxtLink> tag.',
      }],
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: { parser: tsParser, parserOptions: { ecmaVersion: 'latest', sourceType: 'module' } },
  },
  {
    files: ['**/*.vue', '**/*.ts'],
    rules: { 'no-restricted-syntax': ['error', ...footgunSyntax] },
  },
]
