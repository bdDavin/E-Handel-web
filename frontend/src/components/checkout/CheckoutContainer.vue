<template>
<div class="container">
<b-collapse class="panel">
  <div
    class="panel-heading"
    role="button"
    aria-controls="contentIdForA11y2">
    <strong>Checkout</strong>
  </div>
  <section class="box">
    <cart-table></cart-table>
  </section>
</b-collapse>

<b-collapse
        aria-id="contentIdForA11y2"
        class="panel"
        :open.sync="isOpenOne">
    <div
        class="panel-heading"
        role="button"
        aria-controls="contentIdForA11y2">
        <strong>Personal details</strong>
    </div>
  <section class="box">
    <b-field grouped position="is-centered">
      <ul class="steps is-narrow is-medium is-centered has-content-centered">
        <li class="steps-segment is-active">
          <a href="#" class="has-text-dark">
            <span class="steps-marker">
              <span class="icon">
                <i class="fa fa-user"></i>
              </span>
            </span>
            <div class="steps-content">
              <p class="heading">Personal details</p>
            </div>
          </a>
        </li>
        <li class="steps-segment">
          <a href="#" class="has-text-dark">
            <span class="steps-marker">
              <span class="icon">
                <i class="fa fa-plane"></i>
              </span>
            </span>
            <div class="steps-content">
              <p class="heading">Shipping details</p>
            </div>
          </a>
        </li>
        <li class="steps-segment has-gaps">
          <span class="steps-marker">
            <span class="icon">
              <i class="fa fa-dollar-sign"></i>
            </span>
          </span>
          <div class="steps-content">
            <p class="heading">Payment details</p>
          </div>
        </li>
        <li class="steps-segment">
          <span class="steps-marker is-hollow">
            <span class="icon">
              <i class="fa fa-check"></i>
            </span>
          </span>
          <div class="steps-content">
            <p class="heading">Confirmation</p>
          </div>
        </li>
      </ul>
    </b-field>
<br>
  <b-field grouped position="is-centered">
    <b-field class="is-expanded custom-field-size">
      <div class="control has-icons-left">
        <input
          class="input is-default is-medium is-primary"
          type="text"
          placeholder="First name"
          v-model="fname"
          >
          <span class="icon is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
    </b-field>
  </b-field>
  <b-field grouped position="is-centered">
    <b-field class="is-expanded custom-field-size">
      <div class="control has-icons-left">
        <input
          class="input is-default is-medium is-primary"
          type="text"
          v-model="lname"
          placeholder="Last name"
          >
          <span class="icon is-left">
            <i class="fas fa-user"></i>
          </span>
      </div>
    </b-field>
  </b-field>
  <b-field grouped position="is-centered">
    <b-field class="is-expanded custom-field-size">
      <div class="control has-icons-left">
        <input
        class="input is-default is-medium is-primary"
        type="email"
        v-model="mail"
        placeholder="Email"
        >
        <span class="icon is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </b-field>
  </b-field>
  <b-field grouped position="is-centered">
    <b-field class="is-expanded custom-field-size">
      <div class="field has-addons">
        <p class="control">
          <a class="button is-expanded is-medium custom-numbutton-size">
            +46
          </a>
        </p>
        <p class="control is-expanded">
        <input
        class="input is-medium is-primary"
        type="tel"
        v-model="phone"
        placeholder="Phone number">
        </p>
      </div>
    </b-field>
  </b-field>
<br>
  <b-field grouped position="is-centered">
    <div class="block">
      <button
      class="button is-medium is-button"
      @click="isOpenTwo = !isOpenTwo ; isOpenOne =! isOpenOne"
      aria-controls="contentIdForA11y2">
      Continue
      </button>
    </div>
  </b-field>
</section>
</b-collapse>

<!--

Shipping details collapse

!-->
<b-collapse
      aria-id="contentIdForA11y2"
      class="panel"
      :open.sync="isOpenTwo">
  <div
      class="panel-heading"
      role="button"
      aria-controls="contentIdForA11y2">
      <strong>Shipping details</strong>
  </div>
