<script>
  export let companyName;
</script>

<nav class="menu">
  <div>
    <img
      src="https://images.vexels.com/media/users/3/129051/isolated/preview/0beb91ff628653682a6162dfdf174a26-icono-de-circulo-de-copa-de-vino.png"
      alt="logo"
    />
    <h3>{companyName}</h3>
  </div>
  <ul class="menu-items ">
    <li><a href="#home"> Home </a></li>
    <li><a href="#countries"> Countries </a></li>
    <li><a href="#sales"> Hot sales </a></li>
    <li><a href="#about"> About us </a></li>
    <li><a href="#contact"> Contact </a></li>
  </ul>
</nav>

<style lang="scss">
  @import "../styles/_variables.scss";
  .menu {
    display: grid;
    width: 100vw;
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      img{
        width: 4rem;
        margin-right: .5rem;
      }
    }
    ul{
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 1rem;
      margin: 0;
      li{
        a{
          font-size: 1.06rem;
          text-decoration: none;
          color: black;
        }
      }
    }
  }

  @media(min-width: 768px){
    .menu{
      display: flex;
      justify-content: center;
      align-items: center;
      div{
        img{
          width: 6.5rem;
        }
        h3{
          font-size: 1.4rem;
        }
      }
      ul{
        li{
          margin-right: .4rem;
          a{
            font-size: 1.4rem;
          }
        }
      }
    }
  }

  @media(min-width: 1024px){
    .menu{
      justify-content: space-around;
      div{
        img{
          width: 3rem;
        }
        h3{
          font-size: 1rem;
        }
      }
      ul{
        li{
          a{
            font-size: .9rem;
            &:hover{
              color: $orange_hover_color;
            }
          }
        }
      }
    }
  }
</style>
