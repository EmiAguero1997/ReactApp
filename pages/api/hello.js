// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mock } from "../mockPost";

export default function handler(req, res) {
  if(req.method === 'POST'){
    const data = {
      name: req.body.name,
      surname : req.body.surname,
      email: req.body.email
    };
    mock.push(data);
    res.status(201).json(data);
  } else {

  }
}
