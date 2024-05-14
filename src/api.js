const API_URLV2 = "https://wedev-api.sky.pro/api/v2/leaderboard";

export async function getLeadersApi() {
  const response = await fetch(API_URLV2, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function addPlayerDataApi({ name, time, achievements }) {
  const response = await fetch(API_URLV2, {
    method: "POST",
    body: JSON.stringify({
      name,
      time,
      achievements,
    }),
  });
  if (response.status === 400) {
    throw new Error("Введите имя пользователя");
  }
  if (response.status !== 201) {
    throw new Error("Ошибка сервера");
  }
  const updateLeaders = await response.json();
  return updateLeaders;
}
