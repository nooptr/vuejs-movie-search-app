<template>
  <div id="app">
    <div class="container">
      <Header />
      <div class="notification">
        This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
        viewport size.
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
