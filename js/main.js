console.log(document.getElementsByTagName('h1')[1].innerHTML = 'New Text Alert!!')

console.log(document.getElementsByTagName('h1'))

let color_button = document.getElementById('color-button')

let current_class = document.getElementsByTagName('h1')[0].getAttribute('class')

const color_change = () => {
    let header_text = document.getElementsByTagName('h1')[0].innerHTML
    if (header_text == 'Hello World') {
        document.getElementsByTagName('h1')[0].className = `${current_class} color-change`
    } else {
        header_text = 'Something Else'
    }
}

// Change Text Color via a click event listener in JS
color_button.addEventListener('click', color_change)


// Adding New Button Via JavaScript
let button = document.createElement('button')
let button_display = document.createElement('h2')

// Add Inner HTML Text to the button
button.innerHTML = 'I am here!!'
document.body.append(button)

button.addEventListener('click', function () {
    button_display.innerHTML = 'More JavaScript Info Please...'
    document.body.append(button_display)
})

// Another example of adding dynamic HTML via JavaScript
let easy_button = document.createElement('button')

// Add Inner HTML text to easy_button
easy_button.innerHTML = 'Easy Grab Button'
document.getElementById('easy-grab').append(easy_button)

// Grab copied text - then place into 
const source = document.querySelector('div.source')
source.addEventListener('copy', (event) => {
    console.log(event)
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toLowerCase());
    event.preventDefault();
})

// Grabbing Form Data From a Submit Event
const form = document.querySelector('#testDataForm')
console.log(form)

// Add Event Listener for submit event(s)
form.addEventListener('click', (event) => {
    event.preventDefault();
    let season = document.querySelector('#season').value
    let round = document.querySelector('#round').value

    // Another way of getting access to the form data
    // let season = event.path[0][0].value;
    // let round = event.path[0][1].value;

    console.log(event)
    console.log(season, round)
})



const racer_data = () => {
    let season = document.querySelector('#season').value
    let round = document.querySelector('#round').value
    axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`).then(response => {
        data=response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        console.log(response)
        console.log(data)
        if (data.length > 0) {
            var temp = "";
            data.forEach((itemData) => {
                temp += "<tr>";
                temp += "<td>" + itemData.position + "</td>";
                temp += "<td>" + itemData.Driver.givenName + " " + itemData.Driver.familyName + "</td>";
                temp += "<td>" + itemData.Driver.nationality + "</td>"
                temp += "<td>" + itemData.Constructors[0].name + "</td>"
                temp += "<td>" + itemData.points + "</td></tr>";
            });
            document.getElementById('data').innerHTML = temp;
        }
    });
}

const submitBtn = document.getElementById('submitButton')
submitBtn.addEventListener('click', racer_data);