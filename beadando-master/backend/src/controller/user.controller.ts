import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { Controller } from "./controller";

export class UserController extends Controller {
    repository = getRepository(User);

    getAll = async (req, res) => {
        const search = req.query.search || '';

        try {
            const entities = await this.repository
                .createQueryBuilder('user')
                .where("user.id LIKE CONCAT('%', :search, '%')", { search: search })
                .orWhere("user.firstName LIKE CONCAT('%', :search, '%')", { search: search })
                .orWhere("user.lastName LIKE CONCAT('%', :search, '%')", { search: search })
                .orWhere("user.personal_id LIKE CONCAT('%', :search, '%')", { search: search })
                .leftJoinAndSelect('user.videos', 'videos')
                .getMany();
            res.json(entities);
        } catch (err) {
            console.error(err);
            this.handleError(res);
        }
    }
}
