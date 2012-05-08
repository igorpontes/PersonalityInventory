// JavaScript Document
$(document).ready(function(){
	/*adiciona o ccs .fundo para contornar o conteudo com uma borda azulada*/
	$("#conteudo").addClass("fundo");
	$("#instrução").ready(function() {
    $("#conteudo-instrução").addClass("fundo"); 
	});
	$("#conteudo-cadastro").addClass("fundo");
	$("#conteudo-recuperar").addClass("fundo");
	$("#conteudo-questionario").addClass("fundo");
	$("#content-contato").addClass("fundo");
	$("#content-sobre").addClass("fundo");
	/*Modifica a imagem com outra cor quando o mouse é passando na imagem*/
	$("img").hover(function(){
		$(this).addClass("passando_pelo_icone");
	}, function(){
		$(this).removeClass("passando_pelo_icone");
	});
	
	//*******************************************************
	/*Modifica a posição da imagem quando o imagem é clicada
	$("img").mousedown(function(){
		$(this).addClass("clicando_no_icone_topo");
	});
	
	$("img").mouseup(function(){
		$(this).removeClass("clicando_no_icone_topo");
	});
	*/
	
	//Desloca o icone do cabeçalho para baixo quando ele é clicado
	$("header").ready(function(e) {
    	$("img").mousedown(function(){
		$(this).addClass("clicando_no_icone_topo");
		});
	
		$("img").mouseup(function(){
		$(this).removeClass("clicando_no_icone_topo");
		}); 
    });
	
	//Desloca o icone do rodape para baixo quando ele é clicado
	$("footer").ready(function(e) {
    	$("img").mousedown(function(){
		$(this).addClass("clicando_no_icone_rodape");
		});
	
		$("img").mouseup(function(){
		$(this).removeClass("clicando_no_icone_rodape");
		}); 
    });
	
	/*Informar o usuario que a senha foi enviada ao email cadastrado*/
	$("#recuperar").ready(function(){
		$("#botao-recupera").click(function(){
			alert("Sua senha foi enviada ao email cadastrado!");
		});
	});
	
	/*Retira a subscrição do link-botão*/
	$("#login").addClass("estilo");	
	$("#recuperar").addClass("estilo");
	
	/*Não permiti que o as senhas no cadastro seja diferentes*/
	$("#cadastrar").click(function(){
		if($("#senha-cadastro").val() != $("#re_senha-cadastro").val()){
		
		alert("Senhas digitas não são iguais");
		/*Apaga os itens digitos no campo senha */
		document.getElementById("senha-cadastro").value = "";
		document.getElementById("re_senha-cadastro").value = "";
		}
	});
	
	$("#login").click(function(){
		document.getElementById("email-inicio").value= "";
		document.getElementById("senha-inicio").value = "";
	});
	
	$("#recuperar").click(function(){
		document.getElementById("email-inicio").value= "";
		document.getElementById("senha-inicio").value = "";
	});
	
	
	$("#cadastro").click(function(){
		/*Apaga os campos
		document.getElementById("text-nome-cadastro").value = "";
		document.getElementById("text-email-cadastro").value = "";
		document.getElementById("text-senha-cadastro").value = "";
		document.getElementById("text-re_senha-cadastro").value = "";
		document.getElementById("text-idade").value = "";
 */
		
	});
		
/*
	$("a").hover(function(){
		$("#eu").addClass("passando_pelo_icone");
	}, function(){
		$("#eu").removeClass("passando_pelo_icone");
	});
	
	$("a").mousedown(function(){
		$("#eu").addClass("clicando_no_icone");
	});
	
	$("a").mouseup(function(){
		$("#eu").removeClass("clicando_no_icone");
	});
*/			
});
