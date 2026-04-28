import prisma from "../config/db.js";
import { fetchGoogleAds } from "../integrations/googleAds.js";

export async function syncGoogleAds() {
    const data = await fetchGoogleAds();

    for (const campaing of data) {
        await prisma.campaingMetric.create({
            data: {
                platfotm: "google",
                ...campaing
            }
        });
    } 
}