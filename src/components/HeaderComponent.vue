<template>
    <div class="hero-header">
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1 class="hi">Hi, I'm Lex Mart&iacute;nez!</h1>
              <p class="text-center">
                I'm a freelance full-stack developer based in Medell&iacute;n, CO, specialising in building web apps. The last two years i've been working as frontend developer at <a href="http://www.batteries911.com">Batteries911</a> .
                I also expend my time learning new stuff mainly on Javascript/NodeJS - mobile apps world, interested in AI/ML too. <a href="https://www.lexmartinez.com/blog">Blog</a> writer, guitar enthusiast 🤘
              </p>
              <div class="text-center">
                <a href="mailto:me@lexmartinez.com" class="btn btn-primary"><i class="fa fa-envelope"></i> Contact Me</a>
              </div>
             <!-- <div class="corner-ribbon top-right sticky blue shadow">Open for Hiring!</div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'site-header',
  resource: 'SiteHeader'
}
</script>

<style scoped>
  .hero-header {
    width: 100vw;
    height: 70vh;
    background-image: url('/static/images/header-bg.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: center;
    border-bottom: 1px solid #989898;
    border-top: 10px solid #505050;
    font-family: 'Raleway', sans-serif;
    -webkit-box-shadow: -1px 7px 9px -6px rgba(110,110,110,0.81);
    -moz-box-shadow: -1px 7px 9px -6px rgba(110,110,110,0.81);
    box-shadow: -1px 7px 9px -6px rgba(110,110,110,0.81);
  }

  .hero-header .container-fluid {
    background-color:rgba(22,22,22,0.7);
    height: 100%;
    border-top:1px solid #222222;
    display: flex;
    align-items: center;
  }

  .hero-header h1.hi {
    background-color:rgba(45,45,45,0.7);
    color: #DEDEDE;
    padding:10px;
    font-weight: bolder;
    text-align: center;
  }

  .hero-header p {
    background-color:rgba(30,30,30,0.7);
    color: #DEDEDE;
    padding:15px;
  }

  @media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .hero-header {
      height: 100vh;
    }

    .hero-header h1.hi {
      text-align: left;
    }

    .corner-ribbon.top-right{
      top: 40px;
      right: -50px;
    }
  }

  @media only screen
  and (min-device-width: 320px)
  and (max-device-width: 800px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {
    .hero-header {
      height: 100vh;
    }

    .hero-header h1.hi {
      text-align: left;
    }

    .corner-ribbon.top-right{
      top: 40px;
      right: -50px;
    }
  }

  .corner-ribbon{
    width: 300px;
    background: #e43;
    position: absolute;
    top: 60px;
    left: -40px;
    text-align: center;
    line-height: 50px;
    letter-spacing: 1px;
    color: #f0f0f0;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    font-weight: 700;
    z-index: 2000;
  }

  .corner-ribbon.sticky{
    position: fixed;
  }

  .corner-ribbon.shadow{
    box-shadow: 0 0 3px rgba(45,45,45,.3);
  }

  .corner-ribbon.top-right{
    top: 60px;
    right: -70px;
    left: auto;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
</style>
