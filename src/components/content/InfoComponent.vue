<template>
  <div class="card">
    <div class="card-body info-box">
      <p><i class="fa fa-map-marker info-item"></i> Medell&iacute;n, CO</p>
      <p><i class="fa fa-envelope info-item"></i> <a href="mailto:me@lexmartinez.com">me@lexmartinez.com</a></p>
      <p><i class="fa fa-github-alt info-item"></i> <a href="https://github.com/lexmartinez">github.com/lexmartinez</a></p>
      <p><i class="fa fa-money info-item"></i> $25 USD/hour</p>
      <a class="btn btn-danger pull-right" href="/static/lexmartinez-cv.pdf" target="_blank"><i class="fa fa-file-pdf-o"></i> Download CV</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact-info',
  resource: 'ContactInfo'
}
</script>

<style scoped>
  i.info-item {
    margin-right: 10px;
    color: #325d72;
  }

  .info-box p{
    font-size: 11pt;
  }

  .info-box > p > a {
    text-decoration: none;
    color: #353535;
  }

  .info-box a.btn {
    margin-top: -30px;
    color: #fff;
  }
</style>
