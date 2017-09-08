module.exports = {
	schema: {
		response: {
			200: {
				type: 'array',
				items: {
					type: 'object',
					properties: {
						type: {
							type: 'string'
						},
						tid: {
							type: 'number'
						},
						action: {
							type: 'string'
						},
						method: {
							type: 'string'
						},
						result: {
							type: 'object',
							properties: {
								data: {
									type: 'array',
									items: {
										type: 'object',
										properties: {
											sal_id: {
												type: 'number'
											},
											sal_prenom: {
												type: 'string'
											},
											sal_nom_usage: {
												type: 'string'
											},
											sal_nom_famille: {
												type: 'string'
											},
											sal_nom_matricule: {
												type: 'string'
											},
											pag_id: {
												type: 'number'
											},
											nb_contracts: {
												type: 'number'
											},
											last_cnt_desc: {
												type: 'string'
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}