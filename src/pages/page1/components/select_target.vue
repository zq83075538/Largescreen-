<template>
  <div class="page">
      <model :img="model.img" :left="model.left" :top="model.top">
        <dashboard></dashboard>
      </model>
  </div>
</template>

<script>
import model from '@/components/model'
import dashboard from '@/components/dashboard'
export default {
  name: 'page1',
  data () {
    return {
      model: {
        img: require('../../../assets/images/dashboard.png'),
        left: 1272,
        top: 106
      }
    }
  },
  components: {model, dashboard}

}
</script>  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page {
    width: 3328px;
    height: 1024px;
    background: url(../../../assets/images/baseBg.jpg) center no-repeat;
  }
</style>
