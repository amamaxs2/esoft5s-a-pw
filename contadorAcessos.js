function getDate() {
    var date = new Date()

    const currentDate = new Intl.DateTimeFormat("pt-BR", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
    }).format(date);

    return currentDate;
}

function saveAccess() {
    if (!localStorage.getItem("acessos")) {
        var acessos = {
            quant: 1,
            lastAccess: getDate()
        }

        localStorage.setItem("acessos", JSON.stringify(acessos))
    } else {
        var acessos = JSON.parse(localStorage.getItem("acessos"))
        acessos.quant += 1;
        acessos.lastAccess = getDate()
        localStorage.setItem("acessos", JSON.stringify(acessos))
    }
}

function generateInfoSection() {
    var acessos = JSON.parse(localStorage.getItem("acessos"))
    const p = document.createElement('p')
    p.id = "info-quant-label"
    p.textContent = `Esta página foi visitada ${acessos.quant} vezes. A última visita foi: ${acessos.lastAccess}`

    const section = document.querySelector('footer')

    section.appendChild(p)
}

document.addEventListener('DOMContentLoaded', function () {
    saveAccess()
    generateInfoSection()
})