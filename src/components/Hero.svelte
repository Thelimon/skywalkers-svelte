<script>
  export let mainTitle;
</script>

<main>
  <h3>{mainTitle}</h3>
  <h2>{mainTitle} awesome travels</h2>
  <button>Learn more</button>
</main>

<style lang="scss">
  @import "../styles/_variables.scss";
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 50vh;
    background-color: gray;
    h3 {
      margin: 0;
    }
    button {
      background-color: $orange_hover_color;
      color: $primary_background_color;
      height: 2.7rem;
      width: 8rem;
      border: none;
      border-radius: 0.5rem;
      font-weight: 700;
      &:hover{
        background-color: $button_color_hover;
        transition: ease-in-out 0.5s;
      }
    }
  }
  @media (min-width: 768px) {
    main {
      height: 60vh;
      h3 {
        font-size: 2rem;
      }
      h2 {
        font-size: 2.5rem;
      }
      button {
        height: 3rem;
        width: 10rem;
        font-size: 1.2rem;
      }
    }
  }

  @media (min-width: 1024px){
    main{
      height: 70vh;
      h3{
        font-size: 1.8rem;
      }
      h2{
        font-size: 2rem;
      }
      button{
        height: 2.7rem;
        width: 8rem;
        font-size: .9rem;
      }
    }
  }
</style>
