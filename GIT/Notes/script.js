/* 
---------------------------------------------- CONFIGURAÇÕES ----------------------------------------------

git config --global user.name "Carlos Daniel"  CONFIGURA O NOME DO USUÁRIO NO GIT

git config --global user.email Digite seu email  CONFIGURA O EMAIL DO USUÁRIO GIT

git config core.editor Digite seu editor  CONFIGURA O NOME DO EDITOR DE CODIGO

git config --list  MOSTRA A LISTA COMPLETA DE CONFIGURAÇÕES REALIZADAS NO GIT

---------------------------------------------- CONFIGURAÇÕES ----------------------------------------------


---------------------------------------------- NAVEGAÇÃO ----------------------------------------------

cd pasta/ MANEIRA DE NAVEGAR ENTRE PASTAS 

ls  VERIFICA ITENS QUE ESTÃO DENTRO DA PASTA 

git init  CRIA UM REPOSITÓRIO ".git" (ARQUIVO OCULTO)

IGNORAR ARQUIVOS - crie uma pasta dentro do projeto com o nome de .gitingnore e coloque os arquivos dentro

code . -r - ABRE O CODIGO NO VSCODE

---------------------------------------------- NAVEGAÇÃO ----------------------------------------------


------------------------------------------ PROCESSANDO ARQUIVO -----------------------------------------

git add (file)  ADICIONA A MODIFICAÇÃO DO ARQUIVO SINGLE NO INDEX, AINDA NÃO ESTÁ SALVO

git add -A  ADICIONA TODAS AS MODIFICAÇOES DE ARQUIVOS NO INDEX, AINDA NÃO ESTA SALVO

git rm -f (Digite o nome do arquivo inteiro) Utilize sem parenteses  REMOVE O ARQUIVO DO INDEX, 
ANTES DE SER COMMITADO

git commit -m "Digite uma anotação"  COMMITA O ARQUIVO PARA O HEAD NO .git (ARQUIVO SALVO)

------------------------------------------ PROCESSANDO ARQUIVO -----------------------------------------


------------------------------------------ COMANDOS ÚTEIS -----------------------------------------

git status  VERIFICA OS STATUS DOS AQUIVOS DENTRO DO REPOSITÓRIO (SE ELES FORAM ADD OU AINDA NÃO)

git log  VERIFICA OS ULTIMOS COMMITS REALIZADOS 

git diff  MOSTRA AS MODIFICAÇOES REALIZADAS NAS PASTAS QUE ESTÃO NO REPOSITÓRIO

git diff (file)  MOSTRA AS MODIFICAÇOES DE UM ARQUIVO EM PARTICULAR

git clone "Url do repositório"  CLONA UM REPOSITÓRIO DO GITHUB 

------------------------------------------ COMANDOS ÚTEIS -----------------------------------------


---------------------------------------- MANIPULAÇÃO DE ARQUIVOS ---------------------------------------

git merge (Nome da branch)  APÓS FINALIZADO O DESENVOLVIMENTO EM UMA BRANCH ELE 
MESCLA ESSA BRANCH COM A PRINCIPAL

git reset --soft (id do commit) VOLTA PARA O COMMIT INDICADO COM AS ALTERAÇÕES ATUAIS 
PREPARADAS PARA COMMIT

git reset --hard (id do commit) VOLTA E IGNORA COMPLETAMENTE AS ALTERAÇÕES ANTERIORES

git reset --mixed (id do commit) VOLTA PARA O COMMIT INDICADO COM AS ALTERAÇÕES ATUAIS 
NÃO PREPARADAS PARA COMMIT

---------------------------------------- MANIPULAÇÃO DE ARQUIVOS ---------------------------------------


---------------------------------------- MANIPULAÇÃO DE BRANCHS ---------------------------------------

git checkout (Nome do branch) Utilize sem parenteses ALTERNA ENTRE OS BRANCHS EXISTENTES   

girt branch (Nome do novo branch) Utilize sem parenteses CRIA NOVOS BRANCHS 

git branch LISTA TODOS BRANCHS DISPONIVÉIS LOCAIS

git branch -r LISTA TODOS OS BRANCHS DISPONIVEIS DO REPOSITÓRIO REMOTO

---------------------------------------- MANIPULAÇÃO DE BRANCHS ---------------------------------------


---------------------------------------- MANIPULAÇÃO REMOTO ---------------------------------------

git remote add origin "url" ADICIONA UM REPOSITÓRIO REMOTO DO GITHUB

git remote MOSTRA REPOSITORIOS REMOTOS ADICIONADOS

git push -u (nome do repositorio local) + (nome da branch que quer enviar)
ENVIA AS MODIFICAÇÕES DO SEU REPOSITÓRIO LOCAL PARA O REMOTO PELA PRIMEIRA VEZ

git push (nome do repositorio local) + (nome da branch que quer enviar)
ENVIA AS MODIFICAÇÕES DO SEU REPOSITÓRIO LOCAL

git push "origin" :"branch" DELETA UM BRANCH REMOTO

git branch -D "branch" DELETA UM BRANCH LOCAL

git pull "origin" "branch"  TRAZ AS MODIFICAÇÕES DO REPOSITÓRIO REMOTO

---------------------------------------- MANIPULAÇÃO REMOTO ---------------------------------------

CHAVE PARA IDENTIFICAÇÃO GIT
ssh-keygen -t ed25519 -C "your_email@example.com"
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

*/

