export const getJSON = async function (url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (!response.ok) throw new Error(`${data.message} ${response.status}`);

    return data;
  } catch (err) {
    throw err;
  }
};
