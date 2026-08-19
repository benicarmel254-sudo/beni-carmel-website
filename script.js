/* =====================================================
   BÉNI CARMEL COLLECTIVES
   SHOPPING SYSTEM
===================================================== */

let bag = JSON.parse(localStorage.getItem("beniCarmelBag")) || [];

let selectedProduct = null;
let selectedSize = "M";
let selectedColor = "";
let detailQuantity = 1;


/* =====================================================
   PRODUCT DATA
===================================================== */

const productData = {

  "Faith Hoodie": {
    price: 1200,
    image: "images/hoodie-1.jpg",
    category: "HOODIES",
    description:
      "A bold faith-inspired hoodie designed for everyday wear. Comfortable, expressive and made to carry the message wherever you go.",
    colors: ["Black", "Cream"],
    sizes: ["S", "M", "L", "XL"]
  },

  "Covenant Hoodie": {
    price: 1200,
    image: "images/hoodie-2.jpg",
    category: "HOODIES",
    description:
      "A relaxed everyday hoodie inspired by covenant, identity and purpose.",
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL"]
  },

  "Glory Hoodie": {
    price: 1200,
    image: "images/hoodie-2.jpg",
    category: "HOODIES",
    description:
      "A statement hoodie created for bold faith and everyday expression.",
    colors: ["Black", "Cream"],
    sizes: ["S", "M", "L", "XL"]
  },

  "Faith Shirt": {
    price: 600,
    image: "images/tee-1.jpg",
    category: "T-SHIRTS",
    description:
      "A clean everyday tee carrying the Béni Carmel message of faith worn boldly.",
    colors: ["White", "Black"],
    sizes: ["S", "M", "L", "XL"]
  },

  "Glory Shirt": {
    price: 600,
    image: "images/tee-2.jpg",
    category: "T-SHIRTS",
    description:
      "A simple statement tee designed to become part of your everyday wardrobe.",
    colors: ["White", "Black"],
    sizes: ["S", "M", "L", "XL"]
  },

  "Covenant Shirt": {
    price: 600,
    image: "images/tee-3.jpg",
    category: "T-SHIRTS",
    description:
      "Faith-inspired streetwear made for everyday movement and expression.",
    colors: ["White", "Black"],
    sizes: ["S", "M", "L", "XL"]
  },

  "College Jacket": {
    price: 1400,
    image: "images/college-jacket.jpg",
    category: "JACKETS",
    description:
      "A statement college jacket combining classic streetwear with the Béni Carmel identity.",
    colors: ["Black", "Cream"],
    sizes: ["S", "M", "L", "XL"]
  },

  "Classic Denim Jacket": {
    price: 1300,
    image: "images/denim-jacket-1.jpg",
    category: "JACKETS",
    description:
      "A timeless denim layer designed to work with your everyday wardrobe.",
    colors: ["Blue"],
    sizes: ["S", "M", "L", "XL"]
  },

  "Washed Denim Jacket": {
    price: 1300,
    image: "images/denim-jacket-2.jpg",
    category: "JACKETS",
    description:
      "A relaxed washed denim jacket with an effortless streetwear feel.",
    colors: ["Washed Blue"],
    sizes: ["S", "M", "L", "XL"]
  },

  "Wide Leg Jeans": {
    price: 1300,
    image: "images/wide-leg-jeans-blue.jpg",
    category: "BOTTOMS",
    description:
      "Relaxed wide-leg denim designed for a bold, effortless silhouette.",
    colors: ["Blue"],
    sizes: ["S", "M", "L", "XL"]
  },

  "Faith Jorts": {
    price: 1000,
    image: "images/jorts-1.jpg",
    category: "BOTTOMS",
    description:
      "Relaxed denim jorts made for everyday styling.",
    colors: [
      "Blue",
      "Dark Blue",
      "Marble Blue",
      "Sky Blue"
    ],
    sizes: ["S", "M", "L", "XL"]
  },

  "Faith Sweatpants": {
    price: 1000,
    image: "images/sweatpants-black.jpg",
    category: "BOTTOMS",
    description:
      "Comfortable everyday sweatpants designed with a relaxed streetwear fit.",
    colors: [
      "Black",
      "Burgundy",
      "Cream",
      "Grey"
    ],
    sizes: ["S", "M", "L", "XL"]
  },

  "Béni Carmel Beanie": {
    price: 500,
    image: "images/beanie-black.jpg",
    category: "ACCESSORIES",
    description:
      "A clean Béni Carmel beanie available in multiple colourways.",
    colors: [
      "Black",
      "Brown",
      "Burgundy",
      "Cream"
    ],
    sizes: ["One Size"]
  },

  "Béni Carmel Bucket Hat": {
    price: 800,
    image: "images/bucket-hat-black.jpg",
    category: "ACCESSORIES",
    description:
      "A relaxed bucket hat designed to complete your everyday Béni Carmel look.",
    colors: [
      "Black",
      "Beige",
      "Burgundy",
      "White"
    ],
    sizes: ["One Size"]
  },

  "Béni Carmel Cap": {
    price: 500,
    image: "images/cap-white.jpg",
    category: "ACCESSORIES",
    description:
      "A clean everyday cap featuring the Béni Carmel identity.",
    colors: ["White"],
    sizes: ["One Size"]
  },

  "Béni Carmel Shoulder Bag": {
    price: 800,
    image: "images/shoulder-bag-black.jpg",
    category: "ACCESSORIES",
    description:
      "A practical everyday shoulder bag available in multiple colourways.",
    colors: [
      "Black",
      "Brown",
      "Orange",
      "Pink"
    ],
    sizes: ["One Size"]
  },

  "Béni Carmel Cross Shoulder Bag": {
    price: 800,
    image: "images/shoulder-bag-black-cross.jpg",
    category: "ACCESSORIES",
    description:
      "A cross-body everyday bag designed for functionality and style.",
    colors: ["Black"],
    sizes: ["One Size"]
  },

  "Silver Cross Necklace": {
    price: 500,
    image: "images/cross-necklace-silver.jpg",
    category: "ACCESSORIES",
    description:
      "A silver cross necklace representing the faith at the heart of Béni Carmel.",
    colors: ["Silver"],
    sizes: ["One Size"]
  },

  "Béni Carmel Socks": {
    price: 200,
    image: "images/socks-black.jpg",
    category: "ACCESSORIES",
    description:
      "Everyday socks available in black and white.",
    colors: ["Black", "White"],
    sizes: ["S", "M", "L"]
  }

};


