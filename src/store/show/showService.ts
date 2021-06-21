import axios from "axios";
import { logger } from "@/utils/Logger";

export interface ShowService {
  getShows(): Promise<void>;
}

export class ShowService implements ShowService {
  public async getShows(): Promise<void> {
    logger.info("Getting shows");
    const { data: shows } = await axios.get("/shows");
    logger.info(shows);
  }
}

export default new ShowService();
