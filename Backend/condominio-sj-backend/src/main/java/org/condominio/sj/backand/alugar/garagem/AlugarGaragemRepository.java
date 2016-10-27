package org.condominio.sj.backand.alugar.garagem;

import java.util.List;


import org.condominio.sj.backand.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlugarGaragemRepository extends JpaRepository<AlugarGaragem,Long>{

	public List<AlugarGaragem> findByUser(UserEntity user);
	
	//public List<AlugarGaragem> findByAluguel(Apartamento aluguel);
	
}