/* =====================================================
   ELEMENTS
===================================================== */

const bagOverlay = document.getElementById("bagOverlay");
const bagItems = document.getElementById("bagItems");
const bagCount = document.getElementById("bagCount");
const bagSubtotal = document.getElementById("bagSubtotal");
const bagShipping = document.getElementById("bagShipping");
const bagTotal = document.getElementById("bagTotal");
const checkoutButton = document.getElementById("checkoutButton");
const shippingMessage = document.getElementById("shippingMessage");

const productDetailOverlay =
  document.getElementById("productDetailOverlay");

const detailProductImage =
  document.getElementById("detailProductImage");

const detailProductName =
  document.getElementById("detailProductName");

const detailProductPrice =
  document.getElementById("detailProductPrice");

const detailProductCategory =
  document.getElementById("detailProductCategory");

const detailProductDescription =
  document.getElementById("detailProductDescription");

const detailQuantity =
  document.getElementById("detailQuantity");

const detailAddButton =
  document.getElementById("detailAddButton");


/* =====================================================
   HELPERS
===================================================== */

function formatPrice(price) {
  return "KES " + Number(price).toLocaleString();
}

function saveBag() {
  localStorage.setItem(
    "beniCarmelBag",
    JSON.stringify(bag)
  );
}

function getBagCount() {
  return bag.reduce(
    (total, item) => total + item.quantity,
    0
  );
}


