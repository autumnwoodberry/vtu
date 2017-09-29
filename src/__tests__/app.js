import Vue from 'vue'
import { mount } from 'vue-test-utils'
import App from '../App'

let wrapper

beforeEach(() => {
  wrapper = mount(App)
})

test('a && !b', () => {
    wrapper.vm.a = true
    wrapper.vm.b = false

    expect(wrapper.vm.a).toBe(true)
    expect(wrapper.vm.b).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
})

test('a && !b using Vue.nextTick', () => {
    wrapper.vm.a = true
    wrapper.vm.b = false

    expect(wrapper.vm.a).toBe(true)
    expect(wrapper.vm.b).toBe(false)
    Vue.nextTick(() => {
      expect(wrapper.html()).toMatchSnapshot()
    })
})

test('a && !b using wrapper.setData', () => {
    wrapper.setData({
      a: true,
      b: false
    });

    expect(wrapper.vm.a).toBe(true)
    expect(wrapper.vm.b).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
})

test('!a && b', () => {
    wrapper.vm.a = false
    wrapper.vm.b = true

    expect(wrapper.vm.a).toBe(false)
    expect(wrapper.vm.b).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
})

test('!a && b using Vue.nextTick', () => {
    wrapper.vm.a = false
    wrapper.vm.b = true

    expect(wrapper.vm.a).toBe(false)
    expect(wrapper.vm.b).toBe(true)
    Vue.nextTick(() => {
      expect(wrapper.html()).toMatchSnapshot()
    })
})

test('!a && b using wrapper.setData', () => {
    wrapper.setData({
      a: false,
      b: true
    });

    expect(wrapper.vm.a).toBe(false)
    expect(wrapper.vm.b).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
})

test('a && b', () => {
    wrapper.vm.a = true
    wrapper.vm.b = true

    expect(wrapper.vm.a).toBe(true)
    expect(wrapper.vm.b).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
})

test('a && b using Vue.nextTick', () => {
    wrapper.vm.a = true
    wrapper.vm.b = true

    expect(wrapper.vm.a).toBe(true)
    expect(wrapper.vm.b).toBe(true)
    Vue.nextTick(() => {
      expect(wrapper.html()).toMatchSnapshot()
    })
})

test('a && b using wrapper.setData', () => {
    wrapper.setData({
      a: true,
      b: true
    });

    expect(wrapper.vm.a).toBe(true)
    expect(wrapper.vm.b).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
})
