package org.condominio.sj.backand.apartamento;

import org.condominio.sj.backand.z.utils.GenericService;
import org.condominio.sj.backand.z.utils.ServicePath;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = ServicePath.APARTAMENTO_PATH)
public class ApartamentoService extends GenericService<Apartamento,Long>{

}
