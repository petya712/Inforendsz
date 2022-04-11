import { getRepository } from "typeorm";
import { Video } from "../entity/Video";
import { Controller } from "./controller";

export class VideoController extends Controller {
    repository = getRepository(Video);

    getAll = async (req, res) => {
        const search = req.query.search || '';

        try {
            const entities = await this.repository
                .createQueryBuilder('video')
                .where("video.title LIKE CONCAT('%', :search, '%')", { search: search })
                .orWhere("video.author LIKE CONCAT('%', :search, '%')", { search: search })
                .leftJoinAndSelect('video.renter', 'renter')
                .leftJoinAndSelect('video.categories', 'category')
                .getMany();
            res.json(entities);
        } catch (err) {
            console.error(err);
            this.handleError(res);
        }


    }
}
