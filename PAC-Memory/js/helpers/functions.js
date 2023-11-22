import { startGame } from "../components/varsAndElements.js";

// Creators

export const elemCreator = (elem, content, attach, id) => {
	const elemCreation = document.createElement(elem);
	elemCreation.innerHTML = content;
	elemCreation.id = id;
	document.querySelector(attach).append(elemCreation);
	return elemCreation
}

export const arrayElemCreator = (items, tag) => {
	const elements = items.map((item) => `<${tag}>${item}</${tag}>`);
	return elements.join('');
}

export const arrayElemToasty = (items) => {
	const elements = items.map((item) => `${item}\n\n`);
	return elements.join('· ');
};

// Buttons
export const btnAction = (id, fx) => {
	document.querySelector(id).addEventListener('click', fx)
}

// Scroll
export const scrollToBottom = () => {
	const documentHeight = document.body.scrollHeight;
	window.scrollTo(0, documentHeight, { behavior: "smooth" });
}

// Toast
export const toast = (idSelector, content, time, classN, closeB) => {
	Toastify({
		node: idSelector,
		text: content,
		duration: time,
		close: closeB,
		gravity: 'top',
		position: 'center',
		stopOnFocus: true,
		className: classN,
	}).showToast();
}

// Game
export const ending = () => {
	const endingContent = `<p class="textOut"> Gracias por su visita, vuelva pronto </p>`
	const endingContainer = elemCreator('div', endingContent, '#root', 'endingContainer')
}

export const restartGame = () => {
	const restart = `
		<p>¿Quieres volver a jugar?</p>
		<input type="button" value="Reiniciar el juego" class="btn-restart btn-first" id="btn-restart">
		`;

	const restartContainer = elemCreator('div', restart, '#root', 'restartContainer')

	btnAction('#btn-restart', () => {
		endingContainer.remove();
		restartContainer.remove();
		startGame()
	})
}

// Promise

export const loader = (url) => {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(response => response.json())
			.then(data => {
				resolve(data);
			})
			.catch(backup => {
				reject(backup);
			});
	});
}

// Effects
export const fade = (container) => {
	container.classList.toggle("hide");

	setTimeout(() => {
		container.remove()
	}, 500);
}
