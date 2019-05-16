var modelDevice = ''

var modelGame = {
    cena1: {
        enabled: true,
        ponto: {
            x: 4,
            y: 3
        }
    },
    cena2: {
        enabled: false,
        ponto: {
            x: 9,
            y: 5
        }
    }
}

var modelDetalhe = {
    cenas: [
        {
            estado: false,
            position: 1
        },
        {
            estado: false,
            position: 2
        },
        {
            estado: false,
            position: 3
        },
        {
            estado: false,
            position: 4
        }
    ]
}

var modelSucess = {
    texto: [
        {
            conteudo: "Vocês acabam de receber o título de combatentes do <i>Aedes</i>, \
            que é responsável pela transmissão de algumas doenças que prejudicam o \
            bem estar dos indivíduos e do ambiente."
        },
        {
            conteudo: "Não esqueçam nunca que as suas ações individuais fazem toda a diferença! \
            Durante nossas atividades ao longo desta missão vocês agiram como indivíduos que se \
            preocupam com a saúde do ambiente."
        },
        {
            conteudo: "Colocar o lixo no destino certo, tampar corretamente vasilhames de água, \
            cuidar dos vasinhos das plantas, utilizar redes de proteção nas janelas, usar repelente frequentemente, \
            são ações que cada um pode fazer, não é mesmo? A PREVENÇÃO É A NOSSA MELHOR ARMA!"
        }
    ]
}

var modelSucessCena1 = {
    texto: [
        {
            conteudo: 'Parabéns! Você acaba de praticar ações muito importantes para a prevenção \
            das arboviroses. Vamos continuar sempre assim! Agora, caro jogador você verá uma cena \
            bem cotidiana.'
        },
        {
            conteudo: 'Há nela 6 erros que não podemos deixar de identificá-los e corrigi-los. \
            Sua missão, é encontrar os erros sabendo da importância de resolvê-los.'
        }
    ]
}

var modelSucessCena2 = {
    texto: [
        {
            conteudo: 'Muito bem, você identificou os erros que já tinha lhe alertado. \
            Nunca deixe eles acontecerem na sua casa e quando você os ver, na casa de alguém \
            é importante alertá-lo para sua correção.'
        },
        {
            conteudo: ' Agora querido Jogador, vamos ao último desafio: Você participará de um quiz, \
            para revisar tudo que aprendeu até aqui.'
        }
    ]
}


var modelApresentacao = {
    texto: [
        {
            conteudo: "Olá pessoal, sou Eugênio e gostaria de convocá-los para uma importante\
             missão que contribuirá para saúde do ambiente da cidade onde moram." 
        },
        {
            conteudo: "Primeiro quero trazer algumas informações que merecem nossa atenção. \
            Segundo a Organização Mundial de Saúde mais de 750 mil pessoas\
             morrem anualmente no mundo por causa da picada de mosquitos."
        },
        {
            conteudo: "São quatro espécies principais: <i>Aedes albopictus</i>, <i>Culex</i>, <i>Anopheles Gambiae</i> e <i>Aedes Aegypti</i>. \
            Focaremos nossa atenção no <i>Aedes aegypti</i>." 
        },
        {
            conteudo: "No Brasil, foram quase 800 mortes em 2016, destas 629 foram dengue. \
            E na sua cidade, bairro ou rua, Você já ouviu falar em algum caso de pessoas que se infectaram por <i>Dengue</i>, \
            <i>Zyka</i>, <i>Chikungunya</i> e <i>Febre amarela</i>?" 
        },
        {
            conteudo: "Então pessoal, para minimizar essas infecções convido cada um de vocês a adotar ações coletivas e \
            individuais de combate ao Aedes que resultarão na diminuição destes números que acabei de falar. Você topa?"
        },
        {
            conteudo: "O meu GPS indicará os pontos principais onde precisaremos atuar para acabar com esse vetor."
        }
    ]
}

