<template>
  <b-navbar type="is-light" :spaced="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item :to="{ path: '/' }">
        Home
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
