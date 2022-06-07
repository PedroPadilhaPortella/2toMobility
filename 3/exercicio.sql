select departamentos.nome as Departamento, projetos.nome as Projeto, funcionarios.nome as Funcionario
	from funcionarios, funcionario_projeto, projetos, departamentos
	where funcionarios.id = funcionario_projeto.funcionario_id 
    and funcionario_projeto.projeto_id = projetos.id
    and projetos.departamento_id = departamentos.id
    order by departamentos.nome ASC, funcionarios.nome ASC;
    
select count(funcionarios.id) as 'Funcionarios por Departamento'
	from funcionarios, funcionario_projeto, projetos, departamentos
	where funcionarios.id = funcionario_projeto.funcionario_id 
    and funcionario_projeto.projeto_id = projetos.id
    and projetos.departamento_id = departamentos.id
    group by departamentos.id;
    
select departamentos.nome as Departamento, projetos.nome as 'Projeto mais recente' , max(projetos.prazo_final) as 'Prazo'
	from projetos, departamentos
    where projetos.departamento_id = departamentos.id
    group by departamentos.id;