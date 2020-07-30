const { setup, loadConfig, url } = require('@nuxtjs/module-test-utils')

describe('module', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = (await setup(loadConfig(__dirname, '../../example'))))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('injects properties', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))

    expect(window.$nuxt.$fingerprint).toBeDefined()
    expect(window.$nuxt.$fingerprint.userAgent).toBeDefined()
  })
})
