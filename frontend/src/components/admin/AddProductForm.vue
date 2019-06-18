<template>
  <div class="container">
    <h1 class="title">Add a product</h1>
    <b-field label="Product name">
      <b-input v-model:value="product.name"></b-input>
    </b-field>
    <b-field label="Product price">
      <b-input v-model:value="product.price"></b-input>
    </b-field>
    <b-field label="Message">
      <b-input v-model:value="product.description" type="textarea"></b-input>
    </b-field>
    <div class="level">
      <div class="level-right">
        <div class="level-item">
          <b-field class="file">
            <b-upload @input="OnFileSelected" v-model="product.image">
              <a class="button is-primary">
                <b-icon icon="upload"></b-icon>
                <span>Click to upload</span>
              </a>
            </b-upload>
            <span class="file-name" v-if="upload">
              {{ errorMessage }}
            </span>
          </b-field>
        </div>
        <div class="level-item">
          <p class="control is-large">
            <button @click="addProduct" class="button is-primary">Add product</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'AddProductForm',
    data() {
        return {
            errorMessage: "",
            upload: false,
            product: {
              name: "",
              price: "",
              description: "",
              image: null
            }
        }
    },
    methods: {
      missingInput() 
      {
        this.$notification.open({
            duration: 5000,
            message: "Please fill in the form and upload an image!",
            position: 'is-bottom-right',
            type: 'is-danger',
            hasIcon: true
        })
      },
      uploaded() 
      {
        this.$notification.open({
            duration: 5000,
            message: "Product have been uploaded!",
            position: 'is-bottom-right',
            type: 'is-success',
            hasIcon: true
        })
      },
      OnFileSelected(event) {
          //test if image
          this.upload = true
          if(!this.isFileImage(this.product.image)) {
            console.log("No image");
            this.product.image = null
            this.errorMessage = "This file is invalid"
          } else {
            this.errorMessage = this.product.image.name
          }
          
          
      },
      isFileImage(file) {
        const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
        return file && acceptedImageTypes.includes(file['type'])
      },
      addProduct() {

        if(!(this.product.image && this.product.name &&
        this.product.description && this.product.price)) {
          this.missingInput()
          return
        }

        const formData = new FormData()
        formData.append('productName',this.product.name)
        formData.append('productPrice',this.product.price)
        formData.append('productDescription',this.product.description)
        formData.append('productImage',this.product.image)
        
        axios.post('http://localhost:5000/api/product/add', formData)
        .then(result => {
          console.log("upload product");
          if(result.status === 200) {
            this.uploaded()
          }
        })

        //reset
        this.product = {}
        this.upload = false
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 50%;
    margin-top: 80px;
    margin-bottom: 80px;
  }
</style>
