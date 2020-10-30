import React, {useState} from 'react';
import FormKey from './forms/FormKey';
import FormServices from './forms/FormServices';

import { fetchFile  } from './../../helpers/affine';

const Affine = () =>{

	const [ [a, b, ring], setKey ] = useState([0, 0, 0]);
	const [ file, setFile ] = useState({});
	
	const handleFetchService = ( modo ) =>{
		if( a === 0 ){
			window.alert('Primero debes ingresar la llave correctamente');
			return;
		}
		if( file !== {} ){
			fetchFile( a, b, ring, file, modo );
		}else{
			window.alert(`Primero debes seleccionar un archivo para ${modo}`);
		}
	}
	
	return (
		<>
			<div className="col-3 mt-2 mb-2">
				<div className="card">
					<h5 className="card-header text-center bg-dark text-white">Modificar llave</h5>
					<div className="card-body">
						<FormKey setKey={setKey} />
					</div>
				</div>
			</div>
			<div className="col-9 mt-2 mb-2">
				<div className="card">
					<h5 className="card-header bg-dark text-white text-center">Affine</h5>
					<div className="card-body">
						<FormServices setFile={setFile} handleFetchService={handleFetchService} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Affine;
