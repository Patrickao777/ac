
export interface BrazilianState {
  name: string;
  uf: string;
}

export const brazilianStates: BrazilianState[] = [
  { name: "Acre", uf: "AC" },
  { name: "Alagoas", uf: "AL" },
  { name: "Amapá", uf: "AP" },
  { name: "Amazonas", uf: "AM" },
  { name: "Bahia", uf: "BA" },
  { name: "Ceará", uf: "CE" },
  { name: "Distrito Federal", uf: "DF" },
  { name: "Espírito Santo", uf: "ES" },
  { name: "Goiás", uf: "GO" },
  { name: "Maranhão", uf: "MA" },
  { name: "Mato Grosso", uf: "MT" },
  { name: "Mato Grosso do Sul", uf: "MS" },
  { name: "Minas Gerais", uf: "MG" },
  { name: "Pará", uf: "PA" },
  { name: "Paraíba", uf: "PB" },
  { name: "Paraná", uf: "PR" },
  { name: "Pernambuco", uf: "PE" },
  { name: "Piauí", uf: "PI" },
  { name: "Rio de Janeiro", uf: "RJ" },
  { name: "Rio Grande do Norte", uf: "RN" },
  { name: "Rio Grande do Sul", uf: "RS" },
  { name: "Rondônia", uf: "RO" },
  { name: "Roraima", uf: "RR" },
  { name: "Santa Catarina", uf: "SC" },
  { name: "São Paulo", uf: "SP" },
  { name: "Sergipe", uf: "SE" },
  { name: "Tocantins", uf: "TO" }
];

