<script>
  const sectionNumbers = [1, 2, 3, 4, 5, 6];
</script>

<div class="scroll-wrapper">
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
