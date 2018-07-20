<template>
  <div class="card">
    <h2 class="card-title">Work Experience</h2>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span class="title"><strong>Mobile Developer SSR - </strong> <span class="subtitle"> Almundo (Apr 2018 - Current)</span></span>
          <p class="description">As member of mobile team we are in charge to maintain and develop new features on Almundo mobile app, working with React Native and NodeJS.</p>
        </li>

        <li class="list-group-item">
          <span class="title"><strong>Freelance Front End Developer - </strong> <span class="subtitle"> Batteries 911 (Oct 2016 - Mar 2018)</span></span>
          <p class="description">As part of front-end team working on design and implementation of web dashboard of the company for services management, using Angular and NodeJS for that.</p>
        </li>

        <li class="list-group-item">
          <span class="title"><strong>Full Stack Senior Developer - </strong> <span class="subtitle"> IAS (Apr 2014 - Oct 2016)</span></span>
          <p class="description">Working on multiple different projects for <strong>SURAMERICANA S.A</strong> as outsourcing team member, among which are an implementation of a
            messaging Broker for the evaluation platform using Hystrix as a resilience mechanism to guarantee the delivery of messages between applications.
            Also taking a lead role in the medical evaluation platform refactoring with a 3 junior developers team using Spring and Angular.
          </p>
        </li>

        <li class="list-group-item">
          <span class="title"><strong>Java Developer - </strong> <span class="subtitle"> ADA S.A (Dec 2011 - Apr 2014)</span></span>
          <p class="description">Supporting and developing for taxes platform owned by the company with Java, JSF, Spring and GWT. Product Implantation and Requirements Analysis were under my assignments too.</p>
        </li>

        <li class="list-group-item">
          <span class="title"><strong>Research Assistant - </strong> <span class="subtitle"> SINTELWEB Research Team (Jul 2009 - Dec 2011)</span></span>
          <p class="description">IA/Planning research team based on Mines Faculty of National University of Colombia, Medell&iacute;n.
            Participating on multiple research projects as Java developer, write papers and research reports were on my functions too, also I worked as team webmaster during the period that I was part of the research group.</p>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'work-experience',
  resource: 'WorkExperience'
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

</style>
