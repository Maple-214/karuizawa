<script>
import Headers from "@/components/headers.vue";
// import Bodys from '@/components/homeView/body.vue'
import Breadcrumb from "@/components/breadcrumb.vue";
import Footers from "@/components/footers.vue";

export default {
  data() {
    return {
    };
  },
  mounted() {
  },
  components: {
    Headers,
    Breadcrumb,
    Footers,
  },
};
</script>

<template>
  <div id="main" class="shop_karuizawa">
    <Headers :path="this.$route.name" />
    <Breadcrumb />
    <router-view></router-view>
    <!-- <Bodys/> -->
    <Footers />
  </div>
</template>

<style scoped></style>
