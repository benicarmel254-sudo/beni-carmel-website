/* =====================================================
   BÉNI CARMEL COLLECTIVES
   PREMIUM FAITH-INSPIRED COLLECTION
===================================================== */


/* =====================================================
   PRODUCT DATA
===================================================== */

const products = [

  /* ---------------- HOODIES ---------------- */

  {
    id: "hoodie-1",
    name: "FAITH HOODIE",
    price: 1200,
    category: "hoodies",
    image: "images/hoodie-1.jpg",
    colours: [
      { name: "Black", image: "images/hoodie-1.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A faith-inspired everyday hoodie created to carry your beliefs boldly."
  },

  {
    id: "hoodie-2",
    name: "COVENANT HOODIE",
    price: 1200,
    category: "hoodies",
    image: "images/hoodie-2.jpg",
    colours: [
      { name: "Black", image: "images/hoodie-2.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A statement hoodie designed around faith, identity and purpose."
  },


  /* ---------------- T-SHIRTS ---------------- */

  {
    id: "tee-1",
    name: "FAITH TEE",
    price: 600,
    category: "t-shirts",
    image: "images/tee-1.jpg",
    colours: [
      { name: "White", image: "images/tee-1.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A clean everyday tee made for effortless faith-inspired style."
  },

  {
    id: "tee-2",
    name: "GLORY TEE",
    price: 600,
    category: "t-shirts",
    image: "images/tee-2.jpg",
    colours: [
      { name: "White", image: "images/tee-2.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A bold everyday essential inspired by the glory of God."
  },

  {
    id: "tee-3",
    name: "COVENANT TEE",
    price: 600,
    category: "t-shirts",
    image: "images/tee-3.jpg",
    colours: [
      { name: "White", image: "images/tee-3.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A minimal faith-inspired piece designed for everyday wear."
  },


  /* ---------------- JACKETS ---------------- */

  {
    id: "college-jacket",
    name: "COLLEGE JACKET",
    price: 1400,
    category: "jackets",
    image: "images/college-jacket.jpg",
    colours: [
      { name: "Black", image: "images/college-jacket.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A relaxed college-inspired jacket with a bold Béni Carmel identity."
  },

  {
    id: "denim-jacket-1",
    name: "CLASSIC DENIM JACKET",
    price: 1300,
    category: "jackets",
    image: "images/denim-jacket-1.jpg",
    colours: [
      { name: "Blue", image: "images/denim-jacket-1.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A classic denim layer made for effortless everyday styling."
  },

  {
    id: "denim-jacket-2",
    name: "WASHED DENIM JACKET",
    price: 1300,
    category: "jackets",
    image: "images/denim-jacket-2.jpg",
    colours: [
      { name: "Washed Blue", image: "images/denim-jacket-2.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A relaxed washed denim jacket designed to become an everyday staple."
  },


  /* ---------------- BOTTOMS ---------------- */

  {
    id: "wide-leg-jeans",
    name: "WIDE LEG JEANS",
    price: 1300,
    category: "bottoms",
    image: "images/wide-leg-jeans-blue.jpg",
    colours: [
      { name: "Blue", image: "images/wide-leg-jeans-blue.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Relaxed wide-leg denim designed for a modern everyday silhouette."
  },

  {
    id: "jorts",
    name: "FAITH JORTS",
    price: 1000,
    category: "bottoms",
    image: "images/jorts-1.jpg",
    colours: [
      { name: "Blue", image: "images/jorts-1.jpg" },
      { name: "Dark Blue", image: "images/jorts-dark-blue.jpg" },
      { name: "Marble Blue", image: "images/jorts-marble-blue.jpg" },
      { name: "Sky Blue", image: "images/jorts-sky-blue.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Relaxed denim jorts designed for effortless everyday styling."
  },

  {
    id: "sweatpants",
    name: "FAITH SWEATPANTS",
    price: 1000,
    category: "bottoms",
    image: "images/sweatpants-black.jpg",
    colours: [
      { name: "Black", image: "images/sweatpants-black.jpg" },
      { name: "Burgundy", image: "images/sweatpants-burgundy.jpg" },
      { name: "Cream", image: "images/sweatpants-cream.jpg" },
      { name: "Grey", image: "images/sweatpants-grey.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Comfort-first sweatpants created for everyday movement and relaxed style."
  },


  /* ---------------- BEANIES ---------------- */

  {
    id: "beanie",
    name: "BÉNI CARMEL BEANIE",
    price: 500,
    category: "accessories",
    image: "images/beanie-black.jpg",
    colours: [
      { name: "Black", image: "images/beanie-black.jpg" },
      { name: "Brown", image: "images/beanie-brown.jpg" },
      { name: "Burgundy", image: "images/beanie-burgundy.jpg" },
      { name: "Cream", image: "images/beanie-cream.jpg" }
    ],
    sizes: ["ONE SIZE"],
    description:
      "A simple everyday beanie designed to complete your Béni Carmel look."
  },


  /* ---------------- BUCKET HATS ---------------- */

  {
    id: "bucket-hat",
    name: "BÉNI CARMEL BUCKET HAT",
    price: 800,
    category: "accessories",
    image: "images/bucket-hat-black.jpg",
    colours: [
      { name: "Black", image: "images/bucket-hat-black.jpg" },
      { name: "Beige", image: "images/bucket-hat-beige.jpg" },
      { name: "Burgundy", image: "images/bucket-hat-burgundy.jpg" },
      { name: "White", image: "images/bucket-hat-white.jpg" }
    ],
    sizes: ["ONE SIZE"],
    description:
      "A versatile bucket hat made to finish your everyday streetwear look."
  },


  /* ---------------- CAP ---------------- */

  {
    id: "cap",
    name: "BÉNI CARMEL CAP",
    price: 500,
    category: "accessories",
    image: "images/cap-white.jpg",
    colours: [
      { name: "White", image: "images/cap-white.jpg" }
    ],
    sizes: ["ONE SIZE"],
    description:
      "A clean Béni Carmel cap made for everyday wear."
  },


  /* ---------------- BAGS ---------------- */

  {
    id: "shoulder-bag",
    name: "SHOULDER BAG",
    price: 800,
    category: "accessories",
    image: "images/shoulder-bag-black.jpg",
    colours: [
      { name: "Black", image: "images/shoulder-bag-black.jpg" },
      { name: "Brown", image: "images/shoulder-bag-brown.jpg" },
      { name: "Orange", image: "images/shoulder-bag-orange.jpg" },
      { name: "Pink", image: "images/shoulder-bag-pink.jpg" }
    ],
    sizes: ["ONE SIZE"],
    description:
      "A compact everyday shoulder bag designed to carry what matters."
  },

  {
    id: "cross-shoulder-bag",
    name: "CROSS SHOULDER BAG",
    price: 800,
    category: "accessories",
    image: "images/shoulder-bag-black-cross.jpg",
    colours: [
      { name: "Black", image: "images/shoulder-bag-black-cross.jpg" }
    ],
    sizes: ["ONE SIZE"],
    description:
      "A practical cross-body bag designed for everyday movement."
  },


  /* ---------------- CROSS NECKLACE ---------------- */

  {
    id: "cross-necklace",
    name: "SILVER CROSS NECKLACE",
    price: 500,
    category: "accessories",
    image: "images/cross-necklace-silver.jpg",
    colours: [
      { name: "Silver", image: "images/cross-necklace-silver.jpg" }
    ],
    sizes: ["ONE SIZE"],
    description:
      "A simple silver cross necklace designed as a wearable expression of faith."
  },


  /* ---------------- SOCKS ---------------- */

  {
    id: "socks",
    name: "BÉNI CARMEL SOCKS",
    price: 200,
    category: "accessories",
    image: "images/socks-black.jpg",
    colours: [
      { name: "Black", image: "images/socks-black.jpg" },
      { name: "White", image: "images/socks-white.jpg" }
    ],
    sizes: ["ONE SIZE"],
    description:
      "Everyday socks finished with the Béni Carmel aesthetic."
  }

];


/* =====================================================
   STATE
===================================================== */

let bag = JSON.parse(localStorage.getItem("beniCarmelBag")) || [];

let currentProduct = null;
let selectedSize = "M";
let selectedColour = null;
let detailQuantity = 1;

let currentCategory = "all";


/* =====================================================
   ELEMENTS
===================================================== */

const productsContainer =
  document.getElementById("products");

const bagOverlay =
  document.getElementById("bagOverlay");

const bagItems =
  document.getElementById("bagItems");

const bagCount =
  document.getElementById("bagCount");

const bagSubtotal =
  document.getElementById("bagSubtotal");

const bagShipping =
  document.getElementById("bagShipping");

const bagTotal =
  document.getElementById("bagTotal");

const checkoutButton =
  document.getElementById("checkoutButton");

const shippingMessage =
  document.getElementById("shippingMessage");

const productDetailOverlay =
  document.getElementById("productDetailOverlay");

const detailProductImage =
  document.getElementById("detailProductImage");

const detailProductCategory =
  document.getElementById("detailProductCategory");

const detailProductName =
  document.getElementById("detailProductName");

const detailProductPrice =
  document.getElementById("detailProductPrice");

const detailProductDescription =
  document.getElementById("detailProductDescription");

const detailQuantity =
  document.getElementById("detailQuantity");

const detailAddButton =
  document.getElementById("detailAddButton");

const searchOverlay =
  document.getElementById("searchOverlay");

const searchInput =
  document.getElementById("searchInput");

const searchResults =
  document.getElementById("searchResults");


/* =====================================================
   HELPERS
===================================================== */

function formatPrice(price) {
  return `KES ${price.toLocaleString()}`;
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
   RENDER PRODUCTS
===================================================== */

function renderProducts(list = products) {

  if (!productsContainer) return;

  productsContainer.innerHTML = "";

  if (list.length === 0) {

    productsContainer.innerHTML = `
      <p style="
        grid-column:1/-1;
        padding:60px 0;
        text-align:center;
        font-size:12px;
        font-weight:700;
        letter-spacing:1px;
      ">
        NO PRODUCTS FOUND.
      </p>
    `;

    return;
  }


  list.forEach(product => {

    const article =
      document.createElement("article");

    article.className = "product";

    article.dataset.name = product.name;
    article.dataset.price = product.price;
    article.dataset.category = product.category;
    article.dataset.id = product.id;


    article.innerHTML = `

      <div class="product-image">

        ${
          product.id === "hoodie-1"
            ? `<span class="product-badge">BESTSELLER</span>`
            : ""
        }

        ${
          product.id === "college-jacket" ||
          product.id === "wide-leg-jeans"
            ? `<span class="product-badge">NEW</span>`
            : ""
        }

        <button
          class="wishlist"
          type="button"
          aria-label="Add ${product.name} to wishlist"
        >
          ♡
        </button>

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

        <button
          class="quick-add"
          type="button"
        >
          QUICK ADD — ${formatPrice(product.price)}
        </button>

      </div>

      <div class="product-info">

        <h3>
          ${product.name}
        </h3>

        <p>
          ${formatPrice(product.price)}
        </p>

      </div>

    `;


    /* Product image/details click */

    const image =
      article.querySelector(".product-image img");

    image.addEventListener(
      "click",
      () => openProductDetail(product)
    );


    /* Quick add */

    const quickAdd =
      article.querySelector(".quick-add");

    quickAdd.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        quickAddProduct(product);

      }
    );


    /* Wishlist */

    const wishlist =
      article.querySelector(".wishlist");

    wishlist.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        wishlist.classList.toggle("active");

        wishlist.textContent =
          wishlist.classList.contains("active")
            ? "♥"
            : "♡";

      }
    );


    productsContainer.appendChild(article);

  });

}


/* =====================================================
   QUICK ADD
===================================================== */

function quickAddProduct(product) {

  const defaultColour =
    product.colours[0];

  const defaultSize =
    product.sizes.includes("M")
      ? "M"
      : product.sizes[0];

  addProductToBag(
    product,
    defaultSize,
    defaultColour.name,
    1
  );

}


/* =====================================================
   OPEN PRODUCT DETAIL
===================================================== */

function openProductDetail(product) {

  currentProduct = product;

  selectedSize =
    product.sizes.includes("M")
      ? "M"
      : product.sizes[0];

  selectedColour =
    product.colours[0].name;

  detailQuantity = 1;


  detailProductImage.src =
    product.colours[0].image;

  detailProductImage.alt =
    product.name;

  detailProductCategory.textContent =
    product.category.toUpperCase();

  detailProductName.textContent =
    product.name;

  detailProductPrice.textContent =
    formatPrice(product.price);

  detailProductDescription.textContent =
    product.description;

  detailQuantity.textContent =
    detailQuantity;


  renderSizeOptions();

  renderColourOptions();


  productDetailOverlay.classList.add("open");

  document.body.classList.add("no-scroll");

}


/* =====================================================
   SIZE OPTIONS
===================================================== */

function renderSizeOptions() {

  const container =
    document.querySelector(".size-options");

  if (!container || !currentProduct) return;

  container.innerHTML = "";


  currentProduct.sizes.forEach(size => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      "size-option" +
      (
        size === selectedSize
          ? " selected"
          : ""
      );

    button.textContent = size;


    button.addEventListener(
      "click",
      () => {

        selectedSize = size;

        renderSizeOptions();

      }
    );


    container.appendChild(button);

  });

}


/* =====================================================
   COLOUR OPTIONS
===================================================== */

function renderColourOptions() {

  if (!currentProduct) return;


  let colourContainer =
    document.querySelector(".colour-options");


  if (!colourContainer) {

    const sizeOptions =
      document.querySelector(".size-options");

    colourContainer =
      document.createElement("div");

    colourContainer.className =
      "colour-options";


    sizeOptions.parentNode.insertBefore(
      colourContainer,
      sizeOptions
    );

  }


  colourContainer.innerHTML = `

    <p class="size-heading">
      SELECT COLOUR
    </p>

    <div class="colour-buttons"></div>

  `;


  const buttons =
    colourContainer.querySelector(
      ".colour-buttons"
    );


  currentProduct.colours.forEach(colour => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      "colour-option" +
      (
        colour.name === selectedColour
          ? " selected"
          : ""
      );

    button.textContent =
      colour.name;


    button.addEventListener(
      "click",
      () => {

        selectedColour =
          colour.name;

        detailProductImage.src =
          colour.image;

        renderColourOptions();

      }
    );


    buttons.appendChild(button);

  });

}


/* =====================================================
   ADD PRODUCT TO BAG
===================================================== */

function addProductToBag(
  product,
  size,
  colour,
  quantity
) {

  const existing =
    bag.find(item =>
      item.id === product.id &&
      item.size === size &&
      item.colour === colour
    );


  if (existing) {

    existing.quantity += quantity;

  } else {

    bag.push({

      id: product.id,

      name: product.name,

      price: product.price,

      image:
        product.colours.find(
          c => c.name === colour
        )?.image || product.image,

      size,

      colour,

      quantity

    });

  }


  saveBag();

  updateBag();

  closeProductDetail();

  openBag();

}


/* =====================================================
   GLOBAL addToBag
===================================================== */

function addToBag(
  name,
  price,
  image,
  size = "M",
  colour = "Default",
  quantity = 1
) {

  const product =
    products.find(
      p => p.name === name
    );


  if (product) {

    addProductToBag(
      product,
      size,
      colour,
      quantity
    );

    return;

  }


  const existing =
    bag.find(item =>
      item.name === name &&
      item.size === size &&
      item.colour === colour
    );


  if (existing) {

    existing.quantity += quantity;

  } else {

    bag.push({
      id: Date.now().toString(),
      name,
      price,
      image,
      size,
      colour,
      quantity
    });

  }


  saveBag();

  updateBag();

}


/* =====================================================
   DETAIL ADD BUTTON
===================================================== */

if (detailAddButton) {

  detailAddButton.addEventListener(
    "click",
    () => {

      if (!currentProduct) return;

      addProductToBag(
        currentProduct,
        selectedSize,
        selectedColour,
        detailQuantity
      );

    }
  );

}


/* =====================================================
   DETAIL QUANTITY
===================================================== */

const quantityMinus =
  document.getElementById("quantityMinus");

const quantityPlus =
  document.getElementById("quantityPlus");


if (quantityMinus) {

  quantityMinus.addEventListener(
    "click",
    () => {

      if (detailQuantity > 1) {

        detailQuantity--;

        detailQuantityElement();

      }

    }
  );

}


if (quantityPlus) {

  quantityPlus.addEventListener(
    "click",
    () => {

      detailQuantity++;

      detailQuantityElement();

    }
  );

}


function detailQuantityElement() {

  if (detailQuantity) {

    document.getElementById(
      "detailQuantity"
    ).textContent =
      detailQuantity;

  }

}


/* =====================================================
   UPDATE BAG
===================================================== */

function updateBag() {

  saveBag();


  const count =
    getBagCount();


  if (bagCount) {

    bagCount.textContent =
      count;

  }


  renderBagItems();

}


/* =====================================================
   RENDER BAG ITEMS
===================================================== */

function renderBagItems() {

  if (!bagItems) return;


  bagItems.innerHTML = "";


  if (bag.length === 0) {

    bagItems.innerHTML = `

      <div class="empty-bag">

        <p>
          YOUR BAG IS EMPTY.
        </p>

        <a href="#shop" id="emptyBagShop">
          CONTINUE SHOPPING →
        </a>

      </div>

    `;


    const emptyShop =
      document.getElementById(
        "emptyBagShop"
      );


    if (emptyShop) {

      emptyShop.addEventListener(
        "click",
        closeBag
      );

    }


    updateBagSummary();

    return;

  }


  bag.forEach((item,index) => {

    const element =
      document.createElement("div");

    element.className =
      "bag-product";


    element.innerHTML = `

      <div class="bag-product-image">

        <img
          src="${item.image}"
          alt="${item.name}"
        >

      </div>

      <div class="bag-product-details">

        <div class="bag-product-top">

          <div>

            <h3>
              ${item.name}
            </h3>

            <p>
              ${
                item.colour !== "Default"
                  ? item.colour + " · "
                  : ""
              }
              ${item.size}
            </p>

          </div>

          <strong>
            ${formatPrice(item.price * item.quantity)}
          </strong>

        </div>


        <div class="bag-product-bottom">

          <div class="bag-quantity">

            <button
              type="button"
              data-action="decrease"
              data-index="${index}"
            >
              −
            </button>

            <span>
              ${item.quantity}
            </span>

            <button
              type="button"
              data-action="increase"
              data-index="${index}"
            >
              +
            </button>

          </div>


          <button
            class="bag-remove"
            type="button"
            data-action="remove"
            data-index="${index}"
          >
            REMOVE
          </button>

        </div>

      </div>

    `;


    bagItems.appendChild(element);

  });


  bagItems
    .querySelectorAll("[data-action]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const action =
            button.dataset.action;

          const index =
            Number(button.dataset.index);


          if (action === "increase") {

            bag[index].quantity++;

          }


          if (action === "decrease") {

            bag[index].quantity--;

            if (
              bag[index].quantity <= 0
            ) {

              bag.splice(index,1);

            }

          }


          if (action === "remove") {

            bag.splice(index,1);

          }


          updateBag();

        }
      );

    });


  updateBagSummary();

}


/* =====================================================
   BAG SUMMARY
===================================================== */

function updateBagSummary() {

  const subtotal =
    bag.reduce(
      (total,item) =>
        total + item.price * item.quantity,
      0
    );


  const shipping =
    subtotal === 0
      ? 0
      : subtotal >= 10000
        ? 0
        : 300;


  const total =
    subtotal + shipping;


  if (bagSubtotal) {

    bagSubtotal.textContent =
      formatPrice(subtotal);

  }


  if (bagShipping) {

    bagShipping.textContent =
      shipping === 0
        ? "FREE"
        : formatPrice(shipping);

  }


  if (bagTotal) {

    bagTotal.textContent =
      formatPrice(total);

  }


  if (shippingMessage) {

    if (subtotal === 0) {

      shippingMessage.textContent =
        "ADD KES 10,000 TO YOUR BAG FOR FREE SHIPPING.";

    } else if (subtotal >= 10000) {

      shippingMessage.textContent =
        "YOU QUALIFY FOR FREE SHIPPING.";

    } else {

      shippingMessage.textContent =
        `ADD ${formatPrice(10000 - subtotal)} TO YOUR BAG FOR FREE SHIPPING.`;

    }

  }


  if (checkoutButton) {

    checkoutButton.disabled =
      bag.length === 0;

    checkoutButton.textContent =
      bag.length === 0
        ? "YOUR BAG IS EMPTY"
        : "PROCEED TO CHECKOUT →";

  }

}


/* =====================================================
   OPEN BAG
===================================================== */

function openBag() {

  bagOverlay.classList.add("open");

  document.body.classList.add("no-scroll");

}


/* =====================================================
   CLOSE BAG
===================================================== */

function closeBag() {

  bagOverlay.classList.remove("open");

  document.body.classList.remove("no-scroll");

}


/* =====================================================
   BAG BUTTON
===================================================== */

const bagButton =
  document.getElementById("bagButton");

if (bagButton) {

  bagButton.addEventListener(
    "click",
    openBag
  );

}


const closeBagButton =
  document.getElementById("closeBag");

if (closeBagButton) {

  closeBagButton.addEventListener(
    "click",
    closeBag
  );

}


if (bagOverlay) {

  bagOverlay.addEventListener(
    "click",
    event => {

      if (
        event.target === bagOverlay
      ) {

        closeBag();

      }

    }
  );

}


/* =====================================================
   PRODUCT DETAIL CLOSE
===================================================== */

function closeProductDetail() {

  productDetailOverlay.classList.remove(
    "open"
  );

  document.body.classList.remove(
    "no-scroll"
  );

}


const closeProductDetailButton =
  document.getElementById(
    "closeProductDetail"
  );


if (closeProductDetailButton) {

  closeProductDetailButton.addEventListener(
    "click",
    closeProductDetail
  );

}


if (productDetailOverlay) {

  productDetailOverlay.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        productDetailOverlay
      ) {

        closeProductDetail();

      }

    }
  );

}


/* =====================================================
   FILTERS
===================================================== */

const filters =
  document.querySelectorAll(".filter");


filters.forEach(filter => {

  filter.addEventListener(
    "click",
    () => {

      filters.forEach(
        f => f.classList.remove("active")
      );

      filter.classList.add("active");


      currentCategory =
        filter.dataset.category;


      let filtered =
        products;


      if (
        currentCategory !== "all"
      ) {

        filtered =
          products.filter(
            product =>
              product.category ===
              currentCategory
          );

      }


      renderProducts(filtered);

    }
  );

});


/* =====================================================
   CATEGORY LINKS
===================================================== */

document
  .querySelectorAll(
    "[data-category-link]"
  )
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        const category =
          link.dataset.categoryLink;


        const matchingFilter =
          document.querySelector(
            `.filter[data-category="${category}"]`
          );


        if (matchingFilter) {

          matchingFilter.click();

        }

      }
    );

  });


/* =====================================================
   SORT
===================================================== */

const sortProducts =
  document.getElementById(
    "sortProducts"
  );


if (sortProducts) {

  sortProducts.addEventListener(
    "change",
    () => {

      let list =
        currentCategory === "all"
          ? [...products]
          : products.filter(
              p =>
                p.category ===
                currentCategory
            );


      const value =
        sortProducts.value;


      if (value === "price-low") {

        list.sort(
          (a,b) =>
            a.price - b.price
        );

      }


      if (value === "price-high") {

        list.sort(
          (a,b) =>
            b.price - a.price
        );

      }


      if (value === "name") {

        list.sort(
          (a,b) =>
            a.name.localeCompare(
              b.name
            )
        );

      }


      renderProducts(list);

    }
  );

}


/* =====================================================
   SEARCH
===================================================== */

const searchButton =
  document.getElementById(
    "searchButton"
  );

const closeSearch =
  document.getElementById(
    "closeSearch"
  );


function openSearch() {

  searchOverlay.classList.add(
    "open"
  );

  document.body.classList.add(
    "no-scroll"
  );

  setTimeout(
    () => searchInput.focus(),
    300
  );

}


function closeSearchOverlay() {

  searchOverlay.classList.remove(
    "open"
  );

  document.body.classList.remove(
    "no-scroll"
  );

  searchInput.value = "";

  searchResults.innerHTML = "";

}


if (searchButton) {

  searchButton.addEventListener(
    "click",
    openSearch
  );

}


if (closeSearch) {

  closeSearch.addEventListener(
    "click",
    closeSearchOverlay
  );

}


if (searchOverlay) {

  searchOverlay.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        searchOverlay
      ) {

        closeSearchOverlay();

      }

    }
  );

}


/* =====================================================
   SEARCH RESULTS
===================================================== */

if (searchInput) {

  searchInput.addEventListener(
    "input",
    () => {

      const query =
        searchInput.value
          .trim()
          .toLowerCase();


      if (!query) {

        searchResults.innerHTML = "";

        return;

      }


      const results =
        products.filter(product =>
          product.name
            .toLowerCase()
            .includes(query) ||
          product.category
            .toLowerCase()
            .includes(query)
        );


      if (results.length === 0) {

        searchResults.innerHTML = `
          <p>
            NO PRODUCTS FOUND.
          </p>
        `;

        return;

      }


      searchResults.innerHTML =
        results.map(product => `

          <p
            class="search-result"
            data-id="${product.id}"
            style="cursor:pointer"
          >
            ${product.name}
            — ${formatPrice(product.price)}
          </p>

        `).join("");


      searchResults
        .querySelectorAll(
          ".search-result"
        )
        .forEach(result => {

          result.addEventListener(
            "click",
            () => {

              const product =
                products.find(
                  p =>
                    p.id ===
                    result.dataset.id
                );


              closeSearchOverlay();

              openProductDetail(
                product
              );

            }
          );

        });

    }
  );

}


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
  document.getElementById(
    "menuButton"
  );

const mobileMenu =
  document.getElementById(
    "mobileMenu"
  );

const closeMenu =
  document.getElementById(
    "closeMenu"
  );


function openMobileMenu() {

  mobileMenu.classList.add(
    "open"
  );

  document.body.classList.add(
    "no-scroll"
  );

}


function closeMobileMenu() {

  mobileMenu.classList.remove(
    "open"
  );

  document.body.classList.remove(
    "no-scroll"
  );

}


if (menuButton) {

  menuButton.addEventListener(
    "click",
    openMobileMenu
  );

}


if (closeMenu) {

  closeMenu.addEventListener(
    "click",
    closeMobileMenu
  );

}


document
  .querySelectorAll(
    ".mobile-menu a"
  )
  .forEach(link => {

    link.addEventListener(
      "click",
      closeMobileMenu
    );

  });


/* =====================================================
   CHECKOUT
===================================================== */

if (checkoutButton) {

  checkoutButton.addEventListener(
    "click",
    () => {

      if (bag.length === 0) return;

      window.location.href =
        "checkout.html";

    }
  );

}


/* =====================================================
   NEWSLETTER
===================================================== */

const newsletterForm =
  document.getElementById(
    "newsletterForm"
  );


if (newsletterForm) {

  newsletterForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      const input =
        newsletterForm.querySelector(
          "input"
        );


      if (!input.value) return;


      alert(
        "Thank you for joining the Béni Carmel Collective."
      );


      input.value = "";

    }
  );

}


/* =====================================================
   KEYBOARD ESCAPE
===================================================== */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape") return;


    closeBag();

    closeProductDetail();

    closeSearchOverlay();

    closeMobileMenu();

  }
);


/* =====================================================
   INITIALISE
===================================================== */

renderProducts();

updateBag();
