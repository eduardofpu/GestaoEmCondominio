package org.condominio.sj.backand.agendamento;

import java.util.List;

import org.condominio.sj.backand.z.utils.ServicePath;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping(path = ServicePath.VIEWAGENDAMENTO_PATH)
public class MostrarAgendamento {

	@Autowired
	AgendamentoRepository agendamentoRepository;


	@RequestMapping(method = {RequestMethod.GET} )
	public List<Agendamento> MostrarAgenda(){

		//return this.agendamentoRepository.findAll();
		return this.agendamentoRepository.findAllData();
	}

}
