/*
* variaveis
    * var
    * let
    * const
*Escopo de variaveis
    #Escopo determina a visibilidade de alguma variável no JS
    $var não possuem escopo Bloqueado 
    $let possue escopo Bloqueado
    $const possue escopo Bloqueado
*/

/*
JS é uma linguagem fracamente tipada  e dinâmica 
- Variaveis não precisam ter um tipo previamnete definido
- Podemos mudar o conteúdo da variavel 
*/

/*
Toda declaração feita com 'var' e elevada para o topo da execução caso seja usada antes
da atribuição de valor a variavel retorna undefined
*/
///////////////////////////////////////////////////////////////////////////
console.log(x) //undefined
var x = 1
{
    var x = 2
}
console.log(x) //io => 2
///////////////////////////////////////////////////////////////////////////
//console.log(y) erro
let y = 1
{
    let y = 2
}
console.log(y) //io => 1
///////////////////////////////////////////////////////////////////////////
//console.log(z) erro
const z = 1
{
    const z = 2
}
console.log(z) //io => 1
///////////////////////////////////////////////////////////////////////////
