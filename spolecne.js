const menuPolozky = document.getElementById('menu-polozky');

const menuButton = document.getElementById('menu-tlacitko');

const hamburgerIcon = document.querySelector('.fas.fa-bars');

const hamburgerSwitch = (event) => {
  menuPolozky.classList.toggle('show');
  hamburgerIcon.classList.toggle('fa-bars');
  hamburgerIcon.classList.toggle('fa-xmark');
}

menuButton.addEventListener('click', hamburgerSwitch);
