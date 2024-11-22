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

// Mamad, [11/22/2024 4:44 PM]
// یعنی میشه اینجوری
//* https://e0ed-2a0e-97c0-3e3-3f6-00-1.ngrok-free.app/api/v2/start

// Mamad, [11/22/2024 4:44 PM]
//* https://e0ed-2a0e-97c0-3e3-3f6-00-1.ngrok-free.app/api/v2/group

// Mamad, [11/22/2024 4:44 PM]
//* https://e0ed-2a0e-97c0-3e3-3f6-00-1.ngrok-free.app/api/v2/analysis/groups

//* https://e0ed-2a0e-97c0-3e3-3f6-00-1.ngrok-free.app/api/v2/analysis/groups?id=-4522670141

export async function authenticateUser(webapp, type) {
  try {
    const response = await fetch(
      `https://e0ed-2a0e-97c0-3e3-3f6-00-1.ngrok-free.app/api/v2/${type}`,
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
