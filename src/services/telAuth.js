// {
//     "status": "success",
//     "data": {
//         "id": 294790405,
//         "first_name": "Sorena",
//         "last_name": "Salehi",
//         "username": "CyberGuitar",
//         "language_code": "en",
//         "allows_write_to_pm": true,
//         "photo_url": "https://t.me/i/userpic/320/IELMUw3Zx_O2c5WxXR6Tg7Bt_P1xHyuNiIA5blP6zKs.svg"
//     }
// }
export async function authenticateUser(webapp) {
  try {
    const response = await fetch(
      "https://e0ed-2a0e-97c0-3e3-3f6-00-1.ngrok-free.app/api/v2/start",
      {
        method: "GET",
        headers: {
          authorization: webapp.initData,
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    if (!response.ok) throw new Error("Authorization denied!!");

    const data = await response.json();

    if (data.status !== "success")
      throw new Error("user data could not receive!!");

    
    return data;
  } catch (error) {
    console.error("Authentication failed:", error);
  }
}
