<script>
  import P5 from "p5-svelte";
  import { onMount } from "svelte";
  import me_image from "$lib/images/me.png";

  let sketch;
  let waves = [];
  let numOfPoints = 60;
  let img;

  // const imgWidth = 300;
  // const imgHeight = 520;
  const imgWidth = 500;
  const imgHeight = 500;

  onMount(() => {
    sketch = (p5) => {
      // p5.preload = () => {
      //   img = p5.loadImage(me_image);
      // };
      p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        waves = [
          new Wave(450, 0, 0, 0, 0),
          new Wave(450, 0, -30, -60, 1),
          new Wave(450, 0, -40, -80, 2),
        ];
      };

      p5.draw = () => {
        // p5.background("#022C43");
        p5.clear();
        // p5.image(img, p5.width * 0.5 - imgWidth * 0.5, p5.height * 0.5 - imgHeight * 0.5, imgWidth, imgHeight);
        p5.translate(p5.windowWidth * 0.5, p5.windowHeight * 0.46);
        for (const wave of waves) {
          wave.display(p5);
          wave.update();
        }
      };
    };
  });


  class Wave {
    constructor(r, yOff, offsetX, offsetY, index) {
      this.r = r;
      this.yOff = yOff;
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      this.index = index;
    }

    display(p5) {
      let xOff = 0;
      p5.noFill();
      // p5.fill("rgba(0,0,0,0.2)")
      p5.stroke(this.index > 0 ? "rgba(255,255,255,0.5)" : "white");
      p5.strokeWeight(this.index > 0 ? 1 : 3);
      p5.noiseDetail(2.8, 1);
      p5.beginShape();
      for (let i = 0; i < numOfPoints; i++) {
        const angle = p5.map(i, 0, numOfPoints, 0, p5.TWO_PI);
        const x = this.r * p5.cos(angle);
        const y = this.r * p5.sin(angle);
        const randomY = p5.map(p5.noise(xOff, this.yOff), 0, 1, 0, 100);
        if (angle > 0) {
          p5.curveVertex(this.offsetX + x, this.offsetY + y + randomY);
        }
        xOff += 0.1;
      }
      p5.endShape(p5.CLOSE);
    }

    update() {
      this.yOff += 0.003 * (1 / (this.index + 1));
    }
  }


</script>

<!-- <div class="my-text">Read More..</div> -->


<!-- <div class="my-text">
  -
 </div> -->
{#if sketch}
  <P5 {sketch} class="cx-p5" />
{/if}

<!-- <picture>
  <source srcset={me_image} type="image/webp" />
  <img src={me_image} alt="Welcome" />
</picture> -->
<style>
  picture {
    /* z-index: 999; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  picture img {
    width: 300px;
    height: 520px;
  }
  .cx-p5 {
    z-index: -1;
    position: absolute;
  }
  
</style>
