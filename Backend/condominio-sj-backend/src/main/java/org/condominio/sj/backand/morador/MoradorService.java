package org.condominio.sj.backand.morador;

import org.condominio.sj.backand.z.utils.GenericService;
import org.condominio.sj.backand.z.utils.ServicePath;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = ServicePath.MORADOR_PATH)
public class MoradorService extends GenericService<Morador,Long>{
	
}
