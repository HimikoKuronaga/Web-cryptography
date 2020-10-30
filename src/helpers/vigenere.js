import FileSaver from 'file-saver';

export const getKey = async () =>{
	const url = `https://server-cryptography.herokuapp.com/vigenere/key`;

	let response = await fetch(url);
	let res = await response.json();
	
	return res.key;
}

export const verify = async ( key ) =>{
	const url = `https://server-cryptography.herokuapp.com/vigenere/verify?key=${key}`;
	let response = await fetch(url);
	let { ok } = await response.json();

	if (ok)
		return 'is-valid';
	else
		return 'is-invalid';
}

export const fetchFile = async ( key, file, op = 'encrypt' ) => {
	const url = `https://server-cryptography.herokuapp.com/vigenere/file/${op}`;

	const body = new FormData();
	body.append('key', key);
	body.append('file', file);
	
	let fn = op === 'encrypt' ? file.name.split('.')[0] + '.vig'+'.txt' : file.name.split('.')[0]+'.txt';
	let response = await fetch( url, { method:'POST', body });
	let fileRes = await response.blob();
	FileSaver.saveAs( fileRes, fn );
}


