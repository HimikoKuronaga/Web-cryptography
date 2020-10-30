import React,{ useState } from 'react';

import { verifyKey, getKey } from './../../../helpers/affine';

const FormKey = ({setKey}) =>{

	let [ [a, b, ring, auto], setState] = useState([0, 0, 256, false]); 
	let [ [attra, attrb], setAttr ] = useState(['','']);

	const handleChange = async (e) =>{
		let name = e.target.name;
		let value = e.target.value;
		
		if( name === 'a' ){
			setState( [ value, b, ring, auto ] );
			setKey([value, b, ring]);	
		}else if( name === 'b' ){
			setState( [ a, value, ring, auto ] );
			setKey([a, value, ring]);
		}else if( name === 'auto' ){
			if(auto){
				setState([0,0,ring, !auto]);
				setKey([0,0, ring ]);
			}else{
				let resp = await getKey(ring);
				let key = resp.key;
				setKey(key);
				setState([...key, !auto]);
			}
		}else if( name === 'alpha'){
			if( auto ){
				setState([ 0, 0, value, false ]);
				let resp = await getKey( value );
				let key  = resp.key;
				setKey( key );
				setState([ ...key, true ]);
			}else{
				setState( [ a, b, value, auto ] );
				setKey( [a, b, value] );
			}
		}
	}
	
	const handleVerify = async (e) => {
		e.preventDefault();
		verifyKey( a, b, ring )
			.then( attr => {
				setAttr(attr);
			})
			.catch( err => console.log(err) );
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
						name="a" id="a" 
						className={`form-control ${attra}`} 
						onChange={handleChange} 
						value={a} 
						readOnly={auto}
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
						name="b" id="b" 
						className={`form-control ${attrb}`} 
						onChange={handleChange} 
						value={b} 
						readOnly={auto}
					/>
				</div>
			</div>
			
			<div className="form-row mb-3">
				<div className="col-1">
					<input type="checkbox" name="auto" id="auto" onChange={handleChange} checked={auto} />
				</div>
				<div className="col">
					<label className="ml-1" htmlFor="auto">Generar automaticamente</label>
				</div>
			</div>
		
			<div className="form-row mb-3">
				<div className="col">
					<label className="ml-1" htmlFor="alpha">Anillo</label>
				</div>
				<div className="col">
					<select className="custom-select" id="alpha" name="alpha" onChange={handleChange}>
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
