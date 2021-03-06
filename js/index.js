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
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// Nav Header
const nav = document.querySelector("nav");

const allNavLinks = nav.querySelectorAll("a");

const navItem1 = allNavLinks[0]
navItem1.textContent = siteContent["nav"]["nav-item-1"];

const navItem2 = allNavLinks[1]
navItem2.textContent = siteContent["nav"]["nav-item-2"];

const navItem3 = allNavLinks[2];
navItem3.textContent = siteContent["nav"]["nav-item-3"];

const navItem4 = allNavLinks[3];
navItem4.textContent = siteContent["nav"]["nav-item-4"];

const navItem5 = allNavLinks[4];
navItem5.textContent = siteContent["nav"]["nav-item-5"];

const navItem6 = allNavLinks[5];
navItem6.textContent = siteContent["nav"]["nav-item-6"];


// CTA H1 and Image
const ctaText = document.querySelector(".cta-text");

const mainHeading = ctaText.querySelector("h1");
const mainHeadingText = siteContent["cta"]["h1"]
mainHeading.innerHTML = mainHeadingText.split(' ').join("<br />");

const button = ctaText.querySelector("button");
button.textContent = siteContent["cta"]["button"];

const cta = document.querySelector(".cta");

const imgCodeSnip = cta.querySelector("img");
imgCodeSnip.src = siteContent["cta"]["img-src"];


// main-content and Image
const allContent = document.querySelectorAll(".text-content");

function updateInfo(h4Text, pText, i){
  let newH4 = allContent[i].querySelector("h4");
  newH4.textContent = h4Text;
  let newInfo = allContent[i].querySelector("p");
  newInfo.textContent = pText;
}

updateInfo(siteContent["main-content"]["features-h4"], siteContent["main-content"]["features-content"], 0);

updateInfo(siteContent["main-content"]["about-h4"], siteContent["main-content"]["about-content"], 1);

updateInfo(siteContent["main-content"]["services-h4"], siteContent["main-content"]["services-content"], 2);

updateInfo(siteContent["main-content"]["product-h4"], siteContent["main-content"]["product-content"], 3);

updateInfo(siteContent["main-content"]["vision-h4"], siteContent["main-content"]["vision-content"], 4)

const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];


// contact
const contact = document.querySelector(".contact");
const contactH4 = contact.querySelector("h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactTexts = contact.querySelectorAll("p");
const splitAddress = siteContent["contact"]["address"].split("Street ").join("Street<br />")
contactTexts[0].innerHTML = splitAddress;
contactTexts[1].textContent = siteContent["contact"]["phone"];
contactTexts[2].textContent = siteContent["contact"]["email"];


// footer
const footer = document.querySelector("footer");
const footerText = footer.querySelector("p");
footerText.textContent = siteContent["footer"]["copyright"];


// change color
allNavLinks.forEach(element => {
  element.style.color = "green";
});


// append 
const blogLink = document.createElement("a");
const resourcesLink = document.createElement("a");

blogLink.textContent = "Blog";
blogLink.href = "#";
resourcesLink.textContent = "Resources";
resourcesLink.href = "#";

nav.appendChild(blogLink);
nav.prepend(resourcesLink);



// stretch addEventListener

const newButton = document.createElement("button");
newButton.innerHTML = "Click me!";

ctaText.appendChild(newButton);

newButton.addEventListener("click", function(){
  mainHeading.style.color = "#F20477";
})

