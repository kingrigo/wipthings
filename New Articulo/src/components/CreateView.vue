<template>
    <div class="container" id="app">
        <div class="jumbotron">
            <form action="">
                <h3>Cargar nuevo articulo</h3>
                <hr>
                <div class="form-row">
                    <div class="form-group col-md-8">
                        <input type="text" class="form-control form-control-lg" placeholder="Titulo">
                        
                    </div>
                    <div class="form-group col-md-2">
                        <input type="text" class="form-control form-control-lg" placeholder="Precio">

                    </div>
                    <div class="form-group col-md-2">
                        <input type="text" class="form-control form-control-lg" placeholder="Cantidad">

                    </div>
                
                </div>
                <div class="form-group">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Descripcion" class="form-control"></textarea>
                </div>
                <hr>
                <input type="file" @change="showData" class="form-control-file" multiple>
                <div class="card-deck">
                    <div class="card" v-for="i in 5">
                        <div class="image-preview" v-if="imageData.length > 0">
                            <img class="preview card-img-top" :src="imageData">
                        </div>
                    </div>
                </div>
                
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            imageData: ""
        }
    },
    methods: {
        showData(event){
            // Reference to the DOM input element
            var input = event.target;
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.imageData = e.target.result;
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
            }
        }
    }
}
</script>

<style>
.card {
    height: 200px;
}
</style>
