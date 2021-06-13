const postData = async (url, data) => {
    // js будет ждать результата fetch (по дефолту 30с)
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: data,
    });
    // трасформируем (декодируем) в обычный формат
    // возвращаем промис, дожидаясь окончания работы метода (промиса)
    return await res.json();
};

const getResource = async (url) => {
    const res = await fetch(url);
    // если что-то не так с запросом
    if (!res.ok) {
        // выкидываем ошибку из функции
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};

export { postData };
export { getResource };