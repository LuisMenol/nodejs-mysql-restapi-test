const getIndex = async (req, res) => res.json({ message: 'Index Page' })


// const ping = async (req, res) => {
//     const [result, info] = await pool.query('SELECT 1 + 1 AS result');
//     res.json(result);
// }


export { getIndex };