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
              <img src="https://github.com/lexmartinez/planning-poker/raw/master/screenshots/screenshot-2.png" width="100%"/>
            </div>
            <div class="col-md-8">
              <span class="title"><strong>Planify (planning-poker)</strong></span> <span class="badge badge-info oss-tag pull-right">Open Source</span>
              <p class="description">Planning Poker® Desktop application built with Electron, React, Redux & Typescript, allow invite team members, and manage user stories and estimation.</p>
             <div class="pull-right">
               <a href="https://github.com/lexmartinez/planning-poker" target="_blank" class="btn btn-warning"><i class="fa fa-github"></i> VIEW ON GITHUB</a>
             </div>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-md-4">
              <img src="https://github.com/lexmartinez/vue-github-activity/raw/master/screenshot.png" width="100%"/>
            </div>
            <div class="col-md-8">
              <span class="title"><strong>vue-github-activity</strong></span> <span class="badge badge-info oss-tag pull-right">Open Source</span>
              <p class="description">A VueJS component that creates a feed panel with your recent GitHub activity. It displays the user's name, username, photo, and a list of each individual activity type. (Used in this website, see bellow).</p>
             <div class="pull-right">
               <a href="https://www.npmjs.com/package/vue-github-activity" target="_blank" class="btn btn-danger"><i class="fa fa-cube"></i> VIEW ON NPM</a>
               <a href="https://github.com/lexmartinez/vue-github-activity" target="_blank" class="btn btn-warning"><i class="fa fa-github"></i> VIEW ON GITHUB</a>
             </div>
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
