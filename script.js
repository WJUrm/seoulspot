//이미지 순차적으로 나오기
window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let elements = document.querySelectorAll(".Central");
  let elements2 = document.querySelectorAll(".Central2");

  elements.forEach(element => {
      if (scrollTop >= 12000) {
          element.style.display = "none";
          element.style.transition = "all 0.3s ease";
          element.style.opacity = "0";
          element.style.transform = "translateY(10px)"; // 아래로 살짝 이동하며 사라지는 효과
          element.style.visibility = "hidden";
      } else {
          element.style.display = "block";
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
          element.style.visibility = "visible";
      }
  });
  elements2.forEach(element2 => {
      if (scrollTop >= 12000) {
          element2.style.transition = "all 0.3s ease";
          element2.style.opacity = "0";
      } else {
          element2.style.opacity = "1";
      }
  });
});

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let elements = document.querySelectorAll(".Northwestern");
  let elements2 = document.querySelectorAll(".Northwestern2");

  elements.forEach(element => {
      if (scrollTop >= 12000 && scrollTop < 13000) {
          element.style.display = "block";
          element.style.transition = "all 0.3s ease";
          element.style.opacity = "1";
      } else {
          element.style.display = "none";
          element.style.opacity = "0";
      }
  });
  elements2.forEach(element2 => {
      if (scrollTop >= 12000 && scrollTop < 13000) {
          element2.style.transition = "all 0.3s ease";
          element2.style.opacity = "1";
      } else {
          element2.style.opacity = "0";
      }
  });
});

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let elements = document.querySelectorAll(".Northeastern");
  let elements2 = document.querySelectorAll(".Northeastern2");

  elements.forEach(element => {
      if (scrollTop >= 13000 && scrollTop < 14000) {
          element.style.display = "block";
      } else {
          element.style.display = "none";
      }
  });
  elements2.forEach(element2 => {
      if (scrollTop >= 13000 && scrollTop < 14000) {
          element2.style.transition = "all 0.3s ease";
          element2.style.opacity = "1";
      } else {
          element2.style.opacity = "0";
      }
  });
});

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let elements = document.querySelectorAll(".Southwestern");
  let elements2 = document.querySelectorAll(".Southwestern2");

  elements.forEach(element => {
      if (scrollTop >= 14000 && scrollTop < 15000) {
          element.style.display = "block";
      } else {
          element.style.display = "none";
      }
  });
  elements2.forEach(element2 => {
      if (scrollTop >= 14000 && scrollTop < 15000) {
          element2.style.transition = "all 0.3s ease";
          element2.style.opacity = "1";
      } else {
          element2.style.opacity = "0";
      }
  });
});

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let elements = document.querySelectorAll(".Southeastern");
  let elements2 = document.querySelectorAll(".Southeastern2");

  elements.forEach(element => {
      if (scrollTop >= 15000) {
          element.style.display = "block";
      } else {
          element.style.display = "none";
      }
  });
  elements2.forEach(element2 => {
      if (scrollTop >= 15000) {
          element2.style.transition = "all 0.3s ease";
          element2.style.opacity = "1";
      } else {
          element2.style.opacity = "0";
      }
  });
});

gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.create({
  trigger: ".Northwestern", // 대상 요소
  start: "12000 top", // 스크롤 12000px에 도달하면 실행
  end: "16000 top", // 16000px에서 다시 원래대로
  toggleClass: "active", // active 클래스를 추가 및 제거
});

const ani1 = gsap.timeline();
ani1.from("#section1", {autoAlpha: 1})

ScrollTrigger.create({
animation: ani1,
trigger: "#section1",
start: "top top",
end: "+=5000",
scrub: true,
pin: true
});

const ani2 = gsap.timeline();
ani2.from("#section2 .i1", { y: -100, autoAlpha: 0, borderRadius: 200 })
.from("#section2 .i2", { y: 100, autoAlpha: 0, borderRadius: 200 })
.from("#section2 .i3", { y: -100, autoAlpha: 0, borderRadius: 200 })
.from("#section2 .i4", { y: -100, autoAlpha: 0, borderRadius: 200 });

ScrollTrigger.create({
animation: ani2,
trigger: "#section2",
start: "top top",
end: "+=2000",
scrub: true,
pin: true
});

let s = skrollr.init();

window.addEventListener("scroll", () => {
document.querySelector(".scrollTop").innerText = window.scrollY;
});

//related-events
const scrollSection = document.querySelector('#related-events');
const scrollContent = document.querySelector('.horizontal-scroll__content');

document.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const sectionOffset = Math.abs(scrollSection.offsetTop - (scrolled));
  const notReachedBottom = parseInt(Math.max(0, scrollSection.getBoundingClientRect().bottom - window.innerHeight));
  
  if (scrollSection.offsetTop <= scrolled && notReachedBottom) {
    gsap.to(scrollContent, {
      x: -sectionOffse
    });
  }
});
