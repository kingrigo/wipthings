<template>
    <div id="app">
        <label>Name</label>
        <input type="text" v-model="name">
        <button @click="submitName()">Add</button>
        <h3>DashBoard</h3>
        <ul>
        </ul>

    </div>
</template>

<script>
export default {
    data (){
        return{
            name: "Rodrigo",
            employees: []
        }

    },



}

</script>