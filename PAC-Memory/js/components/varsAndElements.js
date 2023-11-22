import { arrayElemCreator, arrayElemToasty, btnAction, ending, elemCreator, fade, loader, restartGame, scrollToBottom, toast } from "../helpers/functions.js";
import { history, opening, tutorialItems, save } from "./messages.js";
import { backupQuestions } from "./backupQuestions.js";

let questionsBase;
let successAnswer = 0;
let errorAnswer = 0;
let retry = 0;

/* --- Section Start ---  */

export const startGame = () => {

    // html
    const openingContent = `
        <h1>Minijuego: PacMemory</h1>
        <p class="textContainer"> ${opening} </p>
        <div class="buttons">
            <input type="button" value="Tutorial" class="btn btn-second" id="btn-tutorial">        
            <input type="button" value="Registro" class="btn btn-third" id="btn-reg">
            <input type="button" value="Jugar" class="btn btn-first" id="btn-start">
            <input type="button" value="Salir" class="btn btn-four" id="btn-end">
        </div>
        `;

    const openingContainer = elemCreator('div', openingContent, '#root', 'openingContainer');

    // Register
    const btnReg = btnAction('#btn-reg', () => {

        const regUserIf = localStorage.getItem("regUser");

        if (regUserIf) {
            const { nombre, respuestas, aciertos, tasaAciertos, errores, tasaErrores, reintentos, fecha } = JSON.parse(regUserIf)

            const regContent = `Registro de ${nombre}\n
                                Respuestas totales: ${respuestas}\n
                                Aciertos: ${aciertos}\n
                                Tasa de aciertos: ${tasaAciertos}\n
                                Errores: ${errores}\n
                                Tasa de errores: ${tasaErrores}\n
                                Reintentos: ${reintentos}\n
                                (${fecha})\n\n            
            `
            toast('#root', regContent, 10000, 'userRegInit', true)

        } else {
            toast('#root', 'Sí hubiera algún registro, aquí habría estarían los resultados... cuando termine la partida se puede agregar el suyo, solo conservamos el ultimo',3000, 'userRegInit', true)
        }

    });

    // Tutorial
    const btnTutorial = btnAction('#btn-tutorial', () => {
        toast(null, arrayElemToasty(tutorialItems), 1500, 'tutorial-toasty', true)
    });

    // Start
    const btnStart = btnAction('#btn-start', () => {
        openingContainer.remove();
        sectionHistory()
    });

    // End
    const btnEnd = btnAction('#btn-end', () => {
        openingContainer.remove();
        ending()
    })

}

/* --- Section History --- */

const sectionHistory = () => {

    loader('js/components/questionsBase.json')
        .then(questions => {
            questionsBase = questions
        })
        .catch(() => {
            toast('#root', 'ups! fallo la carga de las preguntas, pero tenemos un respaldo!\n\n El juego continua normal', 3000, 'errorToast', true)
            questionsBase = backupQuestions
        });

    const historyContent = `
        <h3> ${history[ 0 ]} </h3>
        ${arrayElemCreator(history[ 1 ], 'p')}
        <ul> ${arrayElemCreator(history[ 2 ], 'li')} </ul>
        <p> ${history[ 3 ]} </p>
        <div class=buttons>
        <input type="button" value="Ir a las preguntas" class="btn btn-history" id="btn-history">
        </div>
        `;

    const historyContainer = elemCreator('div', historyContent, '#root', 'historyContainer');

    const btnGo = btnAction('#btn-history', () => {
        historyContainer.remove();
        sectionQuestions()
    });

}


/* --- Section Questions --- */

const sectionQuestions = () => {
    // selection
    const qBaseArray = Object.values(questionsBase);
    const qAlterFirst = [ ...qBaseArray ].sort((a, b) => a.q.localeCompare(b.q));
    const qAlterSecond = [ ...qBaseArray ].sort((a, b) => b.q.localeCompare(a.q));

    let questions = [];

    const selectQuestion = (q0, q1, q2) => {
        let selectorRandom = Math.floor(Math.random() * 3);
        if (selectorRandom <= 1) {
            questions = q0;
        } else if (selectorRandom > 1 && selectorRandom < 2) {
            questions = q1;
        } else {
            questions = q2;
        }
        return questions
    }

    selectQuestion(qBaseArray, qAlterFirst, qAlterSecond)

    // Questions
    const questionsContainer = elemCreator('div', '', '#root', 'questionsContainer');

    for (let i = 0; i < questions.length; i++) {

        let n = i + 1
        const qsOpt = [ questions[ i ].optA, questions[ i ].optB, questions[ i ].optC, questions[ i ].optD ]
        const qsClue = [ questions[ i ].clueA, questions[ i ].clueB, questions[ i ].clueC, questions[ i ].clueD ]
        const qsLetter = [ 'A', 'B', 'C', 'D' ]

        const questionsSubContent = `
            <h3> Pregunta ${n}: ${questions[ i ].q} </h3>
            <div class="buttons">
            <a class="questions question-${qsLetter[ 0 ]}" id="question${n}-${qsLetter[ 0 ]}"> ${qsOpt[ 0 ]} </a>
            <a class="questions question-${qsLetter[ 1 ]}" id="question${n}-${qsLetter[ 1 ]}"> ${qsOpt[ 1 ]} </a>
            <a class="questions question-${qsLetter[ 2 ]}" id="question${n}-${qsLetter[ 2 ]}"> ${qsOpt[ 2 ]} </a>
            <a class="questions question-${qsLetter[ 3 ]}" id="question${n}-${qsLetter[ 3 ]}"> ${qsOpt[ 3 ]} </a>
            </div>
            `;

        const questionSubContainer = elemCreator('div', questionsSubContent, '#questionsContainer', 'questionSubContainer');

        const correctSelected = () => {
            successAnswer++
            toast(`#questionSubContainer${i}`, `Una respuesta correcta más, en total llevas ${successAnswer} respuestas correcta\n\nSiguiente pregunta...\n\n`, 1000, 'questionsToast qSuccess', true)
            fade(questionSubContainer)
        }

        const wrongSelected = (msj) => {
            errorAnswer++
            toast(`#questionSubContainer${i}`, `${msj}...\n\nContador respuestas incorrectas: ${errorAnswer}\nSiguiente pregunta...\n\n`, 1000, 'questionsToast qError', true)
            fade(questionSubContainer)
        }

        qsOpt.forEach((opt, j) => {
            btnAction(`#question${n}-${qsLetter[ j ]}`, () => {

                (qsClue[ j ] === 'correcta') ? correctSelected() : wrongSelected(qsClue[ j ]);

            })
        });

    }

    // Retry

    if (retry === 0) {
        const btnRetry = `<input type="button" value="Reintentar" class="btn-questions-retry" id="btn-questions-retry">`
        const retryContainer = elemCreator('div', btnRetry, '#questionsContainer', 'retryContainer')

        btnAction('#btn-questions-retry', () => {

            retry++
            questionsContainer.remove()
            sectionQuestions()
        })
    }

    else {
        toast('#questionsContainer', 'Estas en el reintento del juego\nRecuerda que se suman los aciertos y errores anteriores\n\n', 4000, 'questionsToast retryToast', true)
    }


    // Close
    const btnClose = `<input type="button" value="Terminar juego" class="btn-questions-close" id="btn-questions-close">`
    elemCreator('div', btnClose, '#questionsContainer', 'closeContainer')

    btnAction('#btn-questions-close', () => {
        questionsContainer.remove()
        assessment()
    })

}


