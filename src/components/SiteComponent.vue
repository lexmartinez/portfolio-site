<template>
  <div>
    <site-header></site-header>
    <div class="site-container">
      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <h2 class="card-title">Latest Projects</h2>
          </div>
          <div class="card">
            <h2 class="card-title">Work Experience</h2>
          </div>
          <div class="card">
            <h2 class="card-title">GitHub Activity</h2>
          </div>
        </div>
        <div class="col-md-4">
          <contact-info></contact-info>
          <div class="card">
            <h2 class="card-title">Skills</h2>
          </div>
          <div class="card">
            <h2 class="card-title">Latest Blog Post</h2>
          </div>
          <spotify></spotify>
        </div>
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from './HeaderComponent'
import SiteFooter from './FooterComponent'
import Spotify from './content/SpotifyComponent'
import ContactInfo from './content/InfoComponent'

export default {
  name: 'SiteComponent',
  components: { SiteHeader, SiteFooter, Spotify, ContactInfo },
  resource: 'SiteComponent'
}
</script>

<style>
  .site-container {
    width: 70vw;
    margin-left: 15vw;
    background: transparent;
    background: #f4f4f4;
    margin-top: 50px;
    font-family: 'Raleway', sans-serif;
  }

  @media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .site-container {
      width: 90vw;
      margin-left: 1vw;
    }
  }

  @media only screen
  and (min-device-width: 320px)
  and (max-device-width: 800px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {
    .site-container {
      width: 90vw;
      margin-left: 3vw;
    }
  }

  @media only screen
  and (min-device-width: 800px)
  and (max-device-width: 1800px) {
    .site-container {
      width: 90vw;
      margin-left: 5vw;
    }
  }

  body{
    background: #f4f4f4;
  }

  .card {
    display: inline-block;
    margin: 1rem !important;
    position: relative;
    width: 100%;
    border-radius: 0px !important;
  }

  h2.card-title {
    font-family: 'Raleway', sans-serif;
    color: #383838;
    margin: 20px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .card-body {
    padding-left: 20px;
    width: 100%;
  }
</style>
