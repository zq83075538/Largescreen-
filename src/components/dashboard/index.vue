<template>
  <div ref="outer" style="background: rgba(0,0,0,.1)" v-if="width > 0">
  </div>
</template>

<script>
let shuzi = 0, timer = '', shuzi1 = 0, timer1 = '';
export default {
  name: "page1",
  data() {
    return {
      width: 300,
      height: 300,
      canvas: null,
      action: 6,
      arrLength: 12,
      begin: 0,
      lightimg:require('@/assets/images/light.png')
    };
  },
  props: ["img", "left", "top"],
  mounted() {
    let P = this.$parent,
      width = P.width,
      height = P.height;
    P.$el.style.position = 'relative';
    this.width = width;
    this.height = height;
    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    let ctx = canvas.getContext('2d');
    this.drow(ctx);
    this.$refs.outer.appendChild(canvas);

    let canvas1 = document.createElement('canvas');
    canvas1.width = width;
    canvas1.height = height;
    canvas1.style.left = 0;
    canvas1.style.top = 0;
    canvas1.style.position = 'absolute';

    let img = canvas1.getContext('2d');


    this.drowImg(img)
    this.$refs.outer.appendChild(canvas1);
  },
  methods: {
    drow(ctx) {
      // if(shuzi < this.arrLength + this.action){
      //   timer = window.setTimeout(() => {
      //     shuzi++;
      //     this.drow(ctx);
      //   }, 200)
      // }else{
      //   clearTimeout(timer);
      // }
      // console.log(shuzi, '数字')
      // let action = shuzi % this.arrLength;

      let action = this.action;
      let arrLength = this.arrLength;
      let start = -0.5 * Math.PI;
      let index = 0;
      let width = this.width;
      let radio = (width >> 1) - 50;
      ctx.lineWidth = 20;
      ctx.textAlign = "center";
      ctx.font = "24px Arial";
      let grad = ctx.createLinearGradient(0, 50, 0, width - 50);
      grad.addColorStop(0, "rgb(1, 214, 254)");
      grad.addColorStop(1, "rgb(24, 76, 133)");
      while (index !== arrLength) {
        ctx.beginPath();
        ctx.strokeStyle = index <= action ? "#ffe04e" : grad;
        let qidian = start + index / arrLength * 2 * Math.PI;
        let zhongdian = start + (index + 0.02) / arrLength * 2 * Math.PI;
        ctx.arc(width / 2, width / 2, radio - 50, qidian, zhongdian);

        let x = width / 2 - radio * Math.sin(qidian - 0.5 * Math.PI);
        let y = width / 2 + radio * Math.cos(qidian - 0.5 * Math.PI) + 8;

        ctx.fillStyle = index <= action ? "#ffe04e" : "#fff";
        ctx.stroke();
        ctx.fillText(index + "0", x, y);
        index++;
      }
    },
    drowImg(ctx) {
      var _ = this,image1 = new Image();
      image1.onload = function() {
        if(shuzi1 < 30 * (12 + _.action )){
          timer1 = window.setTimeout(() => {
            console.log(shuzi1)
            shuzi1 = parseInt(shuzi1) + 3;
            _.drowImg(ctx);
          }, 20)
        }else{
          clearTimeout(timer1);
        }
        // console.log(shuzi1, '---s')
        var xpos = _.width/2;
        var ypos = _.height/2;
        ctx.clearRect(0, 0, _.width, _.height);
        ctx.translate(_.width / 2, _.height / 2);
        ctx.rotate((shuzi1 % 360) * Math.PI / 180);
        ctx.drawImage(image1, -xpos, -ypos);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
      }
      image1.src = this.lightimg;
    }
  }
};
</script>  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.model {
  position: absolute;
}
</style>
