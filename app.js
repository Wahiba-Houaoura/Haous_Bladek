document.addEventListener("DOMContentLoaded", function() {
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let thumbnails = document.querySelectorAll('.thumbnail .item');
    let locationInput = document.getElementById("location"); 
    let destinationInput = document.getElementById("destination"); 
    let btn = document.getElementById('btn');

    let busNum = document.getElementById("bus-num");
    let estimatedTime = document.getElementById("estimate-time");
    let codeqrimg = document.getElementById('qr_code');
    let btnPay = document.getElementById('btn-pay');

    let closest_station = document.getElementById("closestStation");

    let countItem = items.length;
    let itemActive = 0;
    let refreshInterval;

    refreshInterval = setInterval(() => {
        next.click();
    }, 4000);

    function showSlider() {
        let itemActiveOld = document.querySelector('.slider .list .item.active');
        let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
        itemActiveOld.classList.remove('active');
        thumbnailActiveOld.classList.remove('active');

        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');

        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
            next.click();
        }, 5000);
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            itemActive = index;
            showSlider();
        });
    });

    btnPay.addEventListener("click", function() {
        // Retrieve the values from the input fields
        let firstName = document.getElementById('fname').value.trim();
        let lastName = document.getElementById('lname').value.trim();

        let firstTag = document.getElementById('name_Tag');
        let lastTag = document.getElementById('last_Tag');
    
        firstTag.textContent = firstName;

        lastTag.textContent = lastName;
    
        codeqrimg.src = 'css/ic_code_qr.svg';
    });
    


    btn.addEventListener("click", function() {

        let location = locationInput.options[locationInput.selectedIndex].text.toLowerCase();
        let destination = destinationInput.options[destinationInput.selectedIndex].text.toLowerCase();

        closest_station.textContent = `${location} Bus Station`;


        if (location === 'eucalyptus' && destination === 'bab hassen') {
            changeImg('css/euca_to_babhassen.svg');
            busNum.textContent = '4701'
            estimatedTime.textContent = '3 min'
        } else if (location === 'eucalyptus' && destination === 'place des martyrs'){
            changeImg('css/euca-to-martyr.svg');
            busNum.textContent = '4702';
            estimatedTime.textContent = '10 min';
        } else if (location === 'draria' && destination === 'bab hassen'){
            changeImg('css/draria_to_babhassen.png');
            busNum.textContent = '4008';
            estimatedTime.textContent = '15 min';
        } else if (location === 'draria' && destination === 'eucalyptus'){
            changeImg('css/draria_to_euca.png');
            busNum.textContent = '4028';
            estimatedTime.textContent = '35 min';
        }  else if (location === 'draria' && destination === 'place des martyrs'){
            changeImg('css/draria_to_martyr.png');
            busNum.textContent = '4128';
            estimatedTime.textContent = '5 min';
        } else if (location === 'ben aknoun' && destination === 'place des martyrs'){
            changeImg('css/placedesmartyrs.svg');
            busNum.textContent = '2008';
            estimatedTime.textContent = '9 min';
        }else if (location === 'ben aknoun' && destination === 'bab hassen'){
            changeImg('css/babhassen.svg');
            busNum.textContent = '105';
            estimatedTime.textContent = '1 min';
        }else if (location === 'ben aknoun' && destination === 'eucalyptus'){
            changeImg('css/eucalyptus.svg');
            busNum.textContent = '4005';
            estimatedTime.textContent = '25 min';
        }  else {
            changeImg('css/img-bus-thingy.png');
            busNum.textContent = 'XYZ'
            estimatedTime.textContent = 'X min'
        }
    });

    function changeImg(newSrc) {
        var img = document.getElementById('default-img');
        img.classList.add('fade-out');

        setTimeout(function() {
            img.src = newSrc;
            img.classList.remove('fade-out');
        }, 1000); // animation duration
    }
});
