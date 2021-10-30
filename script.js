let items = document.querySelectorAll('.tabs li a');
items.forEach((item) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();


        document.querySelector('.tabs li a.selected').classList.remove('selected');
        this.classList.add('selected');

        let dataBox = this.getAttribute('data-content')

        document.querySelector('.tab-content div.selected').classList.remove('selected')
        document.querySelector(`.tab-content div[data-content="${dataBox}"]`).classList.add('selected')
    })
})

let topics =document.querySelectorAll('.ContactForm .tagBox');
let contentBtn =document.getElementById('#contentTagBox')
let designBtn =document.getElementById('#designTagBox')
let MarketingBtn =document.getElementById('#MarketingTagBox')
let ManagementBtn =document.getElementById('#ManagementTagBox')
