var modelInformativo = {
    informacoes: [
        {
            title: 'Sobre as arboviroses',
            visto: false,
            text: 'As arboviroses são doenças causadas por arbovírus. Arbovírus são vírus transmitidos por artrópodes (Arthropod-borne virus) e são assim designados não somente pela sua veiculação através de artrópodes, mas, principalmente, pelo fato de parte de seu ciclo replicativo ocorrer nos insetos. São transmitidos aos seres humanos e outros animais pela picada de artrópodes hematófagos.'
        },
        {
            title: 'Formas de transmissão e sintomas',
            visto: false,
            subtitles: [
                {
                    title: 'Dengue',
                    visto: false,
                    text: '<p>O vírus Dengue (DENV) é representado por quatro sorotipos, a saber, DENV-1 a DENV-4 e sua transmissão é feita pelo mosquito Aedes aegypti. Este vírus pode afetar pessoas de todas as idades, incluindo recém-nascidos, crianças, adultos e idosos, causando um espectro de doenças que vai desde a febre da dengue até as formas mais graves de dengue hemorrágica. </p>\
                    <p>Os sinais e sintomas incluem: febre, dor retro-orbital (“atrás dos olhos”), dor de cabeça intensa, mialgia, artralgia e manifestações hemorrágicas menores, como petéquias, e sangramento gengival.</p>'
                },
                {
                    title: 'Chikungunya',
                    visto: false,
                    text: '<p>O nome significa “aqueles que se dobram” em swahili, um dos idiomas da Tanzânia. Refere-se à aparência curvada dos pacientes que foram atendidos na primeira epidemia documentada, na Tanzânia, localizada no leste da África, entre 1952 e 1953. </p>\
                    <p>É transmitido pelo Ae. aegypti de habitat urbano de áreas tropicais e pelo Ae. albopictus, presente principalmente em áreas rurais, mas que tem sido cada vez mais encontrado em áreas urbanas e periurbanas. O mosquito adquire o vírus CHIKV ao picar uma pessoa infectada, durante o período de viremia. </p>\
                    <p>Os sintomas são: Febre acima de 39 graus, de início repentino, e dores intensas nas articulações de pés e mãos – dedos, tornozelos e pulsos. Pode ocorrer, também, dor de cabeça, dores nos músculos e manchas vermelhas na pele. </p>'
                },
                {
                    title: 'Zika vírus',
                    visto: false,
                    text: '<p>O vírus Zika é um vírus recente, transmitido pelo mosquito que foi inicialmente identificado no Uganda, em1947, em macacos Rhesus, através de uma rede de monitorização da febre amarela selvagem. Posteriormente, foi identificado em seres humanos, em 1952, no Uganda e na República Unida da Tanzânia. </p>\
                    <p>Os sintomas são semelhantes a outras infecções por arbovírus, e são a febre, erupções na pele, conjuntivite, mialgia, artralgia, mal-estar e dor de cabeça (cefaleia). Estes sintomas são, normalmente, ligeiros e duram 2-7 dias. </p>\
                    <p>O vírus Zika é transmitido às pessoas através da picada do mosquito Aedes aegypti infectado. Trata-se do mesmo mosquito que transmite dengue, chikungunya e a febre amarela. O zika também pode ser passado de uma grávida para o feto. A infecção durante a gravidez pode causar certos defeitos congênitos (microcefalia) no feto. Atualmente, também há registros de casos de Síndrome de Guillain-Barré (SGB) associados a infecções pelos vírus da dengue, chikungunya e Zika.</p>'
                },
                {
                    title: 'Febre amarela',
                    visto: false,
                    text: '<p>A febre amarela é uma doença infecciosa não contagiosa que se mantém endêmica nas florestas tropicais da América e África causando periodicamente surtos isolados ou epidemias de maior ou menor impacto em saúde pública, sendo transmitida ao homem mediante a picada de insetos hematófagos da família Culicidae, em especial dos gêneros Aedes e Haemagogus. Sob o ponto de vista epidemiológico divide-se a febre amarela em duas formas, rural e urbana que diferem entre si quanto à natureza dos transmissores e dos hospedeiros vertebrados e o local de ocorrência. </p>\
                    <p>Ciclos de transmissão: O vírus da febre amarela mantém-se em dois ciclos básicos: um ciclo urbano simples do tipo homem-mosquito onde o Aedes aegypti responsabiliza-se pela disseminação da doença e outro silvestre complexo, onde várias espécies de mosquitos responsáveis pela transmissão. </p>'
                }
            ]
        },
        {
            title: 'Ações e prevenções',
            visto: false,
            text: '<p>Convocamos cada um a continuar, de forma permanente, com a mobilização pelo combate ao mosquito transmissor da dengue, zika, Febre amarela e chikungunya, doenças que podem gerar outras enfermidades, como microcefalia e Guillain-Barré. </p>\
            <p>O período do verão é o mais propício à proliferação do mosquito Aedes aegypti, por causa das chuvas, e consequentemente é a época de maior risco de infecção por essas doenças. No entanto, a recomendação é não descuidar nenhum dia do ano e manter todas as posturas possíveis em ação para prevenir focos em qualquer época do ano.</p>\
            <p>Por isso, você deve ficar atento e redobrar os cuidados para eliminar possíveis criadouros do mosquito. Essa é a única forma de prevenção. Faça a sua parte. #VamoscombateroAedes</p>'
        }
    ]
}