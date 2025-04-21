
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

// A mapping of some major cities for each state
// For a real application, this could be expanded or loaded dynamically from an API
const citiesByState: Record<string, string[]> = {
  "AC": ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá", "Feijó"],
  "AL": ["Maceió", "Arapiraca", "Palmeira dos Índios", "Rio Largo", "Penedo"],
  "AP": ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque", "Mazagão"],
  "AM": ["Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Coari"],
  "BA": ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Juazeiro"],
  "CE": ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral"],
  "DF": ["Brasília", "Ceilândia", "Taguatinga", "Samambaia", "Plano Piloto"],
  "ES": ["Vitória", "Vila Velha", "Cariacica", "Serra", "Linhares"],
  "GO": ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia"],
  "MA": ["São Luís", "Imperatriz", "Timon", "Caxias", "Codó"],
  "MT": ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra"],
  "MS": ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã"],
  "MG": ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim"],
  "PA": ["Belém", "Ananindeua", "Santarém", "Marabá", "Castanhal"],
  "PB": ["João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux"],
  "PR": ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel"],
  "PE": ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Petrolina"],
  "PI": ["Teresina", "Parnaíba", "Picos", "Piripiri", "Floriano"],
  "RJ": ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói"],
  "RN": ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante", "Ceará-Mirim"],
  "RS": ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria", "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Rio Grande", "Alvorada", "Passo Fundo", "Sapucaia do Sul", "Uruguaiana", "Santa Cruz do Sul", "Cachoeirinha", "Bagé", "Bento Gonçalves", "Erechim", "Guaíba", "Cachoeira do Sul", "Santana do Livramento", "Esteio", "Ijuí", "Sapiranga", "Santo Ângelo", "Alegrete", "Lajeado", "Tramandaí", "Farroupilha"],
  "RO": ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena", "Cacoal"],
  "RR": ["Boa Vista", "Rorainópolis", "Caracaraí", "Alto Alegre", "Mucajaí"],
  "SC": ["Florianópolis", "Joinville", "Blumenau", "São José", "Chapecó"],
  "SP": ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo", "São José dos Campos"],
  "SE": ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana", "São Cristóvão"],
  "TO": ["Palmas", "Araguaína", "Gurupi", "Porto Nacional", "Paraíso do Tocantins"]
};

export function getBrazilianCitiesByState(stateUf: string): string[] {
  return citiesByState[stateUf] || [];
}

// Get state name from UF
export function getStateName(uf: string): string {
  const state = brazilianStates.find(state => state.uf === uf);
  return state ? state.name : uf;
}
