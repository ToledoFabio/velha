window.onload = function(){
	let jogador = 'x';
	let jogadas = 0;

	const iguais = function(c1, c2, c3){
		let casa1 = (document.getElementById('casa'+c1))
		let casa2 = (document.getElementById('casa'+c2))
		let casa3 = (document.getElementById('casa'+c3))

		let bg1 = casa1.style.backgroundImage;
		let bg2 = casa2.style.backgroundImage;
		let bg3 = casa3.style.backgroundImage;

		if(bg1 === bg2 && bg2 === bg3 && bg1 !== "" && bg1 !== "none"){

			return true;
		}
		else{
			return false;
		}
	}
	const verificarFim = function(){
		if(iguais(1,2,3)||iguais(4,5,6)||iguais(7,8,9)||iguais(1,4,7)||iguais(2,5,8)||iguais(3,6,9)||iguais(1,5,9)||iguais(3,5,7)){
			return true;
		}
		else{
			return false;
		}
	}
	const encerrar = function(){
		let casas = document.getElementsByClassName('casa');
		for(let casa of casas){
			casa.removeEventListener('click', clique);
			}

			let anuncio = document.getElementById('resultado');
			anuncio.innerHTML = "<h2> O vencedor e o jogador "+ jogador +" !</h2>";
	}
	const clique = function(){
		jogadas++;

		if(jogador === 'x'){
			this.style.backgroundImage = 'url("1.jpg")';
		}
		else{
			this.style.backgroundImage = 'url("2.jpg")';	
		}
		this.removeEventListener('click', clique);

		if(verificarFim()){
			encerrar();
		}
		else{
			if(jogador==='x'){
				jogador = 'o';
			}
			else{
				jogador = 'x'
			}
			if(jogadas === 9){
			let anuncio = document.getElementById('resultado');
			anuncio.innerHTML = '<h2>Deu VELHA!</h2>';
			}
		}			
	}
	let casas = document.getElementsByClassName('casa')
		for(let casa of casas){
			casa.addEventListener('click', clique);
			}
}