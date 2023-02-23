<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import "./normalize.css";
  import github from "$lib/images/github.svg";
  import linkedin from "$lib/images/linkedin.svg";
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <footer>
    <!-- 放入github, linkedin -->
    <div class="icon">
      <a href="https://kit.svelte.dev">
        <img src={github} alt="github-icon" />
      </a>
    </div>
    <div class="icon">
      <a href="https://kit.svelte.dev">
        <img src={linkedin} alt="linkedin-icon" />
      </a>
    </div>
  </footer>
</div>

<style>
  footer {
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .icon {
    width: 30px;
    height: 30px;
    margin: 2.4em 0.8em;
  }
</style>
