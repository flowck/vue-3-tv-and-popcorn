import axios from "axios";
import { Show } from "./interface";
import { logger } from "@/utils/Logger";

export interface ShowService {
  getShows(): Promise<Show[]>;
}

export class ShowService implements ShowService {
  private STORAGE_SHOWS_KEY = "tvp_shows";

  public async getShows(): Promise<Show[]> {
    logger.info("Getting shows");
    const shows = localStorage.getItem(this.STORAGE_SHOWS_KEY);

    if (!shows) {
      const { data } = await axios.get("/shows");
      localStorage.setItem(this.STORAGE_SHOWS_KEY, JSON.stringify(data));

      return data;
    }

    return JSON.parse(shows);
  }
}

export default new ShowService();
