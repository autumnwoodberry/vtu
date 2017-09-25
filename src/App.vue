<template>
  <div id="app">
    <div>
      <pre>{{ $data }}</pre>
      <p>The "a" boolean toggles the wrapper div on/off with a "fade" transition.</p>
      <p>The "b" boolean controls which child div is shown with a "slide" transition.<p>
      <div>
        <input type="checkbox" v-model="a">
        <label>a</label>
      </div>
      <div>
        <input type="checkbox" v-model="b">
        <label>b</label>
      </div>
    </div>
    <transition name="fade">
      <div v-if="a" style="position: relative; width: 100px; height: 100px; overflow: hidden; border: 1px solid black;">
        <transition name="slide-left">
          <div v-if="!b" style="background-color: lightblue; position: absolute; width: 100px; height: 100px;">
            <pre>a && !b</pre>
          </div>
        </transition>
        <transition name="slide-right">
          <div v-if="b" style="background-color: lightgreen; position: absolute; width: 100px; height: 100px;">
            <pre>a && b</pre>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'vtu',
  data () {
    return {
      a: false,
      b: false
    }
  }
}
</script>

<style>
  /* slide left */
  .slide-left-enter-active, .slide-left-leave-active { transition: all 500ms ease; }
  .slide-left-enter { transform: translateX(-100%); }
  .slide-left-enter-to { transform: translateX(0); }
  .slide-left-leave-to { transform: translateX(-100%); }

  /* slide right */
  .slide-right-enter-active, .slide-right-leave-active { transition: all 500ms ease; }
  .slide-right-enter { transform: translateX(100%); }
  .slide-right-enter-to { transform: translateX(0); }
  .slide-right-leave-to { transform: translateX(100%); }

  /* fade */
  .fade-enter-active, .fade-leave-active { transition: all 500ms ease; }
  .fade-enter, .fade-leave-active { opacity: 0; }
</style>
