<template>
  <div class="card">
    <h2 class="card-title">Latest Blog Posts</h2>
    <div class="card-body">
      <div v-if="!loading">
        <div v-if="!error">
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="post in posts" :key="post.key">
              <span><a :href="post.shortUrl" target="_blank">{{post.title}}</a>
                <p class="date pull-right">{{post.publishedAt | moment("MMMM DD, YYYY")}}</p>
              </span>
            </li>
          </ul>
        </div>
        <div v-if="error && (posts || []).length === 0">
          <div class="error">
            <i class="fa fa-warning fa-4x fa-fw"></i>
            <br/><br/>
            <p>Uh oh! ... we got problems fetching latest posts</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import service from '@/services/BlogService'

export default {
  name: 'blog-posts',
  resource: 'BlogPosts',
  data () {
    return {
      posts: [],
      loading: false,
      error: false
    }
  },
  created () {
    this.loading = true
    this.error = false
    service.posts()
      .then(response => {
        this.loading = false
        this.posts = response.data
        this.error = false
      })
      .catch(e => {
        this.loading = false
        this.error = true
      })
  }
}
</script>

<style scoped>
.error {
  color:#ababab;
  font-weight: 200;
  width: 100%;
  height: 120px;
  text-align: center;
  color: #325d72;
}

.list-group-item span > a {
  text-decoration: none;
  color: #353535;
  font-size: 14pt;
}

.list-group-item span > a:hover {
  text-decoration: none;
  color: #3a8ab4;
}

.list-group-item p {
  color: #858585;
  font-size: 11pt;
}
</style>
