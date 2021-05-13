const json =
  '{"codProduto": 1234,"descricao": "Computador Dell Inspiron XS 12000 8Gb RAM 1 TB HD Intel i5 4g NVidia 1080","preco": 3500.0,"qtdEstoque": 5,"disponivel": "sim","emDestaque": "sim","departamento": {"idDepto": 987,"nomeDepto": "Informatica e acessórios"}}';
const obj = JSON.parse(json);

const itensDepertamento =
  '{"departamento" :' +
  obj.departamento.nomeDepto +
  ', "Total de itens" :' +
  obj.qtdEstoque +
  "}";

const valorDepartamento =
  '{"departamento" :' +
  obj.departamento.nomeDepto +
  ', "Valor" :' +
  obj.qtdEstoque * obj.preco +
  "}";

const ticketMedioPorDepartamento =
  '{"departamento" :' +
  obj.departamento.nomeDepto +
  ', "Ticket médio" :' +
  (obj.qtdEstoque * obj.preco) / obj.qtdEstoque +
  "}";

console.log("Quantidade total de itens em estoque: " + obj.qtdEstoque);
console.log("Quantidade total de itens em destaque: 1");
console.log("Quantidade total de itens em disponíveis: 1");
console.log(
  "Valor total do invetário da empresa: " + obj.qtdEstoque * obj.preco
);
console.log("Somatoria de itens por departamento: " + itensDepertamento);
console.log("Valor total do inventário por departamento: " + obj.qtdEstoque);
console.log("Valor do inventário por departamento: " + valorDepartamento);
console.log(
  "Valor do ticket médio dos produtos da empresa: " +
    (obj.qtdEstoque * obj.preco) / obj.qtdEstoque
);
console.log(
  "Valor do ticket médio por departamento: " + ticketMedioPorDepartamento
);
console.log("Departamento mais valioso: " + obj.departamento.idDepto);
console.log("Produto mais caro da loja: " + obj.descricao);
console.log("Produto mais barato da loja: " + obj.descricao);
