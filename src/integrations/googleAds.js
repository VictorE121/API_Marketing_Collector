export async function fetchGoogleAds() {
    return[
        {
            campaignId: "1234",
            campaignName: "Prueba Campaña",
            date: new Date(),
            impressions: Math.floor(Math.random() * 1000),
            clicks: Math.floor(Math.random() * 100),
            spend: Math.random() * 100,
            conversions: Math.floor(Math.random() * 20)
        }
    ];
}