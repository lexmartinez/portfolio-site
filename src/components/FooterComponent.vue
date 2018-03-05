<template>
 <div class="container-fluid footer">
    <div class="container col-md-12">
      <div class="text-center">
        Copyright &copy; 2018 - Lex Mart&iacute;nez
        <span class="footer-links">
          <a class="fa fa-envelope" href="mailto:me@lexmartinez.com" target="_blank"></a> &nbsp;
          <a class="fa fa-github-alt" href="https://github.com/lexmartinez" target="_blank"></a> &nbsp;
          <a class="fa fa-twitter" href="https://twitter.com/lex0316" target="_blank"></a> &nbsp;
          <a class="fa fa-linkedin-square" href="https://www.linkedin.com/in/arlex-martinez-6256a4153/" target="_blank"></a>
        </span>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  name: 'site-footer',
  resource: 'SiteFooter'
}
</script>

<style scoped>
  .footer {
    background-color: #383838;
    height: 50px;
    margin-top: 20px;
    color: #DEDEDE;
    font-family: 'Raleway', sans-serif;
    line-height: 50px;
    font-size: 10pt;
  }

  .footer-links {
    margin-left: 10px;
  }

  .footer-links a{
    color: #f4f4f4;
    font-size: 16pt;
  }

  .footer-links a:hover{
    text-decoration: none;
    color: #ffffff;
  }

  @media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .footer-links a {
      font-size: 13pt;
    }
  }

</style>
