const images = document.querySelectorAll(".art-img");

images.forEach((img) => {
  img.addEventListener("click", function () {
    if (this.classList.contains("expanded-img")) {
      this.classList.remove("expanded-img");
    } else {
      images.forEach((image) => {
        image.classList.remove("expanded-img");
      });
      this.classList.add("expanded-img");
    }
  });
});
function switchLanguage(lang) {
  window.location.href = `index_${lang}.html`;
}


document.addEventListener("DOMContentLoaded", function () {
  var tglinkart = document.querySelector(".tglinkart");

  function toggleFullScreen() {
    tglinkart.classList.toggle("full-screen");
  }

  if (tglinkart) {
    tglinkart.addEventListener("click", toggleFullScreen);
  } else {
    console.error('Element with class "tglinkart" not found!');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var instlinkart = document.querySelector(".instlinkart");

  function toggleFullScreens() {
    instlinkart.classList.toggle("full-screen");
  }

  if (instlinkart) {
    instlinkart.addEventListener("click", toggleFullScreens);
  } else {
    console.error('Element with class "instlinkart" not found!');
  }
});


if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
  // iOS detected
  disableAnimationsForTouch();
}
