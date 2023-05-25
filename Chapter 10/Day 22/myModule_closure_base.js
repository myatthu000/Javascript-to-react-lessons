// Closure base export

window.myModule = window.myModule || (function(){
    console.log('Module initalized')

    function method()
    {
        console.log("Internal method");
    }

    return {
        api: method,
    }
})();

// module.export.sum = sum