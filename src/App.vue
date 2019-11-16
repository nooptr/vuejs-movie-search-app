<template>
  <div id="app">
    <div class="container">
      <Header />
      <div class="columns m-t-10 is-centered is-mobile">
        <div class="column is-half">
          <b-field grouped>
            <b-input placeholder="Search..." expanded></b-input>
            <p class="control">
              <button class="button is-primary">Search</button>
            </p>
          </b-field>
        </div>
      </div>
      <div class="columns is-centered">
        <div>
          <strong>Sharing a few of our favourite movies</strong>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-5by4">
                <img src="https://source.unsplash.com/random/1280x480">
              </figure>
            </div>
            <div class="card-content">
              <div class="content is-centered">
                <p class="title is-6">Joker(2019)</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-5by4">
                <img src="https://source.unsplash.com/random/1280x480">
              </figure>
            </div>
            <div class="card-content">
              <div class="content is-centered">
                <p class="title is-6">Joker(2019)</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-5by4">
                <img src="https://source.unsplash.com/random/1280x480">
              </figure>
            </div>
            <div class="card-content">
              <div class="content is-centered">
                <p class="title is-6">Joker(2019)</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-5by4">
                <img src="https://source.unsplash.com/random/1280x480">
              </figure>
            </div>
            <div class="card-content">
              <div class="content is-centered">
                <p class="title is-6">Joker(2019)</p>
              </div>
            </div>
          </div>
        </div>
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

<style lang="scss">
$spaces: (0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50); // 0から50pxまでを用意
$sides: (top, bottom, left, right); // 方向性

@each $space in $spaces {
  @each $side in $sides {
    .m-#{str-slice($side, 0, 1)}-#{$space} {
      margin-#{$side}: #{$space}px !important;
    }

    .p-#{str-slice($side, 0, 1)}-#{$space} {
      padding-#{$side}: #{$space}px !important;
    }
  }
}
</style>
