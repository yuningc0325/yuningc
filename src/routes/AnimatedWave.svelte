<script>
  import P5 from "p5-svelte";
  import { onMount } from "svelte";

  let sketch;
  let waves = [];
  let numOfPoints = 60;
  export let showStep;

  onMount(() => {
    sketch = (p5) => {
      p5.setup = () => {
        const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
        canvas.position(0, 0, "fixed");

        waves = [
          new Wave(450, 0, 0, 0, 0),
          new Wave(450, 0, -30, -60, 1),
          new Wave(450, 0, -40, -80, 2),
        ];

        p5.smooth();
      };

      p5.draw = () => {
        p5.clear();
        p5.translate(p5.windowWidth * 0.5, p5.windowHeight * 0.46);
        for (const wave of waves) {
          wave.display(p5);
          wave.update();
        }
      };
    };
  });

  class Wave {
    constructor(radius, yOff, offsetX, offsetY, index) {
      this.radius = radius;
      this.yOff = yOff;
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      this.index = index;
    }

    display(p5) {
      let xOff = 0;
      const scaler = showStep === 1 ? showStep : 2;
      p5.noFill();
      // p5.fill("rgba(0,0,0,0.2)")
      p5.stroke(this.index > 0 ? "rgba(255,255,255,0.5)" : "white");
      p5.strokeWeight(this.index > 0 ? 1 : 3);
      p5.noiseDetail(2.8, 1);
      p5.beginShape();
      for (let i = 0; i < numOfPoints; i++) {
        const angle = p5.map(i, 0, numOfPoints, 0, p5.TWO_PI);
        const x = this.radius * scaler * p5.cos(angle);
        const y = this.radius * scaler * p5.sin(angle);
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

{#if sketch}
  <P5 {sketch} />
{/if}

<style>
</style>
