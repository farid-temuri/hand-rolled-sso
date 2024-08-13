import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  typescript: true,
}, {
  rules: {
    'n/prefer-global/process': ['error', 'always'],
  },
})
