const container = document.getElementById('container')

function loadData() {
    fetch('http://localhost:3000/films')
        .then(res => res.json())
        .then(data => {
            data.forEach(movie => {
                //create elements
                const bodyScope = document.createElement('div')
                const div2 = document.createElement('div')
                const image = document.createElement('img')
                const div3 = document.createElement('div')
                const movieTitle = document.createElement('h1')
                const ull = document.createElement('ul')
                const mv_dscT = document.createElement('p')
                const lii = document.createElement('li')
                const dsc_text = document.createElement('p')
                const showTime = document.createElement('p')
                const span1 = document.createElement('span')
                const runTime = document.createElement('p')
                const span2 = document.createElement('span')
                const capacity = document.createElement('p')
                const span3 = document.createElement('span')
                const soldTickets = document.createElement('p')
                const span4 = document.createElement('span')
                const btn = document.createElement('button')
                btn.dataset.movieId = movie.id //store movie id as attribute
                btn.addEventListener('click', function () {
                    const accessbtn = this.dataset.movieId;

                    let isPuchased = false;
                    function togglepuchased() {
                        if (isPuchased) {
                            btn.textContent = 'puchase ticket'
                            isPuchased = false

                            //updating number of tickets every time its sold
                            const updated_tickets = (`${movie.tickets_sold}` - 1)
                            span4.textContent = updated_tickets
                        }
                        else {
                            btn.textContent = 'puchased'
                            isPuchased = true
                        }
                    }

                    if (accessbtn) {
                        togglepuchased()
                    }
                })


                //add class to elements
                bodyScope.classList.add('bodyScope')
                movieTitle.classList.add('movieTitle')
                mv_dscT.classList.add('mv_dscT')
                dsc_text.classList.add('dsc_text')
                showTime.classList.add('mv_dsc')
                runTime.classList.add('mv_dsc')
                capacity.classList.add('mv_dsc')
                soldTickets.classList.add('mv_dsc')

                //add textContent to Elements
                image.src = `${movie.poster}`
                movieTitle.textContent = `${movie.title}`
                mv_dscT.textContent = 'Description'
                dsc_text.textContent = `${movie.description}`
                showTime.textContent = 'Show Time:'
                span1.textContent = `${movie.showtime}`
                runTime.textContent = 'Run Time:'
                span2.textContent = `${movie.runtime}`
                capacity.textContent = 'Capacity:'
                span3.textContent = `${movie.capacity}`
                soldTickets.textContent = 'Sold Tickets:'
                span4.textContent = `${movie.tickets_sold}`
                btn.textContent = "puchase ticket"

                //append elements
                container.append(bodyScope)
                bodyScope.append(div2, div3)
                div2.append(image)
                div3.append(movieTitle, ull, showTime, runTime, capacity, soldTickets, btn)
                ull.append(mv_dscT, lii)
                lii.append(dsc_text)
                showTime.appendChild(span1)
                runTime.append(span2)
                capacity.append(span3)
                soldTickets.append(span4)

            })
        })
}
loadData()
