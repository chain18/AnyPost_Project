import { db } from "../db";
export const register = (req, res) => {
  //check ว่ามีผู้ใช้หรือ email อยู่ในระบบไหม

  const q = "select * from ursers where email = ? or username = ?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.lenght) return res.status(409).json("User already exists!");
    //พน ให้ติดตั้งบีคริปก่อน
  });
};
export const login = (req, res) => {};
export const logout = (req, res) => {};
