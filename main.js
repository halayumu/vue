new Vue({
    el: "#app",
    data: {
        inputText: ''
    },
    computed: {
        changeTextCapitalize: function() {
            return this.inputText.toUpperCase();
        }
    }
})