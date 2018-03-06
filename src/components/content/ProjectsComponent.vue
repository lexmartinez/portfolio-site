<template>
  <div class="card">
    <h2 class="card-title">Latest Projects</h2>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span class="title"><strong>Acad&eacute;mico - </strong> <span class="subtitle"> Staff Music Academy</span></span>
          <br/><br/>
          <img src="/static/images/academico-screenshot.jpg" width="100%"/>
          <br/><br/>
          <p class="description">Fullstack Web application that allows students and instructors of Staff Academy handle them courses, tasks and knowledge. The front-end was built with Angular and back-end RESTful services with Java - Spring.</p>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-md-4">
              <img src="/static/images/batteries911-screenshot.jpg" width="100%"/>
            </div>
            <div class="col-md-8">
              <span class="title"><strong>Services Management Dashboard - </strong> <span class="subtitle"> Batteries 911</span></span>
              <p class="description">Complete web-based app that allows the operative team of B911 dispatch, schedule and manage road side services.  Built with Angular, NodeJS and Bootstrap.</p>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-md-4">
              <img src="/static/images/holaguapa-screenshot.jpg" width="100%"/>
            </div>
            <div class="col-md-8">
              <span class="title"><strong>Hola Guapa - </strong> <span class="subtitle"> Firebase SAS</span></span>
              <p class="description">Mobile app built with React Native. Beauty places directory, saloons, clinics and so on, allow it customers search, locate and contact different business that offers desired beauty services .</p>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-md-4">
              <img src="/static/images/orbita-mtto-screenshot.jpg" width="100%"/>
            </div>
            <div class="col-md-8">
              <span class="title"><strong>Medical Equipment Maintenance Suite - </strong> <span class="subtitle"> &Oacute;rbita SAS</span></span>
              <p class="description">Complete web-based app that allows the operative team of clinics or medic maintenance business, schedule and manage all equipment maintenance flow.  Built with Spring and Bootstrap.</p>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-md-4">
              <img src="https://github.com/lexmartinez/ocr-electron-vue/raw/master/screenshots/demo.gif" width="100%"/>
            </div>
            <div class="col-md-8">
              <span class="title"><strong>ocr-electron-vue</strong></span> <span class="badge badge-info oss-tag pull-right">Open Source</span>
              <p class="description">Simple desktop OCR App built with Electron, Vue.js & Tesseract.js as part of my Vue/Electron learning trip.</p>
              <a href="https://github.com/lexmartinez/ocr-electron-vue" target="_blank" class="btn btn-warning pull-right"><i class="fa fa-github"></i> VIEW ON GITHUB</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projects',
  resource: 'Projects'
}
</script>

<style scoped>
.title {
  color: #325d72;
  font-weight: bolder;
  font-size: 15pt;
}
.subtitle {
  font-size: 13pt;
  color: #858585;
}
.description {
  color: #565656;
  margin-top:10px;
  text-align: justify;
}
.list-group-item img {
  border: 1px solid rgba(0,0,0,.125);
}
@media only screen
and (min-device-width: 320px)
and (max-device-width: 480px) {
  .oss-tag {
    display: none;
  }
}
</style>
