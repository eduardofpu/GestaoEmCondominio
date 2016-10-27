package org.condominio.sj.backand.veiculo;

import org.condominio.sj.backand.z.utils.GenericService;
import org.condominio.sj.backand.z.utils.ServicePath;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = ServicePath.VEICULO_PATH)
public class VeiculoService extends GenericService<Veiculo,Long>{

}
