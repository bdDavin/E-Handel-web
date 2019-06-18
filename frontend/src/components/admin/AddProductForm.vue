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
            <b-upload @input="OnFileSelected" :drag-drop="true" v-model="product.image">
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
              name: "name",
              price: "200",
              description: "desc",
              image: null
            }
        }
    },
    methods: {
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
        const formData = new FormData()

        formData.append('productName',this.product.name)
        formData.append('productPrice',this.product.price)
        formData.append('productDescription',this.product.description)
        formData.append('productImage',this.product.image)
        //console.log(formData);
        
        axios.post('http://localhost:5000/api/product/add', formData)
        .then(result => {
          console.log("upload product");
        })

        //reset
        //this.product = null
        //this.upload = false
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
