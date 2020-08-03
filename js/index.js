const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelector("nav");

const navItem1 = nav.querySelector("a");
navItem1.textContent = "Services";
navItem1.classList.add("nav-item-1");

const navItem2 =navItem1.nextElementSibling;
navItem2.textContent = "Product";
navItem2.classList.add("nav-item-2");

const navItem3 = navItem2.nextElementSibling;
navItem3.textContent = "Vision";
navItem3.classList.add("nav-item-3");

const navItem4 = navItem3.nextElementSibling;
navItem4.textContent = "Features";
navItem4.classList.add("nav-item-4");

const navItem5 = navItem4.nextElementSibling;
navItem5.textContent = "About";
navItem5.classList.add("nav-item-5");

const navItem6 = navItem5.nextElementSibling;
navItem6.textContent = "Contact";
navItem6.classList.add("nav-item-6");

const ctaText = document.querySelector(".cta-text");

const mainHeading = ctaText.querySelector("h1");
mainHeading.textContent = "DOM Is Awesome";

const button = ctaText.querySelector("button");
button.textContent = "Get Started";

const cta = document.querySelector(".cta");
const imgCodeSnip = cta.querySelector("img");
imgCodeSnip.src = "img/header-img.png"