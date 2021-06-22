/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  router.afterEach((to, from) => {
    if (from.path !== to.path) {
      if (typeof document !== 'undefined' && document.getElementById('contentReply')) {
        const contentReply = document.getElementById('contentReply')
        contentReply.innerHTML = ""
        const utterances = document.createElement('script');
        utterances.type = 'text/javascript';
        utterances.async = true;
        utterances.crossorigin = 'anonymous';
        utterances.src = 'https://utteranc.es/client.js';
        
        utterances.setAttribute('issue-term', 'title'); // pathname|url|title|og:title 중 택 1
        utterances.setAttribute('theme','github-light'); // theme 설정
        utterances.setAttribute('repo',`jpark6/TIL`); // 사용할 repository

        contentReply.append(utterances)
      }
    } else {
      // same page but hash changed
    }
  })
}
