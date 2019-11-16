<template>
  <div id="app">
    <div class="container">
      <Header />
      <div class="columns m-t-10 is-centered is-mobile">
        <div class="column is-half">
          <b-field grouped>
            <b-input placeholder="Search..." expanded v-model="keyword"></b-input>
            <p class="control">
              <button class="button is-primary" @click="search">Search</button>
            </p>
          </b-field>
        </div>
      </div>
      <div class="columns is-centered is-mobile">
        <div class="is-half">
          <strong>Sharing a few of our favourite movies</strong>
        </div>
      </div>
      <div class="columns is-centered is-multiline">
        <div class="column is-one-quarter" v-for="(item, index) in movies" :key="index">
          <div class="card">
            <div class="card-image">
              <figure class="image is-5by4">
                <img v-if="!item.backdrop_path" src="https://bulma.io/images/placeholders/1280x960.png">
                <img v-else :src="`https://image.tmdb.org/t/p/original/${item.backdrop_path}`">
              </figure>
            </div>
            <div class="card-content">
              <div class="content is-centered">
                <p class="title is-6">{{ item.title }}</p>
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
import movieSearch from '@/services/movie.service';

export default {
  components: {
    Header,
  },
  data() {
    return {
      keyword: '',
      movies: [],
    };
  },
  methods: {
    async search(keyword) {
      let kw = keyword;
      if (keyword == null) {
        kw = this.keyword;
      }
      const response = await movieSearch.fetchMovies(kw);
      this.movies = response.data.results;
      console.log(this.movies);
    },
  },
  created() {
    const titles = [
      'Fast & Furious',
      'Joker',
      'Shark',
      'Sport',
      'Frozen',
      'Man',
      'Doctor',
      'One Piece',
      'Car',
    ];
    const randomNumber = Math.floor(Math.random() * titles.length);
    this.search(titles[randomNumber]);
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
