import express from 'express';
const { Request, Response } = express;

const app = express();
app.use(express.json());

app.post("/login", (req: Request, res: Response) => {
    const {email, password} = req.body;
    res.json({mensaje: `Usuario ${email} autenticado`});
});

app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000")
});