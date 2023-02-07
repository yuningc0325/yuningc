<script>
  import Counter from "./Counter.svelte";
  import welcome from "$lib/images/svelte-welcome.webp";
  import welcome_fallback from "$lib/images/svelte-welcome.png";
  import AnimatedWave from "./AnimatedWave.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

  <AnimatedWave />
  <div class="main-wrapper">
    <div class="introduction">
      <span>YuNing Chang</span>
      <span>-</span>
      <span> Technology x Business x Creator </span>
    </div>
    <!-- <span class="short-text"> yuningcdev@gmail.com </span> -->

    <div class="scroll-me">
      <div />
    </div>
  </div>
</section>

<style>
  .main-wrapper {
    color: white;
    position: absolute;
    /* height: fit-content; */
    height: 600px;
    width: fit-content;
    max-width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .introduction {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 50%;
    transform: translate(0%, -50%);
  }
  .introduction span:nth-child(1) {
    font-size: 3rem;
    font-weight: bold;
  }
  .introduction span:nth-child(2) {
    font-size: 2rem;
  }
  .introduction span:nth-child(3) {
    font-size: 1.5rem;
    font-weight: 200;
    font-style: italic;
  }
  .scroll-me {
    width: 24px;
    height: 48px;
    position: absolute;
    bottom: 0%;
    border-radius: 42px;
    border: 3px solid rgba(255, 255, 255, 0.8);
  }
  .scroll-me div {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 0px auto;
    display: block;
    position: relative;
    top: 8%;
    animation-name: fallingBall;
    animation-duration: 1.25s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @keyframes fallingBall {
    from {
      background: rgba(255, 255, 255, 0.2);
      top: 8%;
    }
    to {
      background: rgb(255, 255, 255);
      top: 72%;
    }
  }
</style>
