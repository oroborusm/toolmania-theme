$(function(){

	$('#homeslider').bxSlider({
		controls: false,
		auto: true
	});

	var i = 0;
	$('.contcomment').slimScroll({
		height: '275px'
	});

	$('.añadeCarrituHome').on('click', function(){
		setTimeout(function() {
			$('.cross').trigger('click');
		}, 5000);
	});

	$('.sumaComentario').on('click', function(){
		$('.agregaComentario').toggleClass('activo')
	});


    $(".ancla").click(function(){
		vinculo = $(this).attr("href")
		destino = $(vinculo).offset().top - 100;    
		$("html:not(:animated), body:not(:animated)").animate({scrollTop:destino}, 800)
			return false
	});
    var removeClass = true;

	$('.carrito').on('click', function(){
		$('.carritoHover').toggleClass('activo')
		removeClass = false;
	})

	$('.login').on('click', function(){
		$('.accedeCuentaChica').toggleClass('activo')
		removeClass = false;
	});

	$('.nombre').on('click', function(){
		$('.despliega').addClass('activo')
		removeClass = false;
	});


	$("html").on('click',function () {
		if (removeClass) {
			$('.carritoHover').removeClass('activo');
			//$('.accedeCuenta').removeClass('activo');
			$('.despliega').removeClass('activo');
		}
		removeClass = true;
	});
    
    var nav = $('.nav-container');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 136) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });

    if($(window).width() < 800){
		$('.añadeCarrituHome').removeClass('animated infinite pulse')
	}


	var dlgtrigger = document.querySelector( '[data-dialog]' ),
		somedialog = document.getElementById( dlgtrigger.getAttribute( 'data-dialog' ) ),
		dlg = new DialogFx( somedialog );

	dlgtrigger.addEventListener( 'click', dlg.toggle.bind(dlg) );

	/*setTimeout(function() {
		$('.dialog').addClass('dialog--open');
	}, 5000);*/
	
	$('.closeDialog').on('click',function(){
		$('.dialog').removeClass('dialog--open');
		$('.dialog').addClass('dialog--close');
	});

	if(sessionStorage.getItem('popState') != 'shown'){
        setTimeout(function() {
			$('.dialog').addClass('dialog--open');
		}, 1000);
        sessionStorage.setItem('popState','shown')
    }

});
