import Vue from 'vue'
function registerAllComponents (requireContext) {
  return requireContext.keys().forEach(comp => {
    const vueComp = requireContext(comp)
    const compName = vueComp.name ? vueComp.name.toLowerCase() : /\/([\w-]+)\.vue$/.exec(comp)[1]
    Vue.component(compName, vueComp.default)
  })
}
// 将该目录下的所有.vue结尾的组件，注册为全局组件
registerAllComponents(require.context('./', false, /\.vue$/))
