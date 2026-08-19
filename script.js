/* =====================================================
   BÉNI CARMEL COLLECTIVES
   STORE FUNCTIONALITY
===================================================== */

const products = [
  {
    name: "Faith Hoodie",
    price: 1200,
    category: "hoodies",
    image: "images/hoodie-1.jpg",
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A premium faith-inspired hoodie designed for everyday wear. Bold, comfortable and made to carry the message wherever you go."
  },

  {
    name: "Covenant Hoodie",
    price: 1200,
    category: "hoodies",
    image: "images/hoodie-2.jpg",
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A statement hoodie inspired by covenant, identity and faith."
  },

  {
    name: "Faith Tee",
    price: 600,
    category: "t-shirts",
    image: "images/tee-1.jpg",
    colors: ["White"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A clean everyday tee designed to wear your faith boldly."
  },

  {
    name: "Glory Tee",
    price: 600,
    category: "t-shirts",
    image: "images/tee-2.jpg",
    colors: ["White"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A minimalist faith-inspired tee created for everyday expression."
  },

  {
    name: "Covenant Tee",
    price: 600,
    category: "t-shirts",
    image: "images/tee-3.jpg",
    colors: ["White"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A versatile statement piece from the Béni Carmel collection."
  },

  {
    name: "College Jacket",
    price: 1400,
    category: "jackets",
    image: "images/college-jacket.jpg",
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A bold college-inspired jacket combining streetwear energy with the Béni Carmel identity."
  },

  {
    name: "Classic Denim Jacket",
    price: 1300,
    category: "jackets",
    image: "images/denim-jacket-1.jpg",
    colors: ["Blue"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A timeless denim layer designed to work with your everyday wardrobe."
  },

  {
    name: "Washed Denim Jacket",
    price: 1300,
    category: "jackets",
    image: "images/denim-jacket-2.jpg",
    colors: ["Blue"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A relaxed washed denim jacket with an effortless streetwear finish."
  },

  {
    name: "Wide Leg Jeans",
    price: 1300,
    category: "bottoms",
    image: "images/wide-leg-jeans-blue.jpg",
    colors: ["Blue"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Relaxed wide-leg denim designed for a modern everyday silhouette."
  },

  {
    name: "Faith Jorts",
    price: 1000,
    category: "bottoms",
    image: "images/jorts-1.jpg",
    colors: ["Blue"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Relaxed denim jorts made for easy everyday styling."
  },

  {
    name: "Dark Blue Jorts",
    price: 1000,
    category: "bottoms",
    image: "images/jorts-dark-blue.jpg",
    colors: ["Dark Blue"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A darker denim jort option with a clean streetwear finish."
  },

  {
    name: "Marble Blue Jorts",
    price: 1000,
    category: "bottoms",
    image: "images/jorts-marble-blue.jpg",
    colors: ["Marble Blue"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A distinctive marble-wash denim jort designed to stand out."
  },

  {
    name: "Sky Blue Jorts",
    price: 1000,
    category: "bottoms",
    image: "images/jorts-sky-blue.jpg",
    colors: ["Sky Blue"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Light-wash jorts with a relaxed silhouette for everyday wear."
  },

  {
    name: "Black Sweatpants",
    price: 1000,
    category: "bottoms",
    image: "images/sweatpants-black.jpg",
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Comfortable everyday sweatpants designed for relaxed styling."
  },

  {
    name: "Burgundy Sweatpants",
    price: 1000,
    category: "bottoms",
    image: "images/sweatpants-burgundy.jpg",
    colors: ["Burgundy"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A rich burgundy sweatpant option combining comfort and statement style."
  },

  {
    name: "Cream Sweatpants",
    price: 1000,
    category: "bottoms",
    image: "images/sweatpants-cream.jpg",
    colors: ["Cream"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Soft cream sweatpants designed for effortless everyday outfits."
  },

  {
    name: "Grey Sweatpants",
    price: 1000,
    category: "bottoms",
    image: "images/sweatpants-grey.jpg",
    colors: ["Grey"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A classic grey sweatpant designed for comfort and versatility."
  },

  {
    name: "Black Beanie",
    price: 500,
    category: "accessories",
    image: "images/beanie-black.jpg",
    colors: ["Black"],
    sizes: ["One Size"],
    description:
      "A clean everyday beanie finished in classic black."
  },

  {
    name: "Brown Beanie",
    price: 500,
    category: "accessories",
    image: "images/beanie-brown.jpg",
    colors: ["Brown"],
    sizes: ["One Size"],
    description:
      "A warm brown beanie designed for everyday styling."
  },

  {
    name: "Burgundy Beanie",
    price: 500,
    category: "accessories",
    image: "images/beanie-burgundy.jpg",
    colors: ["Burgundy"],
    sizes: ["One Size"],
    description:
      "A statement burgundy beanie from the Béni Carmel accessories collection."
  },

  {
    name: "Cream Beanie",
    price: 500,
    category: "accessories",
    image: "images/beanie-cream.jpg",
    colors: ["Cream"],
    sizes: ["One Size"],
    description:
      "A neutral cream beanie designed to complement everyday looks."
  },

  {
    name: "Beige Bucket Hat",
    price: 700,
    category: "accessories",
    image: "images/bucket-hat-beige.jpg",
    colors: ["Beige"],
    sizes: ["One Size"],
    description:
      "A relaxed beige bucket hat for effortless everyday styling."
  },

  {
    name: "Black Bucket Hat",
    price: 700,
    category: "accessories",
    image: "images/bucket-hat-black.jpg",
    colors: ["Black"],
    sizes: ["One Size"],
    description:
      "A clean black bucket hat designed to finish your everyday look."
  },

  {
    name: "Burgundy Bucket Hat",
    price: 700,
    category: "accessories",
    image: "images/bucket-hat-burgundy.jpg",
    colors: ["Burgundy"],
    sizes: ["One Size"],
    description:
      "A bold burgundy bucket hat with a relaxed streetwear feel."
  },

  {
    name: "White Bucket Hat",
    price: 700,
    category: "accessories",
    image: "images/bucket-hat-white.jpg",
    colors: ["White"],
    sizes: ["One Size"],
    description:
      "A clean white bucket hat designed for versatile styling."
  },

  {
    name: "Béni Carmel Cap",
    price: 500,
    category: "accessories",
    image: "images/cap-white.jpg",
    colors: ["White"],
    sizes: ["One Size"],
    description:
      "A classic Béni Carmel cap featuring a clean everyday silhouette."
  },

  {
    name: "Silver Cross Necklace",
    price: 500,
    category: "accessories",
    image: "images/cross-necklace-silver.jpg",
    colors: ["Silver"],
    sizes: ["One Size"],
    description:
      "A simple silver cross necklace representing faith at the heart of Béni Carmel."
  },

  {
    name: "Black Cross Shoulder Bag",
    price: 800,
    category: "accessories",
    image: "images/shoulder-bag-black-cross.jpg",
    colors: ["Black"],
    sizes: ["One Size"],
    description:
      "A compact cross-body shoulder bag designed for everyday essentials."
  },

  {
    name: "Black Shoulder Bag",
    price: 800,
    category: "accessories",
    image: "images/shoulder-bag-black.jpg",
    colors: ["Black"],
    sizes: ["One Size"],
    description:
      "A minimalist black shoulder bag made for everyday use."
  },

  {
    name: "Brown Shoulder Bag",
    price: 800,
    category: "accessories",
    image: "images/shoulder-bag-brown.jpg",
    colors: ["Brown"],
    sizes: ["One Size"],
    description:
      "A warm brown shoulder bag with an easy everyday silhouette."
  },

  {
    name: "Orange Shoulder Bag",
    price: 800,
    category: "accessories",
    image: "images/shoulder-bag-orange.jpg",
    colors: ["Orange"],
    sizes: ["One Size"],
    description:
      "A statement orange shoulder bag designed to add colour to your look."
  },

  {
    name: "Pink Shoulder Bag",
    price: 800,
    category: "accessories",
    image: "images/shoulder-bag-pink.jpg",
    colors: ["Pink"],
    sizes: ["One Size"],
    description:
      "A soft pink shoulder bag for an effortless everyday look."
  },

  {
    name: "Black Socks",
    price: 300,
    category: "accessories",
    image: "images/socks-black.jpg",
    colors: ["Black"],
    sizes: ["One Size"],
    description:
      "Classic black socks designed as an everyday essential."
  },

  {
    name: "White Socks",
    price: 300,
    category: "accessories",
    image: "images/socks-white.jpg",
    colors: ["White"],
    sizes: ["One Size"],
    description:
      "Clean white socks designed for everyday comfort."
  }
];

/* =====================================================
   STATE
===================================================== */

let bag = JSON.parse(localStorage.getItem("beniCarmelBag")) || [];
let wishlist = JSON.parse(localStorage.getItem("beniCarmelWishlist")) || [];

let currentProduct = null;
let selectedSize = "M";
let selectedColor = null;
let detailQuantity = 1;

/* =====================================================
   ELEMENTS
===================================================== */

const productsGrid = document.getElementById("products");
const bagOverlay = document.getElementById("bagOverlay");
const bagItems = document.getElementById("bagItems");
const bagCount = document.getElementById("bagCount");
const bagSubtotal = document.getElementById("bagSubtotal");
const bagShipping = document.getElementById("bagShipping");
const bagTotal = document.getElementById("bagTotal");
const shippingMessage = document.getElementById("shippingMessage");
const checkoutButton = document.getElementById("checkoutButton");

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

const detailAddButton =
  document.getElementById("detailAddButton");

const detailQuantity =
  document.getElementById("detailQuantity");

const searchOverlay =
  document.getElementById("searchOverlay");

const searchInput =
  document.getElementById("searchInput");

const searchResults =
  document.getElementById("searchResults");

const mobileMenu =
  document.getElementById("mobileMenu");

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

function saveWishlist() {
  localStorage.setItem(
    "beniCarmelWishlist",
    JSON.stringify(wishlist)
  );
}

function getCategoryName(category) {
  const names = {
    hoodies: "HOODIE",
    "t-shirts": "T-SHIRT",
    jackets: "JACKET",
    bottoms: "BOTTOM",
    accessories: "ACCESSORY"
  };

  return names[category] || "PRODUCT";
}

/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts(list = products) {

  productsGrid.innerHTML = "";

  if (!list.length) {
    productsGrid.innerHTML = `
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

  list.forEach((product, index) => {

    const wished =
      wishlist.includes(product.name);

    const article =
      document.createElement("article");

    article.className = "product";

    article.dataset.name = product.name;
    article.dataset.price = product.price;
    article.dataset.category = product.category;

    article.innerHTML = `
      <div class="product-image">

        ${
          index < 2
            ? `<span class="product-badge">
                 ${index === 0 ? "BESTSELLER" : "NEW"}
               </span>`
            : ""
        }

        <button
          class="wishlist ${wished ? "active" : ""}"
          type="button"
          aria-label="Add ${product.name} to wishlist"
        >
          ${wished ? "♥" : "♡"}
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
          ${product.name.toUpperCase()}
        </h3>

        <p>
          ${formatPrice(product.price)}
        </p>

      </div>
    `;

    const image =
      article.querySelector(".product-image img");

    const quickAdd =
      article.querySelector(".quick-add");

    const wishlistButton =
      article.querySelector(".wishlist");

    image.addEventListener("click", () => {
      openProductDetail(product);
    });

    quickAdd.addEventListener("click", (event) => {
      event.stopPropagation();
      openProductDetail(product);
    });

    wishlistButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleWishlist(product.name);
    });

    productsGrid.appendChild(article);
  });
}

/* =====================================================
   PRODUCT DETAIL
===================================================== */

function openProductDetail(product) {

  currentProduct = product;

  selectedSize =
    product.sizes.includes("M")
      ? "M"
      : product.sizes[0];

  selectedColor =
    product.colors[0];

  detailQuantity = 1;

  detailProductImage.src = product.image;
  detailProductImage.alt = product.name;

  detailProductCategory.textContent =
    getCategoryName(product.category);

  detailProductName.textContent =
    product.name;

  detailProductPrice.textContent =
    formatPrice(product.price);

  detailProductDescription.textContent =
    product.description;

  detailQuantity.textContent =
    detailQuantity;

  renderSizeOptions(product);
  renderColorOptions(product);

  productDetailOverlay.classList.add("open");

  document.body.classList.add("no-scroll");
}

function closeProductDetail() {

  productDetailOverlay.classList.remove("open");

  document.body.classList.remove("no-scroll");
}

function renderSizeOptions(product) {

  const container =
    document.querySelector(".size-options");

  container.innerHTML = "";

  product.sizes.forEach(size => {

    const button =
      document.createElement("button");

    button.className =
      "size-option";

    if (size === selectedSize) {
      button.classList.add("selected");
    }

    button.textContent = size;

    button.addEventListener("click", () => {

      selectedSize = size;

      document
        .querySelectorAll(".size-option")
        .forEach(btn =>
          btn.classList.remove("selected")
        );

      button.classList.add("selected");
    });

    container.appendChild(button);
  });
}

function renderColorOptions(product) {

  let existing =
    document.querySelector(".color-selection");

  if (existing) {
    existing.remove();
  }

  if (!product.colors || product.colors.length <= 1) {
    return;
  }

  const sizeSection =
    document.querySelector(".size-options");

  const wrapper =
    document.createElement("div");

  wrapper.className =
    "color-selection";

  wrapper.style.marginBottom = "30px";

  wrapper.innerHTML = `
    <p class="size-heading">
      SELECT COLOUR
    </p>

    <div
      class="color-options"
      style="
        display:flex;
        flex-wrap:wrap;
        gap:8px;
      "
    ></div>
  `;

  sizeSection.parentNode.insertBefore(
    wrapper,
    sizeSection
  );

  const options =
    wrapper.querySelector(".color-options");

  product.colors.forEach(color => {

    const button =
      document.createElement("button");

    button.className =
      "size-option";

    button.textContent = color;

    if (color === selectedColor) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {

      selectedColor = color;

      options
        .querySelectorAll(".size-option")
        .forEach(btn =>
          btn.classList.remove("selected")
        );

      button.classList.add("selected");
    });

    options.appendChild(button);
  });
}

/* =====================================================
   ADD TO BAG
===================================================== */

function addToBag(
  name,
  price,
  image,
  size = "M",
  color = "Default",
  quantity = 1
) {

  const existing =
    bag.find(item =>
      item.name === name &&
      item.size === size &&
      item.color === color
    );

  if (existing) {
    existing.quantity += quantity;
  } else {

    bag.push({
      name,
      price,
      image,
      size,
      color,
      quantity
    });
  }

  saveBag();
  renderBag();
  openBag();
}

function addCurrentProductToBag() {

  if (!currentProduct) return;

  addToBag(
    currentProduct.name,
    currentProduct.price,
    currentProduct.image,
    selectedSize,
    selectedColor || "Default",
    detailQuantity
  );

  closeProductDetail();
}

/* =====================================================
   BAG
===================================================== */

function renderBag() {

  const totalItems =
    bag.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  bagCount.textContent =
    totalItems;

  if (!bag.length) {

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

    bagSubtotal.textContent =
      "KES 0";

    bagShipping.textContent =
      "KES 0";

    bagTotal.textContent =
      "KES 0";

    shippingMessage.textContent =
      "ADD KES 10,000 TO YOUR BAG FOR FREE SHIPPING.";

    checkoutButton.disabled = true;
    checkoutButton.textContent =
      "YOUR BAG IS EMPTY";

    const emptyShop =
      document.getElementById("emptyBagShop");

    if (emptyShop) {
      emptyShop.addEventListener("click", closeBag);
    }

    return;
  }

  bagItems.innerHTML = "";

  bag.forEach((item, index) => {

    const itemElement =
      document.createElement("div");

    itemElement.className =
      "bag-product";

    itemElement.innerHTML = `
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
              ${item.name.toUpperCase()}
            </h3>

            <p>
              SIZE: ${item.size}
              ${item.color !== "Default"
                ? `<br>COLOUR: ${item.color}`
                : ""}
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
              data-action="minus"
              data-index="${index}"
            >
              −
            </button>

            <span>
              ${item.quantity}
            </span>

            <button
              type="button"
              data-action="plus"
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

    bagItems.appendChild(itemElement);
  });

  const subtotal =
    bag.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );

  const shipping =
    subtotal >= 10000
      ? 0
      : 300;

  const total =
    subtotal + shipping;

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
      `ADD ${formatPrice(10000 - subtotal)} TO YOUR BAG FOR FREE SHIPPING.`;
  }

  checkoutButton.disabled = false;
  checkoutButton.textContent =
    "PROCEED TO CHECKOUT →";
}

/* =====================================================
   BAG ACTIONS
===================================================== */

bagItems.addEventListener("click", event => {

  const button =
    event.target.closest("button");

  if (!button) return;

  const index =
    Number(button.dataset.index);

  const action =
    button.dataset.action;

  if (action === "plus") {
    bag[index].quantity++;
  }

  if (action === "minus") {

    bag[index].quantity--;

    if (bag[index].quantity <= 0) {
      bag.splice(index, 1);
    }
  }

  if (action === "remove") {
    bag.splice(index, 1);
  }

  saveBag();
  renderBag();
});

/* =====================================================
   OPEN / CLOSE BAG
===================================================== */

function openBag() {

  bagOverlay.classList.add("open");

  document.body.classList.add("no-scroll");
}

function closeBag() {

  bagOverlay.classList.remove("open");

  document.body.classList.remove("no-scroll");
}

document
  .getElementById("bagButton")
  .addEventListener("click", openBag);

document
  .getElementById("closeBag")
  .addEventListener("click", closeBag);

bagOverlay.addEventListener("click", event => {

  if (event.target === bagOverlay) {
    closeBag();
  }
});

/* =====================================================
   CHECKOUT
===================================================== */

checkoutButton.addEventListener("click", () => {

  if (!bag.length) return;

  localStorage.setItem(
    "beniCarmelCheckout",
    JSON.stringify(bag)
  );

  window.location.href =
    "checkout.html";
});

/* =====================================================
   FILTERS
===================================================== */

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener("click", () => {

      document
        .querySelectorAll(".filter")
        .forEach(btn =>
          btn.classList.remove("active")
        );

      button.classList.add("active");

      const category =
        button.dataset.category;

      if (category === "all") {
        renderProducts(products);
      } else {
        renderProducts(
          products.filter(
            product =>
              product.category === category
          )
        );
      }
    });
  });

/* =====================================================
   CATEGORY CARDS
===================================================== */

document
  .querySelectorAll("[data-category-link]")
  .forEach(card => {

    card.addEventListener("click", () => {

      const category =
        card.dataset.categoryLink;

      const filter =
        document.querySelector(
          `.filter[data-category="${category}"]`
        );

      if (filter) {
        filter.click();
      }
    });
  });

/* =====================================================
   SORTING
===================================================== */

document
  .getElementById("sortProducts")
  .addEventListener("change", event => {

    const value =
      event.target.value;

    let sorted =
      [...products];

    if (value === "price-low") {

      sorted.sort(
        (a, b) =>
          a.price - b.price
      );
    }

    if (value === "price-high") {

      sorted.sort(
        (a, b) =>
          b.price - a.price
      );
    }

    if (value === "name") {

      sorted.sort(
        (a, b) =>
          a.name.localeCompare(b.name)
      );
    }

    renderProducts(sorted);
  });

/* =====================================================
   SEARCH
===================================================== */

document
  .getElementById("searchButton")
  .addEventListener("click", () => {

    searchOverlay.classList.add("open");

    document.body.classList.add("no-scroll");

    setTimeout(() => {
      searchInput.focus();
    }, 200);
  });

document
  .getElementById("closeSearch")
  .addEventListener("click", closeSearch);

function closeSearch() {

  searchOverlay.classList.remove("open");

  document.body.classList.remove("no-scroll");

  searchInput.value = "";

  searchResults.innerHTML = "";
}

searchOverlay.addEventListener("click", event => {

  if (event.target === searchOverlay) {
    closeSearch();
  }
});

searchInput.addEventListener("input", () => {

  const query =
    searchInput.value
      .trim()
      .toLowerCase();

  if (!query) {

    searchResults.innerHTML = "";

    return;
  }

  const matches =
    products.filter(product =>
      product.name
        .toLowerCase()
        .includes(query)
    );

  if (!matches.length) {

    searchResults.innerHTML = `
      <p>
        NO PRODUCTS FOUND.
      </p>
    `;

    return;
  }

  searchResults.innerHTML =
    matches.map(product => `
      <p
        data-search-product="${product.name}"
        style="cursor:pointer;"
      >
        <strong>
          ${product.name.toUpperCase()}
        </strong>
        — ${formatPrice(product.price)}
      </p>
    `).join("");

  document
    .querySelectorAll("[data-search-product]")
    .forEach(result => {

      result.addEventListener("click", () => {

        const product =
          products.find(
            item =>
              item.name ===
              result.dataset.searchProduct
          );

        closeSearch();

        openProductDetail(product);
      });
    });
});

/* =====================================================
   WISHLIST
===================================================== */

function toggleWishlist(name) {

  if (wishlist.includes(name)) {

    wishlist =
      wishlist.filter(
        item => item !== name
      );

  } else {

    wishlist.push(name);
  }

  saveWishlist();

  renderProducts();
}

/* =====================================================
   PRODUCT DETAIL QUANTITY
===================================================== */

document
  .getElementById("quantityMinus")
  .addEventListener("click", () => {

    if (detailQuantity > 1) {
      detailQuantity--;
    }

    detailQuantity.textContent =
      detailQuantity;
  });

document
  .getElementById("quantityPlus")
  .addEventListener("click", () => {

    detailQuantity++;

    detailQuantity.textContent =
      detailQuantity;
  });

detailAddButton.addEventListener(
  "click",
  addCurrentProductToBag
);

/* =====================================================
   PRODUCT DETAIL CLOSE
===================================================== */

document
  .getElementById("closeProductDetail")
  .addEventListener(
    "click",
    closeProductDetail
  );

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

/* =====================================================
   MOBILE MENU
===================================================== */

document
  .getElementById("menuButton")
  .addEventListener("click", () => {

    mobileMenu.classList.add("open");

    document.body.classList.add("no-scroll");
  });

document
  .getElementById("closeMenu")
  .addEventListener("click", closeMobileMenu);

function closeMobileMenu() {

  mobileMenu.classList.remove("open");

  document.body.classList.remove("no-scroll");
}

document
  .querySelectorAll(".mobile-menu a")
  .forEach(link => {

    link.addEventListener(
      "click",
      closeMobileMenu
    );
  });

/* =====================================================
   NEWSLETTER
===================================================== */

document
  .getElementById("newsletterForm")
  .addEventListener("submit", event => {

    event.preventDefault();

    const input =
      event.target.querySelector("input");

    if (!input.value.trim()) return;

    alert(
      "Thank you for joining the Béni Carmel Collectives."
    );

    input.value = "";
  });

/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener("keydown", event => {

  if (event.key !== "Escape") return;

  closeBag();
  closeSearch();
  closeProductDetail();
  closeMobileMenu();
});

/* =====================================================
   INITIALISE
===================================================== */

renderProducts();
renderBag();
