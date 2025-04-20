import { mount } from '@vue/test-utils'
import ButtonGreeter from '../ButtonGreeter.vue'

describe('Greeter Button', () => {
  it('renders button correctly', () => {
    const wrapper = mount(ButtonGreeter, {
      props: { message: 'Hello' },
    })
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('log correct message on click', async () => {
    console.log = vi.fn()
    const message = 'Hello from test';
    const wrapper = mount(ButtonGreeter, {
      props: { message },
    })
    await wrapper.find('button').trigger('click')
    expect(console.log).toHaveBeenCalledWith(message)
  })
})