/* =====================================================
   OPEN / CLOSE BAG
===================================================== */

function openBag() {
  bagOverlay.classList.add("open");
  document.body.classList.add("no-scroll");
  renderBag();
}

function closeBag() {
  bagOverlay.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

document
  .getElementById("bagButton")
  ?.addEventListener("click", openBag);

document
  .getElementById("closeBag")
  ?.addEventListener("click", closeBag);

bagOverlay?.addEventListener("click", function(e) {
  if (e.target === bagOverlay) {
    closeBag();
  }
});


/* =====================================================
   ADD TO BAG
===================================================== */

function addToBag(
  name,
  price,
  image,
  size = "M",
  color = ""
) {

  const existing = bag.find(item =>
    item.name === name &&
    item.size === size &&
    item.color === color
  );

  if (existing) {

    existing.quantity += 1;

  } else {

    bag.push({
      name,
      price,
      image,
      size,
      color,
      quantity: 1
    });

  }

  saveBag();
  renderBag();

  openBag();
}


/* =====================================================
   QUICK ADD
===================================================== */

window.addToBag = addToBag;


/* =====================================================
   RENDER BAG
===================================================== */

function renderBag() {

  const count = getBagCount();

  if (bagCount) {
    bagCount.textContent = count;
  }

  if (!bagItems) return;

  if (bag.length === 0) {

    bagItems.innerHTML = `
      <div class="empty-bag">
        <p>YOUR BAG IS EMPTY.</p>
        <a href="#shop" onclick="closeBag()">
          CONTINUE SHOPPING →
        </a>
      </div>
    `;

    bagSubtotal.textContent = "KES 0";
    bagShipping.textContent = "KES 0";
    bagTotal.textContent = "KES 0";

    shippingMessage.textContent =
      "ADD KES 10,000 TO YOUR BAG FOR FREE SHIPPING.";

    checkoutButton.disabled = true;
    checkoutButton.textContent = "YOUR BAG IS EMPTY";

    return;
  }


  bagItems.innerHTML = bag.map((item, index) => {

    const variation =
      [
        item.size && item.size !== "One Size"
          ? `SIZE: ${item.size}`
          : "",
        item.color
          ? `COLOUR: ${item.color}`
          : ""
      ]
      .filter(Boolean)
      .join(" • ");

    return `
      <div class="bag-product">

        <div class="bag-product-image">
          <img
            src="${item.image}"
            alt="${item.name}"
          >
        </div>

        <div class="bag-product-details">

          <div class="bag-product-top">

            <div>
              <h3>${item.name}</h3>

              ${
                variation
                  ? `<p>${variation}</p>`
                  : ""
              }
            </div>

            <strong>
              ${formatPrice(item.price * item.quantity)}
            </strong>

          </div>

          <div class="bag-product-bottom">

            <div class="bag-quantity">

              <button
                type="button"
                onclick="changeBagQuantity(${index}, -1)"
              >
                −
              </button>

              <span>
                ${item.quantity}
              </span>

              <button
                type="button"
                onclick="changeBagQuantity(${index}, 1)"
              >
                +
              </button>

            </div>

            <button
              class="bag-remove"
              type="button"
              onclick="removeFromBag(${index})"
            >
              REMOVE
            </button>

          </div>

        </div>

      </div>
    `;

  }).join("");


  const subtotal = bag.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  const shipping =
    subtotal >= 10000
      ? 0
      : 300;

  const total = subtotal + shipping;


  bagSubtotal.textContent =
    formatPrice(subtotal);

  bagShipping.textContent =
    shipping === 0
      ? "FREE"
      : formatPrice(shipping);

  bagTotal.textContent =
    formatPrice(total);


  if (subtotal >= 10000) {

    shippingMessage.textContent =
      "YOU QUALIFY FOR FREE SHIPPING.";

  } else {

    shippingMessage.textContent =
      `ADD ${formatPrice(10000 - subtotal)}
       TO YOUR BAG FOR FREE SHIPPING.`;

  }


  checkoutButton.disabled = false;
  checkoutButton.textContent =
    "PROCEED TO CHECKOUT";
}


/* =====================================================
   CHANGE QUANTITY
===================================================== */

function changeBagQuantity(index, amount) {

  if (!bag[index]) return;

  bag[index].quantity += amount;

  if (bag[index].quantity <= 0) {
    bag.splice(index, 1);
  }

  saveBag();
  renderBag();
}

window.changeBagQuantity = changeBagQuantity;


/* =====================================================
   REMOVE FROM BAG
===================================================== */

function removeFromBag(index) {

  bag.splice(index, 1);

  saveBag();
  renderBag();
}

window.removeFromBag = removeFromBag;


/* =====================================================
   PRODUCT DETAIL
===================================================== */

function openProductDetail(name) {

  const product = productData[name];

  if (!product) return;

  selectedProduct = name;
  selectedSize = product.sizes[0];
  selectedColor = product.colors[0];
  detailQuantity = 1;


  detailProductImage.src =
    product.image;

  detailProductImage.alt =
    name;

  detailProductName.textContent =
    name.toUpperCase();

  detailProductPrice.textContent =
    formatPrice(product.price);

  detailProductCategory.textContent =
    product.category;

  detailProductDescription.textContent =
    product.description;

  detailQuantity.textContent =
    detailQuantity;


  /* SIZES */

  const sizeContainer =
    document.querySelector(".size-options");

  sizeContainer.innerHTML =
    product.sizes.map(size => `
      <button
        class="size-option ${
          size === selectedSize
            ? "selected"
            : ""
        }"
        type="button"
        data-size="${size}"
      >
        ${size}
      </button>
    `).join("");


  document
    .querySelectorAll(".size-option")
    .forEach(button => {

      button.addEventListener("click", function() {

        document
          .querySelectorAll(".size-option")
          .forEach(btn =>
            btn.classList.remove("selected")
          );

        this.classList.add("selected");

        selectedSize =
          this.dataset.size;

      });

    });


  /* COLOURS */

  let existingColorContainer =
    document.querySelector(".color-options");

  if (!existingColorContainer) {

    const sizeHeading =
      document.querySelector(".size-heading");

    existingColorContainer =
      document.createElement("div");

    existingColorContainer.className =
      "color-options";

    sizeHeading.parentNode.insertBefore(
      existingColorContainer,
      sizeHeading
    );

  }


  if (product.colors.length > 0) {

    existingColorContainer.innerHTML = `

      <p class="size-heading">
        SELECT COLOUR
      </p>

      <div class="size-options">

        ${product.colors.map(color => `

          <button
            class="size-option ${
              color === selectedColor
                ? "selected"
                : ""
            }"
            type="button"
            data-color="${color}"
          >
            ${color.toUpperCase()}
          </button>

        `).join("")}

      </div>
    `;


    existingColorContainer
      .querySelectorAll("[data-color]")
      .forEach(button => {

        button.addEventListener(
          "click",
          function() {

            existingColorContainer
              .querySelectorAll("[data-color]")
              .forEach(btn =>
                btn.classList.remove(
                  "selected"
                )
              );

            this.classList.add("selected");

            selectedColor =
              this.dataset.color;

          }
        );

      });

  }


  productDetailOverlay.classList.add("open");
  document.body.classList.add("no-scroll");
}


