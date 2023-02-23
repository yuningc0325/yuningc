<script>
  import { onMount } from "svelte";
  // import scrollama from "scrollama";

  const sectionNumbers = [1, 2, 3, 4, 5, 6];
  // const scroller = scrollama();

  // onMount(() => {
  //   scroller
  //     .setup({ step: ".step" })
  //     .onStepEnter((res) => console.log("in", res))
  //     .onStepExit((res) => console.log("out", res));
  // });
</script>

<div class="scroll-wrapper">
  <!-- <div class="inner"/>
    <div class="inner"/>
    <div class="inner"/>
    <div class="inner"/> -->
  {#each sectionNumbers as sectionNumber}
    <div class="scroll-step" data-step={sectionNumber}>{sectionNumber}</div>
  {/each}
</div>

<style>
  .scroll-wrapper {
    width: 360px;
    height: 3000px;
    background: rgb(42, 40, 40);
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    visibility: hidden;
  }
  .scroll-step {
    width: 360px;
    height: 360px;
    background: white;
    border: 1px solid black;
    margin: 12px 0px;
    text-align: center;
    font-size: 3em;
  }
</style>
