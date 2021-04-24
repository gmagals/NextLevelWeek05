import { http } from "./http";
import "./websocket/client"
import "./websocket/admin"
http.listen(3333, () => console.log("Server is running on port 3333."))

/*
 * GET: Busca
 * POST: Criação
 * PUT: Alteração
 * DELETE: Deletar
 * PATCH: Alterar uma informação específica. Ex: alterar a senha de um usuário
*/