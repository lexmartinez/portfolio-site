<template>
  <div class="card">
    <h2 class="card-title"><i class="fa fa-github"></i> GitHub Activity
      <span class="subtitle"><a :href="profile.html_url" target="_blank">@lexmartinez</a></span>
      <div class="avatar">
        <img :src="profile.avatar_url"/>
      </div>
    </h2>
    <div class="card-body">
      <ul class="list-group feed-container">
        <li class="list-group-item" v-for="event in events" :key="event.id">Feed Info</li>
      </ul>
    </div>
  </div>
</template>

<script>
import service from '@/services/GitHubService'

export default {
  name: 'github-feed',
  resource: 'GithubFeed',
  data () {
    return {
      username: 'lexmartinez',
      profile: {},
      events: [],
      loading: false,
      error: false
    }
  },
  created () {
    service.profile(this.username)
      .then(response => {
        this.profile = response.data
        service.events(this.username)
          .then(events => {
            this.events = events.data
            this.loading = false
          })
          .catch(e => {
            this.loading = false
            this.error = true
          })
      })
      .catch(e => {
        this.loading = false
        this.error = true
      })
  }
}
</script>

<style scoped>
.avatar {
  float: right;
  max-width: 55px;
  height: 62px;
}
.avatar img {
  padding: 3px;
  width: 100%;
  border: 1px solid #ddd;
}
.card-title .subtitle {
  color: #858585;
  font-size: 16pt;
}
.card-title .subtitle a {
  color: #858585;
  font-size: 16pt;
  text-decoration: none;
}

.card-title .subtitle a:hover {
  color: #325d72;
}

.feed-container {
  max-height: 450px;
  overflow-y: scroll;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
}

@media only screen
and (min-device-width: 320px)
and (max-device-width: 480px)
and (-webkit-min-device-pixel-ratio: 2) {
  .avatar {
    display: none;
  }
}

</style>
