//*tel auth,groups analyze and group that user have
export async function authenticateUser(webapp, type) {
    try {
        const response = await fetch(
            `https://api.tonportal.pro/api/v2/${type}`,
            {
                method: "GET",
                headers: {
                    authorization: webapp?.initData,
                },
            }
        );

        if (!response.ok) throw new Error("no response");

        const data = await response.json();

        if (data.status !== "success")
            throw new Error("user data could not receive!!");

        return data;
    } catch (error) {
        console.error("Authentication failed:", error);
    }
}

//*tokens analyze
export async function getTokenAnalyze(webapp, token) {
    try {
        const response = await fetch(
            `https://api.tonportal.pro/api/v2/analysis/tokens?id=${token}`,
            {
                method: "GET",
                headers: {
                    authorization: webapp.initData,
                },
            }
        );

        if (!response.ok) throw new Error("no response");

        const data = await response.json();

        if (data.status !== "success")
            throw new Error("token data could not receive!!");

        return data;
    } catch (error) {
        console.error("Token Analyze failed:", error);
    }
}
