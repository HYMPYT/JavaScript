let url = "https://swapi.dev/api/people"

let mainTag = document.getElementById('main')

fetch(url)
    .then(x => x.json())
        .then(x => {
            let html = `<table class="table">`

            for (let hero of x.results) {
                html += `
                    <tr>
                        <td>${hero.name}</td>
                        <td>${hero.height}</td>
                        <td>${hero.mass}</td>
                    </tr>
                `
            }

            html += `</table>`
            mainTag.innerHTML = html
        })