/* --- Section Assessment --- */

const assessment = () => {
    const answers = successAnswer + errorAnswer;
    const qsTotal = retry === 0 ? 7 : retry === 1 ? 14 : null;
    const successRatio = Math.round(successAnswer * 100 / qsTotal)
    const errorRatio = Math.round(errorAnswer * 100 / qsTotal)
    const DateTime = luxon.DateTime
    const date = DateTime.now();
    const regDate = date.toLocaleString(DateTime.DATETIME_MED);

    let score;
    const isVeryBad = successRatio <= 10;
    const isBad = successRatio > 10 && successRatio <= 35;
    const isMid = successRatio > 35 && successRatio <= 60;
    const isWell = successRatio > 60 && successRatio <= 80;
    const isVeryWell = successRatio > 80 && successRatio <= 99;
    const isPerfect = successRatio === 100;

    const scoreAsm = () => {
        switch (true) {
            case isVeryBad:
                score = `<img src="img/very_bad.png" alt="very bad" />`;
                break;
            case isBad:
                score = `<img src="img/bad.png" alt="bad" />`;
                break;
            case isMid:
                score = `<img src="img/mid.png" alt="mid" />`;
                break;
            case isWell:
                score = `<img src="img/well.png" alt="well" />`;
                break;
            case isVeryWell:
                score = `<img src="img/veery_well.png" alt="very well" />`;
                break;
            case isPerfect:
                score = `<img src="img/perfect.png" alt="perfect" />`;
                break;
            default:
                score = "Parece que algo salio mal";
                break;
        }
    };

    scoreAsm();

    const asmContent = `
        <h3>Resultados</h3>
        <p> Con esto concluye el juego, estos son tus resultados... </p>
        <p> ${answers} respuestas marcadas de ${qsTotal} preguntas </p>
        <p> ${successAnswer} aciertos... ${successRatio}% del total</p>
        <p> ${errorAnswer} errores... ${errorRatio}% del total</p>
        ${score}
        <div class="buttons">
            <input type="button" value="Guardar resultados y salir" class="btn-asm btn-first" id="btn-asm-save">
            <input type="button" value="Finalizar sin guardar" class="btn-asm btn-second" id="btn-asm-nosave">
        </div>
        `;

    const asmContainer = elemCreator('div', asmContent, '#root', 'asmContainer')

    btnAction('#btn-asm-nosave', () => {
        asmContainer.remove();
        ending();
        restartGame()
    })

    btnAction('#btn-asm-save', () => {
        const clearBtns1 = document.querySelector('#btn-asm-save')
        const clearBtns2 = document.querySelector('#btn-asm-nosave')
        fade(clearBtns1)
        fade(clearBtns2)

        const regFormContent = `
        <div class="buttons">
        <input type="text" class="regInput" id="regName" placeholder="Introduce tu nombre">
        <input type="submit" class="btn-first" id="btn-reg-form" value="Guardar">
        </div>
        `;

        const regForm = elemCreator('form', regFormContent, '#asmContainer', 'regForm');
        setTimeout(() => {
            scrollToBottom()
        }, 100);

        const regFormSelect = document.querySelector("#regForm");
        const regName = document.querySelector("#regName");

        regFormSelect.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = regName.value;

            const regUser = {
                nombre: name,
                respuestas: answers,
                aciertos: successAnswer,
                tasaAciertos: `${successRatio}%`,
                errores: errorAnswer,
                tasaErrores: `${errorRatio}%`,
                reintentos: retry,
                fecha: regDate,
            };

            localStorage.setItem("regUser", JSON.stringify(regUser));

            toast('#asmContainer', save, 2000, 'regUserToast');

            setTimeout(() => {
                asmContainer.remove();
                ending();
                restartGame()
            }, 2000);


        });
    })

}

