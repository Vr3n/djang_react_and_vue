<template>
    <p>{{ greeting }} Vue!</p>
</template>

<script>
module.exports = {
    data: function () {
        return {
            greeting: "Hello"
        };
    }
};
</script>

<style scoped>
p {
    font-size: 2em;
    text-align: center;
}
</style>