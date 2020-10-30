import React, {useState} from 'react';

import { verify, getKey } from './../../../helpers/vigenere';

const FormKey = ( { setKey } ) => {

	const [ [key, attr, auto], setKeyState  ] = useState(['','', false]);  

	const handleChange = async(e) =>{
		e.preventDefault();
		if( e.target.name === 'auto'){
			if( auto ){
				setKeyState([key, attr, false]);
			}else{
				let key = await getKey();
				console.log(key);
				setKey( key );
				setKeyState([key, 'is-valid', true]);
			}
		}else if (e.target.name === 'key'){
			setKey(e.target.value);
			setKeyState([e.target.value, '', auto]);
		}
	}

	const handleClick = async(e) => {
		e.preventDefault();
		if( key.length > 0){
			let verified =  await verify( key );
			console.log( verified );
			setKeyState([key, verified, auto]);
		}else{
			setKeyState( [key, 'is-invalid', auto] );
		}
	}

	return (
		<form>
			<div className="form-row mb-3">
				<div className="col-2">
					<label className="my-1" htmlFor="key">Key</label> 
				</div>
				<div className="col">
					<input 
						type="text"
						className={`form-control ${attr}`}
						name="key" 
						value={key} 
						onChange={handleChange}
						readOnly={auto}
					/>
				</div>
			</div>
		
			<div className="form-row mb-3">
				<div className="col-1">
					<input
						name="auto"
						type="checkbox"
						onChange={handleChange}
						id="auto"
						checked={auto}
					/>
				</div>
				<div className="col">
						<label 
							htmlFor="auto" 
							className="ml-1 pb-1"
						>Generar automaticamente</label>
				</div>
			</div>

			<div className="form-row mb-3">
					<div className="col">
						<button 
							className="btn btn-primary btn-block" 
							onClick={handleClick}
						>Verificar</button>
					</div>
			</div>
		</form>
	);
}

export default FormKey;
