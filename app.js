document.querySelector("#reynolds-form").addEventListener('submit', e => {

    const result = document.querySelector(".result").style.display = 'none'
    const loadScreen = document.querySelector(".loading").style.display = 'block'
    const showError = document.querySelector(".error").style.display = 'none'

    setTimeout(() => {

        const density = parseFloat(document.querySelector("#density").value)
        const velocity = parseFloat(document.querySelector("#velocity").value)
        const length = parseFloat(document.querySelector("#length").value)
        const viscos = parseFloat(document.querySelector("#viscos").value)

        let reynolds_number = document.querySelector("#reynolds-result")
        reynolds_number.value = ((density * velocity * length) / viscos).toFixed(6)

        if (isNaN(reynolds_number.value)) {
            const result = document.querySelector(".result").style.display = 'none'
            const loadScreen = document.querySelector(".loading").style.display = 'none'
            const showError = document.querySelector(".error").style.display = 'block'
            return
        }

        const result = document.querySelector(".result").style.display = 'block'
        const loadScreen = document.querySelector(".loading").style.display = 'none'

    }, 1000)

    e.preventDefault()
})

