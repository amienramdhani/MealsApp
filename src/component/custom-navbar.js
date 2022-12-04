import Logo from '../images/logo.png';

class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .navbar-brand{
        margin-left: 15px;
        color:white;
        font-weight : bold;
        font-size : 30px;
    }
    .bg-apps{
        background-color:#E14D2A;
    }
    .nav-link{
        color:white;
    }
    .logo{
      width:70px;
      height:70px;
    }
    </style>

    <nav class="navbar navbar-expand-lg bg-apps">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
      <img class = "logo" src= ${Logo} />
      MealsApp
      </a>      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Menu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Category</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;
  }
}

customElements.define('custom-navbar', CustomNavbar);
