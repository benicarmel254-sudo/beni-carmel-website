document.addEventListener("DOMContentLoaded", () => {


  /* =========================================
     LOAD BAG
  ========================================= */

  let bag =
    JSON.parse(
      localStorage.getItem("beniCarmelBag")
    ) || [];


  const checkoutItems =
    document.getElementById(
      "checkoutItems"
    );

  const checkoutSubtotal =
    document.getElementById(
      "checkoutSubtotal"
    );

  const checkoutShipping =
    document.getElementById(
      "checkoutShipping"
    );

  const checkoutTotal =
    document.getElementById(
      "checkoutTotal"
    );

  const placeOrderButton =
    document.getElementById(
      "placeOrderButton"
    );

  const orderSuccess =
    document.getElementById(
      "orderSuccess"
    );

  const orderNumber =
    document.getElementById(
      "orderNumber"
    );

  const mpesaDetails =
    document.getElementById(
      "mpesaDetails"
    );


  /* =========================================
     PRODUCT IMAGES
  ========================================= */

  const imageMap = {

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


  /* =========================================
     EMPTY BAG
  ========================================= */

  if (bag.length === 0) {

    checkoutItems.innerHTML = `

      <div class="checkout-empty">

        <p>
          YOUR BAG IS EMPTY.
        </p>

        <a href="index.html#shop">
          RETURN TO SHOP →
        </a>

      </div>

    `;

    placeOrderButton.disabled = true;

  }


  /* =========================================
     RENDER ORDER
  ========================================= */

  function renderOrder() {

    checkoutItems.innerHTML = "";

    let subtotal = 0;


    bag.forEach(item => {

      subtotal +=
        item.price *
        item.quantity;


      const product =
        document.createElement("div");


      product.className =
        "checkout-product";


      product.innerHTML = `

        <div class="checkout-product-image">

          <img
            src="${imageMap[item.name] || "images/logo.png"}"
            alt="${item.name}"
          >

          <span>
            ${item.quantity}
          </span>

        </div>


        <div class="checkout-product-info">

          <strong>
            ${item.name}
          </strong>

          <p>
            SIZE: ${item.size}
          </p>

        </div>


        <strong class="checkout-product-price">

          KES ${(
            item.price *
            item.quantity
          ).toLocaleString()}

        </strong>

      `;


      checkoutItems.appendChild(
        product
      );

    });


    updateTotals(subtotal);

  }


  /* =========================================
     TOTALS
  ========================================= */

  function updateTotals(subtotal) {

    let shipping = 0;


    if (subtotal === 0) {

      shipping = 0;

    } else if (subtotal >= 10000) {

      shipping = 0;

    } else {

      shipping = 500;

    }


    const total =
      subtotal + shipping;


    checkoutSubtotal.textContent =
      `KES ${subtotal.toLocaleString()}`;


    checkoutShipping.textContent =
      shipping === 0 && subtotal >= 10000
        ? "FREE"
        : `KES ${shipping.toLocaleString()}`;


    checkoutTotal.textContent =
      `KES ${total.toLocaleString()}`;


    /* FREE DELIVERY */

    const freeDelivery =
      document.getElementById(
        "freeDelivery"
      );


    if (subtotal >= 10000) {

      freeDelivery.disabled = false;

      freeDelivery.checked = true;

    } else {

      freeDelivery.disabled = true;

      document
        .querySelector(
          'input[name="delivery"][value="500"]'
        )
        .checked = true;

    }

  }


  /* =========================================
     DELIVERY CHANGE
  ========================================= */

  document
    .querySelectorAll(
      'input[name="delivery"]'
    )
    .forEach(option => {

      option.addEventListener(
        "change",
        () => {

          let subtotal = 0;


          bag.forEach(item => {

            subtotal +=
              item.price *
              item.quantity;

          });


          let shipping =
            Number(option.value);


          if (subtotal >= 10000) {

            shipping = 0;

          }


          checkoutShipping.textContent =
            shipping === 0
              ? "FREE"
              : `KES ${shipping.toLocaleString()}`;


          checkoutTotal.textContent =
            `KES ${(
              subtotal + shipping
            ).toLocaleString()}`;

        }
      );

    });


  /* =========================================
     PAYMENT METHOD
  ========================================= */

  document
    .querySelectorAll(
      'input[name="payment"]'
    )
    .forEach(payment => {

      payment.addEventListener(
        "change",
        () => {

          if (
            payment.value ===
            "mpesa"
          ) {

            mpesaDetails.style.display =
              "block";

          } else {

            mpesaDetails.style.display =
              "none";

          }

        }
      );

    });


  /* =========================================
     PLACE ORDER
  ========================================= */

  placeOrderButton.addEventListener(
    "click",
    () => {


      /* CHECK REQUIRED FIELDS */

      const requiredFields =
        document.querySelectorAll(
          "[required]"
        );


      let valid = true;


      requiredFields.forEach(field => {

        if (!field.value.trim()) {

          field.classList.add(
            "input-error"
          );

          valid = false;

        } else {

          field.classList.remove(
            "input-error"
          );

        }

      });


      if (!valid) {

        alert(
          "Please complete all required information."
        );

        return;

      }


      /* PAYMENT */

      const payment =
        document.querySelector(
          'input[name="payment"]:checked'
        ).value;


      if (
        payment === "mpesa"
      ) {

        const mpesaPhone =
          document.getElementById(
            "mpesaPhone"
          );


        if (
          !mpesaPhone.value.trim()
        ) {

          mpesaPhone.classList.add(
            "input-error"
          );

          alert(
            "Please enter your M-Pesa phone number."
          );

          return;

        }

      }


      /* CREATE ORDER NUMBER */

      const randomNumber =
        Math.floor(
          100000 +
          Math.random() * 900000
        );


      orderNumber.textContent =
        randomNumber;


      /* SAVE ORDER */

      const order = {

        orderNumber:
          randomNumber,

        date:
          new Date().toISOString(),

        customer: {

          firstName:
            document.getElementById(
              "firstName"
            ).value,

          lastName:
            document.getElementById(
              "lastName"
            ).value,

          email:
            document.getElementById(
              "email"
            ).value,

          phone:
            document.getElementById(
              "phone"
            ).value,

          county:
            document.getElementById(
              "county"
            ).value,

          town:
            document.getElementById(
              "town"
            ).value,

          address:
            document.getElementById(
              "address"
            ).value

        },

        payment:
          payment,

        items:
          bag

      };


      localStorage.setItem(
        "beniCarmelLastOrder",
        JSON.stringify(order)
      );


      /* CLEAR BAG */

      localStorage.removeItem(
        "beniCarmelBag"
      );


      /* SHOW SUCCESS */

      orderSuccess.classList.add(
        "open"
      );

    }
  );


  /* =========================================
     INITIALIZE
  ========================================= */

  if (bag.length > 0) {

    renderOrder();

  }

});
