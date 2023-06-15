import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "localhost",
  database: "trendyshopdb",
  user: "root",
  password: "123",
});

const createConnection = async () => {
  return await pool.getConnection();
};

export const getCategories = async (req, res) => {
  let conn;

  try {
    conn = await createConnection();

    const categories = await conn.query("SELECT * FROM categories");

    res.send(categories);
  } catch (err) {
    console.log(err);
  } finally {
    if (conn) conn.end();
  }
};