<section class="box">
  <b-field grouped position="is-centered">
    <ul class="steps is-narrow is-medium is-centered has-content-centered">
      <li class="steps-segment">
        <a href="#" class="has-text-dark">
          <span class="steps-marker">
            <span class="icon">
              <i class="fa fa-user"></i>
            </span>
          </span>
          <div class="steps-content">
            <p class="heading">Personal details</p>
          </div>
        </a>
      </li>
      <li class="steps-segment is-active ">
        <a href="#" class="has-text-dark">
          <span class="steps-marker">
            <span class="icon">
              <i class="fa fa-plane"></i>
            </span>
          </span>
          <div class="steps-content">
            <p class="heading">Shipping details</p>
          </div>
        </a>
      </li>
      <li class="steps-segment has-gaps">
        <span class="steps-marker">
          <span class="icon">
            <i class="fa fa-dollar-sign"></i>
          </span>
        </span>
        <div class="steps-content">
          <p class="heading">Payment details</p>
        </div>
      </li>
      <li class="steps-segment">
        <span class="steps-marker is-hollow">
          <span class="icon">
            <i class="fa fa-check"></i>
          </span>
        </span>
        <div class="steps-content">
          <p class="heading">Confirmation</p>
        </div>
      </li>
    </ul>
  </b-field>
<br>
  <b-field grouped position="is-centered">
    <b-field class="is-expanded custom-field-size">
      <div class="field has-addons">
        <p class="control is-expanded is-medium custom-dropdown-size">
          <b-field>
            <div class="field">
              <p class="control has-icons-left">
                <span class="select is-medium is-primary">
                  <select v-model="country">
                    <option selected>Sweden</option>
                    <option>USA</option>
                    <option>Germany</option>
                    <option>Argentina</option>
                    <option>India</option>
                    <option>Australia</option>
                    <option>Brazil</option>
                    <option>Canada</option>
                    <option>Russia</option>
                  </select>
                </span>
                <span class="icon is-small is-left">
                  <i class="fas fa-globe"></i>
                </span>
              </p>
            </div>
         </b-field>
       </p>
       <p class="control is-expanded">
         <input
         class="input is-medium is-primary"
         type="text"
         v-model="zipCode"
         placeholder="ZIP Code">
       </p>
     </div>
   </b-field>
  </b-field>
  <b-field grouped position="is-centered">
   <b-field class="is-expanded custom-field-size">
    <div class="control has-icons-left">
      <input
      class="input is-default is-medium is-primary"
      type="text"
      v-model="city"
      placeholder="City"
      >
      <span class="icon is-left">
        <i class="fas fa-building"></i>
      </span>
    </div>
    </b-field>
  </b-field>
  <b-field grouped position="is-centered">
  <b-field class="is-expanded custom-field-size">
    <div class="control has-icons-left">
      <input
      class="input is-default is-medium is-primary"
      type="text"
      v-model="address"
      placeholder="Address"
      >
      <span class="icon is-left">
        <i class="fas fa-building"></i>
      </span>
    </div>
  </b-field>
</b-field>
<br>
<b-field grouped position="is-centered">
   <div class="block">
     <button
     class="button is-medium is-button"
     @click="isOpenThree = !isOpenThree ; isOpenTwo = !isOpenTwo"
     aria-controls="contentIdForA11y2">
     Continue
   </button>
 </div>
</b-field>
</section>
</b-collapse>

<!--

Payment

!-->
<b-collapse
      aria-id="contentIdForA11y2"
      class="panel"
      :open.sync="isOpenThree">
  <div
      class="panel-heading"
      role="button"
      aria-controls="contentIdForA11y2">
      <strong>Payment details</strong>
  </div>
<section class="box">
  <b-field grouped position="is-centered">
    <ul class="steps is-narrow is-medium is-centered has-content-centered">
      <li class="steps-segment">
        <a href="#" class="has-text-dark">
          <span class="steps-marker">
            <span class="icon">
              <i class="fa fa-user"></i>
            </span>
          </span>
          <div class="steps-content">
            <p class="heading">Personal details</p>
          </div>
        </a>
      </li>
      <li class="steps-segment">
        <a href="#" class="has-text-dark">
          <span class="steps-marker">
            <span class="icon">
              <i class="fa fa-plane"></i>
            </span>
          </span>
          <div class="steps-content">
            <p class="heading">Shipping details</p>
          </div>
        </a>
      </li>
      <li class="steps-segment is-active has-gaps">
        <span class="steps-marker">
          <span class="icon">
            <i class="fa fa-dollar-sign"></i>
          </span>
        </span>
        <div class="steps-content">
          <p class="heading">Payment details</p>
        </div>
      </li>
      <li class="steps-segment">
        <span class="steps-marker is-hollow">
          <span class="icon">
            <i class="fa fa-check"></i>
          </span>
        </span>
        <div class="steps-content">
          <p class="heading">Confirmation</p>
        </div>
      </li>
    </ul>
  </b-field>
  <b-field grouped position="is-centered">
    <b-field class="is-expanded custom-field-size">
      <div class="control has-icons-left">
        <input
          class="input is-default is-medium is-primary"
          type="text"
          placeholder="Card number"
          >
          <span class="icon is-left">
            <i class="fas fa-credit-card"></i>
          </span>
        </div>
    </b-field>
  </b-field>
  <b-field grouped position="is-centered">
    <b-field class="is-expanded custom-field-size">
      <div class="field has-addons">
        <p class="control   is-expanded is-medium custom-dropdown-size">
          <b-field>
            <div class="field">
              <p class="control has-icons-left">
                <span class="select is-medium is-primary">
                <select>
                  <option selected>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
                </span>
                <span class="icon is-small is-left">
                  <i class="fas fa-calendar-alt"></i>
                </span>
              </p>
            </div>
          </b-field>
        </p>
        <p class="control is-expanded">
          <input
          class="input is-medium is-primary"
          type="text"
          placeholder="Year"
          >
        </p>
      </div>
    </b-field>
  </b-field>
  <b-field grouped position="is-centered">
    <b-field class="is-expanded custom-field-size">
      <div class="control has-icons-left">
        <input
          class="input is-default is-medium is-primary"
          type="text"
          placeholder="Security Code"
          >
          <span class="icon is-left">
            <i class="fas fa-shield-alt"></i>
          </span>
      </div>
    </b-field>
  </b-field>
  <b-field grouped position="is-centered">
    <div class="block">
      <button
       class="button is-medium is-button"
       @click="isOpenFour = !isOpenFour ; isOpenThree = !isOpenThree ; newCustomer()"
       aria-controls="contentIdForA11y2">
       Continue
      </button>
    </div>
  </b-field>
