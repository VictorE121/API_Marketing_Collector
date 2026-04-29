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

export async function fetchMockMarketingData() {

    const channels = {
        Programmatic: ["StackAdapt", "Amazon Ad Server"],
        "Paid Search": ["Google Ads", "Bing Ads"],
        "Paid Social": ["Facebook", "Linkedin Ads"],
        Organic: ["SEO"]
    };

    const campaigns =[
        "Brand Awareness",
        "Black Friday",
        "Retargeting",
        "Product Launch"
    ];

    const data = [];

    for (let i=0; i < 30; i++) {
        const date = new Date();
        date.setDate(data.getDate() - i);
    }

    for (const [channel, sources] of Object.entries(channels)) {
        for (const source of sources) {
            for (const campaign of campaigns){
                const impressions = Math.floor(Math.random() * 8000 + 1000);
                const clicks = Math.floor(impressions * (Math.random() * 0.1));
                const spend = clicks * Math.floor(Math.random() * 2 + 0.5);
                const conversions = Math.floor(clicks * (Math.random() * 0.2));

                data.push({
                    platform: source,
                    source,
                    channel,
                    campaignId: campaign,
                    campaignName: campaign,
                    date,
                    impressions,
                    clicks,
                    spend,
                    conversions
                });
            }
        }
    }

    return data;
}