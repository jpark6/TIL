<template>
  <div ref="comment" id="contentReply"></div>
</template>

<script>
export default {
  mounted() {
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
  }
}
</script>
