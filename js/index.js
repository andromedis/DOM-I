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

let title = document.title;
console.log(title);
title = "Great Idea!";
console.log(title); // Changed here but not live...FIX


// Update nav bar items text
{
  const navItems = document.querySelectorAll('nav a');

  navItems[0].textContent = siteContent.nav["nav-item-1"];
  navItems[1].textContent = siteContent.nav["nav-item-2"];
  navItems[2].textContent = siteContent.nav["nav-item-3"];
  navItems[3].textContent = siteContent.nav["nav-item-4"];
  navItems[4].textContent = siteContent.nav["nav-item-5"];
  navItems[5].textContent = siteContent.nav["nav-item-6"];

  for(let i = 0; i < navItems.length; i++) {
    navItems[i].style.color = 'green';
  }
}

// Update section .cta
{
  let ctaHeader = document.querySelector('.cta h1');
  let ctaHeaderHTML = siteContent.cta.h1.split(' ').join('<br/>');
  ctaHeader.innerHTML = ctaHeaderHTML;

  let ctaButton = document.querySelector('.cta button');
  ctaButton.textContent = siteContent.cta.button;

  let ctaImg = document.querySelector('.cta img');
  ctaImg.src = siteContent.cta["img-src"];
}

// Update section .main-content
{
  let mainContentH4s = document.querySelectorAll('.main-content h4');
  
  let featuresH4 = mainContentH4s[0];
  featuresH4.textContent = siteContent["main-content"]["features-h4"];
  let aboutH4 = mainContentH4s[1];
  aboutH4.textContent = siteContent["main-content"]["about-h4"];
  let servicesH4 = mainContentH4s[2];
  servicesH4.textContent = siteContent["main-content"]["services-h4"];
  let productH4 = mainContentH4s[3];
  productH4.textContent = siteContent["main-content"]["product-h4"];
  let visionH4 = mainContentH4s[4];
  visionH4.textContent = siteContent["main-content"]["vision-h4"];


  let mainContentPs = document.querySelectorAll('.main-content p');

  let featuresContent = mainContentPs[0];
  featuresContent.textContent = siteContent["main-content"]["features-content"];
  let aboutContent = mainContentPs[1];
  aboutContent.textContent = siteContent["main-content"]["about-content"];
  let servicesContent = mainContentPs[2];
  servicesContent.textContent = siteContent["main-content"]["services-content"];
  let productContent = mainContentPs[3];
  productContent.textContent = siteContent["main-content"]["product-content"];
  let visionContent = mainContentPs[4];
  visionContent.textContent = siteContent["main-content"]["vision-content"];


  let middleImage = document.querySelector('.middle-img');
  middleImage.src = siteContent["main-content"]["middle-img-src"];
}

// Update section .contact
{
  let contactH4 = document.querySelector('.contact h4');
  contactH4.textContent = siteContent.contact["contact-h4"];

  let address = document.querySelectorAll('.contact p')[0];
  let addressWords = siteContent.contact.address.split(' ');
  let addressHTML = [addressWords.slice(0, 4).join(' '), '<br/>', addressWords.slice(4).join(' ')].join('');
  address.innerHTML = addressHTML;
  
  let phone = document.querySelectorAll('.contact p')[1];
  phone.textContent = siteContent.contact.phone;

  let email = document.querySelectorAll('.contact p')[2];
  email.textContent = siteContent.contact.email;
}

// Update footer
{
  let copyright = document.querySelector('footer p');
  copyright.textContent = siteContent.footer.copyright;
}