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
  /* .app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	} */

  /* main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	} */

  /* footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
  footer {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  footer p {
    font-weight: bold;
    color: white;
  }

  .icon {
    width: 30px;
    height: 30px;
    margin: 2.4em 0.8em;
  }
</style>
