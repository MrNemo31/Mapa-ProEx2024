const areas = {
    sala106: {
      apresentacoes: [
        { projeto: "Nome do Projeto", local: "Local", turno: "Horário de Apresentação" },
        { projeto: "Defensores do Esporte", local: "Sala de Aula", turno: "10h às 11h20" },
        { projeto: "Nutrir", local: "Sala de Aula", turno: "10h às 11h20" },
        { projeto: "Vozes ocultas", local: "Sala de Aula", turno: "10h às 11h20" }, 
        { projeto: "Segundo", local: "", turno: "Horário de Apresentação" },       
        { projeto: "Biodigestor", local: "Sala de Aula", turno: "11h20 às 12h40" }, 
        { projeto: "Canadá Cup", local: "Sala de Aula", turno: "11h20 às 12h40" },  
        { projeto: "Happy Day", local: "Sala de Aula", turno: "11h20 às 12h40" },
        { projeto: "Terceiro", local: "", turno: "Horário de Apresentação" },  
        { projeto: "CAMINHOS INVISIVEIS", local: "Sala de Aula", turno: "12h40 às 14h" },
        { projeto: "LS", local: "Sala de Aula", turno: "12h40 às 14h" },
        { projeto: "SORORIDARIA", local: "Sala de Aula", turno: "12h40 às 14h" },
      ],
      containerId: 'container-apresentacoes-sala106'
    },

    sala107: {
      apresentacoes: [
        { projeto: "Nome do Projeto", local: "Local", turno: "Horário de Apresentação" },
        { projeto: "Vidas Pretas", local: "Sala de Aula", turno: "10h às 11h20" }, 
        { projeto: "MC FRED", local: "Sala de Aula", turno: "10h às 11h20" },   
        { projeto: "Murde Craft", local: "Sala de Aula", turno: "10h às 11h20" },  
        { projeto: "Segundo", local: "", turno: "Horário de Apresentação" },   
        { projeto: "Pathome", local: "Sala de Aula", turno: "11h20 às 12h40" }, 
        { projeto: "RedSoul", local: "Sala de Aula", turno: "11h20 às 12h40" },  
        { projeto: "Você por você", local: "Sala de Aula", turno: "11h20 às 12h40" },
        { projeto: "Terceiro", local: "", turno: "Horário de Apresentação" },  
        { projeto: "Guerreiros da paz mundial", local: "Sala de Aula", turno: "12h40 às 14h" },
        { projeto: "INVEST EASY", local: "Sala de Aula", turno: "12h40 às 14h" },
        { projeto: "Trap: Origens e Evolução", local: "Sala de Aula", turno: "12h40 às 14h" },
      ],
      containerId: 'container-apresentacoes-sala107'
    },

    sala108: {
      apresentacoes: [
        { projeto: "Nome do Projeto", local: "Local", turno: "Horário de Apresentação" },
        { projeto: "Conscientização do uso do vape", local: "Sala de Aula", turno: "10h às 11h20" },
        { projeto: "Friends & Sports", local: "Sala de Aula", turno: "10h às 11h20" },   
        { projeto: "História da Tecnologia: Avanços, Robótia e o Impacto na Sociedade", local: "Sala de Aula", turno: "10h às 11h20" },   
        { projeto: "Segundo", local: "", turno: "Horário de Apresentação" },  
        { projeto: "Projecars", local: "Sala de Aula", turno: "11h20 às 12h40" },   
        { projeto: "PSIQUEDU", local: "Sala de Aula", turno: "11h20 às 12h40" },   
        { projeto: "Terceiro", local: "", turno: "Horário de Apresentação" },  
        { projeto: "Catarse - Qual o significado da Arte para você?", local: "Sala de Aula", turno: "12h40 às 14h" },   
        { projeto: "Umbra - Filme de Curta Metragem", local: "Sala de Aula", turno: "12h40 às 14h" }, 
      ],
      containerId: 'container-apresentacoes-sala108'
    },

    bibliotecam: {
      apresentacoes: [
        { projeto: "Nome do Projeto", local: "Local", turno: "Horário de Apresentação" },
        { projeto: "FutFemme", local: "Mesa 1", turno: "10h às 11h20" },   
        { projeto: "Fadinhas", local: "Mesa 2", turno: "10h às 11h20" },   
        { projeto: "Segundo", local: "", turno: "Horário de Apresentação" },  
        { projeto: "Arte em movimento", local: "Mesa 1", turno: "11h20 às 12h40" },   
        { projeto: "CourseHorse", local: "Mesa 2", turno: "11h20 às 12h40" }, 
        { projeto: "Terceiro", local: "", turno: "Horário de Apresentação" },  
        { projeto: "Beuty Art", local: "Mesa 1", turno: "12h40 às 14h" },   
        { projeto: "Savile", local: "Mesa 2", turno: "12h40 às 14h" }, 
      ],
      containerId: 'container-apresentacoes-bibliotecam'
    },


  };
  
  function criarListaApresentacoes(area) {
    const lista = document.createElement('ul');
    area.apresentacoes.forEach(apresentacao => {
      const itemLista = document.createElement('li');
      itemLista.textContent = `${apresentacao.projeto} - ${apresentacao.local} - ${apresentacao.turno}`;
      lista.appendChild(itemLista);
    });
  
    const container = document.getElementById(area.containerId);
    container.innerHTML = '';
    container.appendChild(lista);
  }
  
  // Adiciona os ouvintes de evento aos botões existentes
  const botaoSala106 = document.getElementById('botao-apresentacoes-sala106');
  botaoSala106.addEventListener('click', () => {
    criarListaApresentacoes(areas.sala106);
  });

  const botaoSala107 = document.getElementById('botao-apresentacoes-sala107');
  botaoSala107.addEventListener('click', () => {
    criarListaApresentacoes(areas.sala107);
  });

  const botaoSala108 = document.getElementById('botao-apresentacoes-sala108');
  botaoSala108.addEventListener('click', () => {
    criarListaApresentacoes(areas.sala108);
  });

  const botaoBibliotecam = document.getElementById('botao-apresentacoes-bibliotecam');
  botaoBibliotecam.addEventListener('click', () => {
    criarListaApresentacoes(areas.bibliotecam);
  });

  