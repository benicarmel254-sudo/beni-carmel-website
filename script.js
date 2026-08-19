document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     BÉNI CARMEL COLLECTIVES
     MAIN STORE JAVASCRIPT
  ===================================================== */


  /* =====================================================
     BAG
  ===================================================== */

  let bag = JSON.parse(
    localStorage.getItem("beniCarmelBag")
  ) || [];

  let wishlist = [];

  let currentProduct = null;

  let selectedSize = "M";

  let productQuantity = 1;


  /* =====================================================
     ELEMENTS
  ===================================================== */

  const bagButton =
    document.getElementById("bagButton");

  const bagOverlay =
    document.getElementById("bagOverlay");

  const closeBag =
    document.getElementById("closeBag");

  const bagCount =
    document.getElementById("bagCount");

  const bagItems =
    document.getElementById("bagItems");

  const bagSubtotal =
    document.getElementById("bagSubtotal");

  const bagShipping =
    document.getElementById("bagShipping");

  const bagTotal =
    document.getElementById("bagTotal");

  const shippingMessage =
    document.getElementById("shippingMessage");

  const checkoutButton =
    document.getElementById("checkoutButton");


  /* =====================================================
     SEARCH ELEMENTS
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


  /* =====================================================
     MOBILE MENU
  ===================================================== */

  const menuButton =
    document.getElementById("menuButton");

  const mobileMenu =
    document.getElementById("mobileMenu");

  const closeMenu =
    document.getElementById("closeMenu");


  /* =====================================================
     SHOP
  ===================================================== */

  const filters =
    document.querySelectorAll(".filter");

  const products =
    document.querySelectorAll(".product");

  const sortProducts =
    document.getElementById("sortProducts");


  /* =====================================================
     NEWSLETTER
  ===================================================== */

  const newsletterForm =
    document.getElementById("newsletterForm");


  /* =====================================================
     PRODUCT DETAIL
  ===================================================== */

  const productDetailOverlay =
    document.getElementById("productDetailOverlay");

  const closeProductDetail =
    document.getElementById("closeProductDetail");

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

  const quantityMinus =
    document.getElementById("quantityMinus");

  const quantityPlus =
    document.getElementById("quantityPlus");

  const detailAddButton =
    document.getElementById("detailAddButton");


  /* =====================================================
     PRODUCT DESCRIPTIONS
  ===================================================== */

  const productDescriptions = {

    "Faith Hoodie":
      "A bold faith-inspired hoodie designed for everyday wear and created to carry your beliefs wherever you go.",

    "Covenant Hoodie":
      "A statement hoodie inspired by covenant, faith and the promises we choose to live by.",

    "Glory Hoodie":
      "A premium everyday hoodie created around one simple message: live for the glory of God.",

    "Faith Shirt":
      "A clean everyday shirt designed to make faith part of your everyday expression.",

    "Glory Shirt":
      "Minimal design, meaningful message and effortless everyday styling.",

    "Covenant Shirt":
      "A faith-inspired essential designed for those who carry their beliefs boldly.",

    "College Jacket":
      "A statement varsity-inspired jacket bringing Béni Carmel identity into an everyday streetwear silhouette.",

    "Classic Denim Jacket":
      "A timeless denim layer designed to work effortlessly with the Béni Carmel collection.",

    "Washed Denim Jacket":
      "A relaxed washed-denim essential with a vintage-inspired feel.",

    "Faith Jorts":
      "Relaxed denim shorts designed for effortless everyday styling.",

    "Béni Carmel Cap":
      "A clean white cap featuring the Béni Carmel identity. An easy finishing piece for any look."

  };


  /* =====================================================
     PRODUCT IMAGES
  ===================================================== */

  const productImages = {

    "Faith Hoodie":
      "images/hoodie-1.jpg",

    "Covenant Hoodie":
      "images/hoodie-2.jpg",

    "Glory Hoodie":
      "images/hoodie-3.jpg",

    "Faith Shirt":
      "images/shirt-1.jpg",

    "Glory Shirt":
      "images/shirt-2.jpg",

    "Covenant Shirt":
      "images/shirt-3.jpg",

    "College Jacket":
      "images/college-jacket.jpg",

    "Classic Denim Jacket":
      "images/denim-jacket-1.jpg",

    "Washed Denim Jacket":
      "images/denim-jacket-2.jpg",

    "Faith Jorts":
      "images/jorts-1.jpg",

    "Béni Carmel Cap":
      "images/cap.jpg"

  };


  /* =====================================================
     SAVE BAG
  ===================================================== */

  function saveBag() {

    localStorage.setItem(
      "beniCarmelBag",
      JSON.stringify(bag)
    );

  }


  /* =====================================================
     ADD TO BAG
  ===================================================== */

  window.addToBag = function(
    productName,
    price,
    image = null
  ) {

    const size = "M";

    const existingProduct =
      bag.find(item =>
        item.name === productName &&
        item.size === size
      );


    if (existingProduct) {

      existingProduct.quantity++;

    } else {

      bag.push({

        name: productName,

        price: Number(price),

        size: size,

        quantity: 1,

        image:
          image ||
          productImages[productName]

      });

    }


    saveBag();

    updateBag();

    openBag();

  };


  /* =====================================================
     ADD MULTIPLE ITEMS
  ===================================================== */

  function addProductWithQuantity(
    name,
    price,
    size,
    quantity,
    image
  ) {

    const existingProduct =
      bag.find(item =>
        item.name === name &&
        item.size === size
      );


    if (existingProduct) {

      existingProduct.quantity +=
        quantity;

    } else {

      bag.push({

        name: name,

        price: Number(price),

        size: size,

        quantity: quantity,

        image:
          image ||
          productImages[name]

      });

    }


    saveBag();

    updateBag();

  }


  /* =====================================================
     UPDATE BAG
  ===================================================== */

  function updateBag() {

    let itemCount = 0;

    let subtotal = 0;


    bag.forEach(item => {

      itemCount += item.quantity;

      subtotal +=
        item.price *
        item.quantity;

    });


    /* BAG COUNT */

    bagCount.textContent =
      itemCount;


    /* BAG PRODUCTS */

    if (bag.length === 0) {

      bagItems.innerHTML = `

        <div class="empty-bag">

          <p>
            YOUR BAG IS EMPTY.
          </p>

          <a
            href="#shop"
            id="emptyBagShop"
          >
            CONTINUE SHOPPING →
          </a>

        </div>

      `;

    } else {

      renderBagItems();

    }


    /* SHIPPING */

    let shipping = 0;


    if (
      subtotal > 0 &&
      subtotal < 10000
    ) {

      shipping = 500;

    }


    /* TOTAL */

    const total =
      subtotal + shipping;


    /* SUMMARY */

    bagSubtotal.textContent =
      `KES ${subtotal.toLocaleString()}`;


    if (
      subtotal >= 10000
    ) {

      bagShipping.textContent =
        "FREE";

    } else {

      bagShipping.textContent =
        `KES ${shipping.toLocaleString()}`;

    }


    bagTotal.textContent =
      `KES ${total.toLocaleString()}`;


    /* =================================================
       SHIPPING MESSAGE
    ================================================= */

    if (subtotal === 0) {

      shippingMessage.textContent =
        "ADD KES 10,000 TO YOUR BAG FOR FREE SHIPPING.";

    } else if (subtotal >= 10000) {

      shippingMessage.textContent =
        "🎉 YOU QUALIFY FOR FREE SHIPPING!";

    } else {

      const remaining =
        10000 - subtotal;

      shippingMessage.textContent =
        `ADD KES ${remaining.toLocaleString()} MORE FOR FREE SHIPPING.`;

    }


    /* =================================================
       CHECKOUT
    ================================================= */

    checkoutButton.disabled =
      bag.length === 0;


    if (bag.length === 0) {

      checkoutButton.textContent =
        "YOUR BAG IS EMPTY";

    } else {

      checkoutButton.textContent =
        "PROCEED TO CHECKOUT";

    }


    setupEmptyBagLink();

  }


  /* =====================================================
     RENDER BAG
  ===================================================== */

  function renderBagItems() {

    bagItems.innerHTML = "";


    bag.forEach((item, index) => {

      const productElement =
        document.createElement("div");


      productElement.className =
        "bag-product";


      const image =
        item.image ||
        productImages[item.name] ||
        "images/logo.png";


      productElement.innerHTML = `

        <div class="bag-product-image">

          <img
            src="${image}"
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
                SIZE: ${item.size}
              </p>

            </div>


            <strong>
              KES ${(
                item.price *
                item.quantity
              ).toLocaleString()}
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
              type="button"
              class="bag-remove"
              onclick="removeBagItem(${index})"
            >
              REMOVE
            </button>

          </div>

        </div>

      `;


      bagItems.appendChild(
        productElement
      );

    });

  }


  /* =====================================================
     CHANGE BAG QUANTITY
  ===================================================== */

  window.changeBagQuantity =
    function(index, change) {

      if (!bag[index]) return;


      bag[index].quantity +=
        change;


      if (
        bag[index].quantity <= 0
      ) {

        bag.splice(index, 1);

      }


      saveBag();

      updateBag();

    };


  /* =====================================================
     REMOVE BAG ITEM
  ===================================================== */

  window.removeBagItem =
    function(index) {

      if (!bag[index]) return;


      bag.splice(index, 1);

      saveBag();

      updateBag();

    };


  /* =====================================================
     OPEN BAG
  ===================================================== */

  function openBag() {

    bagOverlay.classList.add(
      "open"
    );

    document.body.classList.add(
      "no-scroll"
    );

  }


  /* =====================================================
     CLOSE BAG
  ===================================================== */

  function closeBagMenu() {

    bagOverlay.classList.remove(
      "open"
    );

    document.body.classList.remove(
      "no-scroll"
    );

  }


  bagButton.addEventListener(
    "click",
    openBag
  );


  closeBag.addEventListener(
    "click",
    closeBagMenu
  );


  bagOverlay.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        bagOverlay
      ) {

        closeBagMenu();

      }

    }
  );


  /* =====================================================
     CONTINUE SHOPPING
  ===================================================== */

  function setupEmptyBagLink() {

    const link =
      document.getElementById(
        "emptyBagShop"
      );


    if (!link) return;


    link.addEventListener(
      "click",
      () => {

        closeBagMenu();

      }
    );

  }


  /* =====================================================
     CHECKOUT
  ===================================================== */

  checkoutButton.addEventListener(
    "click",
    () => {

      if (
        bag.length === 0
      ) {

        return;

      }


      window.location.href =
        "checkout.html";

    }
  );


  /* =====================================================
     WISHLIST
  ===================================================== */

  const wishlistButtons =
    document.querySelectorAll(
      ".wishlist"
    );


  wishlistButtons.forEach(
    button => {

      button.addEventListener(
        "click",
        event => {

          event.preventDefault();

          event.stopPropagation();


          const product =
            button.closest(".product");


          if (!product) return;


          const productName =
            product.dataset.name;


          button.classList.toggle(
            "active"
          );


          if (
            wishlist.includes(
              productName
            )
          ) {

            wishlist =
              wishlist.filter(
                item =>
                  item !== productName
              );

          } else {

            wishlist.push(
              productName
            );

          }

        }
      );

    }
  );


  /* =====================================================
     FILTERS
  ===================================================== */

  filters.forEach(
    filter => {

      filter.addEventListener(
        "click",
        () => {

          filters.forEach(
            item =>
              item.classList.remove(
                "active"
              )
          );


          filter.classList.add(
            "active"
          );


          const category =
            filter.dataset.category;


          products.forEach(
            product => {

              if (
                category === "all" ||
                product.dataset.category ===
                  category
              ) {

                product.style.display =
                  "";

              } else {

                product.style.display =
                  "none";

              }

            }
          );

        }
      );

    }
  );


  /* =====================================================
     SORT PRODUCTS
  ===================================================== */

  sortProducts.addEventListener(
    "change",
    () => {

      const container =
        document.getElementById(
          "products"
        );


      const productArray =
        Array.from(products);


      const sortType =
        sortProducts.value;


      if (
        sortType ===
        "price-low"
      ) {

        productArray.sort(
          (a, b) =>
            Number(
              a.dataset.price
            ) -
            Number(
              b.dataset.price
            )
        );

      }


      if (
        sortType ===
        "price-high"
      ) {

        productArray.sort(
          (a, b) =>
            Number(
              b.dataset.price
            ) -
            Number(
              a.dataset.price
            )
        );

      }


      if (
        sortType ===
        "name"
      ) {

        productArray.sort(
          (a, b) =>
            a.dataset.name.localeCompare(
              b.dataset.name
            )
        );

      }


      productArray.forEach(
        product => {

          container.appendChild(
            product
          );

        }
      );

    }
  );


  /* =====================================================
     SEARCH
  ===================================================== */

  searchButton.addEventListener(
    "click",
    () => {

      searchOverlay.classList.add(
        "open"
      );

      document.body.classList.add(
        "no-scroll"
      );

      searchInput.focus();

    }
  );


  closeSearch.addEventListener(
    "click",
    () => {

      searchOverlay.classList.remove(
        "open"
      );

      document.body.classList.remove(
        "no-scroll"
      );

    }
  );


  searchInput.addEventListener(
    "input",
    () => {

      const query =
        searchInput.value
          .toLowerCase()
          .trim();


      if (!query) {

        searchResults.innerHTML =
          "";

        return;

      }


      const matches =
        Array.from(products)
          .filter(product =>
            product.dataset.name
              .toLowerCase()
              .includes(query)
          );


      if (
        matches.length === 0
      ) {

        searchResults.innerHTML = `

          <p>
            NO PRODUCTS FOUND.
          </p>

        `;

        return;

      }


      searchResults.innerHTML =
        matches.map(
          product => {

            return `

              <p>
                ${product.dataset.name}
                — KES ${Number(
                  product.dataset.price
                ).toLocaleString()}
              </p>

            `;

          }
        ).join("");

    }
  );


  /* =====================================================
     MOBILE MENU
  ===================================================== */

  menuButton.addEventListener(
    "click",
    () => {

      mobileMenu.classList.add(
        "open"
      );

      document.body.classList.add(
        "no-scroll"
      );

    }
  );


  closeMenu.addEventListener(
    "click",
    () => {

      mobileMenu.classList.remove(
        "open"
      );

      document.body.classList.remove(
        "no-scroll"
      );

    }
  );


  mobileMenu
    .querySelectorAll("a")
    .forEach(
      link => {

        link.addEventListener(
          "click",
          () => {

            mobileMenu.classList.remove(
              "open"
            );

            document.body.classList.remove(
              "no-scroll"
            );

          }
        );

      }
    );


  /* =====================================================
     NEWSLETTER
  ===================================================== */

  newsletterForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const email =
        newsletterForm
          .querySelector("input")
          .value;


      if (!email) return;


      alert(
        "Welcome to the Béni Carmel Collective."
      );


      newsletterForm.reset();

    }
  );


  /* =====================================================
     PRODUCT DETAIL
  ===================================================== */

  products.forEach(
    product => {

      const image =
        product.querySelector(
          ".product-image img"
        );


      if (!image) return;


      image.addEventListener(
        "click",
        () => {

          openProductDetail(
            product
          );

        }
      );

    }
  );


  /* =====================================================
     OPEN PRODUCT DETAIL
  ===================================================== */

  function openProductDetail(
    product
  ) {

    currentProduct =
      product;

    productQuantity = 1;

    selectedSize = "M";


    detailQuantity.textContent =
      "1";


    const name =
      product.dataset.name;


    const price =
      Number(
        product.dataset.price
      );


    const category =
      product.dataset.category;


    const image =
      product.querySelector(
        ".product-image img"
      );


    detailProductName.textContent =
      name;


    detailProductPrice.textContent =
      `KES ${price.toLocaleString()}`;


    detailProductCategory.textContent =
      category.toUpperCase();


    detailProductImage.src =
      image.src;


    detailProductImage.alt =
      name;


    detailProductDescription.textContent =
      productDescriptions[name] ||
      "A meaningful piece from Béni Carmel Collectives.";


    document
      .querySelectorAll(
        ".size-option"
      )
      .forEach(
        button => {

          button.classList.remove(
            "selected"
          );


          if (
            button.textContent.trim() ===
            "M"
          ) {

            button.classList.add(
              "selected"
            );

          }

        }
      );


    productDetailOverlay.classList.add(
      "open"
    );


    document.body.classList.add(
      "no-scroll"
    );

  }


  /* =====================================================
     CLOSE PRODUCT DETAIL
  ===================================================== */

  function closeProductPage() {

    productDetailOverlay.classList.remove(
      "open"
    );

    document.body.classList.remove(
      "no-scroll"
    );

  }


  closeProductDetail.addEventListener(
    "click",
    closeProductPage
  );


  productDetailOverlay.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        productDetailOverlay
      ) {

        closeProductPage();

      }

    }
  );


  /* =====================================================
     SIZE SELECTION
  ===================================================== */

  document
    .querySelectorAll(
      ".size-option"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            document
              .querySelectorAll(
                ".size-option"
              )
              .forEach(
                item =>
                  item.classList.remove(
                    "selected"
                  )
              );


            button.classList.add(
              "selected"
            );


            selectedSize =
              button.textContent.trim();

          }
        );

      }
    );


  /* =====================================================
     PRODUCT QUANTITY -
  ===================================================== */

  quantityMinus.addEventListener(
    "click",
    () => {

      if (
        productQuantity > 1
      ) {

        productQuantity--;

      }


      detailQuantity.textContent =
        productQuantity;

    }
  );


  quantityPlus.addEventListener(
    "click",
    () => {

      productQuantity++;


      detailQuantity.textContent =
        productQuantity;

    }
  );


  /* =====================================================
     ADD FROM PRODUCT DETAIL
  ===================================================== */

  detailAddButton.addEventListener(
    "click",
    () => {

      if (
        !currentProduct
      ) {

        return;

      }


      const name =
        currentProduct.dataset.name;


      const price =
        Number(
          currentProduct.dataset.price
        );


      const image =
        currentProduct.querySelector(
          ".product-image img"
        );


      addProductWithQuantity(
        name,
        price,
        selectedSize,
        productQuantity,
        image
          ? image.getAttribute("src")
          : null
      );


      closeProductPage();

      openBag();

    }
  );


  /* =====================================================
     ESCAPE KEY
  ===================================================== */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key !==
        "Escape"
      ) {

        return;

      }


      bagOverlay.classList.remove(
        "open"
      );


      searchOverlay.classList.remove(
        "open"
      );


      mobileMenu.classList.remove(
        "open"
      );


      productDetailOverlay.classList.remove(
        "open"
      );


      document.body.classList.remove(
        "no-scroll"
      );

    }
  );


  /* =====================================================
     INITIALIZE STORE
  ===================================================== */

  updateBag();

});
