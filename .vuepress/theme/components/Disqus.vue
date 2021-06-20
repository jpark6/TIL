<template>
  <div id="disqus_thread" class="disqus"></div>
</template>

<script>
export default {
  mounted() {
    console.log("Disqus!")
    try {
      let disqus_config = function () {
        this.page.url = location.origin;
        this.page.identifier = location.pathname;
      };
      (function () {
        var d = document, s = d.createElement('script');
        s.src = 'https://jpark6-til-netlify-app.disqus.com/embed.js';
        s.setAttribute('data-timestamp', + new Date());
        (d.head || d.body).appendChild(s);
      })();
    } catch (e) {
      // some error
    }
  }
}
</script>

<style lang="stylus">
.disqus
  max-width: 740px
  margin: 0 auto
  padding: 2rem 2.5rem
</style>