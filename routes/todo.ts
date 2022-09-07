import express, { Request, Response} from 'express';
import db from '../database';

const router = express.Router();

router.get('/tasks', (req: Request, res: Response) => {
    db.query('SELECT * FROM tasks', (err: JSON, result: JSON) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});


router.post('/tasks', (req: Request, res: Response) => {
    var task: String = req.body.task;
    db.query('INSERT INTO tasks (task) VALUES (?)', task, (err: any) => {
        if (err) {
            console.log(err);
        }
    });
    res.redirect('/');
});


router.post('/tasks/delete/:id', (req: Request, res: Response) => {
    var id: number = Number.parseInt(req.params.id);
    db.query('DELETE FROM tasks WHERE id = (?)', id, (err: any) => {
        if (err) {
            console.log(err);
        }
    });
    res.redirect('/');
});


export default router;