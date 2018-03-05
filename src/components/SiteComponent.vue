<template>
  <div>
    <site-header></site-header>
    <div class="site-container">
      <div class="row">
        <div class="col-md-8">
        </div>
        <div class="col-md-4">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from './HeaderComponent'

export default {
  name: 'SiteComponent',
  components: { SiteHeader },
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

  body{
    background: #f4f4f4;
  }
</style>
