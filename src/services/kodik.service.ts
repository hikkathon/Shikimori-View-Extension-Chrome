import api from "@/http/api.ts";
import { KodikResponse } from "@/types/kodik.response.ts";

export default class KodikService {
  static async getSerial(shikimoriId: number): Promise<KodikResponse> {
    const response = await api.get<KodikResponse>(`/search?token=YOU_KODIK_TOKEN&shikimori_id=${shikimoriId}`);
    return response.data;
  }
}
