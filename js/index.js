//    Navbar

        document.addEventListener("DOMContentLoaded", function () {

            window.addEventListener('scroll', function () {

                if (window.scrollY > 400) {
                    document.getElementById('navbar_top').classList.add('fixed-top', 'shadow');
                    // add padding top to show content behind navbar
                    navbar_height = document.querySelector('.navbar').offsetHeight;
                    document.body.style.paddingTop = navbar_height + 'px';
                    document.getElementById('navbar_top').style.backgroundColor = '#086447';
                } else {
                    document.getElementById('navbar_top').classList.remove('fixed-top', 'shadow');
                    // remove padding top from body
                    document.body.style.paddingTop = '0';
                    document.getElementById('navbar_top').style.backgroundColor = 'transparent';
                }
            });
        });
        // DOMContentLoaded  end

//    whatsApp Function
   
   $(function () {
        $('#myButton').floatingWhatsApp({
            phone: '+923138275277',
            popupMessage: 'Get free Consultation.',
            message: "What do I need to get started?",
            showPopup: true,
            showOnIE: false,
            position: '',
            size: '48px',
            headerTitle: 'Welcome!',
            headerColor: '#25D366',
            backgroundColor: '#25D366',
            buttonImage: '<img src="images/whatsapp.png" />'
        });
    });







    //Get the button
    let mybutton = document.getElementById("vanish");


    $(document).ready(function () {
        // we ready for fire action with JQery.

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
            scrollFunction();
        };
    });


    function scrollFunction() {
        if (
            document.body.scrollTop > 200 ||
            document.documentElement.scrollTop > 200
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

