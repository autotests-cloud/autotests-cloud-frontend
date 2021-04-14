import "regenerator-runtime/runtime";

const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error(
      `Ошибка по адресу ${url}, статус ошибки ${response.status}`
    );
  }

  return await response.json();
};

export { sendData };