import { createDecorator } from 'vue-class-component'

export const Watch = (path, options = {}) => {
  const { deep = false, immediate = false } = options
  return createDecorator((compOptions, handler) => {
    console.log(compOptions)
    if (typeof compOptions.watch !== 'object') {
      compOptions.watch = Object.create(null)
    }

    compOptions.watch[path] = { handler, deep, immediate }
  })
}


export const NoCache = createDecorator((options, key) => {
  options.computed[key].cache = false
})
