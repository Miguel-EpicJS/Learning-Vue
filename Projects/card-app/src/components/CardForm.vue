<template>
    <div>
        <form @submit.prevent="submit">
            <input placeholder="Put the name here">
            <input placeholder="Put the description here">
            <input placeholder="Put the thumb link here">
            <button type="submit">Create</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "CardForm"
}
</script>

<style>

</style>