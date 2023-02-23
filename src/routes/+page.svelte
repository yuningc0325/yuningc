<script>
  import AnimatedWave from "./AnimatedWave.svelte";
  import Scroll from "./Scroll.svelte";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import scrollama from "scrollama";

  const scroller = scrollama();

  let showStep = 0;
  $: scrollTransform = showStep === 1 ? 0 : 250;
  onMount(() => {
    scroller
      .setup({ step: ".scroll-step" })
      .onStepEnter((res) => {
        showStep = res.index;
      })
      .onStepExit((res) => console.log("out", res));
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <AnimatedWave {showStep} />
  <div class="main-wrapper">
    {#if showStep === 1}
      <div class="introduction" transition:fade={{ duration: 1200 }}>
        <span>YuNing Chang</span>
        <span>-</span>
        <span> Technology x Business x Creator </span>
      </div>
    {/if}
    {#if showStep === 2}
      <!-- <div class="introduction" transition:fade={{ duration: 1200 }}>
      <span>XXX</span>
      <span>-</span>
      <span> Technology x Business x Creator </span>
    </div> -->
    {/if}
    {#if showStep >= 1}
      <div class="scroll-me" style="transform: translate(0px,{scrollTransform}px);">
        <div class="scroll-me-hint" />
      </div>
    {/if}
  </div>
  <Scroll />
</section>

<style>
  .main-wrapper {
    color: white;
    position: fixed;
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
    transition: 1.2s all;
    width: 24px;
    height: 48px;
    position: absolute;
    bottom: 0%;
    border-radius: 42px;
    border: 3px solid rgba(255, 255, 255, 0.8);
    background: none;
    display: flex;
    justify-content: center;
  }
  .scroll-me-hint {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 0px auto;
    /* display: block; */
    position: relative;
    animation-name: fallingBall;
    animation-duration: 1.25s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @keyframes fallingBall {
    from {
      background: rgba(255, 255, 255, 0.2);
      top: 12%;
    }
    to {
      background: rgb(255, 255, 255);
      top: 62%;
    }
  }
</style>
