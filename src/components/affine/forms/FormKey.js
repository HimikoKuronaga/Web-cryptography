import React,{ useState, useEffect } from 'react';

import { verify, getKey } from './../../../helpers/affine';

const FormKey = ({setKey}) =>{

	let [[ a, b, ring ], setState] = useState(['0', '0', '256']);
	let [ affAuto, setAffAuto ] = useState( false );
	let [[ attra, attrb ], setAttr ] = useState(['','']);

	useEffect(()=>{
		setKey([a, b, ring]);
	}, [a,b,ring, setKey]);

	const handleChange = (e) =>{
		e.preventDefault();
		let name = e.target.name;
		let value = e.target.value;
		if( name === 'a' ){
			setState([ value, b, ring ]);
		}else if( name === 'b' ){
			setState([ a, value, ring ]);
		}else if( name === 'ring' ){
			setState([ a, b, value ]);
		}
	}
	
	const handleVerify = async (e) => {
		e.preventDefault();
		let resp = await verify( a, b, ring );
		if( resp === 3 ){
			 setAttr(['is-valid','is-valid']);
		}else if( resp === 2){
			 setAttr(['is-valid','is-invalid']);
		}else if( resp === 1){
			 setAttr(['is-invalid','is-valid']);
		}else{
			 setAttr(['is-invalid','is-invalid']);
		}
	}
	
	const handleGetKey = async (e) =>{
		e.preventDefault();
		if( !affAuto ){
			let {ok, key} = await getKey( ring );
			if( ok ){
				setKey(key);
				setState(key);
				setAffAuto(true);
			}else{
				window.alert('No se pudo generar una llave');
			}
		}else{
			setAffAuto( false );
		}
	}
	
	return (
		<form>
			<div className="form-row mb-3">
				<div className="col-sm-1">
					<label className="my-1 mr-1" htmlFor="a">A</label>
				</div>
				<div className="col">
					<input 
						type="number"
						id="a" 
						name="a"
						value={ a } 
						onChange={ handleChange } 
						className={ `form-control ${attra}` } 
						/>
				</div>
			</div>
			
			<div className="form-row mb-3">
				<div className="col-sm-1">
					<label className="my-1 mr-2" htmlFor="b">B</label>
				</div>
				<div className="col">
					<input 
						type="number" 
						id="b" 
						name="b"
						value={b}
						onChange={handleChange} 
						className={`form-control ${attrb}`}  
					/>
				</div>
			</div>
			
			<div className="form-row mb-3">
				<div className="col-1">
					<input 
						type="checkbox"
						id="affAuto"
						name="affAuto"
						onChange={ handleGetKey }
						checked={ affAuto }
					/>
				</div>
				<div className="col">
					<label className="ml-1" htmlFor="affAuto">Generar automaticamente</label>
				</div>
			</div>
		
			<div className="form-row mb-3">
				<div className="col">
					<label className="ml-1" htmlFor="ring">Anillo</label>
				</div>
				<div className="col">
					<select className="custom-select" id="ring" name="ring" value={ring} onChange={handleChange}>
						<option value="256">256</option>
						<option value="128">128</option>
						<option value="97">97</option>
						<option value="30">30</option>
						<option value="239">239</option>
						<option value="15345">12345</option>
						<option value="99991">99991</option>
						<option value="104729">104729</option>
						
					</select>
				</div>
			</div>


			
			<div className="form-row mb-3">
				<div className="col">
					<button 
						type="button" 
						className="btn 
						btn-primary btn-block" 
						onClick={handleVerify} 
					>Validar llave</button>
				</div>
			</div>
		</form>
	);
}
export default FormKey;
