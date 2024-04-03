/*responsive*/
const gnb = document.querySelector(".gnb");
const ham = document.querySelector(".ham");
const member = document.querySelector(".member");

const li = gnb.querySelectorAll("li");

ham.addEventListener("click", (e) => {
  e.preventDefault();
  gnb.classList.toggle("on");
  member.classList.toggle("on");

  li.forEach((el) => {
    el.classList.remove("on");
  });
});

gnb.addEventListener("click", (e) => {
  if (!e.target.closest("a")) return;

  if (e.target.closest("a").parentElement.parentElement === gnb) {
    e.preventDefault();
  } else {
    li.forEach((el) => {
      el.classList.remove("on");
    });

    gnb.classList.remove("on");
    member.classList.remove("on");
  }

  li.forEach((el) => {
    if (el != e.target.closest("li")) {
      el.classList.remove("on");
    }
  });

  if (e.target.closest("li")) {
    e.target.closest("li").classList.toggle("on");
  }
});

/*hero video*/
const video = document.getElementById("myVideo");
const videoCon = document.getElementById("videoCon");

const playBtn = document.getElementById("playBtn");
const playLink = document.getElementById("playLink");

const header = document.querySelector(".header");
const hero = document.querySelector(".hero");
const service = document.querySelector(".service");

const traveller = document.querySelector(".traveller");
const heroParagraph = document.querySelector(".hero .paragraph");

function showVideo() {
  videoCon.style.display = "block";
  video.style.display = "block";
  video.play();
  traveller.style.display = "none";

  heroParagraph.style.display = "none";
}

function hideVideo() {
  video.pause();
  videoCon.style.display = "none";
  video.style.display = "none";
  traveller.style.display = "block";

  heroParagraph.style.display = "block";
}

playBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  if (video.paused) {
    showVideo();
  } else {
    hideVideo();
  }
});

playLink.addEventListener("click", function (e) {
  e.stopPropagation();
  if (video.paused) {
    showVideo();
  } else {
    hideVideo();
  }
});

[header, hero, service].forEach(function (e) {
  e.addEventListener("click", function () {
    hideVideo();
  });
});

/*destinations*/
var topSlide = new Swiper(".topSlide", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 3200,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".topPg",
    clickable: true,
  },
});

/*testimonials*/
var horizontal = new Swiper(".horizontal", {
  spaceBetween: 50,
  pagination: {
    el: ".pg1",
    clickable: true,
  },
});
var vertical = new Swiper(".vertical", {
  direction: "vertical",
  spaceBetween: 50,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
