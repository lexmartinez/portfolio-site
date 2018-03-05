<template>
  <div class="card">
    <h2 class="card-title">Skills</h2>
    <div clasS="card-body">
      <div class="skill-container">
        <p class="label"><span class="skill">Javascript, NodeJS</span> <span class="pull-right level">Expert</span></p>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 86%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="skill-container">
        <p class="label"><span class="skill">Java, Spring</span> <span class="pull-right level">Guru</span></p>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 97%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="skill-container">
        <p class="label"><span class="skill">HTML5, CSS3, Bootstrap</span> <span class="pull-right level">Expert</span></p>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 88%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="skill-container">
        <p class="label"><span class="skill">Angular</span> <span class="pull-right level">Pro</span></p>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 78%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="skill-container">
        <p class="label"><span class="skill">Ionic, React Native</span> <span class="pull-right level2">Actively learning</span></p>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 48%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="skill-container">
        <p class="label"><span class="skill">Vue.js</span> <span class="pull-right level2">Actively learning</span></p>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 53%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'skills',
  resource: 'Skills'
}
</script>

<style scoped>
.label {
  margin-bottom: 1px;
}

.level {
  font-size: 10pt;
  color: #909090;
}

.level2 {
  font-size: 8pt;
  color: #909090;
}

.skill {
  font-weight: bolder;
}

.skill-container {
  margin-bottom: 20px;
}
</style>
