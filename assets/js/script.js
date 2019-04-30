$(function(){
	var quebrada = 0;
	var lampada = 0;
	var arquivo;

	function mudarLampada(){
		if(lampada == 0){
			lampada = 1;
			$('.interruptor .interruptorInt').css('margin-left','75px');
			$('.interruptor .interruptorInt').css('background','#00BFFF');
			$('.interruptor .interruptorInt').html('ON');
			$('.interruptor .interruptorInt').css('color','#0000FF');
			
			if(quebrada == 0){
				arquivo = 'assets/img/lampada_acesa.png';			
				$('.lampada').css('background','#fff');
				$('#luz').attr('src', arquivo);
			}				
		}else{
			lampada = 0;
			$('.interruptor .interruptorInt').css('margin-left','0px');
			$('.interruptor .interruptorInt').css('background','#ddd');
			$('.interruptor .interruptorInt').html('OFF');
			$('.interruptor .interruptorInt').css('color','#778899');
			
			if(quebrada == 0){
				arquivo = 'assets/img/lampada_apagada.png';	
				$('.lampada').css('background','#ccc');
				$('#luz').attr('src', arquivo);
			}				
		}	
	}

	$('.interruptor').bind('click', function(){
		mudarLampada();
	});

	$('#luz').bind('click', function(){
		quebrada = 1;
		arquivo = 'assets/img/lampada_quebrada.png';
		$('.lampada').css('background','#ccc');
		$('#luz').attr('src', arquivo);
		$('.trocarLampada').css('display','flex');
	});

	$('.trocarLampada').bind('click', function(){
		quebrada = 0;
		$('.trocarLampada').css('display','none');
		
		if(lampada == 1){
			lampada = 0;
		}else{
			lampada = 1;
		}

		mudarLampada();
	});
});