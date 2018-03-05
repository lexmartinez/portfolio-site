<template>
 <div class="container-fluid footer">
    <div class="container">
      <div class="pull-left">Copyright &copy; 2018 - Lex Mart&iacute;nez | All Rights Reserved</div>
      <div class="pull-right footer-links">
        <a class="fa fa-envelope" href="mailto:me@lexmartinez.com" target="_blank"></a> &nbsp;
        <a class="fa fa-github-alt" href="https://github.com/lexmartinez" target="_blank"></a> &nbsp;
        <a class="fa fa-twitter" href="https://twitter.com/lex0316" target="_blank"></a> &nbsp;
        <a class="fa fa-linkedin-square" href="https://www.linkedin.com/in/arlex-martinez-6256a4153/" target="_blank"></a>
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

  .footer-links a{
    color: #f4f4f4;
    font-size: 16pt;
  }

  .footer-links a:hover{
    text-decoration: none;
    color: #ffffff;
  }
</style>
