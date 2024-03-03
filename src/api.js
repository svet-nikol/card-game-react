const API_URL = "https://wedev-api.sky.pro/api/leaderboard";

export async function getLeadersApi() {
  const response = await fetch(API_URL, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function addPlayerDataApi({ name, time }) {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      name,
      time,
    }),
  });
  if (response.status === 400) {
    throw new Error("Ошибка формата введеных данных");
  }
  const updateLeaders = await response.json();
  return updateLeaders;
}