// A mapping of cities for each state - expanded with more cities
const citiesByState: Record<string, string[]> = {
  "AC": ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá", "Feijó", "Brasileia", "Epitaciolândia", "Xapuri", "Mâncio Lima", "Plácido de Castro", "Porto Acre", "Acrelândia", "Assis Brasil", "Bujari", "Capixaba", "Jordão", "Manoel Urbano", "Marechal Thaumaturgo", "Porto Walter", "Rodrigues Alves", "Santa Rosa do Purus", "Senador Guiomard"],
  
  "AL": ["Maceió", "Arapiraca", "Palmeira dos Índios", "Rio Largo", "Penedo", "União dos Palmares", "São Miguel dos Campos", "Santana do Ipanema", "Delmiro Gouveia", "Coruripe", "Campo Alegre", "Marechal Deodoro", "Girau do Ponciano", "Teotônio Vilela", "Atalaia", "São Luís do Quitunde", "Igaci", "Pilar", "São Miguel dos Milagres", "Maragogi", "Porto de Pedras", "Pão de Açúcar"],
  
  "AP": ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque", "Mazagão", "Porto Grande", "Tartarugalzinho", "Vitória do Jari", "Calçoene", "Amapá", "Pedra Branca do Amapari", "Serra do Navio", "Ferreira Gomes", "Cutias", "Itaubal", "Pracuúba"],
  
  "AM": ["Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Coari", "Tefé", "Tabatinga", "Maués", "Humaitá", "Iranduba", "Presidente Figueiredo", "São Gabriel da Cachoeira", "Lábrea", "Eirunepé", "Borba", "Careiro", "Benjamin Constant", "Boca do Acre", "Manicoré", "Carauari", "Nova Olinda do Norte", "Itapiranga", "Autazes"],
  
  "BA": ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Juazeiro", "Itabuna", "Lauro de Freitas", "Ilhéus", "Jequié", "Teixeira de Freitas", "Barreiras", "Alagoinhas", "Porto Seguro", "Simões Filho", "Paulo Afonso", "Eunápolis", "Santo Antônio de Jesus", "Valença", "Candeias", "Guanambi", "Jacobina", "Serrinha", "Senhor do Bonfim"],
  
  "CE": ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral", "Crato", "Itapipoca", "Maranguape", "Iguatu", "Quixadá", "Pacatuba", "Aquiraz", "Canindé", "Russas", "Tianguá", "Aracati", "Crateús", "Cascavel", "Pacajus", "Icó", "Camocim", "Morada Nova", "Acaraú"],
  
  "DF": ["Brasília", "Ceilândia", "Taguatinga", "Samambaia", "Plano Piloto", "Planaltina", "Águas Claras", "Recanto das Emas", "Gama", "Guará", "Santa Maria", "Sobradinho", "São Sebastião", "Vicente Pires", "Riacho Fundo", "Paranoá", "Brazlândia", "Núcleo Bandeirante", "Riacho Fundo II", "Lago Norte", "Cruzeiro", "Lago Sul", "Candangolândia"],
  
  "ES": ["Vitória", "Vila Velha", "Cariacica", "Serra", "Linhares", "Cachoeiro de Itapemirim", "São Mateus", "Colatina", "Guarapari", "Aracruz", "Nova Venécia", "Barra de São Francisco", "Viana", "Afonso Cláudio", "Santa Maria de Jetibá", "São Gabriel da Palha", "Domingos Martins", "Castelo", "Conceição da Barra", "Alegre", "Baixo Guandu", "Itapemirim", "Marataízes"],
  
  "GO": ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia", "Águas Lindas de Goiás", "Valparaíso de Goiás", "Trindade", "Formosa", "Novo Gama", "Catalão", "Jataí", "Planaltina", "Itumbiara", "Cristalina", "Caldas Novas", "Senador Canedo", "Cidade Ocidental", "Goianésia", "Quirinópolis", "Porangatu", "Inhumas", "Mineiros"],
  
  "MA": ["São Luís", "Imperatriz", "Timon", "Caxias", "Codó", "Paço do Lumiar", "Açailândia", "Bacabal", "Balsas", "Santa Inês", "Barra do Corda", "Pinheiro", "São José de Ribamar", "Chapadinha", "Presidente Dutra", "Coroatá", "Grajaú", "Buriticupu", "Itapecuru Mirim", "Viana", "Zé Doca", "Pedreiras", "Lago da Pedra"],
  
  "MT": ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra", "Cáceres", "Sorriso", "Lucas do Rio Verde", "Primavera do Leste", "Barra do Garças", "Alta Floresta", "Pontes e Lacerda", "Campo Verde", "Nova Mutum", "Juína", "Juara", "Guarantã do Norte", "Colíder", "Jaciara", "Peixoto de Azevedo", "Matupá", "Campo Novo do Parecis", "Poconé"],
  
  "MS": ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã", "Naviraí", "Aquidauana", "Nova Andradina", "Sidrolândia", "Paranaíba", "Maracaju", "Coxim", "Jardim", "Amambai", "Rio Brilhante", "Anastácio", "Chapadão do Sul", "Ivinhema", "Cassilândia", "Aparecida do Taboado", "Bonito", "Miranda", "Costa Rica"],
  
  "MG": ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim", "Montes Claros", "Ribeirão das Neves", "Uberaba", "Governador Valadares", "Ipatinga", "Sete Lagoas", "Divinópolis", "Santa Luzia", "Ibirité", "Poços de Caldas", "Patos de Minas", "Pouso Alegre", "Teófilo Otoni", "Barbacena", "Sabará", "Varginha", "Conselheiro Lafaiete", "Araguari"],
  
  "PA": ["Belém", "Ananindeua", "Santarém", "Marabá", "Castanhal", "Parauapebas", "Abaetetuba", "Cametá", "Bragança", "Altamira", "Marituba", "Barcarena", "Tucuruí", "Paragominas", "Itaituba", "Tailândia", "Breves", "Capanema", "Benevides", "São Félix do Xingu", "Redenção", "Moju", "Oriximiná"],
  
  "PB": ["João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux", "Cabedelo", "Cajazeiras", "Sousa", "Guarabira", "Sapé", "Mamanguape", "Queimadas", "Esperança", "Monteiro", "Pombal", "Catolé do Rocha", "São Bento", "Alagoa Grande", "Itabaiana", "Solânea", "Rio Tinto", "Itaporanga", "Pedras de Fogo"],
  
  "PR": ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel", "São José dos Pinhais", "Foz do Iguaçu", "Colombo", "Guarapuava", "Paranaguá", "Araucária", "Toledo", "Apucarana", "Pinhais", "Campo Largo", "Arapongas", "Almirante Tamandaré", "Umuarama", "Cambé", "Piraquara", "Fazenda Rio Grande", "Campo Mourão", "Francisco Beltrão"],
  
  "PE": ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Petrolina", "Paulista", "Cabo de Santo Agostinho", "Camaragibe", "Garanhuns", "Vitória de Santo Antão", "Igarassu", "São Lourenço da Mata", "Abreu e Lima", "Santa Cruz do Capibaribe", "Ipojuca", "Serra Talhada", "Araripina", "Gravatá", "Carpina", "Goiana", "Belo Jardim", "Pesqueira", "Arcoverde"],
  
  "PI": ["Teresina", "Parnaíba", "Picos", "Piripiri", "Floriano", "Campo Maior", "Barras", "Pedro II", "Altos", "José de Freitas", "Esperantina", "Oeiras", "União", "São Raimundo Nonato", "Corrente", "Bom Jesus", "Miguel Alves", "Luís Correia", "Elesbão Veloso", "Água Branca", "Amarante", "Regeneração", "Uruçuí"],
  
  "RJ": ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói", "Belford Roxo", "Campos dos Goytacazes", "São João de Meriti", "Petrópolis", "Volta Redonda", "Magé", "Itaboraí", "Mesquita", "Nilópolis", "Teresópolis", "Maricá", "Cabo Frio", "Nova Friburgo", "Barra Mansa", "Macaé", "Angra dos Reis", "Queimados", "Resende"],
  
  "RN": ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante", "Ceará-Mirim", "Caicó", "Assu", "Currais Novos", "Macaíba", "João Câmara", "Santa Cruz", "Nova Cruz", "Apodi", "Pau dos Ferros", "Macau", "São José de Mipibu", "Canguaretama", "Extremoz", "Touros", "Baraúna", "Nísia Floresta", "Monte Alegre", "Areia Branca"],
  
  "RS": ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria", "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Rio Grande", "Alvorada", "Passo Fundo", "Sapucaia do Sul", "Uruguaiana", "Santa Cruz do Sul", "Cachoeirinha", "Bagé", "Bento Gonçalves", "Erechim", "Guaíba", "Cachoeira do Sul", "Santana do Livramento", "Esteio", "Ijuí", "Sapiranga", "Santo Ângelo", "Alegrete", "Lajeado", "Tramandaí", "Farroupilha", "Vacaria", "Montenegro", "Venâncio Aires", "Camaquã", "Cruz Alta", "São Borja", "São Gabriel", "Santiago", "Osório", "Santo Antônio da Patrulha", "Taquara", "Parobé", "Carazinho", "Capão da Canoa", "São Luiz Gonzaga", "Taquari", "Eldorado do Sul", "Campo Bom", "Canela", "Gramado", "Torres", "Santa Rosa", "Charqueadas", "Rosário do Sul", "Igrejinha", "Palmeira das Missões", "Três Passos", "Três Coroas", "Estância Velha", "Itaqui", "Dom Pedrito", "Pareci Novo", "Arroio do Meio", "Serafina Corrêa", "Carlos Barbosa", "Veranópolis", "Garibaldi", "Flores da Cunha", "Dois Irmãos", "Triunfo"],
  
  "RO": ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena", "Cacoal", "Jaru", "Rolim de Moura", "Guajará-Mirim", "Pimenta Bueno", "Ouro Preto do Oeste", "Buritis", "Candeias do Jamari", "Alta Floresta D'Oeste", "Espigão D'Oeste", "Machadinho D'Oeste", "Nova Mamoré", "Colorado do Oeste", "Alto Paraíso", "São Miguel do Guaporé", "Alto Alegre dos Parecis", "Cerejeiras", "Presidente Médici", "São Francisco do Guaporé"],
  
  "RR": ["Boa Vista", "Rorainópolis", "Caracaraí", "Alto Alegre", "Mucajaí", "Cantá", "Pacaraima", "Amajari", "São João da Baliza", "Bonfim", "São Luiz", "Caroebe", "Normandia", "Iracema", "Uiramutã"],
  
  "SC": ["Florianópolis", "Joinville", "Blumenau", "São José", "Chapecó", "Criciúma", "Itajaí", "Jaraguá do Sul", "Palhoça", "Lages", "Balneário Camboriú", "Brusque", "São Bento do Sul", "Tubarão", "Caçador", "Concórdia", "Rio do Sul", "Camboriú", "Navegantes", "Içara", "Indaial", "Gaspar", "Biguaçu", "Araranguá", "Canoinhas", "Mafra", "Tijucas", "São Francisco do Sul", "Xanxerê", "Videira", "Imbituba", "Orleans", "Timbó", "Porto União", "São Joaquim", "Braço do Norte", "Curitibanos", "São Miguel do Oeste", "Fraiburgo", "Laguna", "Sombrio", "Itapema", "Penha", "Guaramirim", "Taió", "São João Batista", "Dionísio Cerqueira", "Campos Novos", "Maravilha"],
  
  "SP": ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo", "São José dos Campos", "Santo André", "Ribeirão Preto", "Osasco", "Sorocaba", "Mauá", "São José do Rio Preto", "Santos", "Diadema", "Jundiaí", "Piracicaba", "Carapicuíba", "Bauru", "Itaquaquecetuba", "São Vicente", "Franca", "Guarujá", "Limeira", "Taubaté", "Suzano", "Praia Grande", "Taboão da Serra", "Barueri", "São Carlos", "Sumaré", "Americana", "Marília", "São José dos Pinhais", "Araraquara", "Jacareí", "Presidente Prudente", "Araçatuba", "Cotia", "Itapevi", "Hortolândia", "São Caetano do Sul", "Rio Claro", "Indaiatuba", "Itapecerica da Serra", "Embu das Artes", "Ferraz de Vasconcelos", "Francisco Morato", "Pindamonhangaba", "Itapetininga", "Bragança Paulista", "Mogi das Cruzes", "Atibaia"],
  
  "SE": ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana", "São Cristóvão", "Estância", "Tobias Barreto", "Itabaianinha", "Simão Dias", "Carmópolis", "Capela", "Propriá", "Boquim", "Poço Redondo", "Nossa Senhora da Glória", "Laranjeiras", "Poço Verde", "Canindé de São Francisco", "Nossa Senhora das Dores", "Neópolis", "Monte Alegre de Sergipe", "Maruim", "Japoatã"],
  
  "TO": ["Palmas", "Araguaína", "Gurupi", "Porto Nacional", "Paraíso do Tocantins", "Colinas do Tocantins", "Guaraí", "Dianópolis", "Formoso do Araguaia", "Miracema do Tocantins", "Tocantinópolis", "Pedro Afonso", "Araguatins", "Augustinópolis", "Alvorada", "Xambioá", "Peixe", "Taguatinga", "Wanderlândia", "Miranorte", "Arraias", "Colmeia", "Paranã"]
};

export function getBrazilianCitiesByState(stateUf: string): string[] {
  return citiesByState[stateUf] || [];
}

// Get state name from UF
export function getStateName(uf: string): string {
  const state = brazilianStates.find(state => state.uf === uf);
  return state ? state.name : uf;
}