/* =====================================================
   CLOSE PRODUCT DETAIL
===================================================== */

function closeProductDetail() {

  productDetailOverlay.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

document
  .getElementById("closeProductDetail")
  ?.addEventListener(
    "click",
    closeProductDetail
  );

productDetailOverlay?.addEventListener(
  "click",
  function(e) {

    if (e.target === productDetailOverlay) {
      closeProductDetail();
    }

  }
);


/* =====================================================
   PRODUCT IMAGE CLICK
===================================================== */

document
  .querySelectorAll(".product")
  .forEach(product => {

    const name =
      product.dataset.name;

    const image =
      product.querySelector(
        ".product-image img"
      );

    image?.addEventListener(
      "click",
      () => openProductDetail(name)
    );

  });


/* =====================================================
   DETAIL QUANTITY
===================================================== */

document
  .getElementById("quantityMinus")
  ?.addEventListener("click", function() {

    if (detailQuantity > 1) {
      detailQuantity--;
      detailQuantityElement();
    }

  });


document
  .getElementById("quantityPlus")
  ?.addEventListener("click", function() {

    detailQuantity++;
    detailQuantityElement();

  });


function detailQuantityElement() {

  detailQuantity =
    Math.max(1, detailQuantity);

  const element =
    document.getElementById(
      "detailQuantity"
    );

  if (element) {
    element.textContent =
      detailQuantity;
  }
}


/* =====================================================
   ADD DETAIL PRODUCT TO BAG
===================================================== */

detailAddButton?.addEventListener(
  "click",
  function() {

    if (!selectedProduct) return;

    const product =
      productData[selectedProduct];

    if (!product) return;


    for (let i = 0; i < detailQuantity; i++) {

      const existing = bag.find(item =>
        item.name === selectedProduct &&
        item.size === selectedSize &&
        item.color === selectedColor
      );


      if (existing) {

        existing.quantity++;

      } else {

        bag.push({

          name: selectedProduct,

          price: product.price,

          image: product.image,

          size: selectedSize,

          color: selectedColor,

          quantity: 1

        });

      }

    }


    saveBag();
    renderBag();

    closeProductDetail();
    openBag();

  }
);


/* =====================================================
   WISHLISTS
===================================================== */

document
  .querySelectorAll(".wishlist")
  .forEach(button => {

    button.addEventListener(
      "click",
      function(e) {

        e.stopPropagation();

        this.classList.toggle("active");

        this.textContent =
          this.classList.contains("active")
            ? "♥"
            : "♡";

      }
    );

  });


/* =====================================================
   FILTER PRODUCTS
===================================================== */

const filters =
  document.querySelectorAll(".filter");

const products =
  document.querySelectorAll(".product");


filters.forEach(filter => {

  filter.addEventListener(
    "click",
    function() {

      filters.forEach(btn =>
        btn.classList.remove("active")
      );

      this.classList.add("active");

      const category =
        this.dataset.category;


      products.forEach(product => {

        if (
          category === "all" ||
          product.dataset.category === category
        ) {

          product.style.display = "";

        } else {

          product.style.display = "none";

        }

      });

    }
  );

});


/* =====================================================
   CATEGORY LINKS
===================================================== */

document
  .querySelectorAll("[data-category-link]")
  .forEach(link => {

    link.addEventListener(
      "click",
      function() {

        const category =
          this.dataset.categoryLink;

        const filter =
          document.querySelector(
            `.filter[data-category="${category}"]`
          );

        if (filter) {
          filter.click();
        }

      }
    );

  });


/* =====================================================
   SORT PRODUCTS
===================================================== */

document
  .getElementById("sortProducts")
  ?.addEventListener(
    "change",
    function() {

      const value = this.value;

      const container =
        document.getElementById("products");

      const productArray =
        Array.from(
          container.querySelectorAll(".product")
        );


      if (value === "price-low") {

        productArray.sort(
          (a, b) =>
            Number(a.dataset.price) -
            Number(b.dataset.price)
        );

      }


      if (value === "price-high") {

        productArray.sort(
          (a, b) =>
            Number(b.dataset.price) -
            Number(a.dataset.price)
        );

      }


      if (value === "name") {

        productArray.sort(
          (a, b) =>
            a.dataset.name.localeCompare(
              b.dataset.name
            )
        );

      }


      productArray.forEach(product =>
        container.appendChild(product)
      );

    }
  );


/* =====================================================
   SEARCH
===================================================== */

const searchButton =
  document.getElementById("searchButton");

const searchOverlay =
  document.getElementById("searchOverlay");

const closeSearch =
  document.getElementById("closeSearch");

const searchInput =
  document.getElementById("searchInput");

const searchResults =
  document.getElementById("searchResults");


searchButton?.addEventListener(
  "click",
  function() {

    searchOverlay.classList.add("open");
    document.body.classList.add("no-scroll");

    setTimeout(
      () => searchInput.focus(),
      100
    );

  }
);


closeSearch?.addEventListener(
  "click",
  closeSearchOverlay
);


function closeSearchOverlay() {

  searchOverlay.classList.remove("open");
  document.body.classList.remove("no-scroll");

  searchInput.value = "";
  searchResults.innerHTML = "";

}


searchOverlay?.addEventListener(
  "click",
  function(e) {

    if (e.target === searchOverlay) {
      closeSearchOverlay();
    }

  }
);


searchInput?.addEventListener(
  "input",
  function() {

    const query =
      this.value
        .trim()
        .toLowerCase();


    if (!query) {

      searchResults.innerHTML = "";
      return;

    }


    const matches =
      Object.keys(productData)
        .filter(name =>
          name.toLowerCase().includes(query)
        );


    if (matches.length === 0) {

      searchResults.innerHTML = `
        <p>NO PRODUCTS FOUND.</p>
      `;

      return;

    }


    searchResults.innerHTML =
      matches.map(name => {

        const product =
          productData[name];

        return `
          <p
            style="cursor:pointer"
            onclick="openProductDetail('${name.replace(/'/g, "\\'")}')"
          >
            <strong>
              ${name}
            </strong>
            — ${formatPrice(product.price)}
          </p>
        `;

      }).join("");

  }
);

window.openProductDetail =
  openProductDetail;


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
  document.getElementById("menuButton");

const mobileMenu =
  document.getElementById("mobileMenu");

const closeMenu =
  document.getElementById("closeMenu");


menuButton?.addEventListener(
  "click",
  function() {

    mobileMenu.classList.add("open");
    document.body.classList.add("no-scroll");

  }
);


closeMenu?.addEventListener(
  "click",
  function() {

    mobileMenu.classList.remove("open");
    document.body.classList.remove("no-scroll");

  }
);


document
  .querySelectorAll(".mobile-menu a")
  .forEach(link => {

    link.addEventListener(
      "click",
      function() {

        mobileMenu.classList.remove("open");
        document.body.classList.remove("no-scroll");

      }
    );

  });


/* =====================================================
   NEWSLETTER
===================================================== */

document
  .getElementById("newsletterForm")
  ?.addEventListener(
    "submit",
    function(e) {

      e.preventDefault();

      const email =
        this.querySelector("input").value;

      if (!email) return;

      alert(
        "Thank you for joining the Béni Carmel Collective."
      );

      this.reset();

    }
  );


/* =====================================================
   CHECKOUT
===================================================== */

checkoutButton?.addEventListener(
  "click",
  function() {

    if (bag.length === 0) return;

    localStorage.setItem(
      "beniCarmelCheckout",
      JSON.stringify(bag)
    );

    window.location.href =
      "checkout.html";

  }
);


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
  "keydown",
  function(e) {

    if (e.key !== "Escape") return;

    closeBag();
    closeProductDetail();
    closeSearchOverlay();

    mobileMenu?.classList.remove("open");

    document.body.classList.remove(
      "no-scroll"
    );

  }
);


/* =====================================================
   INITIAL LOAD
===================================================== */

renderBag();

console.log(
  "Béni Carmel Collectives shop loaded successfully."
);
