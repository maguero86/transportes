var pool = require('./bd');

async function getNovedades(){
	var query = "SELECT * FROM novedades ORDER BY id DESC";
	var rows = await pool.query(query, [id]);
	return rows;
}

async function deleteNovedadById(id){
	var query = "DELETE FROM novedades WHERE id = ?";
	var rows = await pool.query(query);
	return rows;
}

async function modificarNovedadById(obj, id){
	try{
		var query = "UPDATE novedades SET ? WHERE id = ?";
		var rows = await pool.query(query, [obj, id]);
		return rows;
	} catch (error){
		throw error;
	}
	var query = "DELETE FROM novedades WHERE id = ?";
	var rows = await pool.query(query);
	return rows;
}

module.exports = { getNovedades, insertNovedad, deleteNovedadById, modificarNovedadById }