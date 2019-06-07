<template>
  <div class="container has-text-centered">
    <div class="content">
      <div class="box">
      <h1 class="title">Checkout</h1>
      <br>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, quia.</p>
    </div>

<b-collapse
      aria-id="contentIdForA11y2"
      class="panel"
      :open.sync="isOpen">
  <div
      slot="trigger"
      class="panel-heading"
      role="button"
      aria-controls="contentIdForA11y2">
      <strong>Personal details</strong>
  </div>


<section class="box">
<b-field grouped position="is-centered">

  <b-field>
      <div class="control has-icons-left has-icons-right">
        <input
          style="width:25em"
          class="input is-default is-medium"
          type="text"
          placeholder="First name"
          >
          <span class="icon is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        </b-field>

</b-field>
<b-field grouped position="is-centered">


        <b-field>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-default is-medium"
        type="text"
        style="width:25em"
        placeholder="Last name"
        expanded>
        <span class="icon is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-right">
          <i class="fas fa-check"></i>
        </span>
    </div>
  </b-field>

</b-field>
<b-field grouped position="is-centered">


  <b-field>
    <div class="control has-icons-left has-icons-right">
      <input
      class="input is-default is-medium"
      type="email"
      placeholder="Email"
      style="width:25em">
        <span class="icon is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-right">
          <i class="fas fa-check"></i>
        </span>
    </div>
  </b-field>
</b-field>

   <div class="field-body">
     <div class="field is-expanded">
       <b-field grouped position="is-centered">
       <div class="field has-addons">
         <p class="control">
           <a class="button is-static is-medium" style="width:5em">
             +46
           </a>
         </p>
         <p class="control is-expanded">
           <input
           class="input is-medium"
           type="tel"
           placeholder="Phone number"
           style="width:20em">
         </p>
       </div>
       </b-field>
     </div>
   </div>

 <b-field grouped position="is-centered">
     <div class="block">
       <button
       class="button is-medium is-primary"
       @click="isOpenTwo = !isOpenTwo"
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
      :open.sync="isOpen">
  <div
      slot="trigger"
      class="panel-heading"
      role="button"
      aria-controls="contentIdForA11y2">
      <strong>Shopping details</strong>
  </div>


<section class="box">
<b-field grouped position="is-centered">

  <b-field>
      <div class="control has-icons-left has-icons-right">
        <input
          style="width:25em"
          class="input is-default is-medium"
          type="text"
          placeholder="Address"
          >
          <span class="icon is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        </b-field>

</b-field>
<b-field grouped position="is-centered">


        <b-field>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-default is-medium"
        type="text"
        style="width:25em"
        placeholder="City"
        expanded>
        <span class="icon is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-right">
          <i class="fas fa-check"></i>
        </span>
    </div>
  </b-field>

</b-field>
<b-field grouped position="is-centered">


  <b-field>
    <div class="control has-icons-left has-icons-right">
      <input
      class="input is-default is-medium"
      type="email"
      placeholder="State"
      style="width:25em">
        <span class="icon is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-right">
          <i class="fas fa-check"></i>
        </span>
    </div>
  </b-field>
</b-field>

   <div class="field-body">
     <div class="field is-expanded">
       <b-field grouped position="is-centered">
       <div class="field has-addons">
         <p class="control">
           <a class="button is-static is-medium" style="width:5em">
             +46
           </a>
         </p>
         <p class="control is-expanded">
           <input
           class="input is-medium"
           type="tel"
           placeholder="ZIP Code"
           style="width:20em">
         </p>
       </div>
       </b-field>
     </div>
   </div>

 <b-field grouped position="is-centered">
     <div class="block">
       <button
       class="button is-medium is-primary"
       @click="isOpenTwo = !isOpenTwo"
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
      :open.sync="isOpen">
  <div
      slot="trigger"
      class="panel-heading"
      role="button"
      aria-controls="contentIdForA11y2">
      <strong>Payment details</strong>
  </div>


<section class="box">
<b-field grouped position="is-centered">

  <b-field>
      <div class="control has-icons-left has-icons-right">
        <input
          style="width:25em"
          class="input is-default is-medium"
          type="text"
          placeholder="Card number"
          >
          <span class="icon is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        </b-field>

</b-field>
<b-field grouped position="is-centered">


        <b-field>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-default is-medium"
        type="text"
        style="width:25em"
        placeholder="Validation date 1 & 2"
        expanded>
        <span class="icon is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-right">
          <i class="fas fa-check"></i>
        </span>
    </div>
  </b-field>

</b-field>
<b-field grouped position="is-centered">


  <b-field>
    <div class="control has-icons-left has-icons-right">
      <input
      class="input is-default is-medium"
      type="email"
      placeholder="Email"
      style="width:25em">
        <span class="icon is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-right">
          <i class="fas fa-check"></i>
        </span>
    </div>
  </b-field>
</b-field>

   <div class="field-body">
     <div class="field is-expanded">
       <b-field grouped position="is-centered">
       <div class="field has-addons">
         <p class="control">
           <a class="button is-static is-medium" style="width:5em">
             +46
           </a>
         </p>
         <p class="control is-expanded">
           <input
           class="input is-medium"
           type="tel"
           placeholder="Phone number"
           style="width:20em">
         </p>
       </div>
       </b-field>
     </div>
   </div>

 <b-field grouped position="is-centered">
     <div class="block">
       <button
       class="button is-medium is-primary"
       @click="isOpenTwo = !isOpenTwo"
       aria-controls="contentIdForA11y2">
       Continue
     </button>
   </div>
</b-field>
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
    export default {
        data() {
            return {
                isOpenOne: true,
                isOpenTwo: false,
                isOpenThree: false
            }
        }
    }
</script>
