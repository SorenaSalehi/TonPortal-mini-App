export async function getTokenAnalyze(webapp, type) {
  try {
    const response = await fetch(
      `https://463c-2a0e-97c0-3e3-3f6-00-1.ngrok-free.app/api/v2/${type}`,
      {
        method: "GET",
        headers: {
          authorization: webapp.initData,
          "ngrok-skip-browser-warning": "true",
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
