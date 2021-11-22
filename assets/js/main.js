$(document).ready(function () {
    $(window).on('scroll', function () {
        handleScrollTop();
    });

    //Close nav-item on click
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    //Portfolio Gallery
    $('#gallery1').on('click', function (event) {
        event.preventDefault();
        Fresco.show([
            { url: 'assets/img/projects/gatherer1.png', caption: 'Listagem' },			
			{ url: 'assets/img/projects/gatherer2.png', caption: 'Detalhes de um card' },                
        ]);
    });
	
    //Set active tab on navbar
    $(window).scroll(function () {
        $(".nav-item").removeClass("active");
        $(".active").parent().addClass("active");
    });

    handleScrollTop();
    function handleScrollTop() {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    }

    //Animations
    AOS.init({
        disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        duration: 2000, // values from 0 to 3000, with step 50ms
    });

})