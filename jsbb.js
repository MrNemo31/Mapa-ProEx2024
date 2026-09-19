const areas = {
    bibliotecat: {
      apresentacoes: [
        { projeto: "Nome do Projeto", local: "Local", turno: "Horário de Apresentação" }, 
        { projeto: "Além dos muros", local: "Mesa Alta", turno: "10h às 11h20" },
        { projeto: "Tale Waves", local: "Sofá Acústico", turno: "10h às 11h20" },   
        { projeto: "Joie de Vivre ", local: "Sofa Entrada", turno: "10h às 11h20" },   
        { projeto: "Segundo", local: "", turno: "Horário de Apresentação" },  
        { projeto: "TeCuide", local: "Mesa Alta", turno: "11h20 às 12h40" },   
        { projeto: "Poeta Aprendiz", local: "Mesa Entrada", turno: "11h20 às 12h40" }, 
        { projeto: "DRTECH", local: "Mesa", turno: "11h20 às 12h40" },  
        { projeto: "Ribeirão à Margem", local: "Sofá Acústico", turno: "11h20 às 12h40" }, 
        { projeto: "Terceiro", local: "", turno: "Horário de Apresentação" },  
        { projeto: "Studio Celini", local: "Mesa Alta", turno: "12h40 às 14h" }, 
        { projeto: "Iniciativa Senac - Conselho Esportivo", local: "Sofá Entrada", turno: "12h40 às 14h" },
      ],
      containerId: 'container-apresentacoes-bibliotecat'
    },
    
    bibliotecap1: {
      apresentacoes: [
        { projeto: "Nome do Projeto", local: "Local", turno: "Horário de Apresentação" },   
        { projeto: "London watches", local: "Mesa 1", turno: "10h às 11h20" }, 
        { projeto: "Mãos que Comunicam", local: "Mesa 2", turno: "10h às 11h20" },   
        { projeto: "Cotesu", local: "Mesa 3", turno: "10h às 11h20" },   
        { projeto: "Ana Laura Coelho", local: "Mesa 4", turno: "10h às 11h20" }, 
        { projeto: "Segundo", local: "", turno: "Horário de Apresentação" },    
        { projeto: "HUD", local: "Mesa 1", turno: "11h20 às 12h40" },   
        { projeto: "Mentalize estudos", local: "Mesa 2", turno: "11h20 às 12h40" },   
        { projeto: "BusaFacul", local: "Mesa 3", turno: "11h20 às 12h40" }, 
        { projeto: "Terceiro", local: "", turno: "Horário de Apresentação" },    
        { projeto: "Incógnita", local: "Mesa 1", turno: "12h40 às 14h" },   
        { projeto: "Basquete Solidário", local: "Mesa 2", turno: "12h40 às 14h" },   
        { projeto: "Jovem Aprendiz e seus Direitos", local: "Mesa 3", turno: "12h40 às 14h" },   
        { projeto: "EXCHANGE - INTERCÂMBIOS", local: "Mesa 4", turno: "12h40 às 14h" },   
      ],
      containerId: 'container-apresentacoes-bibliotecap1'
    },

  };
  
  function criarListaApresentacoes(area) {
    const lista = document.createElement('ul');
    area.apresentacoes.forEach(apresentacao => {
      const itemLista = document.createElement('li');
      itemLista.textContent = `${apresentacao.projeto} - ${apresentacao.local} - ${apresentacao.turno}`;
      lista.appendChild(itemLista);
    });
  }
    
  const botaoBibliotecat = document.getElementById('botao-apresentacoes-bibliotecat');
  botaoBibliotecat.addEventListener('click', () => {
    criarListaApresentacoes(areas.bibliotecat);
  });

  const botaoBibliotecap1 = document.getElementById('botao-apresentacoes-bibliotecap1');
  botaoBibliotecap1.addEventListener('click', () => {
    criarListaApresentacoes(areas.bibliotecap1);
  });

  
 
  