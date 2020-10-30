import React, {useState} from 'react';
import FormKey from './forms/FormKey';
import FormServices from './forms/FormServices';

import { fetchFile } from './../../helpers/vigenere';

const Vigenere = () => {

	const [key, setKey] = useState('');
	const [file, setFile] = useState({});

	const handleFetchService = ( op ) =>{
		if( key.length === 0){
			window.alert('Debes proporcionar una llave');
			return;
		}

		if( file !== {} ){
			fetchFile( key, file, op );
		}else{
			window.alert('Primero debes seleccionar un archivo');
			return;
		}
	}
	
	return (
		<>
			<div className="col-3 mt-2 mb-2">
				<div className="card">
					<h5 className="card-header bg-dark text-white text-center">Llave</h5>
					<div className="card-body">
						<FormKey setKey={setKey}/>
					</div>
				</div>
			</div>
			<div className="col mt-2 mb-2">
				<div className="card">
					<h5 className="card-header bg-dark text-white text-center">Vigenere</h5>
					<div className="card-body">
						<FormServices setFile={setFile} handleFetchService={handleFetchService} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Vigenere;
