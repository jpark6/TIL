<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <Utterances />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import Utterances from '@theme/components/Utterances.vue'

export default {
  components: { PageEdit, PageNav, Utterances },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