</section>
</b-collapse>

<!--

Confirmration

!-->
<b-collapse
      aria-id="contentIdForA11y2"
      class="panel"
      :open.sync="isOpenFour">
  <div
      class="panel-heading"
      role="button"
      aria-controls="contentIdForA11y2">
      <strong>Confirmation</strong>
  </div>
<section class="box">
  <b-field grouped position="is-centered">
    <ul class="steps is-narrow is-medium is-centered has-content-centered">
      <li class="steps-segment">
        <a href="#" class="has-text-dark">
          <span class="steps-marker">
            <span class="icon">
              <i class="fa fa-user"></i>
            </span>
          </span>
          <div class="steps-content">
            <p class="heading">Personal details</p>
          </div>
        </a>
      </li>
      <li class="steps-segment">
        <a href="#" class="has-text-dark">
          <span class="steps-marker">
            <span class="icon">
              <i class="fa fa-plane"></i>
            </span>
          </span>
          <div class="steps-content">
            <p class="heading">Shipping details</p>
          </div>
        </a>
      </li>
      <li class="steps-segment has-gaps">
        <span class="steps-marker">
          <span class="icon">
            <i class="fa fa-dollar-sign"></i>
          </span>
        </span>
        <div class="steps-content">
          <p class="heading">Payment details</p>
        </div>
      </li>
      <li class="steps-segment">
        <span class="steps-marker is-hollow">
          <span class="icon">
            <i class="fa fa-check"></i>
          </span>
        </span>
        <div class="steps-content is-active">
          <p class="heading">Confirmation</p>
        </div>
      </li>
    </ul>
  </b-field>
<br>
<br>
  <div class="text" is-large> You have complteted your order. </div>
  <div class="label"> Thank you! </div>
</section>
</b-collapse>

</div>
</div>
</template>

<style scoped>
    .content {
       width: 100%;
    }
</style>

<script>
export default {
  name: 'CheckoutContainer'
};
</script>

<style scoped>
</style>

<script>
    import CartTable from '../CartTable.vue'
    export default {
      components: {
        CartTable
      },
        data() {
            return {
                isOpenOne: true,
                isOpenTwo: false,
                isOpenThree: false,
                isOpenFour: false,
                fname: null,
                lname: null,
                mail: null,
                phone: null,
                country: "Sweden",
                zipCode: null,
                city: null,
                address: null
            }
        },
        methods: {
            productImage(product) {
                return '../src/assets/products/'+product.id+'.png'
            },
            getCart() {
              let cart = this.$store.state.cart
              let newCart = []
              for (let i = 0; i < cart.length; i++) {
                for (let j = 0; j < cart[i].quantity; j++) {
                  newCart.push(cart[i])
                }
              }
              return newCart
            },
            newCustomer() {
              let orderObj = {
                customer: {
                  fname: this.fname,
                  lname: this.lname,
                  mail: this.mail,
                  phone: this.phone,
                  country: this.country,
                  zipCode: this.zipCode,
                  city: this.city,
                  address: this.address
                },
                products: this.getCart()
              }
              fetch('http://localhost:5000/api/order', {
                body: JSON.stringify(orderObj),
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'POST'
              })
            }
        }
    }
</script>
