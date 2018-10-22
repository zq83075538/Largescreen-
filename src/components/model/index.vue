<template>
  <div class="model" :style="`width: ${width}px;height: ${height}px;top: ${top}px;left: ${left}px;background:url(${img}) center no-repeat`">
    <slot v-if="isShow">没有任何东西</slot>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      width: 0,
      height: 0,
      isShow: false
    }
  },
  props: ['img', 'left', 'top'],
  created(){
    let _ = this,img = new Image();
    img.onload = function(){
      _.width = this.width;
      _.height = this.height;
      _.isShow = true;
    }
    console.log(this.img)
    img.src = this.img;
  }
}
</script>  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .model{
    position: absolute;
  }
</style>
