let lista = [
    {
  "nome": "Nevermind - Nirvana", 
  "valor": "29,90"
  },
    {
  "nome": "Cinema - Cachorro Grande",
  "valor":"29,90"
  },
    {
  "nome": "Foreverly - Billie Joe e Norah Jones",
  "valor":"29,90"
  },
  {
    "nome":"Night Visions - Imagine Dragons",
    "valor":"29,90"
  }
  
  
  ];  
  search(null); 
   
  function search(value) {
    let html='';
    nome=document.getElementById("termo").value;
  
    lista.forEach( (item) => {
      if (item.nome.toLowerCase().includes(nome.toLowerCase())) {
        html +="<p>nome: "+item.nome+"</p>";
        html +="<p>valor"+item.valor+"</p>";
      }
      
    });   
  
    document.getElementById("resultado").innerHTML = html;  
    
  }
  
       
        

  