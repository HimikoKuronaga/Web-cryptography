import FileSaver from 'file-saver';

const url = '';

export const getKey = async ( ring = 128 ) => {
	const url = `https://server-cryptography.herokuapp.com/affine/key?ring=${ring}`;
	let response = await fetch(url);
	let resp = await response.json();
	
	return resp.key;
} 

export const verifyKey = async ( a, b, ring = 128 ) =>{

	const url = `https://server-cryptography.herokuapp.com/affine/verify?a=${a}&b=${b}&ring=${ring}`;

	let response = await fetch(url);
	let {resp} = await response.json();
	
	if( resp === 3 ){
		return ['is-valid','is-valid'];
	}else if( resp === 2){
		return ['is-valid','is-invalid'];
	}else if( resp === 1){
		return ['is-invalid','is-valid'];
	}else{
		return ['is-invalid','is-invalid'];
	}
}

export const fetchFile = async ( a, b, ring, file, modo = 'encrypt' ) => {
	const url = `https://server-cryptography.herokuapp.com/affine/file/${modo}`;
	const body = new FormData();
	
	body.append( 'a', a );
	body.append( 'b', b );
	body.append( 'ring', ring );
	body.append( 'file', file );

	let fn =  modo === 'encrypt' ? file.name.split('.')[0]+'.aff'+'.txt' : file.name.split('.')[0]+'.txt';
	let response = await fetch( url, { method: 'POST', body } );
	let fileRes = await response.blob();

	FileSaver.saveAs( fileRes, fn );
}
